'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isEmergencyDropdownOpen, setIsEmergencyDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">CareConne</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="text-gray-600 hover:text-blue-600 flex items-center"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <Link href="/landing-pages/rural-healthcare" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">
                    Rural Healthcare
                  </Link>
                  <Link href="/landing-pages/affordability" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">
                    Affordability
                  </Link>
                  <Link href="/telemedicine" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">
                    Telemedicine
                  </Link>
                  <Link href="/doctors" className="block px-4 py-2 text-gray-600 hover:bg-blue-50">
                    Find Doctors
                  </Link>
                </div>
              )}
            </div>

            {/* Emergency Response Dropdown */}
            <div className="relative group">
              <button 
                className="text-red-600 hover:text-red-700 flex items-center font-semibold"
                onMouseEnter={() => setIsEmergencyDropdownOpen(true)}
                onMouseLeave={() => setIsEmergencyDropdownOpen(false)}
              >
                Emergency Response
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isEmergencyDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                  onMouseEnter={() => setIsEmergencyDropdownOpen(true)}
                  onMouseLeave={() => setIsEmergencyDropdownOpen(false)}
                >
                  <Link href="/first-aid/cpr-guide" className="block px-4 py-2 text-gray-600 hover:bg-red-50">
                    CPR Guide
                  </Link>
                  <Link href="/first-aid/bleeding-control" className="block px-4 py-2 text-gray-600 hover:bg-red-50">
                    Bleeding Control
                  </Link>
                  <Link href="/first-aid/burn-treatment" className="block px-4 py-2 text-gray-600 hover:bg-red-50">
                    Burn Treatment
                  </Link>
                  <Link href="/first-aid/choking-response" className="block px-4 py-2 text-gray-600 hover:bg-red-50">
                    Choking Response
                  </Link>
                  <Link href="/emergency-call" className="block px-4 py-2 text-red-600 hover:bg-red-50 font-semibold">
                    Emergency Call
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/get-involved" className="text-gray-600 hover:text-blue-600">
              Get Involved
            </Link>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors, services..."
                className="w-48 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/about" className="block text-gray-600 hover:text-blue-600">About Us</Link>
            
            {/* Mobile Services Links */}
            <div className="py-2">
              <div className="font-semibold text-gray-800 mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link href="/landing-pages/rural-healthcare" className="block text-gray-600 hover:text-blue-600">Rural Healthcare</Link>
                <Link href="/landing-pages/affordability" className="block text-gray-600 hover:text-blue-600">Affordability</Link>
                <Link href="/telemedicine" className="block text-gray-600 hover:text-blue-600">Telemedicine</Link>
                <Link href="/doctors" className="block text-gray-600 hover:text-blue-600">Find Doctors</Link>
              </div>
            </div>

            {/* Mobile Emergency Response Links */}
            <div className="py-2">
              <div className="font-semibold text-red-600 mb-2">Emergency Response</div>
              <div className="pl-4 space-y-2">
                <Link href="/first-aid/cpr-guide" className="block text-gray-600 hover:text-red-600">CPR Guide</Link>
                <Link href="/first-aid/bleeding-control" className="block text-gray-600 hover:text-red-600">Bleeding Control</Link>
                <Link href="/first-aid/burn-treatment" className="block text-gray-600 hover:text-red-600">Burn Treatment</Link>
                <Link href="/first-aid/choking-response" className="block text-gray-600 hover:text-red-600">Choking Response</Link>
                <Link href="/emergency-call" className="block text-red-600 font-semibold">Emergency Call</Link>
              </div>
            </div>

            <Link href="/contact" className="block text-gray-600 hover:text-blue-600">Contact</Link>
            <Link href="/get-involved" className="block text-gray-600 hover:text-blue-600">Get Involved</Link>
            
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors, services..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 