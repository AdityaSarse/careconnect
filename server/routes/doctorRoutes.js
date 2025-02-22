const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to protect routes
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user || !['doctor', 'admin'].includes(user.role)) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate as a doctor.' });
  }
};

// Create doctor profile
router.post('/profile', auth, async (req, res) => {
  try {
    const {
      specialization,
      qualifications,
      experience,
      licenseNumber,
      languages,
      consultationFee
    } = req.body;

    const existingDoctor = await Doctor.findOne({ userId: req.user._id });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor profile already exists' });
    }

    const doctor = new Doctor({
      userId: req.user._id,
      specialization,
      qualifications,
      experience,
      licenseNumber,
      languages,
      consultationFee
    });

    await doctor.save();
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get doctor profile
router.get('/profile', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update doctor profile
router.patch('/profile', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'specialization',
    'qualifications',
    'experience',
    'licenseNumber',
    'languages',
    'consultationFee',
    'isAvailable'
  ];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).json({ message: 'Invalid updates' });
  }

  try {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    updates.forEach(update => doctor[update] = req.body[update]);
    await doctor.save();
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update availability
router.post('/availability', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor profile not found' });
    }

    doctor.availability = req.body.availability;
    await doctor.save();
    res.json(doctor.availability);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all doctors (public route)
router.get('/', async (req, res) => {
  try {
    const filters = {};
    if (req.query.specialization) {
      filters.specialization = req.query.specialization;
    }
    if (req.query.isAvailable) {
      filters.isAvailable = req.query.isAvailable === 'true';
    }

    const doctors = await Doctor.find(filters)
      .populate('userId', 'name email phone')
      .select('-reviews');
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get doctor by ID (public route)
router.get('/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
      .populate('userId', 'name email phone')
      .populate('reviews.userId', 'name');
    
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add review for doctor
router.post('/:id/reviews', auth, async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    const { rating, comment } = req.body;
    doctor.reviews.push({
      userId: req.user._id,
      rating,
      comment
    });

    // Update average rating
    const totalRating = doctor.reviews.reduce((sum, review) => sum + review.rating, 0);
    doctor.rating = totalRating / doctor.reviews.length;

    await doctor.save();
    res.status(201).json(doctor.reviews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 