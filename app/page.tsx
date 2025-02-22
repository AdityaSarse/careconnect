'use client';

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import EmergencySection from './components/EmergencySection';
import DoctorDirectory from './components/DoctorDirectory';
import AffordabilitySection from './components/AffordabilitySection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Key Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/landing-pages/rural-healthcare" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-2">Rural Healthcare</h3>
                <p className="text-gray-600">
                  Bringing quality healthcare to remote and rural communities.
                </p>
              </div>
            </Link>
            <Link href="/landing-pages/affordability" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">Affordable Healthcare</h3>
                <p className="text-gray-600">
                  Making medical care accessible and affordable for everyone.
                </p>
              </div>
            </Link>
            <Link href="/landing-pages/emergency" className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🚑</div>
                <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
                <p className="text-gray-600">
                  Quick and efficient emergency medical services.
                </p>
              </div>
            </Link>
            <Link href="/first-aid/cpr-guide" className="block p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">CPR Guide</h3>
              <p className="text-gray-600">Learn life-saving CPR steps and when to perform them</p>
            </Link>
            <Link href="/first-aid/bleeding-control" className="block p-6 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Bleeding Control</h3>
              <p className="text-gray-600">Learn how to handle severe bleeding emergencies</p>
            </Link>
            <Link href="/first-aid/burn-treatment" className="block p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition duration-300">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Burn Treatment</h3>
              <p className="text-gray-600">Learn about different types of burns and their treatment</p>
            </Link>
            <Link href="/first-aid/choking-response" className="block p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition duration-300">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Choking Response</h3>
              <p className="text-gray-600">Learn how to help someone who is choking</p>
            </Link>
          </div>
        </div>
      </div>
      <ServicesSection />
      <EmergencySection />
      <DoctorDirectory />
      <AffordabilitySection />
      <BlogSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
} 