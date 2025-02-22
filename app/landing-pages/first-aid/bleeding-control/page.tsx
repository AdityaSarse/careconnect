'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const BleedingControl = () => {
  const sections = [
    {
      title: 'Identifying Severe Bleeding',
      content: [
        'Blood that is spurting or pulsing',
        'Blood that soaks through clothing or bandages quickly',
        'Blood pooling on the ground',
        'Loss of all or part of a limb',
        'Victim showing signs of shock (pale, cold, sweaty skin)'
      ],
      icon: '🔍'
    },
    {
      title: 'Steps to Control Bleeding',
      content: [
        '1. Ensure Your Safety:',
        '   - Wear protective gloves if available',
        '   - Avoid contact with blood',
        '2. Expose the Wound:',
        '   - Remove or cut away clothing',
        '   - Clear debris if easily removable',
        '3. Apply Direct Pressure:',
        '   - Use sterile gauze or clean cloth',
        '   - Press firmly on the wound',
        '   - Maintain constant pressure',
        '4. Elevate the Injury:',
        '   - Raise wounded area above heart if possible',
        '   - Continue direct pressure',
        '5. Apply Tourniquet (if necessary):',
        '   - Use only for life-threatening limb bleeding',
        '   - Place 2-3 inches above wound',
        '   - Tighten until bleeding stops',
        '   - Note time of application'
      ],
      icon: '🩹'
    },
    {
      title: 'When to Seek Immediate Medical Help',
      content: [
        'Bleeding cannot be controlled',
        'Deep wounds or embedded objects',
        'Signs of internal bleeding',
        'Bleeding from head or torso',
        'Victim shows signs of shock',
        'Any severe or pulsing bleeding'
      ],
      icon: '🚑'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Emergency Bleeding Control Guide
          </h1>
          <p className="text-xl text-center mb-8">
            Learn how to identify and control severe bleeding in emergency situations
          </p>
          <div className="text-center">
            <Link
              href="/emergency"
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-50 transition duration-300"
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
                <h2 className="text-2xl font-bold mb-4 text-red-600">
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
              This guide is for educational purposes only. Always call emergency services immediately for severe bleeding. Time is critical - do not delay seeking professional medical help while attempting to control bleeding.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BleedingControl; 