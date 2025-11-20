import React from 'react';
import { Navbar } from '../components/ui/Navbar';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 flex-1 flex items-center justify-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Site!</h1>
          <p className="text-xl mb-8">Experience the next generation of performance.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg">Get Started</button>
        </div>
      </section>
      {/* Further sections */}
    </div>
  );
}