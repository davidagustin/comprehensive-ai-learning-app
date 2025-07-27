'use client';

import React, { useState } from 'react';

const HyperparameterTuning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '⚙️' },
    { id: 'methods', label: 'Tuning Methods', icon: '🎯' },
    { id: 'algorithms', label: 'Common Algorithms', icon: '🧠' },
    { id: 'strategies', label: 'Tuning Strategies', icon: '📈' },
    { id: 'tools', label: 'Tools & Libraries', icon: '🛠️' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          ⚙️ Hyperparameter Tuning
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master systematic approaches to optimize your model's hyperparameters and achieve peak performance.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">What is Hyperparameter Tuning?</h2>
              <p className="text-lg mb-6">
                Hyperparameter tuning is the process of finding the optimal configuration of model parameters that are set before training begins, to maximize model performance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎯 Key Concepts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Hyperparameters:</strong> Parameters set before training</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Search Space:</strong> Range of possible values</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Optimization:</strong> Finding best combination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Validation:</strong> Using cross-validation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">🔍 Why Tune Hyperparameters?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Performance:</strong> Improve model accuracy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Generalization:</strong> Better on unseen data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Efficiency:</strong> Optimize training time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Robustness:</strong> More stable performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">⚙️ Tuning Process</h3>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="font-semibold">Define Space</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔄</div>
                    <p className="font-semibold">Search</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Evaluate</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="font-semibold">Select Best</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Hyperparameter Tuning Methods</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔍 Grid Search</h3>
                  <p className="mb-2">Exhaustively search through all combinations of hyperparameters.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Guaranteed to find global optimum</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Computationally expensive, curse of dimensionality</p>
                    <p className="text-sm"><strong>Use Case:</strong> Small search spaces, few hyperparameters</p>
                    <p className="text-sm"><strong>Best For:</strong> 2-3 hyperparameters with small ranges</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎲 Random Search</h3>
                  <p className="mb-2">Randomly sample hyperparameter combinations from the search space.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Faster than grid search, good for high dimensions</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> No guarantee of finding optimum</p>
                    <p className="text-sm"><strong>Use Case:</strong> Large search spaces, many hyperparameters</p>
                    <p className="text-sm"><strong>Best For:</strong> Quick exploration, initial tuning</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🧠 Bayesian Optimization</h3>
                  <p className="mb-2">Use probabilistic models to guide the search for optimal hyperparameters.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Efficient, learns from previous evaluations</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Complex, requires more setup</p>
                    <p className="text-sm"><strong>Use Case:</strong> Expensive evaluations, limited budget</p>
                    <p className="text-sm"><strong>Best For:</strong> Deep learning, expensive models</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔄 Population-Based</h3>
                  <p className="mb-2">Use evolutionary algorithms to evolve hyperparameter populations.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Can escape local optima, parallelizable</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Complex, many parameters to tune</p>
                    <p className="text-sm"><strong>Use Case:</strong> Complex search spaces, multiple objectives</p>
                    <p className="text-sm"><strong>Best For:</strong> Multi-objective optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'algorithms' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Common Algorithm Hyperparameters</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-600">🌳 Random Forest</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>n_estimators:</strong> Number of trees</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>max_depth:</strong> Maximum tree depth</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>min_samples_split:</strong> Minimum samples to split</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>max_features:</strong> Features to consider for splits</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🧠 Neural Networks</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>learning_rate:</strong> Step size for optimization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>batch_size:</strong> Samples per training batch</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>layers:</strong> Number and size of layers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>dropout:</strong> Regularization rate</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 SVM & Linear Models</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">SVM</h4>
                      <p className="text-sm">C (regularization), gamma (kernel coefficient), kernel type</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Logistic Regression</h4>
                      <p className="text-sm">C (regularization), penalty type, solver</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Ridge/Lasso</h4>
                      <p className="text-sm">Alpha (regularization strength), solver</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'strategies' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Tuning Strategies</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-4">📊 Search Strategies</h3>
                    <ul className="space-y-2">
                      <li><strong>Coarse-to-Fine:</strong> Start broad, then narrow down</li>
                      <li><strong>Random Initialization:</strong> Multiple random starts</li>
                      <li><strong>Adaptive Sampling:</strong> Focus on promising regions</li>
                      <li><strong>Multi-Objective:</strong> Balance accuracy vs. speed</li>
                      <li><strong>Early Stopping:</strong> Stop unpromising trials</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">⚡ Optimization Tips</h3>
                    <ul className="space-y-2">
                      <li><strong>Parallelization:</strong> Run multiple trials simultaneously</li>
                      <li><strong>Resource Management:</strong> Monitor computational costs</li>
                      <li><strong>Validation Strategy:</strong> Use cross-validation consistently</li>
                      <li><strong>Metric Selection:</strong> Choose appropriate evaluation metric</li>
                      <li><strong>Budget Planning:</strong> Set time/compute constraints</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Strategy Selection</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Quick Exploration</h4>
                      <p className="text-sm">Use random search for initial exploration</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Thorough Optimization</h4>
                      <p className="text-sm">Use Bayesian optimization for best results</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Budget Constrained</h4>
                      <p className="text-sm">Use grid search for small spaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Tools & Libraries</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🐍 Python Libraries</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Scikit-learn</h4>
                      <p className="text-sm">GridSearchCV, RandomizedSearchCV for traditional ML</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Optuna</h4>
                      <p className="text-sm">Advanced hyperparameter optimization with pruning</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Hyperopt</h4>
                      <p className="text-sm">Bayesian optimization with various algorithms</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🧠 Deep Learning</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Keras Tuner</h4>
                      <p className="text-sm">Built-in hyperparameter tuning for Keras models</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Ray Tune</h4>
                      <p className="text-sm">Distributed hyperparameter tuning framework</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Weights & Biases</h4>
                      <p className="text-sm">Experiment tracking with hyperparameter optimization</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">☁️ Cloud Platforms</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-green-600">Google Cloud AI Platform</h4>
                      <p className="text-sm">Hyperparameter tuning as a service</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">AWS SageMaker</h4>
                      <p className="text-sm">Automated hyperparameter optimization</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Azure ML</h4>
                      <p className="text-sm">Hyperparameter tuning with AutoML</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mnemonics' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Memory Techniques & Mnemonics</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-600">⚙️ TUNE Acronym</h3>
                  <p className="mb-4">Remember the key aspects of hyperparameter tuning:</p>
                  <ul className="space-y-2">
                    <li><strong>T</strong>arget - Define optimization objective</li>
                    <li><strong>U</strong>nderstand - Understand hyperparameter effects</li>
                    <li><strong>N</strong>avigate - Choose appropriate search method</li>
                    <li><strong>E</strong>valuate - Use cross-validation consistently</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎯 Method Memory</h3>
                  <p className="mb-4">Remember tuning methods with this progression:</p>
                  <ul className="space-y-2">
                    <li><strong>Grid Search:</strong> "Systematic approach" (exhaustive but slow)</li>
                    <li><strong>Random Search:</strong> "Quick exploration" (fast but random)</li>
                    <li><strong>Bayesian:</strong> "Smart search" (efficient and intelligent)</li>
                    <li><strong>Population-based:</strong> "Evolutionary approach" (complex but powerful)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📊 Strategy Memory</h3>
                  <p className="mb-4">Remember tuning strategies with "SEARCH":</p>
                  <ul className="space-y-2">
                    <li><strong>S</strong>pace - Define hyperparameter search space</li>
                    <li><strong>E</strong>valuate - Choose evaluation metric</li>
                    <li><strong>A</strong>lgorithm - Select optimization algorithm</li>
                    <li><strong>R</strong>esources - Plan computational budget</li>
                    <li><strong>C</strong>onstraints - Set time and resource limits</li>
                    <li><strong>H</strong>istory - Track and analyze results</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🛠️ Tools Rhyme</h3>
                  <p className="mb-4">"Scikit for simple, Optuna for optimal, Ray for scale"</p>
                  <ul className="space-y-2">
                    <li><strong>Scikit:</strong> Traditional ML hyperparameter tuning</li>
                    <li><strong>Optuna:</strong> Advanced optimization with pruning</li>
                    <li><strong>Ray:</strong> Distributed and scalable tuning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Ready to Test Your Knowledge?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Take the quiz to reinforce what you've learned about hyperparameter tuning!
          </p>
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200">
            🎯 Take Hyperparameter Tuning Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default HyperparameterTuning; 