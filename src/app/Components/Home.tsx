'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Home: React.FC = () => {
  const router = useRouter();
 const handleStart = () => {
    router.push('/ai-chat');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to ChatApp 💬</h1>
      <p className="text-lg mb-6 text-center max-w-md">
        Connect with friends, share your thoughts, and enjoy seamless messaging in real-time.
      </p>
      <button 
      onClick={handleStart}
      className="px-6 py-2 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
};

export default Home;
