import api from './api';

export interface DoctorProfile {
  specialization: string;
  qualifications: Array<{
    degree: string;
    institution: string;
    year: number;
  }>;
  experience: number;
  licenseNumber: string;
  languages: string[];
  consultationFee: number;
}

export interface Availability {
  day: string;
  slots: Array<{
    startTime: string;
    endTime: string;
  }>;
}

const doctorService = {
  createProfile: async (data: DoctorProfile) => {
    const response = await api.post('/doctors/profile', data);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/doctors/profile');
    return response.data;
  },

  updateProfile: async (data: Partial<DoctorProfile>) => {
    const response = await api.patch('/doctors/profile', data);
    return response.data;
  },

  updateAvailability: async (availability: Availability[]) => {
    const response = await api.post('/doctors/availability', { availability });
    return response.data;
  },

  getAllDoctors: async (filters?: { specialization?: string; isAvailable?: boolean }) => {
    const response = await api.get('/doctors', { params: filters });
    return response.data;
  },

  getDoctorById: async (id: string) => {
    const response = await api.get(`/doctors/${id}`);
    return response.data;
  },

  addReview: async (doctorId: string, data: { rating: number; comment: string }) => {
    const response = await api.post(`/doctors/${doctorId}/reviews`, data);
    return response.data;
  }
};

export default doctorService; 