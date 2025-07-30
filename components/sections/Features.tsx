'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Market Trend Analysis',
    description: 'Stay ahead of the curve with real-time insights into what audiences are craving. Our AI analyzes social media, box office data, and streaming trends to identify emerging genres and themes.',
  },
  {
    title: 'Script & Manuscript Analysis',
    description: 'Go beyond the surface. Our platform dissects narrative structure, character development, and dialogue quality, providing a comprehensive report on any script or manuscript.',
  },
  {
    title: 'Audience Matching',
    description: 'Identify the perfect audience for any IP. We provide detailed demographic and psychographic profiles, ensuring your content finds its most receptive viewers.',
  },
  {
    title: 'Financial Forecasting',
    description: 'Make investment decisions with confidence. Our models project potential ROI based on production budget, marketing spend, and comparable titles.',
  },
];

const Features = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative bg-primary-pure py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary-dark-blue">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-charcoal sm:text-4xl font-serif">
            Your Command Center for Content Intelligence
          </p>
          <p className="mt-6 text-lg leading-8 text-primary-steel">
            Our platform is engineered to deliver clarity in a complex market. Each feature is a tool for precision, designed to give you a decisive edge.
          </p>
        </div>
        <div className="mt-16 space-y-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="overflow-hidden rounded-lg border border-primary-mist/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-primary-charcoal"
              >
                <span>{feature.title}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-primary-steel">
                  {feature.description}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
