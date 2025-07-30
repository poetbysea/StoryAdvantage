'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How does the platform source its data?',
    answer: 'We aggregate data from a wide range of public and proprietary sources, including social media, box office results, streaming platforms, and literary agencies. Our data pipeline is constantly updated to ensure you have the most current information.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, security is our top priority. We use industry-standard encryption and security protocols to protect your data. Access to your account and proprietary information is strictly controlled.',
  },
  {
    question: 'Can I integrate this platform with my existing tools?',
    answer: 'We offer a robust API that allows for seamless integration with your existing content management systems, analytics dashboards, and other tools. Our documentation provides clear instructions for developers.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support to all our clients, including a dedicated account manager, 24/7 technical support, and detailed documentation. We also offer training sessions to help your team get the most out of the platform.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-primary-pure">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-primary-charcoal/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary-charcoal font-serif">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-primary-charcoal/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <button onClick={() => toggleFAQ(index)} className="flex w-full items-start justify-between text-left text-primary-charcoal">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <motion.svg
                        className="h-6 w-6"
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </motion.svg>
                    </span>
                  </button>
                </dt>
                <motion.dd
                  className="mt-2 pr-12 overflow-hidden"
                  initial={false}
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-base leading-7 text-primary-steel">{faq.answer}</p>
                </motion.dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
