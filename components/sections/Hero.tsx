'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import DashboardVisual from '../common/DashboardVisual';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-midnight to-primary-steel text-primary-pure overflow-hidden">
      <div className="container mx-auto flex min-h-screen items-center px-6">
        {/* Left side: Text content */}
        <div className="w-full text-left md:w-3/5">
          <h1 style={{ fontFamily: 'var(--font-playfair-display)', fontSize: '3.5rem', fontWeight: 700, color: 'white' }} className="leading-tight">
            <TypeAnimation
              sequence={[
                "Discover Tomorrow's Hits Before Your Competitors Even Know They Exist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </h1>
          <p className="mt-6 text-xl font-normal leading-8 text-primary-mist">
            Stop playing catch-up in the IP game. Our $99.99 marketplace gives you early access to trending books and scripts before they become bidding wars – so you can option exceptional content first.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="transform rounded-md bg-secondary-dark-blue px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
            >
              Start Finding Winners Today
            </a>
            <a href="#" className="transform rounded-md border border-primary-dawn px-6 py-3 text-base font-semibold leading-6 text-primary-dawn transition-transform duration-200 ease-in-out hover:scale-105">
              See Live Demo
            </a>
          </div>
          <p className="mt-6 text-sm text-primary-mist/70">No credit card required • 30-day free trial • Cancel anytime</p>
        </div>

        {/* Right side: Animated Dashboard Visual */}
        <div className="hidden w-2/5 items-center justify-center md:flex">
          <DashboardVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
