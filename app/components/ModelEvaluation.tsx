'use client';

import React, { useState } from 'react';

const ModelEvaluation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'metrics', label: 'Evaluation Metrics', icon: '🎯' },
    { id: 'methods', label: 'Evaluation Methods', icon: '🔬' },
    { id: 'validation', label: 'Validation Strategies', icon: '✅' },
    { id: 'interpretation', label: 'Results Interpretation', icon: '🔍' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          📊 Model Evaluation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the art of assessing model performance and understanding how well your machine learning models generalize to new data.
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
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
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
              <h2 className="text-2xl font-bold mb-4">What is Model Evaluation?</h2>
              <p className="text-lg mb-6">
                Model evaluation is the process of assessing how well a machine learning model performs on unseen data and understanding its strengths and limitations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎯 Key Objectives</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Performance Assessment:</strong> Measure model accuracy</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Generalization:</strong> Test on unseen data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Bias Detection:</strong> Identify model limitations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Model Selection:</strong> Compare different models</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔍 Evaluation Types</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">→</span>
                      <span><strong>Holdout:</strong> Simple train/test split</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">→</span>
                      <span><strong>Cross-Validation:</strong> Multiple train/test splits</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">→</span>
                      <span><strong>Bootstrap:</strong> Resampling with replacement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">→</span>
                      <span><strong>Time Series:</strong> Temporal validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 Evaluation Pipeline</h3>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Data Split</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="font-semibold">Train Model</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="font-semibold">Make Predictions</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="font-semibold">Evaluate Performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Evaluation Metrics</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎯 Classification Metrics</h3>
                  <p className="mb-2">Metrics for classification problems.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Accuracy:</strong> Overall correct predictions / total predictions</p>
                    <p className="text-sm"><strong>Precision:</strong> True positives / (true positives + false positives)</p>
                    <p className="text-sm"><strong>Recall:</strong> True positives / (true positives + false negatives)</p>
                    <p className="text-sm"><strong>F1-Score:</strong> Harmonic mean of precision and recall</p>
                    <p className="text-sm"><strong>AUC-ROC:</strong> Area under the ROC curve</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📈 Regression Metrics</h3>
                  <p className="mb-2">Metrics for regression problems.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>MSE:</strong> Mean Squared Error</p>
                    <p className="text-sm"><strong>RMSE:</strong> Root Mean Squared Error</p>
                    <p className="text-sm"><strong>MAE:</strong> Mean Absolute Error</p>
                    <p className="text-sm"><strong>R²:</strong> Coefficient of determination</p>
                    <p className="text-sm"><strong>MAPE:</strong> Mean Absolute Percentage Error</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Multi-Class Metrics</h3>
                  <p className="mb-2">Metrics for multi-class classification.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Macro Average:</strong> Average across all classes</p>
                    <p className="text-sm"><strong>Micro Average:</strong> Aggregate all classes</p>
                    <p className="text-sm"><strong>Weighted Average:</strong> Weight by class frequency</p>
                    <p className="text-sm"><strong>Cohen's Kappa:</strong> Agreement accounting for chance</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎵 Ranking Metrics</h3>
                  <p className="mb-2">Metrics for ranking and recommendation systems.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>NDCG:</strong> Normalized Discounted Cumulative Gain</p>
                    <p className="text-sm"><strong>MAP:</strong> Mean Average Precision</p>
                    <p className="text-sm"><strong>MRR:</strong> Mean Reciprocal Rank</p>
                    <p className="text-sm"><strong>Precision@k:</strong> Precision at top k results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'methods' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Evaluation Methods</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">📊 Holdout Method</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Simple:</strong> Single train/test split</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Fast:</strong> Quick evaluation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Unstable:</strong> High variance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Use Case:</strong> Large datasets</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔄 Cross-Validation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>K-Fold:</strong> K equal splits</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Stratified:</strong> Preserve class distribution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Leave-One-Out:</strong> N-1 training, 1 test</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Use Case:</strong> Small datasets</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Advanced Methods</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Bootstrap</h4>
                      <p className="text-sm">Resample with replacement for confidence intervals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Time Series</h4>
                      <p className="text-sm">Forward chaining validation for temporal data</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Nested CV</h4>
                      <p className="text-sm">Outer loop for evaluation, inner for tuning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'validation' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Validation Strategies</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">📊 Data Splitting</h3>
                    <ul className="space-y-2">
                      <li><strong>Train/Test:</strong> 70-80% train, 20-30% test</li>
                      <li><strong>Train/Validation/Test:</strong> 60% train, 20% validation, 20% test</li>
                      <li><strong>Stratified Split:</strong> Maintain class proportions</li>
                      <li><strong>Time-Based Split:</strong> Respect temporal order</li>
                      <li><strong>Group Split:</strong> Keep related samples together</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">✅ Validation Best Practices</h3>
                    <ul className="space-y-2">
                      <li><strong>No Data Leakage:</strong> Keep test set completely separate</li>
                      <li><strong>Representative Split:</strong> Maintain data distribution</li>
                      <li><strong>Multiple Runs:</strong> Account for randomness</li>
                      <li><strong>Domain Considerations:</strong> Respect data characteristics</li>
                      <li><strong>Statistical Significance:</strong> Use proper tests</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Validation Checklist</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Data Quality</h4>
                      <p className="text-sm">Check for missing values, outliers, consistency</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Split Strategy</h4>
                      <p className="text-sm">Choose appropriate validation method</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Metrics Selection</h4>
                      <p className="text-sm">Use relevant evaluation metrics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600">Interpretation</h4>
                      <p className="text-sm">Understand what results mean</p>
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
                    <h3 className="text-xl font-semibold text-purple-600">📊 Performance Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Baseline Comparison:</strong> Compare to simple models</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Error Analysis:</strong> Understand failure cases</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Confidence Intervals:</strong> Uncertainty quantification</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Statistical Tests:</strong> Significance testing</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔍 Model Insights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Feature Importance:</strong> Which features matter most</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Bias Detection:</strong> Identify unfair predictions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Overfitting Signs:</strong> High variance, poor generalization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Underfitting Signs:</strong> High bias, poor training performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">📈 Decision Making</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Model Selection</h4>
                      <p className="text-sm">Choose best performing model based on metrics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Deployment Readiness</h4>
                      <p className="text-sm">Assess if model is ready for production</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Improvement Areas</h4>
                      <p className="text-sm">Identify where model can be enhanced</p>
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
                  <h3 className="text-xl font-semibold text-yellow-600">📊 EVALUATE Acronym</h3>
                  <p className="mb-4">Remember the key aspects of model evaluation:</p>
                  <ul className="space-y-2">
                    <li><strong>E</strong>xamine - Examine model performance</li>
                    <li><strong>V</strong>alidate - Validate on unseen data</li>
                    <li><strong>A</strong>nalyze - Analyze errors and patterns</li>
                    <li><strong>L</strong>earn - Learn from results</li>
                    <li><strong>U</strong>nderstand - Understand model behavior</li>
                    <li><strong>A</strong>ssess - Assess generalization ability</li>
                    <li><strong>T</strong>est - Test multiple scenarios</li>
                    <li><strong>E</strong>xplain - Explain results to stakeholders</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎯 Metrics Memory</h3>
                  <p className="mb-4">Remember evaluation metrics with this story:</p>
                  <ul className="space-y-2">
                    <li><strong>Accuracy:</strong> "Overall correctness" (simple but can be misleading)</li>
                    <li><strong>Precision:</strong> "Quality over quantity" (how many predictions were correct)</li>
                    <li><strong>Recall:</strong> "Quantity over quality" (how many actual positives were found)</li>
                    <li><strong>F1-Score:</strong> "Best of both worlds" (harmonic mean of precision and recall)</li>
                    <li><strong>AUC-ROC:</strong> "Area under curve" (overall model performance)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔄 Validation Memory</h3>
                  <p className="mb-4">Remember validation methods with "SPLIT":</p>
                  <ul className="space-y-2">
                    <li><strong>S</strong>imple - Holdout method (train/test split)</li>
                    <li><strong>P</strong>rogressive - Time series validation</li>
                    <li><strong>L</strong>ayered - Nested cross-validation</li>
                    <li><strong>I</strong>terative - K-fold cross-validation</li>
                    <li><strong>T</strong>horough - Leave-one-out validation</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">📈 Interpretation Rhyme</h3>
                  <p className="mb-4">"Analyze, compare, decide, improve"</p>
                  <ul className="space-y-2">
                    <li><strong>Analyze:</strong> Understand model performance</li>
                    <li><strong>Compare:</strong> Compare with baselines and other models</li>
                    <li><strong>Decide:</strong> Make decisions about model selection</li>
                    <li><strong>Improve:</strong> Identify areas for improvement</li>
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
            Take the quiz to reinforce what you've learned about model evaluation!
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
            🎯 Take Model Evaluation Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelEvaluation; 