const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema({
  requesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String
    }
  },
  emergencyType: {
    type: String,
    enum: ['medical', 'trauma', 'cardiac', 'respiratory', 'other'],
    required: true
  },
  description: {
    type: String,
    required: [true, 'Emergency description is required']
  },
  severity: {
    type: String,
    enum: ['critical', 'severe', 'moderate', 'mild'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'responding', 'resolved', 'cancelled'],
    default: 'pending'
  },
  responders: [{
    responderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: String,
    arrivalTime: Date,
    notes: String
  }],
  vitals: {
    bloodPressure: String,
    heartRate: Number,
    respiratoryRate: Number,
    temperature: Number,
    oxygenSaturation: Number
  },
  treatments: [{
    type: String,
    administeredAt: Date,
    administeredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    notes: String
  }],
  transportDetails: {
    required: {
      type: Boolean,
      default: false
    },
    destination: String,
    transportType: {
      type: String,
      enum: ['ambulance', 'helicopter', 'other']
    },
    departureTime: Date,
    arrivalTime: Date
  },
  resolvedAt: Date,
  followUpRequired: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for geospatial queries
emergencySchema.index({ location: '2dsphere' });

const Emergency = mongoose.model('Emergency', emergencySchema);
module.exports = Emergency; 