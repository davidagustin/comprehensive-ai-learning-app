'use client';

import React, { useState } from 'react';

const ProductionSystems: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏭' },
    { id: 'design', label: 'Design', icon: '📐' },
    { id: 'infrastructure', label: 'Infrastructure', icon: '⚙️' },
    { id: 'operations', label: 'Operations', icon: '🔧' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent mb-4">
          🏭 Production Systems
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the design and operation of production-ready machine learning systems that serve real users reliably
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
                ? 'bg-gradient-to-r from-gray-600 to-black text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What are Production Systems?</h2>
            <p className="text-lg mb-6">
              Production systems are live, operational machine learning systems that serve real users, 
              requiring high availability, reliability, and performance in real-world conditions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-600">🎯 Key Characteristics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span><strong>High Availability:</strong> 99.9%+ uptime</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span><strong>Scalability:</strong> Handle varying loads</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span><strong>Reliability:</strong> Consistent performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span><strong>Monitoring:</strong> Real-time observability</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black">🚀 Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-black mt-1">•</span>
                    <span>Fault tolerance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black mt-1">•</span>
                    <span>Security and compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black mt-1">•</span>
                    <span>Cost optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-black mt-1">•</span>
                    <span>Maintainability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">🏗️ System Components</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Model Serving</h4>
                  <p className="text-sm">Inference endpoints</p>
                </div>
                <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Data Pipeline</h4>
                  <p className="text-sm">ETL and processing</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Monitoring</h4>
                  <p className="text-sm">Observability tools</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-4">🔧 Infrastructure</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Compute</h4>
                  <p className="text-sm">Servers and containers</p>
                </div>
                <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Storage</h4>
                  <p className="text-sm">Databases and caches</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Networking</h4>
                  <p className="text-sm">Load balancers and CDN</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🚀 Operations</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔍</span>
                  <span>Monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🚨</span>
                  <span>Alerting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">📊</span>
                  <span>Logging</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔄</span>
                  <span>Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'design' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">System Design Principles</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-600">🏗️ Architecture Patterns</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Microservices</h4>
                      <p className="text-sm">Independent, scalable services</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Event-Driven</h4>
                      <p className="text-sm">Asynchronous communication</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">CQRS</h4>
                      <p className="text-sm">Command Query Responsibility Segregation</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">🔒 Reliability Patterns</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Circuit Breaker</h4>
                      <p className="text-sm">Prevent cascade failures</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Retry Logic</h4>
                      <p className="text-sm">Handle transient failures</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fallback</h4>
                      <p className="text-sm">Graceful degradation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-black-50 dark:from-gray-900/20 dark:to-black-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📊 Design Considerations</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-600">Performance</h4>
                    <p className="text-sm">Latency and throughput</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Scalability</h4>
                    <p className="text-sm">Handle growth</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Maintainability</h4>
                    <p className="text-sm">Easy to update</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'infrastructure' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Infrastructure Components</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-600">☁️ Cloud Infrastructure</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Compute Resources</h4>
                      <p className="text-sm">VMs, containers, serverless</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Storage Solutions</h4>
                      <p className="text-sm">Databases, object storage</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Networking</h4>
                      <p className="text-sm">VPC, load balancers, CDN</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">🔧 Orchestration</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Kubernetes</h4>
                      <p className="text-sm">Container orchestration</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Docker</h4>
                      <p className="text-sm">Containerization</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Terraform</h4>
                      <p className="text-sm">Infrastructure as code</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-black-50 dark:from-gray-900/20 dark:to-black-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔒 Security & Compliance</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-600">Authentication</h4>
                    <p className="text-sm">IAM, OAuth, JWT</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Encryption</h4>
                    <p className="text-sm">Data at rest and in transit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Compliance</h4>
                    <p className="text-sm">GDPR, HIPAA, SOC2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'operations' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Operations & Monitoring</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-600">📊 Monitoring</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Metrics</h4>
                      <p className="text-sm">Performance indicators</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Logging</h4>
                      <p className="text-sm">Structured log data</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Tracing</h4>
                      <p className="text-sm">Request flow tracking</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">🚨 Alerting</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Threshold Alerts</h4>
                      <p className="text-sm">Performance boundaries</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Anomaly Detection</h4>
                      <p className="text-sm">Unusual patterns</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Escalation</h4>
                      <p className="text-sm">Alert routing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-black-50 dark:from-gray-900/20 dark:to-black-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔄 CI/CD Pipeline</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-600">Continuous Integration</h4>
                    <p className="text-sm">Automated testing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Continuous Deployment</h4>
                    <p className="text-sm">Automated releases</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Rollback</h4>
                    <p className="text-sm">Quick recovery</p>
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
                  <h3 className="text-xl font-semibold text-gray-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">PRODUCTION = Performance, Reliability, Operations, Deployment, Uptime, Cost, Testing, Infrastructure, Optimization, Networking</h4>
                      <p className="text-sm">All aspects of production systems</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">SLA = Service Level Agreement</h4>
                      <p className="text-sm">Performance guarantees</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">MTTR = Mean Time To Recovery</h4>
                      <p className="text-sm">How fast you fix issues</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Power Plant</h4>
                      <p className="text-sm">Like a power plant that must run 24/7</p>
                    </div>
                    <div className="bg-black-50 dark:bg-black-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Hospital</h4>
                      <p className="text-sm">Like a hospital that must always be available</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Air Traffic Control</h4>
                      <p className="text-sm">Like air traffic control that can't fail</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-black-50 dark:from-gray-900/20 dark:to-black-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-600">Availability</h4>
                    <p className="text-sm">Uptime percentage</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">Reliability</h4>
                    <p className="text-sm">Consistent performance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Scalability</h4>
                    <p className="text-sm">Handle growth</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Monitoring</h4>
                    <p className="text-sm">Observability</p>
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

export default ProductionSystems; 