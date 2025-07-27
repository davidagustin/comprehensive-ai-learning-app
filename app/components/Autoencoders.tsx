'use client';

import React, { useState } from 'react';

const Autoencoders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔐' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'types', label: 'Types', icon: '📊' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          🔐 Autoencoders
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master autoencoders - neural networks that learn to compress and reconstruct data, enabling dimensionality reduction and feature learning
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
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What are Autoencoders?</h2>
            <p className="text-lg mb-6">
              Autoencoders are neural networks designed to learn efficient representations of data by training the network 
              to reconstruct the input from a compressed representation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-teal-600">🎯 Key Components</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Encoder:</strong> Compresses input to latent space</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Latent Space:</strong> Compressed representation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Decoder:</strong> Reconstructs from latent space</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-teal-500 mt-1">•</span>
                    <span><strong>Reconstruction Loss:</strong> Measures quality</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Dimensionality reduction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Feature learning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Data compression</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-cyan-500 mt-1">•</span>
                    <span>Anomaly detection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">🔐 Autoencoder Types</h3>
              <div className="space-y-3">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Basic Autoencoder</h4>
                  <p className="text-sm">Simple encoder-decoder</p>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Variational</h4>
                  <p className="text-sm">Probabilistic latent space</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Denoising</h4>
                  <p className="text-sm">Remove noise from data</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-600 mb-4">🎯 Learning Process</h3>
              <div className="space-y-3">
                <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Compression</h4>
                  <p className="text-sm">Encoder reduces dimensions</p>
                </div>
                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Reconstruction</h4>
                  <p className="text-sm">Decoder rebuilds input</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Optimization</h4>
                  <p className="text-sm">Minimize reconstruction error</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🚀 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📊</span>
                  <span>Dimensionality Reduction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🔍</span>
                  <span>Anomaly Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🎨</span>
                  <span>Image Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🔊</span>
                  <span>Audio Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Autoencoder Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-600">🏗️ Encoder</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Input Layer</h4>
                      <p className="text-sm">Receives original data</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Hidden Layers</h4>
                      <p className="text-sm">Gradually reduce dimensions</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Bottleneck</h4>
                      <p className="text-sm">Compressed representation</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🔓 Decoder</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Latent Input</h4>
                      <p className="text-sm">Receives compressed data</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Hidden Layers</h4>
                      <p className="text-sm">Gradually expand dimensions</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Output Layer</h4>
                      <p className="text-sm">Reconstructed data</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📐 Architecture Diagram</h3>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <pre className="text-sm overflow-x-auto">
{`Input (784) → Encoder → Latent (32) → Decoder → Output (784)
     ↓           ↓           ↓           ↓
   Original   Compress   Compressed   Reconstructed
   Data       Data       Features     Data

Loss = ||Input - Output||²`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'types' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Types of Autoencoders</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-600">🔐 Basic Autoencoder</h3>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Characteristics:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Simple encoder-decoder architecture</li>
                      <li>• Direct reconstruction loss</li>
                      <li>• No regularization</li>
                      <li>• Can overfit easily</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Simple dimensionality reduction</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🎲 Variational Autoencoder (VAE)</h3>
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Characteristics:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Probabilistic latent space</li>
                      <li>• KL divergence regularization</li>
                      <li>• Can generate new data</li>
                      <li>• Smooth latent space</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Generative modeling</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🧹 Denoising Autoencoder</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Characteristics:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Corrupted input training</li>
                      <li>• Clean output target</li>
                      <li>• Robust representations</li>
                      <li>• Noise removal capability</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Data cleaning and denoising</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎨 Sparse Autoencoder</h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Characteristics:</strong></p>
                    <ul className="text-sm space-y-1">
                      <li>• Sparse activation constraint</li>
                      <li>• L1 regularization</li>
                      <li>• Feature selection</li>
                      <li>• Interpretable features</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> Feature learning and selection</p>
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
                  <h3 className="text-xl font-semibold text-teal-600">📊 Data Processing</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Dimensionality Reduction</h4>
                      <p className="text-sm">Reduce high-dimensional data</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Feature Learning</h4>
                      <p className="text-sm">Extract meaningful features</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Data Compression</h4>
                      <p className="text-sm">Efficient storage and transmission</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🔍 Anomaly Detection</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fraud Detection</h4>
                      <p className="text-sm">Identify unusual transactions</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Network Security</h4>
                      <p className="text-sm">Detect cyber attacks</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Quality Control</h4>
                      <p className="text-sm">Find defective products</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎨 Creative Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-teal-600">Image Generation</h4>
                    <p className="text-sm">Create new images from latent space</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600">Style Transfer</h4>
                    <p className="text-sm">Apply artistic styles to images</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Audio Processing</h4>
                    <p className="text-sm">Enhance and compress audio</p>
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
                  <h3 className="text-xl font-semibold text-teal-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Autoencoder = Auto + Encoder</h4>
                      <p className="text-sm">Automatically encodes and decodes data</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Bottleneck = Narrow Passage</h4>
                      <p className="text-sm">Like a bottleneck that compresses information</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Latent = Hidden</h4>
                      <p className="text-sm">Latent space contains hidden features</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">File Compression</h4>
                      <p className="text-sm">Like ZIP files that compress and decompress data</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Memory Palace</h4>
                      <p className="text-sm">Like storing information in a compressed mental space</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Translation</h4>
                      <p className="text-sm">Like translating between two languages through an intermediate</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-teal-600">Encoder</h4>
                    <p className="text-sm">Compresses data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-600">Latent</h4>
                    <p className="text-sm">Hidden features</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Decoder</h4>
                    <p className="text-sm">Reconstructs data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Loss</h4>
                    <p className="text-sm">Reconstruction error</p>
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

export default Autoencoders; 