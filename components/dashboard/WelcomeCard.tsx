'use client';

import { useSession } from 'next-auth/react';

export default function WelcomeCard() {
  const { data: session } = useSession();
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Welcome back, {session?.user?.name || 'Valued User'}! 👋
      </h2>
      <p className="text-gray-600">
        Here's what's happening with your IP discovery today.
      </p>
      <div className="mt-4 flex flex-wrap gap-4">
        <div className="bg-blue-50 p-3 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm text-gray-500">Saved Properties</p>
          <p className="text-2xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm text-gray-500">New This Week</p>
          <p className="text-2xl font-bold text-green-600">8</p>
        </div>
      </div>
    </div>
  );
}
