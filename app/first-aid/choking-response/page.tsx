'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ChokingResponse = () => {
  const sections = [
    {
      title: 'Signs of Choking',
      content: [
        'Universal Sign: Hands clutched to throat',
        'Cannot speak, cry, or breathe',
        'Weak or ineffective cough',
        'High-pitched noises while breathing',
        'Skin turning blue (cyanosis)',
        'Panic or distress',
        'Loss of consciousness (if not treated)'
      ],
      icon: '⚠️'
    },
    {
      title: 'Heimlich Maneuver for Adults',
      content: [
        '1. Stand behind the person',
        '2. Wrap your arms around their waist',
        '3. Make a fist with one hand',
        '4. Place fist thumb-side against middle of abdomen',
        '5. Grasp fist with other hand',
        '6. Give quick, upward thrusts',
        '7. Repeat until object is expelled',
        '',
        'For Pregnant or Obese Persons:',
        '- Position hands higher on chest',
        '- Perform chest thrusts instead'
      ],
      icon: '🧑'
    },
    {
      title: 'Choking Response for Children',
      content: [
        'For Children Over 1 Year:',
        '- Use Heimlich maneuver with less force',
        '- Stand or kneel behind child',
        '- Use two fingers for abdominal thrusts',
        '',
        'For Infants Under 1 Year:',
        '1. Back Blows:',
        '   - Place infant face down on forearm',
        '   - Support head and neck',
        '   - Give 5 back blows between shoulder blades',
        '',
        '2. Chest Thrusts:',
        '   - Turn infant face up',
        '   - Place two fingers on breastbone',
        '   - Give 5 quick chest thrusts',
        '   - Alternate between back blows and chest thrusts'
      ],
      icon: '👶'
    },
    {
      title: 'Self-Help for Choking',
      content: [
        'If Alone:',
        '1. Call emergency services if possible',
        '2. Perform abdominal thrusts on yourself:',
        '   - Make a fist above navel',
        '   - Grasp fist with other hand',
        '   - Press hard and quick into abdomen',
        '',
        'Alternative Method:',
        '- Bend over a sturdy chair back or counter',
        '- Press upper abdomen against the edge',
        '- Push up and inward with quick thrusts'
      ],
      icon: '🆘'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Emergency Choking Response Guide
          </h1>
          <p className="text-xl text-center mb-8">
            Learn how to recognize and respond to choking emergencies in adults, children, and infants
          </p>
          <div className="text-center">
            <Link
              href="/emergency"
              className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition duration-300"
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
                <h2 className="text-2xl font-bold mb-4 text-purple-600">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-gray-700 whitespace-pre-line">
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
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-4 text-purple-600">
              Important Note
            </h3>
            <p className="text-gray-700">
              This guide is for educational purposes only. Call emergency services immediately in any choking situation. Time is critical. Take a certified first aid course to learn and practice these techniques properly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChokingResponse; 