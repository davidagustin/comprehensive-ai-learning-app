'use client';

import React, { useState } from 'react';

const MLOps: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '⚙️' },
    { id: 'pipeline', label: 'ML Pipeline', icon: '🔄' },
    { id: 'deployment', label: 'Deployment', icon: '🚀' },
    { id: 'monitoring', label: 'Monitoring', icon: '📊' },
    { id: 'tools', label: 'Tools & Platforms', icon: '🛠️' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          ⚙️ MLOps
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Machine Learning Operations - the practice of deploying, monitoring, and maintaining ML models in production.
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
              <h2 className="text-2xl font-bold mb-4">What is MLOps?</h2>
              <p className="text-lg mb-6">
                MLOps (Machine Learning Operations) is a set of practices that combines Machine Learning, DevOps, and Data Engineering to deploy and maintain ML models in production reliably and efficiently.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎯 Core Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Automation:</strong> Automate ML model deployment and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Reliability:</strong> Ensure models work consistently in production</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Scalability:</strong> Handle increasing model complexity and data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-orange-500 mt-1">✓</span>
                      <span><strong>Monitoring:</strong> Track model performance and detect issues</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">🔍 Key Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Model Drift:</strong> Models degrade over time as data changes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Reproducibility:</strong> Ensure consistent results across environments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Versioning:</strong> Track model, data, and code versions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">→</span>
                      <span><strong>Infrastructure:</strong> Manage computational resources efficiently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 MLOps vs DevOps</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-2">MLOps</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Model versioning and tracking</li>
                    <li>• Data pipeline management</li>
                    <li>• Model performance monitoring</li>
                    <li>• A/B testing for models</li>
                    <li>• Model retraining automation</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-600 mb-2">DevOps</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Code versioning and deployment</li>
                    <li>• Infrastructure management</li>
                    <li>• Application monitoring</li>
                    <li>• Continuous integration/deployment</li>
                    <li>• System reliability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">ML Pipeline</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">📊 Data Pipeline</h3>
                  <p className="mb-2">Automated data collection, processing, and feature engineering.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Components:</strong> Data ingestion, validation, transformation, storage</p>
                    <p className="text-sm"><strong>Tools:</strong> Apache Airflow, Luigi, Kubeflow</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🧠 Model Training Pipeline</h3>
                  <p className="mb-2">Automated model training, evaluation, and validation.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Components:</strong> Hyperparameter tuning, cross-validation, model selection</p>
                    <p className="text-sm"><strong>Tools:</strong> MLflow, Weights & Biases, SageMaker</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🚀 Deployment Pipeline</h3>
                  <p className="mb-2">Automated model deployment and serving infrastructure.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Components:</strong> Model packaging, containerization, orchestration</p>
                    <p className="text-sm"><strong>Tools:</strong> Docker, Kubernetes, TensorFlow Serving</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">📈 Monitoring Pipeline</h3>
                  <p className="mb-2">Continuous monitoring of model performance and system health.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Components:</strong> Performance tracking, alerting, logging</p>
                    <p className="text-sm"><strong>Tools:</strong> Prometheus, Grafana, ELK Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deployment' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Model Deployment</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-4">🎯 Deployment Strategies</h3>
                    <ul className="space-y-2">
                      <li><strong>Blue-Green:</strong> Switch between two identical environments</li>
                      <li><strong>Canary:</strong> Gradually roll out to small user groups</li>
                      <li><strong>A/B Testing:</strong> Compare two model versions</li>
                      <li><strong>Shadow:</strong> Run new model alongside old one</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-red-600 mb-4">⚙️ Deployment Components</h3>
                    <ul className="space-y-2">
                      <li><strong>Model Registry:</strong> Store and version models</li>
                      <li><strong>Containerization:</strong> Package model with dependencies</li>
                      <li><strong>Orchestration:</strong> Manage deployment across infrastructure</li>
                      <li><strong>Load Balancing:</strong> Distribute requests across instances</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🔧 Deployment Best Practices</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Versioning</h4>
                      <p className="text-sm">Track model, data, and code versions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600">Rollback</h4>
                      <p className="text-sm">Ability to revert to previous versions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Testing</h4>
                      <p className="text-sm">Comprehensive testing before deployment</p>
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
              <p className="text-lg mb-6">
                Continuous monitoring ensures models perform well in production and helps detect issues early.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-orange-600">📊 What to Monitor</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>Model Performance:</strong> Accuracy, precision, recall, F1-score</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>Data Drift:</strong> Changes in input data distribution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>System Metrics:</strong> Latency, throughput, error rates</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span><strong>Business Metrics:</strong> Revenue impact, user satisfaction</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600">🚨 Alerting & Actions</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">→</span>
                        <span><strong>Performance Alerts:</strong> Notify when metrics drop below thresholds</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">→</span>
                        <span><strong>Automated Retraining:</strong> Trigger model retraining when needed</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">→</span>
                        <span><strong>Rollback Triggers:</strong> Automatically revert to previous model</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">→</span>
                        <span><strong>Escalation:</strong> Alert human operators for critical issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">MLOps Tools & Platforms</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔄 Workflow Orchestration</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-orange-600">Apache Airflow</h4>
                      <p className="text-sm">Python-based workflow management platform</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Kubeflow</h4>
                      <p className="text-sm">Kubernetes-native ML toolkit</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">MLflow</h4>
                      <p className="text-sm">Open-source platform for ML lifecycle</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-red-600">☁️ Cloud Platforms</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-red-600">AWS SageMaker</h4>
                      <p className="text-sm">End-to-end ML platform on AWS</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Azure ML</h4>
                      <p className="text-sm">Microsoft's ML platform</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Google Vertex AI</h4>
                      <p className="text-sm">Google's unified ML platform</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">📊 Monitoring & Observability</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Weights & Biases</h4>
                      <p className="text-sm">Experiment tracking and model monitoring</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Prometheus + Grafana</h4>
                      <p className="text-sm">Metrics collection and visualization</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Evidently AI</h4>
                      <p className="text-sm">ML monitoring and observability</p>
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
                  <h3 className="text-xl font-semibold text-yellow-600">⚙️ MLOPS Acronym</h3>
                  <p className="mb-4">Remember the key aspects of MLOps:</p>
                  <ul className="space-y-2">
                    <li><strong>M</strong>onitoring - Track model performance</li>
                    <li><strong>L</strong>ifecycle - Manage model from development to retirement</li>
                    <li><strong>O</strong>perations - Automate deployment and maintenance</li>
                    <li><strong>P</strong>ipeline - End-to-end ML workflow</li>
                    <li><strong>S</strong>calability - Handle growing model complexity</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔄 Pipeline Memory</h3>
                  <p className="mb-4">Think of MLOps as a factory assembly line:</p>
                  <ul className="space-y-2">
                    <li><strong>Data Pipeline:</strong> Raw materials arrive and get processed</li>
                    <li><strong>Training Pipeline:</strong> Workers build the product (model)</li>
                    <li><strong>Deployment Pipeline:</strong> Finished product goes to customers</li>
                    <li><strong>Monitoring Pipeline:</strong> Quality control checks performance</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">📊 Monitoring Memory</h3>
                  <p className="mb-4">Remember what to monitor with "PADS":</p>
                  <ul className="space-y-2">
                    <li><strong>P</strong>erformance - Model accuracy and metrics</li>
                    <li><strong>A</strong>vailability - System uptime and reliability</li>
                    <li><strong>D</strong>ata - Data quality and drift detection</li>
                    <li><strong>S</strong>ecurity - Access control and data protection</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🚀 Deployment Rhyme</h3>
                  <p className="mb-4">"Version, test, deploy, monitor"</p>
                  <ul className="space-y-2">
                    <li><strong>Version:</strong> Track model and code versions</li>
                    <li><strong>Test:</strong> Validate before deployment</li>
                    <li><strong>Deploy:</strong> Roll out to production</li>
                    <li><strong>Monitor:</strong> Watch for issues and performance</li>
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
            Take the quiz to reinforce what you've learned about MLOps!
          </p>
          <button 
            onClick={() => {
              window.location.hash = 'quiz';
              window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                detail: { section: 'mlops' } 
              }));
            }}
            className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
          >
            🎯 Take MLOps Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default MLOps; 