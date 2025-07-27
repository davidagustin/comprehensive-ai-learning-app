'use client';

import React, { useState } from 'react';

const CrossFoldValidation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔄' },
    { id: 'methods', label: 'Validation Methods', icon: '🎯' },
    { id: 'implementation', label: 'Implementation', icon: '⚙️' },
    { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
    { id: 'interpretation', label: 'Results Interpretation', icon: '📊' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          🔄 Cross-Fold Validation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master robust validation techniques to ensure your model evaluations are reliable and generalizable.
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
                ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
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
              <h2 className="text-2xl font-bold mb-4">What is Cross-Fold Validation?</h2>
              <p className="text-lg mb-6">
                Cross-fold validation is a resampling technique that provides a more robust estimate of model performance by testing the model on multiple train-test splits of the data.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🎯 Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">✓</span>
                      <span><strong>Robust Estimation:</strong> More reliable performance metrics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">✓</span>
                      <span><strong>Reduced Variance:</strong> Less dependent on single split</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">✓</span>
                      <span><strong>Better Generalization:</strong> More realistic performance estimate</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">✓</span>
                      <span><strong>Statistical Significance:</strong> Confidence intervals for performance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔍 When to Use</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Small Datasets:</strong> Limited data available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Unstable Models:</strong> High variance in performance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Model Comparison:</strong> Fair comparison between models</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Hyperparameter Tuning:</strong> Optimize model parameters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 Cross-Validation Process</h3>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Split Data</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="font-semibold">Train Model</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="font-semibold">Evaluate</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔄</div>
                    <p className="font-semibold">Repeat</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Aggregate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Cross-Validation Methods</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🎯 K-Fold Cross-Validation</h3>
                  <p className="mb-2">Divide data into K equal parts, use K-1 for training and 1 for testing, repeat K times.</p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Balanced, efficient, widely used</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> May not preserve data distribution</p>
                    <p className="text-sm"><strong>Use Case:</strong> General purpose, most common choice</p>
                    <p className="text-sm"><strong>Typical K:</strong> 5 or 10 folds</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📊 Stratified K-Fold</h3>
                  <p className="mb-2">K-fold with preserved class distribution in each fold.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Maintains class balance, better for imbalanced data</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Requires categorical target</p>
                    <p className="text-sm"><strong>Use Case:</strong> Classification with imbalanced classes</p>
                    <p className="text-sm"><strong>Best For:</strong> Binary and multi-class classification</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🔄 Leave-One-Out (LOO)</h3>
                  <p className="mb-2">Use N-1 samples for training, 1 sample for testing, repeat N times.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Maximum data usage, low bias</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> High variance, computationally expensive</p>
                    <p className="text-sm"><strong>Use Case:</strong> Very small datasets</p>
                    <p className="text-sm"><strong>When:</strong> Dataset size &lt; 50 samples</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⏰ Time Series CV</h3>
                  <p className="mb-2">Forward chaining validation respecting temporal order.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Respects temporal dependencies</p>
                    <p className="text-sm"><strong>Disadvantages:</strong> Less data for training in early folds</p>
                    <p className="text-sm"><strong>Use Case:</strong> Time series forecasting</p>
                    <p className="text-sm"><strong>Method:</strong> Expanding window or rolling window</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'implementation' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Implementation Guide</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-indigo-600">🐍 Python Implementation</h3>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <pre className="text-sm overflow-x-auto">
{`from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier

# Basic K-fold CV
scores = cross_val_score(
    RandomForestClassifier(),
    X, y,
    cv=5,
    scoring='accuracy'
)

# Stratified K-fold
from sklearn.model_selection import StratifiedKFold
skf = StratifiedKFold(n_splits=5)
scores = cross_val_score(
    model, X, y,
    cv=skf,
    scoring='accuracy'
)`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">📊 Results Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Mean Score:</strong> Average performance across folds</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Standard Deviation:</strong> Measure of variance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Confidence Intervals:</strong> Statistical significance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Fold Analysis:</strong> Identify problematic folds</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">⚙️ Implementation Steps</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-indigo-600">1. Choose Method</h4>
                      <p className="text-sm">Select appropriate CV method based on data characteristics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">2. Set Parameters</h4>
                      <p className="text-sm">Define number of folds, random state, stratification</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">3. Run Validation</h4>
                      <p className="text-sm">Execute cross-validation and collect scores</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">4. Analyze Results</h4>
                      <p className="text-sm">Calculate statistics and interpret performance</p>
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
                Follow these guidelines to ensure your cross-validation is robust and reliable.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-indigo-600">✅ Do's</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Use stratified CV for classification problems</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Set random state for reproducibility</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Report mean and standard deviation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Use appropriate number of folds (5-10)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Consider data leakage carefully</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600">❌ Don'ts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't use CV for time series without temporal consideration</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't ignore fold variance in results</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't use too many folds for small datasets</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't forget to handle missing values before CV</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't use CV scores as final performance estimate</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Method Selection Guide</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-indigo-600">Small Dataset</h4>
                      <p className="text-sm">Use Leave-One-Out or high K-fold</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Imbalanced Classes</h4>
                      <p className="text-sm">Use Stratified K-fold</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Time Series</h4>
                      <p className="text-sm">Use Time Series CV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'interpretation' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Results Interpretation</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-indigo-600">📊 Performance Metrics</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Mean Score:</strong> Expected performance on new data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Standard Deviation:</strong> Stability of performance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Confidence Interval:</strong> Range of likely performance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">•</span>
                        <span><strong>Fold Variance:</strong> Consistency across splits</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">🔍 Analysis Insights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span><strong>High Variance:</strong> Model is unstable</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span><strong>Low Variance:</strong> Model is stable</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span><strong>Outlier Folds:</strong> Investigate data issues</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">→</span>
                        <span><strong>Consistent Performance:</strong> Good generalization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">📈 Decision Making</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-indigo-600">Model Selection</h4>
                      <p className="text-sm">Compare CV scores between models</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Hyperparameter Tuning</h4>
                      <p className="text-sm">Use CV to find optimal parameters</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Deployment Readiness</h4>
                      <p className="text-sm">Assess if model is ready for production</p>
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
                  <h3 className="text-xl font-semibold text-yellow-600">🔄 CROSS Acronym</h3>
                  <p className="mb-4">Remember the key aspects of cross-validation:</p>
                  <ul className="space-y-2">
                    <li><strong>C</strong>omprehensive - Test on multiple data splits</li>
                    <li><strong>R</strong>obust - More reliable performance estimate</li>
                    <li><strong>O</strong>verfitting - Detect and prevent overfitting</li>
                    <li><strong>S</strong>tatistical - Provide confidence intervals</li>
                    <li><strong>S</strong>table - Reduce variance in estimates</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🎯 Method Memory</h3>
                  <p className="mb-4">Remember CV methods with this hierarchy:</p>
                  <ul className="space-y-2">
                    <li><strong>K-Fold:</strong> "Standard approach" (most common, balanced)</li>
                    <li><strong>Stratified:</strong> "Keep it balanced" (preserve class distribution)</li>
                    <li><strong>Leave-One-Out:</strong> "Maximum usage" (use all data possible)</li>
                    <li><strong>Time Series:</strong> "Respect time" (maintain temporal order)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📊 Results Memory</h3>
                  <p className="mb-4">Remember how to interpret results with "SCORE":</p>
                  <ul className="space-y-2">
                    <li><strong>S</strong>tandard Deviation - Measure of variance</li>
                    <li><strong>C</strong>onfidence Interval - Statistical significance</li>
                    <li><strong>O</strong>utliers - Identify problematic folds</li>
                    <li><strong>R</strong>eliability - How trustworthy is the estimate</li>
                    <li><strong>E</strong>xpectation - Expected performance on new data</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚙️ Implementation Rhyme</h3>
                  <p className="mb-4">"Split, train, test, repeat, aggregate"</p>
                  <ul className="space-y-2">
                    <li><strong>Split:</strong> Divide data into folds</li>
                    <li><strong>Train:</strong> Train model on training folds</li>
                    <li><strong>Test:</strong> Evaluate on test fold</li>
                    <li><strong>Repeat:</strong> Do this for all folds</li>
                    <li><strong>Aggregate:</strong> Combine results for final estimate</li>
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
            Take the quiz to reinforce what you've learned about cross-fold validation!
          </p>
          <button 
            onClick={() => {
              window.location.hash = 'quiz';
              window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                detail: { section: 'cross-fold-validation' } 
              }));
            }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
          >
            🎯 Take Cross-Fold Validation Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrossFoldValidation; 