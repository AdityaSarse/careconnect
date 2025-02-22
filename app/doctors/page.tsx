import React from 'react';
import DoctorDirectory from '../components/DoctorDirectory';

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Doctors</h1>
        <DoctorDirectory />
      </div>
    </main>
  );
} 