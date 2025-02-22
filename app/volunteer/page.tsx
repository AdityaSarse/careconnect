'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContext';
import volunteerService, { VolunteerFormData } from '../services/volunteerService';

const VolunteerPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    availability: [],
    experience: '',
    interests: [],
    languages: [],
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    }
  });

  const availabilityOptions = [
    'Weekday Mornings',
    'Weekday Afternoons',
    'Weekday Evenings',
    'Weekend Mornings',
    'Weekend Afternoons',
    'Weekend Evenings',
    'On-Call Emergency Response',
  ];

  const interestAreas = [
    'Emergency Medical Response',
    'Community Health Education',
    'Rural Healthcare Support',
    'Medical Transportation',
    'Administrative Support',
    'Patient Care Assistance',
    'Public Health Outreach',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('emergency.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, array: string) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [array]: checked 
        ? [...prev[array as keyof VolunteerFormData] as string[], value]
        : (prev[array as keyof VolunteerFormData] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await volunteerService.register(formData);
      router.push('/volunteer/success');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit volunteer application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Our Healthcare Volunteer Network
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Make a difference in your community by volunteering with CareConne. Help us bring quality healthcare to those who need it most.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
              <p className="text-gray-600">Directly contribute to improving healthcare access in your community.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
              <p className="text-gray-600">Gain valuable experience and training in healthcare services.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Build Network</h3>
              <p className="text-gray-600">Connect with healthcare professionals and like-minded volunteers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Volunteer Registration</h2>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Occupation"
                    className="w-full p-3 border rounded"
                    required
                  />
                </div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full p-3 border rounded"
                  rows={3}
                  required
                />
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Availability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availabilityOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.availability.includes(option)}
                        onChange={(e) => handleCheckboxChange(e, 'availability')}
                        className="form-checkbox"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Areas of Interest</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {interestAreas.map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(area)}
                        onChange={(e) => handleCheckboxChange(e, 'interests')}
                        className="form-checkbox"
                      />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Experience</h3>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about your relevant experience..."
                  className="w-full p-3 border rounded"
                  rows={4}
                  required
                />
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Emergency Contact</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="emergency.name"
                    value={formData.emergencyContact.name}
                    onChange={handleChange}
                    placeholder="Emergency Contact Name"
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="text"
                    name="emergency.relationship"
                    value={formData.emergencyContact.relationship}
                    onChange={handleChange}
                    placeholder="Relationship"
                    className="w-full p-3 border rounded"
                    required
                  />
                  <input
                    type="tel"
                    name="emergency.phone"
                    value={formData.emergencyContact.phone}
                    onChange={handleChange}
                    placeholder="Emergency Contact Phone"
                    className="w-full p-3 border rounded"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ${
                  loading ? 'bg-blue-400' : ''
                }`}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VolunteerPage; 