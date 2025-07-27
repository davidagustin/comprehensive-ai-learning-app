'use client';

import React, { useState } from 'react';

const RNN: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔄' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'operations', label: 'Core Operations', icon: '⚙️' },
    { id: 'applications', label: 'Applications', icon: '🎯' },
    { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          🔄 Recurrent Neural Networks (RNN)
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn how RNNs process sequential data and power applications like language modeling and time series prediction.
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
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
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
              <h2 className="text-2xl font-bold mb-4">What are RNNs?</h2>
              <p className="text-lg mb-6">
                Recurrent Neural Networks (RNNs) are designed to process sequential data by maintaining a hidden state that captures information about previous elements in the sequence.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎯 Key Concepts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span><strong>Hidden State:</strong> Memory of previous inputs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span><strong>Sequence Processing:</strong> Handles variable-length input</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span><strong>Parameter Sharing:</strong> Same weights across time steps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">✓</span>
                      <span><strong>Backpropagation Through Time:</strong> Training method for sequences</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🔍 Why RNNs?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Temporal Dependencies:</strong> Capture relationships over time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Flexible Input/Output:</strong> Many-to-one, one-to-many, many-to-many</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Natural Fit:</strong> For text, speech, time series, and more</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Foundation:</strong> For LSTM, GRU, and attention models</span>
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
              <h2 className="text-2xl font-bold mb-4">RNN Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🏗️ Core Components</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Input Layer</h4>
                      <p className="text-sm">Receives sequential data (e.g., words, time steps)</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Recurrent Layer</h4>
                      <p className="text-sm">Processes input and previous hidden state at each time step</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Hidden State</h4>
                      <p className="text-sm">Stores memory of the sequence so far</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Output Layer</h4>
                      <p className="text-sm">Produces output at each time step or at the end of the sequence</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🔄 Recurrent Step</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`h_t = f(Wx_t + Uh_(t-1) + b)

Where:
• h_t = current hidden state
• x_t = current input
• h_(t-1) = previous hidden state
• W, U = weight matrices
• b = bias vector
• f = activation function`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'operations' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Core Operations</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔄 Recurrent Step</h3>
                  <p className="mb-2">At each time step, combine input and previous hidden state to produce new hidden state.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Process:</strong> Input + Previous State → New State</p>
                    <p className="text-sm"><strong>Formula:</strong> h<sub>t</sub> = f(Wx<sub>t</sub> + Uh<sub>t-1</sub> + b)</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-cyan-600">⏰ Backpropagation Through Time</h3>
                  <p className="mb-2">Unroll the network through time and apply backpropagation to update weights.</p>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Challenge:</strong> Vanishing/exploding gradients</p>
                    <p className="text-sm"><strong>Solution:</strong> LSTM, GRU, gradient clipping</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">📤 Sequence Output</h3>
                  <p className="mb-2">Produce output at each step (sequence-to-sequence) or at the end (sequence-to-one).</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Many-to-One:</strong> Sentiment analysis</p>
                    <p className="text-sm"><strong>One-to-Many:</strong> Text generation</p>
                    <p className="text-sm"><strong>Many-to-Many:</strong> Machine translation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Applications of RNNs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">📝 Natural Language Processing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Language Modeling:</strong> Predict next word in a sequence</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Machine Translation:</strong> Translate text between languages</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Text Generation:</strong> Generate coherent text sequences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Sentiment Analysis:</strong> Analyze text sentiment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🎵 Audio & Time Series</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Speech Recognition:</strong> Convert audio to text</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Time Series Forecasting:</strong> Predict future values</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Music Generation:</strong> Compose music sequences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span><strong>Stock Price Prediction:</strong> Financial time series analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'best-practices' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">✅ Do's</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Use sequence padding and masking for variable-length inputs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Monitor for vanishing/exploding gradients</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Consider LSTM/GRU for long-term dependencies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Use teacher forcing for sequence generation tasks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Visualize hidden states for interpretability</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">❌ Don'ts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Don't use vanilla RNNs for very long sequences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Don't ignore gradient clipping for stability</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Don't forget to normalize input sequences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Don't use too high learning rates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Don't ignore the order of sequence elements</span>
                    </li>
                  </ul>
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
                Use these memory techniques to remember RNN concepts more easily.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔄 Loop Analogy</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>RNN = Memory Loop</strong></p>
                      <p className="text-sm">• Each step remembers the previous</p>
                      <p className="text-sm">• Like a conversation with memory</p>
                      <p className="text-sm">• Information flows in cycles</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-600">📚 Story Analogy</h3>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Think of it as storytelling:</strong></p>
                      <p className="text-sm">• Each word builds on previous words</p>
                      <p className="text-sm">• Context matters for understanding</p>
                      <p className="text-sm">• Memory helps maintain coherence</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎨 Visual Mnemonics</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">🔄 Spiral</h4>
                      <p className="text-sm">RNN processing is like a spiral staircase</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cyan-600">📖 Book</h4>
                      <p className="text-sm">Each page depends on previous pages</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">🎭 Play</h4>
                      <p className="text-sm">Each scene builds on previous scenes</p>
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

export default RNN; 