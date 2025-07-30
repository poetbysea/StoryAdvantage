'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const features = [
    'Early access to trending IP before competitors',
    'Advanced analytics and adaptation scoring',
    'Rights availability tracking',
    'Mobile app for discovery on the go',
    'Priority email alerts for hot properties',
    '30-day money-back guarantee',
  ];

  const priceComparison = [
    { service: 'Industry tracking services', price: '$500-2,000/month' },
    { service: 'Literary scouting services', price: '$1,200/month' },
    { service: 'Coverage services', price: '$300/month' },
    { service: 'Our marketplace', price: '$99.99/month', highlight: true },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#1A1B23' }}>
      {/* Accent lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-dm-serif-display)', fontSize: '2rem', lineHeight: '2.5rem' }}
            variants={itemVariants}
          >
            Insider Intelligence for Less Than a Studio Lunch
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#A8B5D1] max-w-3xl mx-auto mb-12"
            variants={itemVariants}
          >
            At $99.99/month, you'll spend less than you do on a single industry lunch—but gain access to opportunities worth millions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Price Comparison */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Compare with traditional services:</h3>
            <div className="space-y-4">
              {priceComparison.map((item, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg ${item.highlight ? 'bg-gradient-to-r from-blue-600/20 to-blue-400/20 border border-blue-500/30' : 'bg-[#252733]'}`}
                >
                  <span className={`${item.highlight ? 'text-white font-medium' : 'text-[#A8B5D1]'}`}>
                    {item.service}
                  </span>
                  <span className={`${item.highlight ? 'text-white font-bold text-xl flex items-center' : 'text-[#A8B5D1] line-through'}`}>
                    {item.price} {item.highlight && <Zap className="w-5 h-5 ml-2 text-yellow-400 fill-yellow-400 animate-pulse" />}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-[#252733] rounded-2xl p-8 shadow-2xl border border-[#3A3B45] overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 blur-3xl"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-2">Pro Membership</h3>
                <div className="flex items-end mb-8">
                  <span 
                    className="text-5xl font-bold text-[#A8B5D1] mr-2"
                    style={{ fontFamily: 'var(--font-dm-serif-display)', fontSize: '3rem', lineHeight: '1' }}
                  >
                    $99.99
                  </span>
                  <span className="text-[#A8B5D1] mb-1">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Check className="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-[#A8B5D1]" style={{ fontFamily: 'var(--font-inter)' }}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Start Your 30-Day Free Trial</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <p className="text-sm text-[#7A8499] mt-4 text-center">No credit card required. Cancel anytime.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
