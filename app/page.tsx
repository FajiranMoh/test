import React from 'react';
import { Navbar } from '../components/ui/Navbar';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Site!</h1>
          <p className="text-xl mb-8">Experience the next generation of performance.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg">Get Started</button>
        </div>
      </section>
      <section className="features py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="feature">
              <h2 className="text-2xl font-bold mb-2">Feature 1</h2>
              <p className="mb-4">An amazing feature that improves your life.</p>
            </div>
            <div className="feature">
              <h2 className="text-2xl font-bold mb-2">Feature 2</h2>
              <p className="mb-4">Another incredible feature to make things better.</p>
            </div>
            <div className="feature">
              <h2 className="text-2xl font-bold mb-2">Feature 3</h2>
              <p className="mb-4">Experience unparalleled efficiency with this feature.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}