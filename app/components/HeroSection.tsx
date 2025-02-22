'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Bringing Healthcare Closer to Everyone!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Find affordable medical services, emergency help, and telemedicine support in one place.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link 
            href="/doctors"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Find a Doctor
          </Link>
          <Link 
            href="/emergency"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Request Emergency Help
          </Link>
          <Link 
            href="/services"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Explore Affordable Healthcare
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 