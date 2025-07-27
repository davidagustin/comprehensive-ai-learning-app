'use client';

import React from 'react';

const MLAlgorithms: React.FC = () => {
  const frameworks = [
    {
      title: "🎯 RCCA Framework",
      mnemonic: "Really Cool Computer Algorithms",
      items: [
        { letter: "R", meaning: "Regression", description: "Predicting continuous values" },
        { letter: "C", meaning: "Classification", description: "Categorizing data" },
        { letter: "C", meaning: "Clustering", description: "Finding groups" },
        { letter: "A", meaning: "Anomaly Detection", description: "Finding outliers" }
      ]
    },
    {
      title: "📈 Regression: LRXS",
      mnemonic: "Large Robots eXplore Space",
      items: [
        { letter: "L", meaning: "Linear Regression", description: "Simple Sam" },
        { letter: "R", meaning: "Random Forest", description: "Robust Robert" },
        { letter: "X", meaning: "XGBoost", description: "eXtreme Xavier" },
        { letter: "S", meaning: "SVM", description: "Steady Steve" }
      ]
    },
    {
      title: "🎯 Classification: LRSN",
      mnemonic: "Let's Really Study Now",
      items: [
        { letter: "L", meaning: "Logistic Regression", description: "Logical Lisa" },
        { letter: "R", meaning: "Random Forest", description: "Robust Robert" },
        { letter: "S", meaning: "SVM", description: "Steady Steve" },
        { letter: "N", meaning: "Naive Bayes", description: "Naive Nancy" }
      ]
    }
  ];

  const characters = [
    {
      name: "Simple Sam",
      emoji: "🤖",
      algorithm: "Linear Regression",
      catchphrase: "I keep it simple and straight to the point!",
      trait: "Simple and straightforward"
    },
    {
      name: "Robust Robert",
      emoji: "🌳",
      algorithm: "Random Forest",
      catchphrase: "I'm strong like a forest, handling any data!",
      trait: "Strong and versatile"
    },
    {
      name: "eXtreme Xavier",
      emoji: "⚡",
      algorithm: "XGBoost",
      catchphrase: "I boost performance to extreme levels!",
      trait: "High-performance and powerful"
    },
    {
      name: "Steady Steve",
      emoji: "🛡️",
      algorithm: "SVM",
      catchphrase: "I find the perfect boundary, steady and strong!",
      trait: "Methodical and precise"
    },
    {
      name: "Logical Lisa",
      emoji: "🧠",
      algorithm: "Logistic Regression",
      catchphrase: "I think logically about probabilities!",
      trait: "Analytical and probability-focused"
    },
    {
      name: "Naive Nancy",
      emoji: "🌸",
      algorithm: "Naive Bayes",
      catchphrase: "I'm naive but surprisingly effective!",
      trait: "Simple assumptions, great results"
    },
    {
      name: "Clustering Clara",
      emoji: "🎯",
      algorithm: "K-Means",
      catchphrase: "I bring similar things together!",
      trait: "Organizes and groups data"
    },
    {
      name: "Detective Dan",
      emoji: "🔍",
      algorithm: "Isolation Forest",
      catchphrase: "I spot the odd ones out!",
      trait: "Finds anomalies and outliers"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-3 rounded-full">
          <span className="text-2xl">🤖</span>
          <span className="font-semibold text-blue-700 dark:text-blue-300">ML Algorithm Mnemonics</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Master Machine Learning Algorithms
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Learn through memorable frameworks and characters that make complex concepts stick in your mind forever
        </p>
      </div>

      {/* Frameworks Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📚 Mnemonic Frameworks</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Memorize algorithms with these powerful memory techniques</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {framework.title}
                </h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
                  <p className="text-blue-700 dark:text-blue-300 font-semibold italic text-lg">
                    "{framework.mnemonic}"
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {framework.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.letter}
                    </span>
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                        {item.meaning}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Characters Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">👥 The ML Avengers</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Meet the characters that make algorithms memorable</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {character.emoji}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                {character.name}
              </h4>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                {character.algorithm}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 italic mb-3 leading-relaxed">
                "{character.catchphrase}"
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-full">
                {character.trait}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WISP Framework Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🔍 WISP Decision Framework</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">A systematic approach to choosing the right algorithm</p>
        </div>
        
        <div className="card p-8">
          <div className="mb-8 text-center">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              "What Input Size Performance"
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Four key questions to guide your algorithm selection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { letter: "W", title: "What", description: "What type of problem?" },
              { letter: "I", title: "Input", description: "What kind of data?" },
              { letter: "S", title: "Size", description: "How much data?" },
              { letter: "P", title: "Performance", description: "Speed vs accuracy?" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.letter}
                </div>
                <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                  {item.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLAlgorithms; 