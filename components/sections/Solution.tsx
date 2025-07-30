'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart2, Zap, Award } from 'lucide-react';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import SolutionDashboardPreview from '@/components/common/SolutionDashboardPreview';

const valueProps = [
  {
    icon: <Target className="w-7 h-7 text-white" />,
    title: "Early Detection",
    description: "Spot exceptional IP 30-60 days before competitors",
    emoji: "🎯"
  },
  {
    icon: <BarChart2 className="w-7 h-7 text-white" />,
    title: "Smart Analytics",
    description: "Goodreads ratings, BookTok mentions, editor engagement scores",
    emoji: "📊"
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: "Instant Intelligence",
    description: "Know which film rights are available before bidding wars start",
    emoji: "⚡"
  },
  {
    icon: <Award className="w-7 h-7 text-white" />,
    title: "Proven Results",
    description: "Our users option 4x more quality properties per quarter",
    emoji: "🏆"
  }
];

const Solution = () => {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32">
      {/* Gradient Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-light-blue to-secondary-dark-blue"></div>

      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-4xl font-bold text-white mb-6"
          style={{ fontFamily: 'var(--font-dm-serif-display)', fontWeight: 700, fontSize: '2.25rem' }}
        >
          Finally, X-Ray Vision Into Publishing's Nervous System
        </h2>
        <p 
          className="max-w-3xl mx-auto text-lg text-slate-300 mb-16"
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '1.125rem' }}
        >
          Our IP marketplace doesn't track what's already happened—we reveal what's about to break. Books trending upward before bestseller lists. Manuscripts getting unusual editor attention. Social media buzz around indie authors. All organized in a dashboard that makes sense.
        </p>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              className="bg-slate-800 p-6 rounded-lg text-left shadow-md hover:shadow-blue-500/20 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-dark-blue flex items-center justify-center mr-4">
                  {prop.icon}
                </div>
                <h3 
                  className="text-xl text-white"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
                >
                  {prop.title}
                </h3>
              </div>
              <p 
                className="text-slate-300"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '1rem' }}
              >
                <span className="mr-2">{prop.emoji}</span>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Counter */}
        <div className="mb-16">
          <div className="text-5xl font-bold text-white">
            <AnimatedCounter from={0} to={4} />x
          </div>
          <p className="text-lg text-slate-300 mt-2">more quality properties secured per quarter</p>
        </div>

        {/* Interactive Dashboard Preview */}
        <div className="h-96 rounded-lg mb-16">
          <SolutionDashboardPreview />
        </div>

        {/* Progress Bars - Placeholder */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-white mb-8" style={{ fontFamily: 'var(--font-inter)' }}>Your Competitive Advantage</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-300" style={{ fontFamily: 'var(--font-inter)' }}>Market Foresight</span>
                <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'var(--font-inter)' }}>95%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4">
                <motion.div 
                  className="bg-white h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-300" style={{ fontFamily: 'var(--font-inter)' }}>Acquisition Speed</span>
                <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'var(--font-inter)' }}>80%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4">
                 <motion.div 
                  className="bg-white h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-300" style={{ fontFamily: 'var(--font-inter)' }}>Risk Reduction</span>
                <span className="text-sm font-medium text-slate-300" style={{ fontFamily: 'var(--font-inter)' }}>90%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-4">
                 <motion.div 
                  className="bg-white h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '90%' }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Statement */}
        <p 
          className="text-2xl font-medium text-slate-300 max-w-4xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Transform from scavenger to explorer. From reactive to predictive. From anxiety to confidence.
        </p>
      </div>
    </section>
  );
};

export default Solution;
