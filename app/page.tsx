import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">Discover our amazing services and how they can help you achieve your goals.</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-200 transition duration-300">Get Started</button>
        </div>
      </section>
      <section className="features py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Feature One</h3>
              <p className="text-gray-700 mb-4">An amazing feature that you'll definitely love.</p>
            </div>
            <div className="feature bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Feature Two</h3>
              <p className="text-gray-700 mb-4">Another incredible feature that will blow your mind.</p>
            </div>
            <div className="feature bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Feature Three</h3>
              <p className="text-gray-700 mb-4">A feature so good, you'll wonder how you ever lived without it.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}