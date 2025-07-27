'use client';

import React from 'react';

const DataSplitting: React.FC = () => {
  const splitFramework = {
    title: "🎯 SPLIT Framework",
    mnemonic: "Smart People Learn Important Things",
    items: [
      { letter: "S", meaning: "Split the data", description: "train_test_split()" },
      { letter: "P", meaning: "Parameters matter", description: "test_size, random_state" },
      { letter: "L", meaning: "Labels and features", description: "X, y" },
      { letter: "I", meaning: "Important to stratify", description: "for balanced splits" },
      { letter: "T", meaning: "Train and test separately", description: "80/20 rule" }
    ]
  };

  const eightyTwentyRule = {
    title: "🔢 The 80/20 Rule: EIGHT-TWENTY",
    mnemonic: "Everyone In Great Health Takes Twenty Vitamins Every Night, Thank You!",
    items: [
      { letter: "E", meaning: "Eighty percent for training", description: "Larger portion for learning" },
      { letter: "I", meaning: "In the training set", description: "Model learns patterns" },
      { letter: "G", meaning: "Great for learning patterns", description: "Sufficient data for training" },
      { letter: "H", meaning: "Helps model understand data", description: "Comprehensive learning" },
      { letter: "T", meaning: "Twenty percent for testing", description: "Smaller portion for evaluation" },
      { letter: "T", meaning: "Tests the model's performance", description: "Unbiased evaluation" },
      { letter: "V", meaning: "Validates how well it learned", description: "Real-world assessment" },
      { letter: "E", meaning: "Evaluates real-world performance", description: "True measure of success" },
      { letter: "N", meaning: "Never seen by model during training", description: "Prevents overfitting" },
      { letter: "T", meaning: "True measure of success", description: "Honest evaluation" },
      { letter: "Y", meaning: "Yields unbiased results", description: "Reliable metrics" }
    ]
  };

  const variableNames = {
    title: "📊 Variable Names: X-Y TRAIN-TEST",
    mnemonic: "eXcellent Youngsters Take Rides And Investigate New Towns Every Single Time",
    items: [
      { letter: "X", meaning: "Features (input data)", description: "Independent variables" },
      { letter: "Y", meaning: "Labels (target values)", description: "Dependent variable" },
      { letter: "T", meaning: "Train = Training data", description: "80% of original data" },
      { letter: "R", meaning: "Random state for reproducibility", description: "Consistent results" },
      { letter: "A", meaning: "All features split consistently", description: "Paired correctly" },
      { letter: "I", meaning: "Input and output paired correctly", description: "Maintains relationships" },
      { letter: "N", meaning: "New unseen data for testing", description: "20% held out" },
      { letter: "T", meaning: "Testing validates performance", description: "Evaluation phase" },
      { letter: "E", meaning: "Evaluate without bias", description: "Honest assessment" },
      { letter: "S", meaning: "Separate train and test", description: "No data leakage" },
      { letter: "T", meaning: "True assessment of model", description: "Real performance" }
    ]
  };

  const balanceFramework = {
    title: "⚖️ Stratification: BALANCE",
    mnemonic: "Balanced Algorithms Love All Nice Class Examples",
    items: [
      { letter: "B", meaning: "Balanced class distribution", description: "Equal representation" },
      { letter: "A", meaning: "All classes represented proportionally", description: "Maintains ratios" },
      { letter: "L", meaning: "Less bias in splits", description: "Fairer evaluation" },
      { letter: "A", meaning: "Avoid skewed results", description: "Prevents bias" },
      { letter: "N", meaning: "Necessary for imbalanced data", description: "Critical for fairness" },
      { letter: "C", meaning: "Consistent across train/test", description: "Same distribution" },
      { letter: "E", meaning: "Equal representation maintained", description: "Proportional splits" }
    ]
  };

  const parameters = {
    title: "🔧 Parameters: 42-20",
    mnemonic: "Forty-Two Researchers Studied Twenty Outstanding Models",
    items: [
      { letter: "F", meaning: "Forty-two for random_state", description: "Reproducible results" },
      { letter: "T", meaning: "Twenty percent for test_size", description: "Standard split ratio" },
      { letter: "R", meaning: "Reproducible experiments", description: "Consistent outcomes" },
      { letter: "S", meaning: "Standard practice in ML", description: "Industry standard" },
      { letter: "T", meaning: "Tested and proven ratios", description: "Empirically validated" },
      { letter: "O", meaning: "Optimal for most datasets", description: "Generally effective" },
      { letter: "M", meaning: "Maintains consistency", description: "Reliable approach" }
    ]
  };

  const splitSteve = {
    name: "Split Steve",
    emoji: "🔄",
    specialty: "Data Splitting",
    catchphrase: "I divide data fairly and squarely!",
    personality: "Methodical and fair",
    tools: "train_test_split() function",
    motto: "Stratify when classes are imbalanced!",
    saying: "80 for training, 20 for testing - that's the way!"
  };

  const memoryPalace = {
    title: "🏠 The Data Splitting Laboratory",
    rooms: [
      { name: "Entrance (Original Data)", description: "One big dataset waiting to be split" },
      { name: "Splitting Machine", description: "train_test_split() function in the center" },
      { name: "Training Wing", description: "80% of data goes left (larger room)" },
      { name: "Testing Wing", description: "20% of data goes right (smaller room)" },
      { name: "Parameter Control Panel", description: "test_size=0.2, random_state=42" },
      { name: "Stratification Station", description: "Ensures balanced class distribution" }
    ]
  };

  const quickRecall = [
    "SPLIT: Smart People Learn Important Things",
    "80-20: Eight Tigers Take Twenty Treats",
    "X-Y-Train-Test: eXcellent Youngsters Take Tests",
    "Random 42: Forty-Two Researchers Repeat Results",
    "Stratify: Balance All Classes Equally"
  ];

  const rhyme = `Split Steve says with a grin so wide,
Eighty-twenty is the perfect divide!
X and Y must stay together,
Random forty-two makes results better!
Stratify when classes are few,
Balanced splits will see you through!`;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 px-6 py-3 rounded-full">
          <span className="text-2xl">📊</span>
          <span className="font-semibold text-green-700 dark:text-green-300">Data Splitting Mnemonics</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Master Train-Test Splitting
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Learn data splitting techniques through memorable frameworks and meet Split Steve, your guide to fair data division
        </p>
      </div>

      {/* Split Steve Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎭 Meet Split Steve</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your friendly guide to data splitting</p>
        </div>
        
        <div className="card p-8">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="text-8xl lg:text-9xl animate-bounce">
              {splitSteve.emoji}
            </div>
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {splitSteve.name}
                </h4>
                <div className="text-xl text-green-600 dark:text-green-400 font-semibold mb-3">
                  {splitSteve.specialty}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">
                  "{splitSteve.catchphrase}"
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-white">Personality:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{splitSteve.personality}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-white">Tools:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{splitSteve.tools}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-white">Motto:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{splitSteve.motto}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <strong className="text-gray-900 dark:text-white">Saying:</strong>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">"{splitSteve.saying}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📚 Data Splitting Frameworks</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Memorize splitting techniques with these powerful frameworks</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[splitFramework, balanceFramework, parameters].map((framework, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {framework.title}
                </h4>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                  <p className="text-green-700 dark:text-green-300 font-semibold italic text-lg">
                    "{framework.mnemonic}"
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {framework.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
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

      {/* Detailed Frameworks */}
      <div className="space-y-8">
        <div className="card p-8">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {eightyTwentyRule.title}
            </h4>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 p-4 rounded-lg mb-6">
              <p className="text-orange-700 dark:text-orange-300 font-semibold italic text-lg">
                "{eightyTwentyRule.mnemonic}"
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eightyTwentyRule.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                  {item.letter}
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white text-sm">
                    {item.meaning}
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-8">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {variableNames.title}
            </h4>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-4 rounded-lg mb-6">
              <p className="text-teal-700 dark:text-teal-300 font-semibold italic text-lg">
                "{variableNames.mnemonic}"
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {variableNames.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <span className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md">
                  {item.letter}
                </span>
                <div>
                  <strong className="text-gray-900 dark:text-white text-sm">
                    {item.meaning}
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Memory Palace Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🏠 {memoryPalace.title}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Visualize the data splitting process</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoryPalace.rooms.map((room, index) => (
            <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {room.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {room.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Recall Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📝 Quick Recall Phrases</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Memorize these key phrases for instant recall</p>
        </div>
        
        <div className="card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickRecall.map((phrase, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </span>
                <span className="text-gray-900 dark:text-white font-medium leading-relaxed">
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rhyme Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎵 Data Splitting Rhyme</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">A catchy rhyme to remember the basics</p>
        </div>
        
        <div className="card p-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg">
            <pre className="text-gray-900 dark:text-white font-mono text-lg leading-relaxed whitespace-pre-wrap">
              {rhyme}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSplitting; 