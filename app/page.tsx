import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Site!</h1>
          <p className="text-xl mb-8">Discover our amazing products and services.</p>
          <a href="#features" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">Explore Now</a>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Feature One</h3>
              <p>Detailing the benefits and uniqueness of your feature.</p>
            </div>
            <div className="feature-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Feature Two</h3>
              <p>Explaining how this feature can solve problems.</p>
            </div>
            <div className="feature-card bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Feature Three</h3>
              <p>Highlighting the key aspects and innovations.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}