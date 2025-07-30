'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BookOpen, MessageSquare } from 'lucide-react';

const dashboardItems = [
  {
    title: '"The Crimson Cipher"',
    metric: 'Trending Score: 92',
    icon: <TrendingUp className="w-5 h-5 text-green-500" />,
    status: 'High Engagement'
  },
  {
    title: '"Echoes of the Void"',
    metric: 'Editor Mentions: 12',
    icon: <BookOpen className="w-5 h-5 text-blue-500" />,
    status: 'Active Discussions'
  },
  {
    title: '"Sunstone" by J. Doe',
    metric: 'Social Buzz: 2.4k',
    icon: <MessageSquare className="w-5 h-5 text-purple-500" />,
    status: 'Viral Potential'
  }
];

const SolutionDashboardPreview = () => {
  return (
    <div className="w-full h-full bg-slate-800 rounded-lg shadow-2xl p-6 flex flex-col text-left">
      <div className="flex-shrink-0 mb-4">
        <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-inter)' }}>Live Market Signals</h3>
        <p className="text-sm text-slate-400">What's about to break, right now.</p>
      </div>
      <div className="flex-grow space-y-4 overflow-hidden">
        {dashboardItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between cursor-pointer"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(71, 85, 105, 0.8)' }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center">
              <div className="mr-4">{item.icon}</div>
              <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-sm text-slate-300">{item.metric}</p>
              </div>
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-600/50 px-2 py-1 rounded-full">{item.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SolutionDashboardPreview;
