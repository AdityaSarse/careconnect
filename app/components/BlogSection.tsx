'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState('articles');

  const articles = [
    {
      id: 1,
      title: 'Understanding COVID-19 Vaccination',
      category: 'Health News',
      date: 'Feb 20, 2024',
      image: '/images/blog/covid-vaccine.jpg',
      excerpt: 'Latest updates on COVID-19 vaccination programs and their effectiveness...',
    },
    {
      id: 2,
      title: 'Mental Health in the Digital Age',
      category: 'Wellness',
      date: 'Feb 18, 2024',
      image: '/images/blog/mental-health.jpg',
      excerpt: 'How to maintain mental wellness in an increasingly connected world...',
    },
    {
      id: 3,
      title: 'Success Story: Rural Healthcare Initiative',
      category: 'Success Stories',
      date: 'Feb 15, 2024',
      image: '/images/blog/rural-health.jpg',
      excerpt: 'How our mobile clinics are transforming healthcare access in rural areas...',
    },
  ];

  const webinars = [
    {
      id: 1,
      title: 'Basic First Aid Training',
      date: 'March 1, 2024',
      time: '10:00 AM IST',
      instructor: 'Dr. Robert Smith',
      duration: '2 hours',
    },
    {
      id: 2,
      title: 'Stress Management Workshop',
      date: 'March 5, 2024',
      time: '3:00 PM IST',
      instructor: 'Dr. Lisa Chen',
      duration: '1.5 hours',
    },
  ];

  const qaThreads = [
    {
      id: 1,
      question: 'What are the early signs of diabetes?',
      askedBy: 'John D.',
      answers: 3,
      views: 156,
    },
    {
      id: 2,
      question: 'How can I improve my sleep quality?',
      askedBy: 'Sarah M.',
      answers: 5,
      views: 234,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Health Resources & Community
        </h2>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-6 py-2 mx-2 rounded-full ${
              activeTab === 'articles'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab('webinars')}
            className={`px-6 py-2 mx-2 rounded-full ${
              activeTab === 'webinars'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600'
            }`}
          >
            Webinars
          </button>
          <button
            onClick={() => setActiveTab('qa')}
            className={`px-6 py-2 mx-2 rounded-full ${
              activeTab === 'qa'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600'
            }`}
          >
            Q&A Forum
          </button>
        </div>

        {/* Content Sections */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48 bg-gray-200">
                  {/* Image placeholder */}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-blue-600">{article.category}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link href={`/blog/${article.id}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'webinars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webinars.map(webinar => (
              <div key={webinar.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3">{webinar.title}</h3>
                <div className="space-y-2 text-gray-600 mb-4">
                  <p>Date: {webinar.date}</p>
                  <p>Time: {webinar.time}</p>
                  <p>Duration: {webinar.duration}</p>
                  <p>Instructor: {webinar.instructor}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'qa' && (
          <div className="space-y-4">
            {qaThreads.map(thread => (
              <div key={thread.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{thread.question}</h3>
                <div className="flex items-center text-gray-600">
                  <span>Asked by {thread.askedBy}</span>
                  <span className="mx-2">•</span>
                  <span>{thread.answers} answers</span>
                  <span className="mx-2">•</span>
                  <span>{thread.views} views</span>
                </div>
                <Link href={`/qa/${thread.id}`} className="block mt-4 text-blue-600 hover:text-blue-700 font-semibold">
                  View Discussion →
                </Link>
              </div>
            ))}
            <div className="text-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
                Ask a Question
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection; 