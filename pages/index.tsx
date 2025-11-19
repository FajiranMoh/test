import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="A professional landing page built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <section className="text-2xl md:text-4xl text-center">
          <h1 className="mb-4">Welcome to Your New Landing Page</h1>
          <p className="mb-8">Crafted with Next.js and TailwindCSS</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Get Started</button>
        </section>

        <section className="my-20">
          <h2 className="text-3xl text-center mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-2xl mb-2">Feature 1</h3>
              <p>Explanation of feature 1 here.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-2">Feature 2</h3>
              <p>Explanation of feature 2 here.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl mb-2">Feature 3</h3>
              <p>Explanation of feature 3 here.</p>
            </div>
          </div>
        </section>

        <footer className="w-full text-center py-4 border-t mt-20">
          © 2023 Your Company Name. All rights reserved.
        </footer>
      </main>
    </>
  );
}