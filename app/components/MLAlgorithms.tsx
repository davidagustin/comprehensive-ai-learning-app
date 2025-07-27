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
          <span className="font-semibold text-gray-900 dark:text-white">Machine Learning Algorithms</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Meet Your AI Friends
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn machine learning algorithms through memorable characters and frameworks. 
          Each algorithm has a personality that makes learning fun and unforgettable!
        </p>
      </div>

      {/* Frameworks Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          🎯 Memory Frameworks
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="glass p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {framework.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                "{framework.mnemonic}"
              </p>
              <div className="space-y-3">
                {framework.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm">
                        {item.letter}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {item.meaning}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </div>
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          👥 Meet the Characters
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div key={index} className="glass p-6 rounded-xl text-center space-y-4 hover:scale-105 transition-transform duration-200">
              <div className="text-4xl">{character.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {character.name}
              </h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                {character.algorithm}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                "{character.catchphrase}"
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {character.trait}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Tips */}
      <div className="glass p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          💡 Learning Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              🎭 Character-Based Learning
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Associate each algorithm with its character</li>
              <li>• Remember their catchphrases and traits</li>
              <li>• Visualize them solving different problems</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              🧠 Mnemonic Techniques
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Use the RCCA framework for algorithm types</li>
              <li>• Remember LRXS for regression algorithms</li>
              <li>• Use LRSN for classification algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLAlgorithms; 