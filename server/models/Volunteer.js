const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
    trim: true
  },
  availability: [{
    type: String,
    enum: [
      'Weekday Mornings',
      'Weekday Afternoons',
      'Weekday Evenings',
      'Weekend Mornings',
      'Weekend Afternoons',
      'Weekend Evenings',
      'On-Call Emergency Response'
    ]
  }],
  experience: {
    type: String,
    required: [true, 'Experience details are required']
  },
  interests: [{
    type: String,
    enum: [
      'Emergency Medical Response',
      'Community Health Education',
      'Rural Healthcare Support',
      'Medical Transportation',
      'Administrative Support',
      'Patient Care Assistance',
      'Public Health Outreach'
    ]
  }],
  languages: [{
    type: String,
    trim: true
  }],
  emergencyContact: {
    name: {
      type: String,
      required: [true, 'Emergency contact name is required'],
      trim: true
    },
    relationship: {
      type: String,
      required: [true, 'Emergency contact relationship is required'],
      trim: true
    },
    phone: {
      type: String,
      required: [true, 'Emergency contact phone is required'],
      trim: true
    }
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'inactive'],
    default: 'pending'
  },
  verificationDetails: {
    backgroundCheck: {
      completed: {
        type: Boolean,
        default: false
      },
      date: Date,
      status: String
    },
    documents: [{
      type: String,
      name: String,
      uploadDate: Date
    }]
  },
  trainings: [{
    name: String,
    completionDate: Date,
    certificateId: String,
    expiryDate: Date
  }],
  volunteeredHours: {
    type: Number,
    default: 0
  },
  lastVolunteered: Date,
  notes: String
}, {
  timestamps: true
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);
module.exports = Volunteer; 