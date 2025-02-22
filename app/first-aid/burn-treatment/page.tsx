'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BurnTreatment = () => {
  const sections = [
    {
      title: 'Types of Burns',
      content: [
        'First-Degree Burns:',
        '- Affects outer layer of skin only',
        '- Red, painful, dry, no blisters',
        '- Heals in 3-6 days',
        '',
        'Second-Degree Burns:',
        '- Affects outer and underlying skin layers',
        '- Blisters, severe pain, redness',
        '- May take 2-3 weeks to heal',
        '',
        'Third-Degree Burns:',
        '- Damages all layers of skin and deeper tissues',
        '- White or blackened, charred appearance',
        '- May be painless due to nerve damage',
        '- Requires immediate medical attention'
      ],
      icon: '🔥'
    },
    {
      title: 'Immediate First Aid Steps',
      content: [
        '1. Ensure Safety:',
        '   - Remove person from burning source',
        '   - Remove smoldering clothing unless stuck to skin',
        '',
        '2. Cool the Burn:',
        '   - Run cool (not cold) water over burn for 10-20 minutes',
        '   - Do not use ice or very cold water',
        '   - Do not break blisters',
        '',
        '3. Protect the Burn:',
        '   - Cover with sterile, non-stick gauze',
        '   - Use loose bandaging',
        '   - Keep victim warm',
        '',
        '4. What to Avoid:',
        '   - Do not apply ointments to severe burns',
        '   - Do not use cotton balls or fluffy materials',
        '   - Do not remove stuck clothing'
      ],
      icon: '🚰'
    },
    {
      title: 'When to Seek Medical Attention',
      content: [
        'Immediately seek emergency care if:',
        '- Burns are third-degree',
        '- Burns cover large body areas',
        '- Burns on face, hands, feet, or genitals',
        '- Chemical or electrical burns',
        '- Victim is very young or elderly',
        '- Signs of infection appear',
        '- Difficulty breathing',
        '- Signs of shock'
      ],
      icon: '🏥'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Emergency Burn Treatment Guide
          </h1>
          <p className="text-xl text-center mb-8">
            Learn how to identify burn severity and provide appropriate first aid
          </p>
          <div className="text-center">
            <Link
              href="/emergency"
              className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition duration-300"
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
                <h2 className="text-2xl font-bold mb-4 text-orange-600">
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
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold mb-4 text-orange-600">
              Important Note
            </h3>
            <p className="text-gray-700">
              This guide is for educational purposes only. For severe burns, call emergency services immediately. Do not delay seeking professional medical help. Time is critical in burn treatment, and proper medical care can prevent complications and improve healing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BurnTreatment; 