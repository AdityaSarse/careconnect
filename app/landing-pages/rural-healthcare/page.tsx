'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RuralHealthcare = () => {
  const challenges = [
    {
      title: 'Limited Access',
      description: 'Many rural communities are located far from medical facilities, making it difficult to access basic healthcare.',
      icon: '🏥',
    },
    {
      title: 'Shortage of Doctors',
      description: 'Rural areas often face a severe shortage of qualified medical professionals.',
      icon: '👨‍⚕️',
    },
    {
      title: 'Infrastructure Gaps',
      description: 'Lack of proper medical infrastructure and equipment in rural healthcare centers.',
      icon: '🏗️',
    },
  ];

  const solutions = [
    {
      title: 'Mobile Clinics',
      description: 'Regular visits by fully-equipped mobile medical units to remote areas.',
      icon: '🚐',
    },
    {
      title: 'Telemedicine',
      description: 'Virtual consultations with specialists through video calls and mobile apps.',
      icon: '📱',
    },
    {
      title: 'Local Partnerships',
      description: 'Collaboration with local healthcare workers and government facilities.',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bringing Healthcare Closer to Rural Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Making quality healthcare accessible to every village through technology and community support
          </p>
          <Link
            href="/find-clinic"
            className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-green-100 transition duration-300"
          >
            Find a Clinic Near You
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Challenges in Rural Healthcare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RuralHealthcare; 