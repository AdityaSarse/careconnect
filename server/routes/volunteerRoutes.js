const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Authentication middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid authentication token' });
  }
};

// Admin middleware
const adminAuth = async (req, res, next) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    next();
  } catch (error) {
    res.status(403).json({ message: 'Access denied' });
  }
};

// Register as a volunteer
router.post('/register', auth, async (req, res) => {
  try {
    // Check if user is already registered as a volunteer
    const existingVolunteer = await Volunteer.findOne({ userId: req.user._id });
    if (existingVolunteer) {
      return res.status(400).json({ message: 'You are already registered as a volunteer' });
    }

    const volunteer = new Volunteer({
      userId: req.user._id,
      ...req.body,
      status: 'pending'
    });

    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get volunteer profile
router.get('/profile', auth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findOne({ userId: req.user._id });
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer profile not found' });
    }
    res.json(volunteer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update volunteer profile
router.patch('/profile', auth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findOne({ userId: req.user._id });
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer profile not found' });
    }

    // Prevent updating certain fields
    const updates = req.body;
    delete updates.status;
    delete updates.userId;
    delete updates.verificationDetails;
    delete updates.volunteeredHours;

    Object.assign(volunteer, updates);
    await volunteer.save();
    res.json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Admin Routes

// Get all volunteers
router.get('/all', auth, adminAuth, async (req, res) => {
  try {
    const volunteers = await Volunteer.find().populate('userId', 'name email');
    res.json(volunteers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update volunteer status
router.patch('/:id/status', auth, adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    volunteer.status = status;
    await volunteer.save();
    res.json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add training record
router.post('/:id/training', auth, adminAuth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    volunteer.trainings.push(req.body);
    await volunteer.save();
    res.json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update volunteered hours
router.patch('/:id/hours', auth, adminAuth, async (req, res) => {
  try {
    const { hours } = req.body;
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    volunteer.volunteeredHours += hours;
    volunteer.lastVolunteered = new Date();
    await volunteer.save();
    res.json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update verification details
router.patch('/:id/verification', auth, adminAuth, async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    volunteer.verificationDetails = {
      ...volunteer.verificationDetails,
      ...req.body
    };
    await volunteer.save();
    res.json(volunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 