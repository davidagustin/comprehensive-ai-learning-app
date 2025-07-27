'use client';

import React, { useState } from 'react';

const ModelDeployment: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🚀' },
    { id: 'strategies', label: 'Strategies', icon: '📋' },
    { id: 'platforms', label: 'Platforms', icon: '☁️' },
    { id: 'monitoring', label: 'Monitoring', icon: '📊' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          🚀 Model Deployment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the art of deploying machine learning models to production environments efficiently and reliably
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
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What is Model Deployment?</h2>
            <p className="text-lg mb-6">
              Model deployment is the process of making trained machine learning models available for use in production 
              environments, enabling real-world applications to leverage AI capabilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Production Environment:</strong> Live system serving real users</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>API Endpoints:</strong> Interfaces for model access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Scalability:</strong> Handle varying load demands</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Reliability:</strong> Consistent performance and uptime</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">🚀 Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Real-world impact</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Automated decision making</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Scalable AI solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Business value creation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">📋 Deployment Types</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Batch Processing</h4>
                  <p className="text-sm">Process data in batches</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Real-time Inference</h4>
                  <p className="text-sm">Instant predictions</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Streaming</h4>
                  <p className="text-sm">Continuous data processing</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-red-600 mb-4">🔧 Deployment Steps</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Model Preparation</h4>
                  <p className="text-sm">Optimize and package</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Infrastructure Setup</h4>
                  <p className="text-sm">Deploy to platform</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Testing & Monitoring</h4>
                  <p className="text-sm">Validate performance</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🚀 Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">☁️</span>
                  <span>Cloud Platforms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🐳</span>
                  <span>Docker Containers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">☸️</span>
                  <span>Kubernetes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔧</span>
                  <span>Serverless</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'strategies' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Deployment Strategies</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔄 Blue-Green Deployment</h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Process:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Deploy new model (green)</li>
                      <li>2. Keep old model running (blue)</li>
                      <li>3. Switch traffic to new model</li>
                      <li>4. Monitor and validate</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Benefits:</strong> Zero downtime, easy rollback</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">🎯 Canary Deployment</h3>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Process:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Deploy to small subset</li>
                      <li>2. Gradually increase traffic</li>
                      <li>3. Monitor performance</li>
                      <li>4. Full rollout if successful</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Benefits:</strong> Risk mitigation, gradual rollout</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">⚙️ Model Serving Patterns</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">Synchronous</h4>
                    <p className="text-sm">Real-time request-response</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Asynchronous</h4>
                    <p className="text-sm">Queue-based processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Batch</h4>
                    <p className="text-sm">Process multiple requests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'platforms' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Deployment Platforms</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">☁️ Cloud Platforms</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">AWS SageMaker</h4>
                      <p className="text-sm">End-to-end ML platform</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Google AI Platform</h4>
                      <p className="text-sm">Scalable ML services</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Azure ML</h4>
                      <p className="text-sm">Enterprise ML solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">🐳 Container Platforms</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Docker</h4>
                      <p className="text-sm">Containerized deployment</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Kubernetes</h4>
                      <p className="text-sm">Orchestration platform</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">OpenShift</h4>
                      <p className="text-sm">Enterprise Kubernetes</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔧 Specialized Tools</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">MLflow</h4>
                    <p className="text-sm">Model lifecycle management</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Kubeflow</h4>
                    <p className="text-sm">ML toolkit for Kubernetes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Seldon</h4>
                    <p className="text-sm">Model serving platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'monitoring' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Model Monitoring</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">📊 Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Latency</h4>
                      <p className="text-sm">Response time measurement</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Throughput</h4>
                      <p className="text-sm">Requests per second</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Accuracy</h4>
                      <p className="text-sm">Prediction quality</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">⚠️ Monitoring Alerts</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Data Drift</h4>
                      <p className="text-sm">Input distribution changes</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Model Decay</h4>
                      <p className="text-sm">Performance degradation</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">System Failures</h4>
                      <p className="text-sm">Infrastructure issues</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔄 Retraining Strategies</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">Scheduled</h4>
                    <p className="text-sm">Regular model updates</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Triggered</h4>
                    <p className="text-sm">Performance-based retraining</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Continuous</h4>
                    <p className="text-sm">Real-time model updates</p>
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
                  <h3 className="text-xl font-semibold text-orange-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">DEPLOY = Deploy, Execute, Process, Load, Optimize, Yield</h4>
                      <p className="text-sm">The deployment process from start to finish</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Blue-Green = Traffic Light</h4>
                      <p className="text-sm">Like traffic lights switching from red to green</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Canary = Mining Canary</h4>
                      <p className="text-sm">Like canaries used to detect danger in mines</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Restaurant Kitchen</h4>
                      <p className="text-sm">Like deploying a new recipe in a restaurant</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Software Updates</h4>
                      <p className="text-sm">Like updating apps on your phone</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Traffic Management</h4>
                      <p className="text-sm">Like managing traffic flow on roads</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">Deploy</h4>
                    <p className="text-sm">Release to production</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Monitor</h4>
                    <p className="text-sm">Track performance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Scale</h4>
                    <p className="text-sm">Handle load</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Update</h4>
                    <p className="text-sm">Retrain and redeploy</p>
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

export default ModelDeployment; 