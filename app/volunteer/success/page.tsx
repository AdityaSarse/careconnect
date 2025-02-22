'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const VolunteerSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Volunteering!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your application has been successfully submitted. Our team will review your information and contact you soon.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Next Steps:</h2>
            <ul className="text-left max-w-md mx-auto space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>We will review your application within 2-3 business days</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>You'll receive an email with details about orientation and training</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>Complete the required background check when requested</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 space-x-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Return to Home
            </Link>
            <Link
              href="/volunteer/resources"
              className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Volunteer Resources
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VolunteerSuccessPage; 