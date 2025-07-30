'use client';

import { FiTrendingUp, FiEye, FiClock, FiDollarSign } from 'react-icons/fi';

const stats = [
  {
    id: 1,
    name: 'Market Trends',
    value: '24%',
    change: '+12%',
    changeType: 'increase',
    icon: FiTrendingUp,
    description: 'Increase in thriller genre interest'
  },
  {
    id: 2,
    name: 'Your Views',
    value: '1,234',
    change: '+8.1%',
    changeType: 'increase',
    icon: FiEye,
    description: 'From last month'
  },
  {
    id: 3,
    name: 'Avg. Time to Option',
    value: '14 days',
    change: '-2 days',
    changeType: 'decrease',
    icon: FiClock,
    description: 'Faster than last quarter'
  },
  {
    id: 4,
    name: 'Avg. Option Value',
    value: '$45K',
    change: '+12%',
    changeType: 'increase',
    icon: FiDollarSign,
    description: 'From last quarter'
  }
];

export default function AnalyticsCard() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Market Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-2 rounded-lg ${
                stat.changeType === 'increase' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className={`mt-2 text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="font-medium">{stat.change}</span>{' '}
              <span className="text-gray-500">{stat.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
