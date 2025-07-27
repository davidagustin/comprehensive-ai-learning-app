'use client';

import React, { useState } from 'react';

const Scalability: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📈' },
    { id: 'strategies', label: 'Strategies', icon: '⚙️' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'technologies', label: 'Technologies', icon: '🔧' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          📈 Scalability
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the principles and techniques for scaling machine learning systems to handle growing demands
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
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What is Scalability?</h2>
            <p className="text-lg mb-6">
              Scalability is the ability of a system to handle increased load by adding resources, 
              maintaining performance and reliability as demand grows.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Horizontal Scaling:</strong> Add more machines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Vertical Scaling:</strong> Increase machine capacity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Load Balancing:</strong> Distribute traffic evenly</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Auto-scaling:</strong> Automatic resource adjustment</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">🚀 Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Handle traffic spikes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Cost optimization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>High availability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Future-proof systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📊 Scaling Types</h3>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Horizontal</h4>
                  <p className="text-sm">Add more instances</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Vertical</h4>
                  <p className="text-sm">Increase resources</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Diagonal</h4>
                  <p className="text-sm">Combination approach</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">⚡ Performance Metrics</h3>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Throughput</h4>
                  <p className="text-sm">Requests per second</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Latency</h4>
                  <p className="text-sm">Response time</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Availability</h4>
                  <p className="text-sm">Uptime percentage</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🔧 Technologies</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">☸️</span>
                  <span>Kubernetes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🐳</span>
                  <span>Docker</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">☁️</span>
                  <span>Cloud Services</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔗</span>
                  <span>Load Balancers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'strategies' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Scaling Strategies</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">📈 Horizontal Scaling</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Approach:</strong> Add more machines</p>
                    <ul className="text-sm space-y-1">
                      <li>• Distribute load across instances</li>
                      <li>• Better fault tolerance</li>
                      <li>• Cost-effective for large scale</li>
                      <li>• Requires load balancing</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Best for:</strong> Stateless applications</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">📊 Vertical Scaling</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Approach:</strong> Increase machine capacity</p>
                    <ul className="text-sm space-y-1">
                      <li>• Add more CPU, RAM, storage</li>
                      <li>• Simpler to implement</li>
                      <li>• Limited by hardware</li>
                      <li>• Single point of failure</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Best for:</strong> Stateful applications</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔄 Auto-scaling Strategies</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Reactive</h4>
                    <p className="text-sm">Scale based on current load</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Predictive</h4>
                    <p className="text-sm">Scale based on forecasts</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Scheduled</h4>
                    <p className="text-sm">Scale based on time patterns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Scalable Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🏗️ Microservices</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Independent Services</h4>
                      <p className="text-sm">Each service can scale independently</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">API Gateway</h4>
                      <p className="text-sm">Centralized routing and load balancing</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Service Discovery</h4>
                      <p className="text-sm">Dynamic service registration</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔗 Distributed Systems</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Load Balancers</h4>
                      <p className="text-sm">Distribute traffic across instances</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Caching Layers</h4>
                      <p className="text-sm">Reduce database load</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Message Queues</h4>
                      <p className="text-sm">Asynchronous processing</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📊 Data Architecture</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Sharding</h4>
                    <p className="text-sm">Partition data across databases</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Replication</h4>
                    <p className="text-sm">Copy data for availability</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">CDN</h4>
                    <p className="text-sm">Distribute content globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'technologies' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Scaling Technologies</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">☸️ Kubernetes</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Container Orchestration</h4>
                      <p className="text-sm">Manage containerized applications</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Auto-scaling</h4>
                      <p className="text-sm">Horizontal Pod Autoscaler</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Load Balancing</h4>
                      <p className="text-sm">Service mesh and ingress</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">☁️ Cloud Services</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">AWS Auto Scaling</h4>
                      <p className="text-sm">Automatic resource management</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Google Cloud Run</h4>
                      <p className="text-sm">Serverless containers</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Azure Functions</h4>
                      <p className="text-sm">Event-driven scaling</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔧 Supporting Tools</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Load Balancers</h4>
                    <p className="text-sm">NGINX, HAProxy, AWS ALB</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Monitoring</h4>
                    <p className="text-sm">Prometheus, Grafana, Datadog</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Caching</h4>
                    <p className="text-sm">Redis, Memcached, CDN</p>
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
                  <h3 className="text-xl font-semibold text-green-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">SCALE = System Capacity And Load Expansion</h4>
                      <p className="text-sm">Expanding system capacity to handle load</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Horizontal = More Machines</h4>
                      <p className="text-sm">Like adding more lanes to a highway</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Vertical = Bigger Machine</h4>
                      <p className="text-sm">Like upgrading to a bigger car</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Restaurant Chain</h4>
                      <p className="text-sm">Like opening more restaurant locations</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Highway System</h4>
                      <p className="text-sm">Like adding more lanes to handle traffic</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Assembly Line</h4>
                      <p className="text-sm">Like adding more workers to increase production</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Horizontal</h4>
                    <p className="text-sm">Add instances</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Vertical</h4>
                    <p className="text-sm">Increase capacity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Auto-scaling</h4>
                    <p className="text-sm">Automatic adjustment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Load Balance</h4>
                    <p className="text-sm">Distribute traffic</p>
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

export default Scalability; 