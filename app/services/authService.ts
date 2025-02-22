import api from './api';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role?: string;
}

const TOKEN_KEY = 'auth_token';

const authService = {
  login: async (data: LoginData) => {
    const response = await api.post('/users/login', data);
    if (response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token);
    }
    return response.data;
  },

  register: async (data: RegistrationData) => {
    const response = await api.post('/users/register', data);
    if (response.data.token) {
      localStorage.setItem(TOKEN_KEY, response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
  },

  getCurrentUser: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },

  updateProfile: async (data: Partial<RegistrationData>) => {
    const response = await api.patch('/users/profile', data);
    return response.data;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  forgotPassword: async (email: string) => {
    const response = await api.post('/users/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (resetToken: string, newPassword: string) => {
    const response = await api.post('/users/reset-password', {
      resetToken,
      newPassword
    });
    return response.data;
  }
};

export default authService; 