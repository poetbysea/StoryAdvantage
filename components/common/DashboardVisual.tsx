'use client';

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { motion } from 'framer-motion';

const initialData = [
  { name: 'Sci-Fi', value: 400 },
  { name: 'Fantasy', value: 300 },
  { name: 'Thriller', value: 600 },
  { name: 'Romance', value: 280 },
  { name: 'Comedy', value: 500 },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const DashboardVisual = () => {
  const [data, setData] = useState(initialData);

    useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData];
        // Select one or two bars to update randomly
        const indicesToUpdate = new Set<number>();
        const numToUpdate = Math.floor(Math.random() * 2) + 1; // 1 or 2
        while (indicesToUpdate.size < numToUpdate) {
          indicesToUpdate.add(Math.floor(Math.random() * newData.length));
        }

        indicesToUpdate.forEach(index => {
          const currentValue = newData[index].value;
          // Add a smaller, more subtle change
          let newValue = currentValue + Math.floor(Math.random() * 40) - 20;
          // Keep values within a reasonable range
          if (newValue < 100) newValue = 100;
          if (newValue > 700) newValue = 700;
          newData[index] = { ...newData[index], value: newValue };
        });

        return newData;
      });
    }, 3000); // Slower interval for a more subtle effect

    return () => clearInterval(interval);
  }, []); // Run only once on mount

  return (
    <motion.div 
      className="relative h-96 w-full rounded-lg bg-primary-charcoal/30 p-6 shadow-2xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-lg font-semibold text-primary-dawn mb-4">Trending Genres</h3>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#A8B5D1" fontSize={12} />
          <YAxis stroke="#A8B5D1" fontSize={12} />
          <Tooltip 
            cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
            contentStyle={{ 
              background: '#1A1B23',
              border: '1px solid #4F5B7A',
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: '#A8B5D1' }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={true} animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Floating Cards */}
      <motion.div 
        className="absolute -bottom-8 -left-12 h-24 w-48 rounded-lg bg-primary-pure/10 p-4 text-primary-dawn shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-bold">Recently Optioned:</p>
        <p className="text-sm">"The Last Stargazer"</p>
      </motion.div>
      <motion.div 
        className="absolute -right-12 -top-8 h-24 w-48 rounded-lg bg-primary-pure/10 p-4 text-primary-dawn shadow-lg backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="font-bold">Trending:</p>
        <p className="text-sm">Sci-Fi Scripts</p>
      </motion.div>
    </motion.div>
  );
};

export default DashboardVisual;
