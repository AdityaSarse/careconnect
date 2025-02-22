'use client';

import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: '📍',
      title: 'Find Nearby Health Centers',
      description: 'Locate hospitals, clinics & pharmacies in your area',
    },
    {
      icon: '💻',
      title: 'Telemedicine Consultations',
      description: 'Connect with doctors online for virtual consultations',
    },
    {
      icon: '🚑',
      title: 'Emergency Response',
      description: 'One-tap ambulance call & first aid tips',
    },
    {
      icon: '💰',
      title: 'Affordable Treatments',
      description: 'Compare costs & get financial aid information',
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Volunteer & join awareness programs',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 