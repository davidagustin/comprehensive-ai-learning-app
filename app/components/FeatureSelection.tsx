'use client';

import React, { useState } from 'react';

const FeatureSelection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔍' },
    { id: 'techniques', label: 'Selection Techniques', icon: '🎯' },
    { id: 'engineering', label: 'Feature Engineering', icon: '🔧' },
    { id: 'evaluation', label: 'Feature Evaluation', icon: '📊' },
    { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          🔍 Feature Selection & Engineering
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the art of selecting and creating the most important features for your machine learning models.
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
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
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
              <h2 className="text-2xl font-bold mb-4">What is Feature Selection & Engineering?</h2>
              <p className="text-lg mb-6">
                Feature selection and engineering are crucial steps in machine learning that determine which variables to use and how to transform them for optimal model performance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎯 Feature Selection</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Purpose:</strong> Choose the most relevant features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Benefits:</strong> Reduce dimensionality and noise</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Methods:</strong> Statistical tests, model-based selection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Goal:</strong> Improve model performance and interpretability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🔧 Feature Engineering</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Purpose:</strong> Create new features from existing data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Benefits:</strong> Capture complex patterns and relationships</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Methods:</strong> Mathematical transformations, domain knowledge</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Goal:</strong> Enhance model's ability to learn patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 Feature Selection vs Engineering</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Feature Selection</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Choose from existing features</li>
                    <li>• Reduce feature count</li>
                    <li>• Remove irrelevant features</li>
                    <li>• Focus on subset selection</li>
                  </ul>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-600 mb-2">Feature Engineering</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Create new features</li>
                    <li>• Transform existing features</li>
                    <li>• Add domain knowledge</li>
                    <li>• Focus on feature creation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'techniques' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Feature Selection Techniques</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📊 Filter Methods</h3>
                  <p className="mb-2">Select features based on statistical measures and scores.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Correlation, Chi-square, ANOVA, Mutual Information</p>
                    <p className="text-sm"><strong>Advantages:</strong> Fast, model-independent, interpretable</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Ignores feature interactions</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🧠 Wrapper Methods</h3>
                  <p className="mb-2">Use a machine learning model to evaluate feature subsets.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Forward Selection, Backward Elimination, Recursive Feature Elimination</p>
                    <p className="text-sm"><strong>Advantages:</strong> Considers feature interactions, model-specific</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Computationally expensive, prone to overfitting</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚡ Embedded Methods</h3>
                  <p className="mb-2">Feature selection is built into the model training process.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Lasso, Ridge, Elastic Net, Random Forest importance</p>
                    <p className="text-sm"><strong>Advantages:</strong> Efficient, considers model performance</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Model-specific, may not generalize</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎯 Hybrid Methods</h3>
                  <p className="mb-2">Combine multiple selection approaches for better results.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Filter + Wrapper, Ensemble methods</p>
                    <p className="text-sm"><strong>Advantages:</strong> More robust, better performance</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Complex, computationally intensive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'engineering' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Feature Engineering Techniques</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔢 Numerical Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Scaling:</strong> Standardization, normalization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Binning:</strong> Convert to categorical</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Polynomial:</strong> Create interaction terms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span><strong>Log/Exp:</strong> Handle skewed distributions</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-600">📝 Categorical Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">→</span>
                        <span><strong>Encoding:</strong> One-hot, label, target encoding</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">→</span>
                        <span><strong>Aggregation:</strong> Group statistics</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">→</span>
                        <span><strong>Frequency:</strong> Count-based features</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-cyan-500 mt-1">→</span>
                        <span><strong>Embeddings:</strong> Learn dense representations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🕒 Time Series Features</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Temporal</h4>
                      <p className="text-sm">Day of week, month, season, holidays</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-600">Lag Features</h4>
                      <p className="text-sm">Previous values, rolling statistics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Trend Features</h4>
                      <p className="text-sm">Moving averages, growth rates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'evaluation' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Feature Evaluation</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">📊 Evaluation Metrics</h3>
                    <ul className="space-y-2">
                      <li><strong>Information Gain:</strong> Measures feature relevance</li>
                      <li><strong>Correlation:</strong> Linear relationship strength</li>
                      <li><strong>Chi-square:</strong> Independence test for categorical</li>
                      <li><strong>Mutual Information:</strong> Non-linear relationships</li>
                      <li><strong>Feature Importance:</strong> Model-based ranking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-600 mb-4">🎯 Selection Criteria</h3>
                    <ul className="space-y-2">
                      <li><strong>Relevance:</strong> Feature's predictive power</li>
                      <li><strong>Redundancy:</strong> Avoid duplicate information</li>
                      <li><strong>Stability:</strong> Consistent across datasets</li>
                      <li><strong>Interpretability:</strong> Understandable features</li>
                      <li><strong>Computational Cost:</strong> Feature generation time</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🔍 Evaluation Process</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">1. Analyze</h4>
                      <p className="text-sm">Understand data distribution and relationships</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-600">2. Select</h4>
                      <p className="text-sm">Choose relevant features using techniques</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">3. Engineer</h4>
                      <p className="text-sm">Create new features from existing ones</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600">4. Validate</h4>
                      <p className="text-sm">Test impact on model performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'best-practices' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
              <p className="text-lg mb-6">
                Follow these guidelines to create effective and robust feature selection and engineering pipelines.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">✅ Do's</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Start with domain knowledge and data understanding</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Use cross-validation for feature selection</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Consider feature interactions and combinations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Document feature engineering steps</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Monitor feature drift in production</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600">❌ Don'ts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't use target variable in feature engineering</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't ignore feature scaling for distance-based algorithms</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't create too many features (curse of dimensionality)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't forget to handle missing values properly</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't ignore feature interpretability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">⚡ Performance Tips</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Efficiency</h4>
                      <p className="text-sm">Use efficient algorithms and parallel processing</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-600">Memory</h4>
                      <p className="text-sm">Optimize memory usage for large datasets</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Caching</h4>
                      <p className="text-sm">Cache expensive feature computations</p>
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
                  <h3 className="text-xl font-semibold text-yellow-600">🔍 FEATURE Acronym</h3>
                  <p className="mb-4">Remember the key aspects of feature engineering:</p>
                  <ul className="space-y-2">
                    <li><strong>F</strong>ilter - Remove irrelevant features</li>
                    <li><strong>E</strong>ngineer - Create new features</li>
                    <li><strong>A</strong>nalyze - Understand data relationships</li>
                    <li><strong>T</strong>ransform - Scale and normalize</li>
                    <li><strong>U</strong>se - Apply domain knowledge</li>
                    <li><strong>R</strong>eview - Evaluate feature importance</li>
                    <li><strong>E</strong>valuate - Test model performance</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎯 Selection Methods Memory</h3>
                  <p className="mb-4">Remember selection methods with this story:</p>
                  <ul className="space-y-2">
                    <li><strong>Filter:</strong> "Quick screening" (fast, statistical tests)</li>
                    <li><strong>Wrapper:</strong> "Trial and error" (model-based evaluation)</li>
                    <li><strong>Embedded:</strong> "Built-in selection" (part of model training)</li>
                    <li><strong>Hybrid:</strong> "Best of both worlds" (combine methods)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🔧 Engineering Memory</h3>
                  <p className="mb-4">Remember feature engineering with "SCALE":</p>
                  <ul className="space-y-2">
                    <li><strong>S</strong>caling - Normalize numerical features</li>
                    <li><strong>C</strong>ategorical - Encode categorical variables</li>
                    <li><strong>A</strong>ggregation - Create summary statistics</li>
                    <li><strong>L</strong>ag - Time-based features</li>
                    <li><strong>E</strong>xtraction - Extract patterns and relationships</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">📊 Evaluation Rhyme</h3>
                  <p className="mb-4">"Analyze, select, engineer, validate"</p>
                  <ul className="space-y-2">
                    <li><strong>Analyze:</strong> Understand data and relationships</li>
                    <li><strong>Select:</strong> Choose relevant features</li>
                    <li><strong>Engineer:</strong> Create new features</li>
                    <li><strong>Validate:</strong> Test impact on performance</li>
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
            Take the quiz to reinforce what you've learned about feature selection and engineering!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200">
            🎯 Take Feature Selection Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSelection; 