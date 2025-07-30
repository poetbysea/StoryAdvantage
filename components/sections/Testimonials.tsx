'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award } from 'lucide-react';
import { TestimonialCarousel } from '@/components/common/TestimonialCarousel';



const trustIndicators = [
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    text: '★★★★★ Rated by 200+ Development Executives'
  },
  {
    icon: <Award className="w-6 h-6 text-blue-500" />,
    text: "Featured in Variety's 'Tools Every Executive Needs'"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    text: 'GDPR Compliant - Your competitive advantage stays private'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold text-[#1A1B23] mb-16"
          style={{ fontFamily: 'var(--font-dm-serif-display)', fontSize: '2rem', fontWeight: 700 }}
        >
          Join Executives Who've Found Their Edge
        </h2>

        <div className="mb-20">
          <TestimonialCarousel />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {trustIndicators.map((indicator, index) => (
            <motion.div 
              key={index} 
              className="flex items-center space-x-3 text-slate-600 font-medium cursor-pointer transition-colors duration-300 hover:text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              {indicator.text.startsWith('★★★★★') ? (
                <>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5, y: -10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-inter)'}}>{indicator.text.replace('★★★★★', '').trim()}</span>
                </>
              ) : (
                <>
                  {indicator.icon}
                  <span style={{ fontFamily: 'var(--font-inter)'}}>{indicator.text}</span>
                </>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
