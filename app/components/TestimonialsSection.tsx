'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Bihar',
      image: '/images/testimonials/patient1.jpg',
      story: 'Thanks to CareConne\'s telemedicine service, I was able to consult with a specialist without traveling 100km to the city. The doctor\'s guidance helped me recover completely.',
      type: 'Patient Recovery',
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      location: 'Delhi',
      image: '/images/testimonials/doctor1.jpg',
      story: 'Being part of CareConne\'s network has allowed me to reach patients in remote areas. The platform\'s technology makes consultations seamless and effective.',
      type: 'Doctor Contribution',
    },
    {
      id: 3,
      name: 'Emergency Response Team',
      location: 'Mumbai',
      image: '/images/testimonials/team1.jpg',
      story: 'We were able to reach the accident site within 10 minutes thanks to CareConne\'s emergency alert system. Quick response time helped save precious lives.',
      type: 'Emergency Response',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Success Stories & Impact
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-xl bg-white">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                  {/* Image placeholder */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600">{testimonials[currentSlide].location}</p>
                </div>
                <span className="ml-auto px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {testimonials[currentSlide].type}
                </span>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "{testimonials[currentSlide].story}"
              </blockquote>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 