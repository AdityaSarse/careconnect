'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Emergency = () => {
  const challenges = [
    {
      title: 'Delayed Response',
      description: 'Traditional emergency services often face delays due to traffic and coordination issues.',
      icon: '⏰',
    },
    {
      title: 'Resource Limitations',
      description: 'Limited availability of ambulances and emergency medical staff.',
      icon: '🚑',
    },
    {
      title: 'Communication Gaps',
      description: 'Lack of real-time information sharing between responders and hospitals.',
      icon: '📡',
    },
  ];

  const solutions = [
    {
      title: 'AI-Powered Dispatch',
      description: 'Smart allocation of emergency resources based on location and severity.',
      icon: '🤖',
    },
    {
      title: 'Real-time Tracking',
      description: 'Live monitoring of emergency response vehicles and teams.',
      icon: '📍',
    },
    {
      title: 'Instant Communication',
      description: 'Seamless coordination between responders, hospitals, and patients.',
      icon: '📱',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Faster Emergency Response, Saving Lives
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Every second counts in an emergency. Our advanced response system ensures help reaches you quickly.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/emergency-call"
              className="inline-block bg-red-500 text-white font-bold py-4 px-8 rounded-full hover:bg-red-600 transition duration-300 animate-pulse"
            >
              🚨 Emergency: Get Help Now
            </Link>
            <Link
              href="/register"
              className="inline-block bg-white text-red-600 font-bold py-4 px-8 rounded-full hover:bg-red-50 transition duration-300"
            >
              Register for Quick Access
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Emergency Response Challenges
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
            Our Advanced Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-lg shadow-lg">
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

export default Emergency; 