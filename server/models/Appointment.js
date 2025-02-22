const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Appointment date is required']
  },
  timeSlot: {
    startTime: {
      type: String,
      required: [true, 'Start time is required']
    },
    endTime: {
      type: String,
      required: [true, 'End time is required']
    }
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled', 'no-show'],
    default: 'scheduled'
  },
  type: {
    type: String,
    enum: ['in-person', 'video', 'phone'],
    required: [true, 'Appointment type is required']
  },
  reason: {
    type: String,
    required: [true, 'Reason for appointment is required']
  },
  symptoms: [{
    type: String,
    trim: true
  }],
  notes: {
    type: String,
    trim: true
  },
  prescription: {
    medications: [{
      name: String,
      dosage: String,
      frequency: String,
      duration: String
    }],
    instructions: String,
    date: Date
  },
  followUp: {
    recommended: {
      type: Boolean,
      default: false
    },
    date: Date,
    notes: String
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'refunded'],
    default: 'pending'
  },
  amount: {
    type: Number,
    required: [true, 'Appointment amount is required']
  }
}, {
  timestamps: true
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment; 