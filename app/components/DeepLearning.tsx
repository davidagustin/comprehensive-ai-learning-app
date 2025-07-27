'use client';

import React, { useState } from 'react';

const DeepLearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔬' },
    { id: 'architectures', label: 'Architectures', icon: '🏗️' },
    { id: 'training', label: 'Training', icon: '🎯' },
    { id: 'optimization', label: 'Optimization', icon: '⚡' },
    { id: 'regularization', label: 'Regularization', icon: '🛡️' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          🔬 Deep Learning
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore advanced neural network architectures and techniques that power modern artificial intelligence.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">What is Deep Learning?</h2>
              <p className="text-lg mb-6">
                Deep Learning is a subset of machine learning that uses neural networks with multiple layers to automatically learn hierarchical representations of data.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎯 Key Characteristics</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Multiple Layers:</strong> Deep architectures with many hidden layers</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Hierarchical Learning:</strong> Each layer learns increasingly complex features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>Automatic Feature Extraction:</strong> No manual feature engineering required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span><strong>End-to-End Learning:</strong> Learn from raw input to final output</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🔍 Why Deep Learning?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">→</span>
                      <span><strong>Representation Power:</strong> Can model highly complex functions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">→</span>
                      <span><strong>Scalability:</strong> Performance improves with more data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">→</span>
                      <span><strong>Transfer Learning:</strong> Knowledge can be transferred between tasks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-indigo-500 mt-1">→</span>
                      <span><strong>State-of-the-Art Results:</strong> Best performance in many domains</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🏗️ Deep Learning vs Traditional ML</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2">Deep Learning</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Automatic feature extraction</li>
                    <li>• Requires large datasets</li>
                    <li>• Computationally intensive</li>
                    <li>• Black-box models</li>
                    <li>• Excellent performance</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Traditional ML</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Manual feature engineering</li>
                    <li>• Works with smaller datasets</li>
                    <li>• Less computational power</li>
                    <li>• More interpretable</li>
                    <li>• Good performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architectures' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Deep Learning Architectures</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🖼️ Convolutional Neural Networks (CNNs)</h3>
                  <p className="mb-2">Specialized for processing grid-like data such as images.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Key Features:</strong> Convolutional layers, pooling layers, spatial hierarchies</p>
                    <p className="text-sm"><strong>Applications:</strong> Image classification, object detection, computer vision</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔄 Recurrent Neural Networks (RNNs)</h3>
                  <p className="mb-2">Designed for sequential data processing with memory of previous inputs.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Key Features:</strong> Hidden state, sequential processing, temporal dependencies</p>
                    <p className="text-sm"><strong>Applications:</strong> Language modeling, machine translation, speech recognition</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">⚡ Transformers</h3>
                  <p className="mb-2">Attention-based architecture that revolutionized NLP and beyond.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Key Features:</strong> Self-attention, parallel processing, global dependencies</p>
                    <p className="text-sm"><strong>Applications:</strong> Language models, text generation, multi-modal AI</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎨 Generative Models</h3>
                  <p className="mb-2">Models that can generate new data similar to training data.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Types:</strong> GANs, VAEs, Diffusion Models</p>
                    <p className="text-sm"><strong>Applications:</strong> Image generation, text generation, music composition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Deep Learning Training</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">🎯 Training Process</h3>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Initialize network weights randomly</li>
                      <li>Forward pass through the network</li>
                      <li>Compute loss function</li>
                      <li>Backpropagate gradients</li>
                      <li>Update weights using optimizer</li>
                      <li>Repeat for multiple epochs</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600 mb-4">⚙️ Key Components</h3>
                    <ul className="space-y-2">
                      <li><strong>Loss Function:</strong> Measures prediction error</li>
                      <li><strong>Optimizer:</strong> Updates weights (SGD, Adam, etc.)</li>
                      <li><strong>Learning Rate:</strong> Controls update step size</li>
                      <li><strong>Batch Size:</strong> Number of samples per update</li>
                      <li><strong>Epochs:</strong> Complete passes through dataset</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🚀 Training Challenges</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Vanishing Gradients</h4>
                      <p className="text-sm">Gradients become too small in deep networks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600">Overfitting</h4>
                      <p className="text-sm">Model memorizes training data</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Computational Cost</h4>
                      <p className="text-sm">Requires significant computational resources</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'optimization' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Optimization Techniques</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚡ Optimizers</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold">SGD (Stochastic Gradient Descent)</h4>
                      <p className="text-sm">Basic optimizer that updates weights using gradients</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold">Adam</h4>
                      <p className="text-sm">Adaptive learning rate with momentum and RMSprop</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold">RMSprop</h4>
                      <p className="text-sm">Adaptive learning rate based on moving average of squared gradients</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">📊 Learning Rate Scheduling</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold">Step Decay</h4>
                      <p className="text-sm">Reduce learning rate at fixed intervals</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold">Cosine Annealing</h4>
                      <p className="text-sm">Smoothly reduce learning rate following cosine curve</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'regularization' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Regularization Techniques</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">🛡️ Common Techniques</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Dropout:</strong> Randomly deactivate neurons during training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>L1/L2 Regularization:</strong> Add penalty terms to loss function</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Early Stopping:</strong> Stop training when validation loss increases</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span><strong>Data Augmentation:</strong> Increase dataset size with transformations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-indigo-600">🎯 When to Use</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">→</span>
                        <span>High training accuracy, low validation accuracy</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">→</span>
                        <span>Small dataset relative to model complexity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">→</span>
                        <span>Model is memorizing training data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-indigo-500 mt-1">→</span>
                        <span>Poor generalization to new data</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mnemonics' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Memory Techniques</h2>
              <p className="text-lg mb-6">
                Use these memory techniques to remember deep learning concepts more easily.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">🏗️ Building Analogy</h3>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Deep Learning = Building Construction</strong></p>
                      <p className="text-sm">• Layers = Floors of a building</p>
                      <p className="text-sm">• Features = Building blocks</p>
                      <p className="text-sm">• Training = Construction process</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-indigo-600">🎭 Theater Analogy</h3>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Think of it as a play:</strong></p>
                      <p className="text-sm">• Each layer is a scene</p>
                      <p className="text-sm">• Actors learn their roles</p>
                      <p className="text-sm">• Director optimizes performance</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎨 Visual Mnemonics</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">🏢 Skyscraper</h4>
                      <p className="text-sm">Deep networks are like tall buildings</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-600">🎪 Circus</h4>
                      <p className="text-sm">Each layer performs different tricks</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">🎓 University</h4>
                      <p className="text-sm">Each layer teaches the next</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepLearning; 