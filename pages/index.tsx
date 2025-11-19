import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-gray-800 text-white p-6'>
        <h1 className='text-3xl font-bold'>Welcome to Our Website!</h1>
      </header>
      <main className='flex-grow container mx-auto px-4'>
        <section className='text-center my-8'>
          <h2 className='text-2xl font-bold'>Features</h2>
          <p className='my-4'>Discover our amazing features.</p>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
          <div className='border p-4'>
            <h3 className='font-bold'>Feature 1</h3>
            <p>Detail about Feature 1.</p>
          </div>
          <div className='border p-4'>
            <h3 className='font-bold'>Feature 2</h3>
            <p>Detail about Feature 2.</p>
          </div>
          <div className='border p-4'>
            <h3 className='font-bold'>Feature 3</h3>
            <p>Detail about Feature 3.</p>
          </div>
        </section>
      </main>
      <footer className='bg-gray-700 text-white text-center p-4'>
        © 2023 Your Company Name
      </footer>
    </div>
  );
}
