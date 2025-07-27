'use client';

import React, { useState } from 'react';

const BiasFairness: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '⚖️' },
    { id: 'types', label: 'Types of Bias', icon: '🎯' },
    { id: 'detection', label: 'Detection', icon: '🔍' },
    { id: 'mitigation', label: 'Mitigation', icon: '🛠️' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
          ⚖️ Bias & Fairness
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the principles of identifying, detecting, and mitigating bias in machine learning systems to ensure fairness
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
                ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What is Bias & Fairness?</h2>
            <p className="text-lg mb-6">
              Bias and fairness in machine learning refer to ensuring that AI systems make fair and unbiased decisions 
              across different demographic groups, avoiding discrimination and promoting equitable outcomes.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Bias:</strong> Systematic prejudice in data or algorithms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Fairness:</strong> Equal treatment across groups</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Discrimination:</strong> Unfair treatment based on protected attributes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Equity:</strong> Fair distribution of outcomes</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600">🚀 Importance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Legal compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Social responsibility</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>User trust</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Business reputation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-red-600 mb-4">🎯 Fairness Metrics</h3>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Statistical Parity</h4>
                  <p className="text-sm">Equal prediction rates</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Equal Opportunity</h4>
                  <p className="text-sm">Equal true positive rates</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Equalized Odds</h4>
                  <p className="text-sm">Equal TPR and FPR</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">🔍 Detection Methods</h3>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Disparity Analysis</h4>
                  <p className="text-sm">Compare group outcomes</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Bias Audits</h4>
                    <p className="text-sm">Systematic evaluation</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Adversarial Testing</h4>
                  <p className="text-sm">Stress test models</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🛠️ Mitigation Strategies</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">📊</span>
                  <span>Data Preprocessing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">⚙️</span>
                  <span>Algorithmic Fairness</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔧</span>
                  <span>Post-processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">👥</span>
                  <span>Diverse Teams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'types' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Types of Bias</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">📊 Data Bias</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Selection Bias</h4>
                      <p className="text-sm">Non-representative sampling</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Measurement Bias</h4>
                      <p className="text-sm">Inconsistent data collection</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Historical Bias</h4>
                      <p className="text-sm">Past discrimination in data</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🧠 Algorithmic Bias</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Representation Bias</h4>
                      <p className="text-sm">Underrepresentation of groups</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Aggregation Bias</h4>
                      <p className="text-sm">One-size-fits-all approach</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Evaluation Bias</h4>
                      <p className="text-sm">Unfair performance metrics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Common Examples</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-600">Gender Bias</h4>
                    <p className="text-sm">Discrimination based on gender</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Racial Bias</h4>
                    <p className="text-sm">Discrimination based on race</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Age Bias</h4>
                    <p className="text-sm">Discrimination based on age</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'detection' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Bias Detection Methods</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">📊 Statistical Analysis</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Disparity Metrics</h4>
                      <p className="text-sm">Compare outcomes across groups</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Confusion Matrix Analysis</h4>
                      <p className="text-sm">Examine prediction patterns</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Statistical Tests</h4>
                      <p className="text-sm">Chi-square, t-tests</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔍 Bias Audits</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Aequitas</h4>
                      <p className="text-sm">Bias and fairness audit toolkit</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">IBM Fairness 360</h4>
                      <p className="text-sm">Comprehensive fairness toolkit</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Google What-If Tool</h4>
                      <p className="text-sm">Interactive bias analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Detection Workflow</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-600">1. Identify</h4>
                    <p className="text-sm">Protected attributes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">2. Measure</h4>
                    <p className="text-sm">Bias metrics</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">3. Analyze</h4>
                    <p className="text-sm">Root causes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">4. Report</h4>
                    <p className="text-sm">Findings and recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mitigation' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Bias Mitigation Strategies</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">📊 Pre-processing</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Data Augmentation</h4>
                      <p className="text-sm">Balance underrepresented groups</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Reweighting</h4>
                      <p className="text-sm">Adjust sample weights</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Feature Engineering</h4>
                      <p className="text-sm">Create fair features</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">⚙️ In-processing</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Adversarial Debiasing</h4>
                      <p className="text-sm">Remove bias during training</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fairness Constraints</h4>
                      <p className="text-sm">Optimize with fairness goals</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Regularization</h4>
                      <p className="text-sm">Penalize unfair predictions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔧 Post-processing</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-600">Reject Option Classification</h4>
                    <p className="text-sm">Reject uncertain predictions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Calibration</h4>
                    <p className="text-sm">Adjust prediction thresholds</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Ensemble Methods</h4>
                    <p className="text-sm">Combine multiple models</p>
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
                  <h3 className="text-xl font-semibold text-red-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">FAIR = Fairness, Accountability, Interpretability, Responsibility</h4>
                      <p className="text-sm">The four pillars of ethical AI</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">BIAS = Bad Input Affects System</h4>
                      <p className="text-sm">How bias enters the system</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">DEBIAS = Detect, Evaluate, Balance, Improve, Audit, Solve</h4>
                      <p className="text-sm">The bias mitigation process</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Scales of Justice</h4>
                      <p className="text-sm">Like balancing the scales of justice</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Level Playing Field</h4>
                      <p className="text-sm">Like ensuring a fair game for everyone</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Mirror Reflection</h4>
                      <p className="text-sm">Like a mirror that reflects reality fairly</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-600">Detect</h4>
                    <p className="text-sm">Find bias</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600">Measure</h4>
                    <p className="text-sm">Quantify bias</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Mitigate</h4>
                    <p className="text-sm">Reduce bias</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Monitor</h4>
                    <p className="text-sm">Track fairness</p>
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

export default BiasFairness; 