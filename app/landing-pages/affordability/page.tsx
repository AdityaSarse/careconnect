'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Affordability = () => {
  const problems = [
    {
      title: 'High Treatment Costs',
      description: 'Rising medical expenses make quality healthcare inaccessible for many.',
      icon: '💰',
    },
    {
      title: 'Limited Insurance Coverage',
      description: 'Many people lack adequate health insurance or have high deductibles.',
      icon: '📄',
    },
    {
      title: 'Hidden Charges',
      description: 'Unexpected medical bills and unclear pricing structures.',
      icon: '⚠️',
    },
  ];

  const solutions = [
    {
      title: 'Low-Cost Clinics',
      description: 'Network of affordable healthcare providers with transparent pricing.',
      icon: '🏥',
    },
    {
      title: 'Government Schemes',
      description: 'Access to government healthcare subsidies and programs.',
      icon: '🏛️',
    },
    {
      title: 'Financial Aid',
      description: 'Assistance in finding and applying for medical financial aid.',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Making Healthcare Affordable for Everyone
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Quality medical care shouldn't break the bank. Find affordable healthcare options near you.
          </p>
          <Link
            href="/cost-calculator"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
          >
            Calculate Your Healthcare Costs
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Healthcare Financial Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Affordable Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-lg">
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

export default Affordability; 