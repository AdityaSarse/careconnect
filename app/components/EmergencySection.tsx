'use client';

import React from 'react';
import Link from 'next/link';

const EmergencySection = () => {
  const firstAidGuides = [
    {
      title: 'CPR Guide',
      description: 'Step-by-step guide for performing CPR',
      icon: '❤️',
    },
    {
      title: 'Bleeding Control',
      description: 'How to control severe bleeding',
      icon: '🩹',
    },
    {
      title: 'Burn Treatment',
      description: 'First aid for burns and scalds',
      icon: '🔥',
    },
    {
      title: 'Choking Response',
      description: 'How to help someone who is choking',
      icon: '🫁',
    },
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Response System</h2>
          <p className="text-xl text-gray-600">Quick access to emergency services and first aid guides</p>
        </div>

        {/* Emergency Call Button */}
        <div className="text-center mb-12">
          <Link
            href="/emergency-call"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-full animate-pulse"
          >
            🚨 Need Help? Call an Ambulance Now
          </Link>
        </div>

        {/* First Aid Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {firstAidGuides.map((guide, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{guide.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.description}</p>
              <Link
                href={`/first-aid/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-block mt-4 text-red-600 hover:text-red-700 font-semibold"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Volunteer Registration */}
        <div className="text-center mt-12">
          <Link
            href="/volunteer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full"
          >
            Register as a Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection; 