'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const painPoints = [
  "Sifting through hundreds of submissions without a systematic way to identify exceptional material",
  "Competing against platforms with unlimited budgets for the same limited pool of quality IP",
  "Missing golden opportunities because by the time manuscripts reach your desk, they've already made the rounds",
  "Lying awake wondering if younger executives are more in tune with emerging trends"
];

const Problem = () => {
  return (
    <section 
      className="relative py-24 bg-slate-100" 
      style={{ 
        // backgroundImage: 'url(/images/office-background-blur.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(241, 245, 249, 0.95)' // #F1F5F9 with opacity
      }}
    >
      {/* Subtle texture overlay placeholder - we can add this later */}
      {/* <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url(/textures/subtle-noise.png)' }}></div> */}

      <div className="container mx-auto px-6 relative">
        <h2 
          className="text-4xl font-bold text-center mb-16 text-slate-800"
          style={{ fontFamily: 'var(--font-dm-serif-display)', fontWeight: 700, fontSize: '2.5rem' }}
        >
          Every Day You're Not First, You're Last
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Problem Narrative */}
          <div className="space-y-8">
            <p 
              className="text-lg italic text-slate-700 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '1.125rem' }}
            >
              "Picture this: It's 11:47 PM and you're scrolling through your twenty-third manuscript of the day. Your eyes burn, your competition just announced another adaptation you should have discovered, and you're wondering if you're slowly becoming irrelevant in an industry that devours its own."
            </p>
            <div className="border-l-4 border-secondary-dark-blue pl-6 bg-white/50 py-4 rounded-r-lg">
              <p 
                className="text-xl font-medium text-slate-800 leading-loose relative"
              >
                <span className="absolute -top-2 -left-3 text-6xl text-slate-300 font-serif">“</span>
                You know you have great taste. You can spot quality storytelling from a mile away. But talent means nothing if you're always three steps behind.
              </p>
            </div>
          </div>

          {/* Right Column: Pain Points */}
          <div className="space-y-4 pt-4">
            <ul className="space-y-5">
              {painPoints.map((point, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start text-slate-600"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '1rem' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 mr-4 mt-1 text-secondary-dark-blue flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
