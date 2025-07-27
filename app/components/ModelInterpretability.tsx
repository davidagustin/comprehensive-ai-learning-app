'use client';

import React, { useState } from 'react';

const ModelInterpretability: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔍' },
    { id: 'techniques', label: 'Techniques', icon: '⚙️' },
    { id: 'methods', label: 'Methods', icon: '📊' },
    { id: 'applications', label: 'Applications', icon: '🎯' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          🔍 Model Interpretability
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master techniques to understand and explain how machine learning models make decisions
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">What is Model Interpretability?</h2>
            <p className="text-lg mb-6">
              Model interpretability is the ability to understand and explain how machine learning models 
              arrive at their predictions, making AI systems transparent and trustworthy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Transparency:</strong> Understanding model decisions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Explainability:</strong> Communicating decisions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Trust:</strong> Building confidence in AI</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Accountability:</strong> Responsibility for outcomes</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600">🚀 Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Regulatory compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Debugging and improvement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>User trust and adoption</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Bias detection and mitigation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🔍 Interpretability Types</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Intrinsic</h4>
                  <p className="text-sm">Naturally interpretable models</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Post-hoc</h4>
                  <p className="text-sm">Explain after training</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Model-agnostic</h4>
                  <p className="text-sm">Works with any model</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">📊 Explanation Levels</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Global</h4>
                  <p className="text-sm">Overall model behavior</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Local</h4>
                  <p className="text-sm">Individual predictions</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Feature</h4>
                    <p className="text-sm">Feature importance</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🎯 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">🏥</span>
                  <span>Healthcare</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">💰</span>
                  <span>Finance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">⚖️</span>
                  <span>Legal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">🚗</span>
                  <span>Autonomous Vehicles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'techniques' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Interpretability Techniques</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔍 Feature Importance</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Permutation Importance</h4>
                      <p className="text-sm">Shuffle features to measure impact</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">SHAP Values</h4>
                      <p className="text-sm">Shapley Additive Explanations</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">LIME</h4>
                      <p className="text-sm">Local Interpretable Model-agnostic Explanations</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">📊 Visualization</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Partial Dependence Plots</h4>
                      <p className="text-sm">Show feature-prediction relationships</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">ICE Plots</h4>
                      <p className="text-sm">Individual Conditional Expectation</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Saliency Maps</h4>
                      <p className="text-sm">Highlight important input regions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Model-Specific Methods</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Decision Trees</h4>
                    <p className="text-sm">Naturally interpretable</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Neural Networks</h4>
                    <p className="text-sm">Gradients and activations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Linear Models</h4>
                    <p className="text-sm">Coefficient interpretation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'methods' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Interpretability Methods</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔍 SHAP (SHapley Additive exPlanations)</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Explain individual predictions</p>
                    <ul className="text-sm space-y-1">
                      <li>• Based on game theory</li>
                      <li>• Fair feature attribution</li>
                      <li>• Works with any model</li>
                      <li>• Provides both local and global explanations</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Credit scoring, medical diagnosis</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🍋 LIME (Local Interpretable Model-agnostic Explanations)</h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Explain individual predictions locally</p>
                    <ul className="text-sm space-y-1">
                      <li>• Creates local linear approximations</li>
                      <li>• Model-agnostic approach</li>
                      <li>• Easy to understand explanations</li>
                      <li>• Works with text, images, tabular data</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Text classification, image recognition</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">📊 Partial Dependence Plots</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Show feature-prediction relationships</p>
                    <ul className="text-sm space-y-1">
                      <li>• Marginal effect of features</li>
                      <li>• Global model behavior</li>
                      <li>• Easy to interpret</li>
                      <li>• Works with any model</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Understanding feature effects</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎯 Permutation Importance</h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Measure feature importance</p>
                    <ul className="text-sm space-y-1">
                      <li>• Shuffle feature values</li>
                      <li>• Measure performance drop</li>
                      <li>• Model-agnostic</li>
                      <li>• Intuitive interpretation</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Feature selection, model debugging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'applications' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Real-World Applications</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🏥 Healthcare</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Medical Diagnosis</h4>
                      <p className="text-sm">Explain disease predictions</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Treatment Recommendations</h4>
                      <p className="text-sm">Justify treatment decisions</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Drug Discovery</h4>
                      <p className="text-sm">Understand molecular predictions</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">💰 Finance</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Credit Scoring</h4>
                      <p className="text-sm">Explain loan decisions</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fraud Detection</h4>
                      <p className="text-sm">Justify fraud alerts</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Risk Assessment</h4>
                      <p className="text-sm">Explain risk predictions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🚗 Autonomous Systems</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Self-Driving Cars</h4>
                    <p className="text-sm">Explain driving decisions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Robotics</h4>
                    <p className="text-sm">Understand robot actions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Drones</h4>
                    <p className="text-sm">Explain flight decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'memory' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Memory Techniques</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">SHAP = SHapley Additive exPlanations</h4>
                      <p className="text-sm">Shapley values for additive explanations</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">LIME = Local Interpretable Model-agnostic Explanations</h4>
                      <p className="text-sm">Local explanations that are interpretable</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">PDP = Partial Dependence Plots</h4>
                      <p className="text-sm">Plots showing partial dependence</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Black Box to Glass Box</h4>
                      <p className="text-sm">Making opaque models transparent</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Recipe Explanation</h4>
                      <p className="text-sm">Like explaining why each ingredient matters</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Doctor's Diagnosis</h4>
                      <p className="text-sm">Like a doctor explaining their reasoning</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Transparency</h4>
                    <p className="text-sm">Understanding decisions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Explainability</h4>
                    <p className="text-sm">Communicating decisions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Trust</h4>
                    <p className="text-sm">Building confidence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Accountability</h4>
                    <p className="text-sm">Taking responsibility</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelInterpretability; 