'use client';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary-midnight text-primary-dawn shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold font-serif">Story Advantage</a>
        </div>
        <nav className="hidden items-center space-x-8 md:flex">
          <a href="#features" className="hover:text-primary-pure">Features</a>
          <a href="#pricing" className="hover:text-primary-pure">Pricing</a>
          <a href="#testimonials" className="hover:text-primary-pure">Success Stories</a>
          <a href="#roi-calculator" className="hover:text-primary-pure">ROI Calculator</a>
        </nav>
        <div className="hidden items-center space-x-4 md:flex">
          <a href="/login" className="hover:text-primary-pure">Login</a>
          <a href="/trial" className="rounded-md bg-secondary-dark-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-secondary-medium-gray">
            Start Free Trial
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-primary-midnight px-6 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="hover:text-primary-pure">Features</a>
            <a href="#pricing" className="hover:text-primary-pure">Pricing</a>
            <a href="#testimonials" className="hover:text-primary-pure">Success Stories</a>
            <a href="#roi-calculator" className="hover:text-primary-pure">ROI Calculator</a>
            <a href="/login" className="hover:text-primary-pure">Login</a>
            <a href="/trial" className="mt-2 rounded-md bg-secondary-dark-blue px-4 py-2 text-center font-semibold text-white shadow-sm hover:bg-secondary-medium-gray">
              Start Free Trial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
