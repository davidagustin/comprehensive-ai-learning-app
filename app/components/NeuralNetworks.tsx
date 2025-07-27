'use client';

import React, { useState } from 'react';

const NeuralNetworks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🧠' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'activation', label: 'Activation Functions', icon: '⚡' },
    { id: 'training', label: 'Training Process', icon: '🎯' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
          🧠 Neural Networks
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover the building blocks of artificial intelligence - from simple neurons to complex networks that can learn and make decisions.
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
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
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
              <h2 className="text-2xl font-bold mb-4">What are Neural Networks?</h2>
              <p className="text-lg mb-6">
                Neural networks are computational models inspired by the human brain. They consist of interconnected nodes (neurons) that process information and learn patterns from data.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎯 Key Concepts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Neurons:</strong> Basic processing units that receive inputs and produce outputs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Weights:</strong> Connection strengths that determine how much influence each input has</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Bias:</strong> Additional parameter that helps shift the activation function</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Layers:</strong> Groups of neurons that process information at different levels</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔍 Why Neural Networks?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Pattern Recognition:</strong> Can identify complex patterns in data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Non-linear Relationships:</strong> Can model complex, non-linear functions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Adaptability:</strong> Can learn and improve from experience</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Generalization:</strong> Can apply learned patterns to new data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Neural Network Architecture</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">📥 Input Layer</h3>
                  <p>Receives raw data and passes it to the next layer. Each neuron represents one feature of your data.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> For image classification, each neuron might represent one pixel.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔄 Hidden Layers</h3>
                  <p>Process information through multiple transformations. These layers learn increasingly complex features.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> First hidden layer might detect edges, second layer detects shapes.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">📤 Output Layer</h3>
                  <p>Produces the final prediction or classification. The number of neurons depends on your task.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> For 10-class classification, you'd have 10 output neurons.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🎨 Visual Representation</h3>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg text-center">
                <div className="text-6xl mb-4">🕸️</div>
                <p className="text-lg font-semibold">Neural Network Structure</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Input Layer → Hidden Layer 1 → Hidden Layer 2 → Output Layer
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activation' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Activation Functions</h2>
              <p className="text-lg mb-6">
                Activation functions determine the output of a neuron. They introduce non-linearity, allowing neural networks to learn complex patterns.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">ReLU (Rectified Linear Unit)</h3>
                  <p className="mb-2"><strong>Formula:</strong> f(x) = max(0, x)</p>
                  <p className="mb-2"><strong>Advantages:</strong> Simple, fast, helps with vanishing gradient problem</p>
                  <p><strong>Use Case:</strong> Most common choice for hidden layers</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">Sigmoid</h3>
                  <p className="mb-2"><strong>Formula:</strong> f(x) = 1 / (1 + e^(-x))</p>
                  <p className="mb-2"><strong>Advantages:</strong> Outputs between 0 and 1, smooth</p>
                  <p><strong>Use Case:</strong> Output layer for binary classification</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">Tanh (Hyperbolic Tangent)</h3>
                  <p className="mb-2"><strong>Formula:</strong> f(x) = (e^x - e^(-x)) / (e^x + e^(-x))</p>
                  <p className="mb-2"><strong>Advantages:</strong> Outputs between -1 and 1, zero-centered</p>
                  <p><strong>Use Case:</strong> Hidden layers, especially in RNNs</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">Softmax</h3>
                  <p className="mb-2"><strong>Formula:</strong> f(x_i) = e^(x_i) / Σ(e^(x_j))</p>
                  <p className="mb-2"><strong>Advantages:</strong> Outputs probabilities that sum to 1</p>
                  <p><strong>Use Case:</strong> Output layer for multi-class classification</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'training' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Training Process</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Forward Propagation</h3>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Input data flows through the network</li>
                      <li>Each neuron computes: weighted sum + bias</li>
                      <li>Activation function is applied</li>
                      <li>Output is produced at the final layer</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-purple-600 mb-4">🔄 Backpropagation</h3>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Calculate error at the output</li>
                      <li>Propagate error backwards through layers</li>
                      <li>Compute gradients for each weight</li>
                      <li>Update weights using gradient descent</li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">⚙️ Training Components</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Loss Function</h4>
                      <p className="text-sm">Measures how well the model performs</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Optimizer</h4>
                      <p className="text-sm">Updates weights to minimize loss</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Learning Rate</h4>
                      <p className="text-sm">Controls how big steps to take</p>
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
              <h2 className="text-2xl font-bold mb-4">Memory Techniques</h2>
              <p className="text-lg mb-6">
                Use these memory techniques to remember neural network concepts more easily.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🧠 Brain Analogy</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Neural Network = Artificial Brain</strong></p>
                      <p className="text-sm">• Neurons = Brain cells</p>
                      <p className="text-sm">• Weights = Connection strength</p>
                      <p className="text-sm">• Learning = Strengthening connections</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">🎯 Decision Making</h3>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Think of it as a committee:</strong></p>
                      <p className="text-sm">• Each neuron votes</p>
                      <p className="text-sm">• Weights determine vote importance</p>
                      <p className="text-sm">• Final decision is the output</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎨 Visual Mnemonics</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600">🕸️ Spider Web</h4>
                      <p className="text-sm">Neural network connections look like a spider web</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">🌊 Water Flow</h4>
                      <p className="text-sm">Information flows like water through pipes</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">🎭 Theater</h4>
                      <p className="text-sm">Each layer is like a stage in a play</p>
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

export default NeuralNetworks; 