'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CPRGuide = () => {
  const sections = [
    {
      title: 'When to Perform CPR',
      content: [
        'Person is unresponsive and not breathing normally',
        'Signs of cardiac arrest (sudden collapse, no pulse)',
        'Drowning or choking victims who are unconscious',
        'No signs of life or normal breathing'
      ],
      icon: '🚨'
    },
    {
      title: 'Step-by-Step CPR Guide',
      content: [
        '1. Check Scene Safety & Responsiveness',
        '2. Call Emergency Services (911)',
        '3. Check Breathing (look, listen, feel for 10 seconds)',
        '4. Begin Chest Compressions:',
        '   - Place hands in center of chest',
        '   - Push hard and fast (100-120 compressions/minute)',
        '   - Allow chest to fully recoil',
        '5. Give Rescue Breaths (if trained):',
        '   - Tilt head back, lift chin',
        '   - Give 2 breaths (1 second each)',
        '   - Watch for chest rise',
        '6. Continue 30 compressions to 2 breaths'
      ],
      icon: '🏥'
    },
    {
      title: 'Hands-Only CPR',
      content: [
        'Effective for untrained responders',
        'Focus on chest compressions only',
        'Push hard and fast in center of chest',
        'Continue until help arrives or person shows signs of life',
        'Can be as effective as conventional CPR for sudden cardiac arrest'
      ],
      icon: '👐'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            CPR (Cardiopulmonary Resuscitation) Guide
          </h1>
          <p className="text-xl text-center mb-8">
            Learn the life-saving steps of CPR and when to perform them
          </p>
          <div className="text-center">
            <Link
              href="/emergency"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300"
            >
              Emergency Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold mb-4 text-red-600">
              Important Note
            </h3>
            <p className="text-gray-700">
              This guide is for educational purposes only. Always call emergency services first and follow their instructions. Regular CPR training from certified instructors is strongly recommended for proper technique and confidence in emergency situations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CPRGuide; 