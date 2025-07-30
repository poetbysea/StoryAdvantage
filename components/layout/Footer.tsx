'use client';

import React, { useState } from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset subscription message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#1A1B23] text-[#A8B5D1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-white text-xl font-bold">Story Advantage</h2>
            <p className="text-sm leading-relaxed">
              Connecting filmmakers with exceptional intellectual property for your next blockbuster.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-medium mb-4 text-base">Navigation</h3>
            <ul className="space-y-2">
              {['Product', 'Pricing', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-medium mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@storyadvantage.org" className="text-sm hover:text-white transition-colors duration-200">
                  hello@storyadvantage.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="tel:18004734778" className="text-sm hover:text-white transition-colors duration-200">
                  1-800-IP-FIRST
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Los Angeles, CA</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium mb-4 text-base">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md bg-[#2D2F3C] border border-[#3E4050] text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
              {isSubscribed && (
                <p className="text-green-400 text-xs mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-[#2D2F3C] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A8B5D1] hover:text-[#0A66C2] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A8B5D1] hover:text-[#1DA1F2] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A8B5D1] hover:text-[#E1306C] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p 
              className="text-xs text-[#4F5B7A] text-center md:text-right"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              © 2025 Film Development IP Marketplace. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-4">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs text-[#A8B5D1] hover:text-white transition-colors duration-200"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
