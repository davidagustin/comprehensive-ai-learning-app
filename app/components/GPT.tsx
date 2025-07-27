'use client';

import React, { useState } from 'react';

const GPT: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🧠' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'training', label: 'Training', icon: '🎯' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
          🧠 GPT Models
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master Generative Pre-trained Transformers - the revolutionary language models that can generate human-like text
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
            <h2 className="text-2xl font-bold mb-4">What are GPT Models?</h2>
            <p className="text-lg mb-6">
              GPT (Generative Pre-trained Transformer) models are autoregressive language models that use transformer architecture 
              to generate human-like text by predicting the next word in a sequence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600">🎯 Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Autoregressive:</strong> Generates text one token at a time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Unidirectional:</strong> Only looks at previous tokens</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Generative:</strong> Creates new text content</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>Scalable:</strong> Performance improves with size</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>High-quality text generation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Few-shot learning capabilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Versatile applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Strong reasoning abilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📊 Model Evolution</h3>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">GPT-1</h4>
                  <p className="text-sm">117M parameters, 2018</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">GPT-2</h4>
                  <p className="text-sm">1.5B parameters, 2019</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">GPT-3</h4>
                  <p className="text-sm">175B parameters, 2020</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🎯 Training Approach</h3>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Language Modeling</h4>
                  <p className="text-sm">Predict next token</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Self-Supervised</h4>
                  <p className="text-sm">No human labels needed</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Zero/Few-Shot</h4>
                  <p className="text-sm">Learn from examples</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🚀 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">📝</span>
                  <span>Text Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">💬</span>
                  <span>Conversation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔧</span>
                  <span>Code Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🎨</span>
                  <span>Creative Writing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">GPT Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🏗️ Core Components</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Token Embeddings</h4>
                      <p className="text-sm">Convert tokens to vectors</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Position Embeddings</h4>
                      <p className="text-sm">Add position information</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Decoder Layers</h4>
                      <p className="text-sm">Transformer decoder blocks</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Output Layer</h4>
                      <p className="text-sm">Predict next token</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔧 Model Details</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`GPT-3 Configuration:
├── Parameters: 175B
├── Layers: 96
├── Attention Heads: 96
├── Hidden Size: 12,288
└── Context Length: 2,048

Key Differences from BERT:
├── Decoder-only (no encoder)
├── Causal attention mask
├── No bidirectional context
└── Autoregressive generation`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Causal Attention</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Masked Attention</h4>
                    <p className="text-sm">Can only attend to previous tokens</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">No Future Leakage</h4>
                    <p className="text-sm">Prevents seeing future information</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Autoregressive</h4>
                    <p className="text-sm">Generates one token at a time</p>
                  </div>
                </div>
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
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Pre-training</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Language Modeling Objective:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Take a sequence of tokens</li>
                      <li>2. Mask the last token</li>
                      <li>3. Predict the masked token</li>
                      <li>4. Minimize cross-entropy loss</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Example:</strong> "The cat sat on the [MASK]" → predict "mat"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">📚 Training Data</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Data Sources:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Web pages and articles</li>
                      <li>• Books and literature</li>
                      <li>• Code repositories</li>
                      <li>• Wikipedia articles</li>
                      <li>• News articles</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Size:</strong> Hundreds of GB of text data</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🚀 Scaling Laws</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Model Size</h4>
                    <p className="text-sm">Performance scales with parameters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Data Size</h4>
                    <p className="text-sm">More data improves performance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Compute</h4>
                    <p className="text-sm">Training time scales with size</p>
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
                  <h3 className="text-xl font-semibold text-green-600">📝 Text Generation</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Story Writing</h4>
                      <p className="text-sm">Generate creative narratives</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Content Creation</h4>
                      <p className="text-sm">Blog posts, articles, marketing copy</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Poetry</h4>
                      <p className="text-sm">Generate poems and lyrics</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">💬 Conversation</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Chatbots</h4>
                      <p className="text-sm">Customer service and support</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Virtual Assistants</h4>
                      <p className="text-sm">Personal AI assistants</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Language Learning</h4>
                      <p className="text-sm">Practice conversations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔧 Technical Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Code Generation</h4>
                    <p className="text-sm">Generate code from descriptions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Documentation</h4>
                    <p className="text-sm">Write technical documentation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Translation</h4>
                    <p className="text-sm">Translate between languages</p>
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
                      <h4 className="font-semibold">GPT = Generate, Predict, Transform</h4>
                      <p className="text-sm">Generates text, predicts next token, transforms input</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Autoregressive = Auto + Regressive</h4>
                      <p className="text-sm">Automatically regresses (goes back) to predict next</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Causal = Cause and Effect</h4>
                      <p className="text-sm">Only looks at causes (previous tokens)</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Writing a Story</h4>
                      <p className="text-sm">Like writing a story one word at a time, only knowing what you've written so far</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Predicting Weather</h4>
                      <p className="text-sm">Like predicting tomorrow's weather based only on past weather patterns</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Reading a Book</h4>
                      <p className="text-sm">Like reading a book where you can only see the current page and previous pages</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-600">Generative</h4>
                    <p className="text-sm">Creates new content</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Autoregressive</h4>
                    <p className="text-sm">One token at a time</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Causal</h4>
                    <p className="text-sm">No future access</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Scalable</h4>
                    <p className="text-sm">Bigger = better</p>
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

export default GPT; 