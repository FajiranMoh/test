import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="hero bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Site!</h1>
          <p className="text-xl mb-8">Discover our amazing services and how they can help you achieve your goals.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">Get Started</button>
        </div>
      </section>
      <section className="features py-20 bg-white text-gray-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="feature">
              <h3 className="text-xl font-bold mb-4">Feature 1</h3>
              <p>Detail about Feature 1</p>
            </div>
            <div className="feature">
              <h3 className="text-xl font-bold mb-4">Feature 2</h3>
              <p>Detail about Feature 2</p>
            </div>
            <div className="feature">
              <h3 className="text-xl font-bold mb-4">Feature 3</h3>
              <p>Detail about Feature 3</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>Copyright © Your Company 2023</p>
      </footer>
    </div>
  );
}