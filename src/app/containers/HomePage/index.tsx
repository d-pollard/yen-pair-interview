import React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="flex flex-col sm:flex-row items-center justify-center h-full text-5xl space-x-0 sm:space-x-4">
        <div>
          Welcome to your <span className="text-blue-400">React</span> interview
        </div>
      </div>
    </>
  );
}
