'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const AffordabilitySection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('general');

  const treatments = {
    general: [
      { name: 'General Consultation', minCost: 500, maxCost: 1500 },
      { name: 'Basic Health Checkup', minCost: 1500, maxCost: 3000 },
      { name: 'Vaccination', minCost: 800, maxCost: 2000 },
    ],
    surgery: [
      { name: 'Appendectomy', minCost: 35000, maxCost: 75000 },
      { name: 'Cataract Surgery', minCost: 25000, maxCost: 45000 },
      { name: 'Knee Replacement', minCost: 150000, maxCost: 300000 },
    ],
    diagnostic: [
      { name: 'Blood Tests', minCost: 500, maxCost: 2500 },
      { name: 'X-Ray', minCost: 800, maxCost: 2000 },
      { name: 'MRI Scan', minCost: 8000, maxCost: 15000 },
    ],
  };

  const schemes = [
    {
      name: 'Government Health Insurance',
      description: 'Coverage for eligible citizens under national health schemes',
      link: '/schemes/government',
    },
    {
      name: 'NGO Medical Support',
      description: 'Financial assistance through partner NGOs and charitable organizations',
      link: '/schemes/ngo',
    },
    {
      name: 'Hospital Payment Plans',
      description: 'Flexible payment options and EMI facilities for treatments',
      link: '/schemes/payment-plans',
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Affordable Healthcare Solutions
        </h2>

        {/* Treatment Cost Comparison */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Compare Treatment Costs</h3>
          
          {/* Treatment Type Selector */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSelectedTreatment('general')}
              className={`px-6 py-2 rounded-full ${
                selectedTreatment === 'general'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600'
              }`}
            >
              General
            </button>
            <button
              onClick={() => setSelectedTreatment('surgery')}
              className={`px-6 py-2 rounded-full ${
                selectedTreatment === 'surgery'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600'
              }`}
            >
              Surgery
            </button>
            <button
              onClick={() => setSelectedTreatment('diagnostic')}
              className={`px-6 py-2 rounded-full ${
                selectedTreatment === 'diagnostic'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600'
              }`}
            >
              Diagnostic
            </button>
          </div>

          {/* Cost Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Treatment</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Min Cost (₹)</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Max Cost (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {treatments[selectedTreatment].map((treatment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{treatment.name}</td>
                    <td className="px-6 py-4">₹{treatment.minCost}</td>
                    <td className="px-6 py-4">₹{treatment.maxCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Aid Schemes */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Available Financial Aid</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schemes.map((scheme, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-3">{scheme.name}</h4>
                <p className="text-gray-600 mb-4">{scheme.description}</p>
                <Link
                  href={scheme.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffordabilitySection; 