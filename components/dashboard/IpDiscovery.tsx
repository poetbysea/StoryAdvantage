'use client';

import { FiBookOpen, FiTrendingUp, FiClock, FiStar } from 'react-icons/fi';

const trendingIPs = [
  {
    id: 1,
    title: 'Midnight Whispers',
    author: 'Sarah J. Collins',
    genre: 'Thriller',
    trend: 'rising',
    rating: 4.8,
    cover: '/book-covers/midnight-whispers.jpg'
  },
  {
    id: 2,
    title: 'The Last Ember',
    author: 'Michael Chen',
    genre: 'Historical Fiction',
    trend: 'hot',
    rating: 4.9,
    cover: '/book-covers/last-ember.jpg'
  },
  {
    id: 3,
    title: 'Neon Shadows',
    author: 'Alex Rivera',
    genre: 'Cyberpunk',
    trend: 'new',
    rating: 4.6,
    cover: '/book-covers/neon-shadows.jpg'
  }
];

export default function IpDiscovery() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Trending IPs</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
      </div>
      
      <div className="space-y-4">
        {trendingIPs.map((ip) => (
          <div key={ip.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-16 h-20 bg-gray-200 rounded-md mr-4 flex-shrink-0">
              {/* Book cover image would go here */}
              <div className="w-full h-full bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
                <FiBookOpen size={24} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <h4 className="font-medium text-gray-900 truncate">{ip.title}</h4>
                {ip.trend === 'hot' && (
                  <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 rounded-full flex items-center">
                    <FiTrendingUp className="mr-1" size={12} /> Hot
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600">{ip.author}</p>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500 mr-3">{ip.genre}</span>
                <div className="flex items-center text-amber-400">
                  <FiStar className="fill-current" size={16} />
                  <span className="ml-1 text-sm font-medium text-gray-700">{ip.rating}</span>
                </div>
              </div>
            </div>
            <button className="ml-4 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
