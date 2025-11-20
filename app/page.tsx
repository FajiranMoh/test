import React, { useState } from 'react';
import { Navbar } from '../components/ui/Navbar';

export default function Page() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <Navbar />
      <button onClick={toggleTheme} className="my-4 p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded">Toggle Theme</button>
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 flex-1 flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Site!</h1>
          <p className="text-xl mb-8">Experience the next generation of performance.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg">Get Started</button>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full p-6 border rounded-lg shadow-lg bg-white">
                <p className="text-lg italic">"The service is amazing! The team was always available for questions and the end product blew our expectations away."</p>
                <p className="text-sm text-gray-500 text-right">- Jane Doe, CEO</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full p-6 border rounded-lg shadow-lg bg-white">
                <p className="text-lg italic">"I've never been more satisfied with a web development service. The attention to detail and the responsiveness of the team were unparalleled."</p>
                <p className="text-sm text-gray-500 text-right">- John Smith, Entrepreneur</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="h-full p-6 border rounded-lg shadow-lg bg-white">
                <p className="text-lg italic">"The website not only looks fantastic but also functions beautifully. It's exactly what we needed to take our business to the next level."</p>
                <p className="text-sm text-gray-500 text-right">- Alex Johnson, Freelancer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Further sections */}
    </div>
  );
}
