'use client';

import React from 'react';

interface PlaceholderSectionProps {
  title: string;
  description: string;
  icon: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ title, description, icon }) => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-3 rounded-full">
          <span className="text-2xl">{icon}</span>
          <span className="font-semibold text-gray-900 dark:text-white">{title}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Coming Soon!
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Placeholder Content */}
      <div className="glass p-12 rounded-xl text-center space-y-6">
        <div className="text-6xl">🚧</div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          This section is under development
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          We're working hard to bring you comprehensive content for this topic. 
          Check back soon for interactive learning materials, mnemonics, and quizzes!
        </p>
        <div className="flex justify-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            <span>In Progress</span>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="glass p-8 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          🎯 What to Expect
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="text-3xl">🧠</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Memory Techniques</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Mnemonics and frameworks to help you remember complex concepts
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl">🎮</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Interactive Learning</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hands-on examples and visual explanations
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="text-3xl">🎯</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Practice Quizzes</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test your knowledge with interactive assessments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderSection; 