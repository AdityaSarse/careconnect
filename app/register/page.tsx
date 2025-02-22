'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  username: string;
  password: string;
  confirmPassword: string;
  interests: {
    ruralHealthcare: boolean;
    emergencyResponse: boolean;
    affordabilityPrograms: boolean;
    [key: string]: boolean; // Index signature for dynamic access
  };
  newsletter: boolean;
}

const RegisterPage = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    username: '',
    password: '',
    confirmPassword: '',
    interests: {
      ruralHealthcare: false,
      emergencyResponse: false,
      affordabilityPrograms: false
    },
    newsletter: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name.startsWith('interests.')) {
        const interest = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          interests: {
            ...prev.interests,
            [interest]: checked
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await register({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        username: formData.username,
        password: formData.password,
        preferences: formData.interests
      });
      router.push('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Us for Better Healthcare Accessibility
          </h1>
          <p className="text-xl mb-8">
            Register now to access affordable healthcare, emergency response resources, and more.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300"
          >
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Registering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Affordable Healthcare</h3>
              <p className="text-gray-600">Access resources and programs for affordable medical care</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🚑</div>
              <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
              <p className="text-gray-600">Quick access to emergency services and first aid guides</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Rural Healthcare</h3>
              <p className="text-gray-600">Updates on rural healthcare programs and initiatives</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Support</h3>
              <p className="text-gray-600">Personalized assistance and healthcare guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Create Your Account</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            {/* Basic Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Address (Optional)</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Account Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Username *</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Preferences</h3>
              <div className="space-y-3">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.ruralHealthcare"
                      checked={formData.interests.ruralHealthcare}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Rural Healthcare Programs
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.emergencyResponse"
                      checked={formData.interests.emergencyResponse}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Emergency Response Services
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.affordabilityPrograms"
                      checked={formData.interests.affordabilityPrograms}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Affordability Programs
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Subscribe to newsletters and updates
                  </label>
                </div>
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="mb-8 text-sm text-gray-600">
              <p>🔒 Your data is protected and will never be shared with third parties.</p>
              <p>By registering, you agree to our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>.</p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-700 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Already Registered */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline">
                Log in here
              </Link>
            </p>
          </div>

          {/* Help & Support */}
          <div className="text-center mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">Our support team is here to assist you</p>
            <div className="space-x-4">
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact Support
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/faq" className="text-blue-600 hover:underline">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegisterPage; 