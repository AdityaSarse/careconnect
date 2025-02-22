const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
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

// Create appointment
router.post('/', auth, async (req, res) => {
  try {
    const {
      doctorId,
      date,
      timeSlot,
      type,
      reason,
      symptoms
    } = req.body;

    // Check if doctor exists and is available
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    if (!doctor.isAvailable) {
      return res.status(400).json({ message: 'Doctor is not available' });
    }

    // Check if time slot is available
    const existingAppointment = await Appointment.findOne({
      doctorId,
      date,
      'timeSlot.startTime': timeSlot.startTime,
      'timeSlot.endTime': timeSlot.endTime,
      status: { $nin: ['cancelled', 'completed'] }
    });

    if (existingAppointment) {
      return res.status(400).json({ message: 'Time slot is not available' });
    }

    const appointment = new Appointment({
      patientId: req.user._id,
      doctorId,
      date,
      timeSlot,
      type,
      reason,
      symptoms,
      amount: doctor.consultationFee
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get appointments for user (as patient or doctor)
router.get('/', auth, async (req, res) => {
  try {
    const match = {};
    if (req.user.role === 'doctor') {
      const doctor = await Doctor.findOne({ userId: req.user._id });
      if (!doctor) {
        return res.status(404).json({ message: 'Doctor profile not found' });
      }
      match.doctorId = doctor._id;
    } else {
      match.patientId = req.user._id;
    }

    if (req.query.status) {
      match.status = req.query.status;
    }

    const appointments = await Appointment.find(match)
      .populate('patientId', 'name email phone')
      .populate({
        path: 'doctorId',
        populate: {
          path: 'userId',
          select: 'name email phone'
        }
      })
      .sort({ date: 'asc' });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get appointment by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('patientId', 'name email phone')
      .populate({
        path: 'doctorId',
        populate: {
          path: 'userId',
          select: 'name email phone'
        }
      });

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if user has permission to view this appointment
    if (
      appointment.patientId._id.toString() !== req.user._id.toString() &&
      req.user.role !== 'doctor' &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update appointment status
router.patch('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Check if user has permission to update this appointment
    if (
      appointment.patientId.toString() !== req.user._id.toString() &&
      req.user.role !== 'doctor' &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ message: 'Access denied' });
    }

    appointment.status = status;
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add prescription to appointment
router.post('/:id/prescription', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Only doctors can add prescriptions
    if (req.user.role !== 'doctor') {
      return res.status(403).json({ message: 'Only doctors can add prescriptions' });
    }

    const { medications, instructions } = req.body;
    appointment.prescription = {
      medications,
      instructions,
      date: new Date()
    };

    await appointment.save();
    res.json(appointment.prescription);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add follow-up details
router.post('/:id/follow-up', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Only doctors can add follow-up details
    if (req.user.role !== 'doctor') {
      return res.status(403).json({ message: 'Only doctors can add follow-up details' });
    }

    const { recommended, date, notes } = req.body;
    appointment.followUp = { recommended, date, notes };
    await appointment.save();
    res.json(appointment.followUp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 