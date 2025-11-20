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
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Elevate Your Experience</h1>
          <p className="text-xl mb-8">Discover innovation with us, where dreams become reality.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg">Explore Now</button>
        </div>
      </section>
      {/* Existing sections preserved here */}
    </div>
  );
}