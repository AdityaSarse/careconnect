'use client';

import React, { useState, useEffect } from 'react';
import doctorService from '../services/doctorService';
import { useAuth } from '../context/AuthContext';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  qualifications: Array<{
    degree: string;
    institution: string;
    year: number;
  }>;
  experience: number;
  languages: string[];
  consultationFee: number;
  rating?: number;
}

const DoctorDirectory: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [specialization, setSpecialization] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchDoctors();
  }, [specialization]);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const filters = specialization ? { specialization } : undefined;
      const data = await doctorService.getAllDoctors(filters);
      setDoctors(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch doctors. Please try again later.');
      console.error('Error fetching doctors:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddReview = async (doctorId: string, rating: number, comment: string) => {
    try {
      await doctorService.addReview(doctorId, { rating, comment });
      await fetchDoctors(); // Refresh the list to show updated ratings
    } catch (err) {
      console.error('Error adding review:', err);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-[400px]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-red-600 text-center p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Find a Doctor</h2>
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="w-full md:w-64 p-2 border rounded"
        >
          <option value="">All Specializations</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor._id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-gray-600 mb-2">{doctor.specialization}</p>
            <p className="text-sm text-gray-500 mb-2">
              {doctor.experience} years of experience
            </p>
            <div className="mb-2">
              <strong>Languages:</strong>{' '}
              {doctor.languages.join(', ')}
            </div>
            <div className="mb-4">
              <strong>Consultation Fee:</strong>{' '}
              ${doctor.consultationFee}
            </div>
            {doctor.rating && (
              <div className="mb-4">
                <strong>Rating:</strong>{' '}
                {doctor.rating.toFixed(1)} / 5.0
              </div>
            )}
            {user && (
              <button
                onClick={() => handleAddReview(doctor._id, 5, 'Great doctor!')}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Add Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDirectory; 