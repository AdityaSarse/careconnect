import api from './api';

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  availability: string[];
  experience: string;
  interests: string[];
  languages: string[];
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}

export interface TrainingRecord {
  name: string;
  completionDate: Date;
  certificateId: string;
  expiryDate: Date;
}

const volunteerService = {
  register: async (data: VolunteerFormData) => {
    const response = await api.post('/volunteers/register', data);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/volunteers/profile');
    return response.data;
  },

  updateProfile: async (data: Partial<VolunteerFormData>) => {
    const response = await api.patch('/volunteers/profile', data);
    return response.data;
  },

  // Admin functions
  getAllVolunteers: async () => {
    const response = await api.get('/volunteers/all');
    return response.data;
  },

  updateStatus: async (volunteerId: string, status: 'pending' | 'approved' | 'rejected' | 'inactive') => {
    const response = await api.patch(`/volunteers/${volunteerId}/status`, { status });
    return response.data;
  },

  addTraining: async (volunteerId: string, trainingData: TrainingRecord) => {
    const response = await api.post(`/volunteers/${volunteerId}/training`, trainingData);
    return response.data;
  },

  updateHours: async (volunteerId: string, hours: number) => {
    const response = await api.patch(`/volunteers/${volunteerId}/hours`, { hours });
    return response.data;
  }
};

export default volunteerService; 