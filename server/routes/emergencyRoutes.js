const express = require('express');
const router = express.Router();
const Emergency = require('../models/Emergency');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to protect routes
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate.' });
  }
};

// Create emergency request
router.post('/request', auth, async (req, res) => {
  try {
    const {
      location,
      emergencyType,
      description,
      severity
    } = req.body;

    const emergency = new Emergency({
      requesterId: req.user._id,
      location,
      emergencyType,
      description,
      severity
    });

    await emergency.save();
    res.status(201).json(emergency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get nearby emergency requests (for responders)
router.get('/nearby', auth, async (req, res) => {
  try {
    const { longitude, latitude, maxDistance = 10000 } = req.query; // maxDistance in meters

    const emergencies = await Emergency.find({
      status: 'pending',
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: parseInt(maxDistance)
        }
      }
    }).populate('requesterId', 'name phone');

    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get emergency request by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id)
      .populate('requesterId', 'name phone')
      .populate('responders.responderId', 'name phone');

    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    res.json(emergency);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update emergency status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const emergency = await Emergency.findById(req.params.id);

    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    emergency.status = status;
    if (status === 'resolved') {
      emergency.resolvedAt = new Date();
    }

    await emergency.save();
    res.json(emergency);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add responder to emergency
router.post('/:id/responders', auth, async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    const { role, notes } = req.body;
    emergency.responders.push({
      responderId: req.user._id,
      role,
      arrivalTime: new Date(),
      notes
    });

    if (emergency.status === 'pending') {
      emergency.status = 'responding';
    }

    await emergency.save();
    res.status(201).json(emergency.responders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update vital signs
router.post('/:id/vitals', auth, async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    emergency.vitals = req.body;
    await emergency.save();
    res.json(emergency.vitals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add treatment record
router.post('/:id/treatments', auth, async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    const { type, notes } = req.body;
    emergency.treatments.push({
      type,
      administeredAt: new Date(),
      administeredBy: req.user._id,
      notes
    });

    await emergency.save();
    res.status(201).json(emergency.treatments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update transport details
router.post('/:id/transport', auth, async (req, res) => {
  try {
    const emergency = await Emergency.findById(req.params.id);
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency request not found' });
    }

    emergency.transportDetails = {
      ...req.body,
      departureTime: req.body.departureTime ? new Date(req.body.departureTime) : undefined,
      arrivalTime: req.body.arrivalTime ? new Date(req.body.arrivalTime) : undefined
    };

    await emergency.save();
    res.json(emergency.transportDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get user's emergency history
router.get('/user/history', auth, async (req, res) => {
  try {
    const emergencies = await Emergency.find({ requesterId: req.user._id })
      .sort({ createdAt: -1 })
      .populate('responders.responderId', 'name');
    res.json(emergencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 