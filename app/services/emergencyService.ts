import api from './api';

export interface EmergencyRequest {
  location: {
    coordinates: [number, number];
    address?: {
      street?: string;
      city?: string;
      state?: string;
      zipCode?: string;
      country?: string;
    };
  };
  emergencyType: 'medical' | 'trauma' | 'cardiac' | 'respiratory' | 'other';
  description: string;
  severity: 'critical' | 'severe' | 'moderate' | 'mild';
}

export interface VitalSigns {
  bloodPressure?: string;
  heartRate?: number;
  respiratoryRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
}

const emergencyService = {
  createRequest: async (data: EmergencyRequest) => {
    const response = await api.post('/emergency/request', data);
    return response.data;
  },

  getNearbyEmergencies: async (longitude: number, latitude: number, maxDistance?: number) => {
    const response = await api.get('/emergency/nearby', {
      params: { longitude, latitude, maxDistance }
    });
    return response.data;
  },

  getEmergencyById: async (id: string) => {
    const response = await api.get(`/emergency/${id}`);
    return response.data;
  },

  updateStatus: async (id: string, status: string) => {
    const response = await api.patch(`/emergency/${id}/status`, { status });
    return response.data;
  },

  addResponder: async (id: string, data: { role: string; notes?: string }) => {
    const response = await api.post(`/emergency/${id}/responders`, data);
    return response.data;
  },

  updateVitals: async (id: string, vitals: VitalSigns) => {
    const response = await api.post(`/emergency/${id}/vitals`, vitals);
    return response.data;
  },

  addTreatment: async (id: string, data: { type: string; notes?: string }) => {
    const response = await api.post(`/emergency/${id}/treatments`, data);
    return response.data;
  },

  updateTransport: async (id: string, data: {
    required: boolean;
    destination?: string;
    transportType?: 'ambulance' | 'helicopter' | 'other';
    departureTime?: Date;
    arrivalTime?: Date;
  }) => {
    const response = await api.post(`/emergency/${id}/transport`, data);
    return response.data;
  },

  getUserHistory: async () => {
    const response = await api.get('/emergency/user/history');
    return response.data;
  }
};

export default emergencyService; 