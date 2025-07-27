'use client';

import React, { useState } from 'react';

const GAN: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🎨' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'training', label: 'Training', icon: '🎯' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          🎨 Generative Adversarial Networks
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master GANs - the revolutionary framework that pits two neural networks against each other to generate realistic data
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
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What are GANs?</h2>
            <p className="text-lg mb-6">
              Generative Adversarial Networks (GANs) are a class of machine learning frameworks where two neural networks 
              compete against each other: a generator creates fake data, while a discriminator tries to distinguish real from fake.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-600">🎯 Key Components</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Generator:</strong> Creates fake data from noise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Discriminator:</strong> Distinguishes real from fake</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Adversarial Training:</strong> Networks compete</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Nash Equilibrium:</strong> Optimal balance</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>High-quality data generation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>No explicit probability model</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Versatile applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Creative content generation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">🎨 GAN Variants</h3>
              <div className="space-y-3">
                <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">DCGAN</h4>
                  <p className="text-sm">Deep Convolutional GAN</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">WGAN</h4>
                  <p className="text-sm">Wasserstein GAN</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">StyleGAN</h4>
                  <p className="text-sm">Style-based generation</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🎯 Training Process</h3>
              <div className="space-y-3">
                <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Generator Step</h4>
                  <p className="text-sm">Create fake data</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Discriminator Step</h4>
                  <p className="text-sm">Classify real vs fake</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Adversarial</h4>
                  <p className="text-sm">Networks compete</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🚀 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🖼️</span>
                  <span>Image Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🎵</span>
                  <span>Music Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📝</span>
                  <span>Text Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🎮</span>
                  <span>Game Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">GAN Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🏗️ Generator Network</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Input</h4>
                      <p className="text-sm">Random noise vector (z)</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Architecture</h4>
                      <p className="text-sm">Transposed convolutions</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Output</h4>
                      <p className="text-sm">Generated data (G(z))</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Goal</h4>
                      <p className="text-sm">Fool the discriminator</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔍 Discriminator Network</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Input</h4>
                      <p className="text-sm">Real or fake data</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Architecture</h4>
                      <p className="text-sm">Convolutional layers</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Output</h4>
                      <p className="text-sm">Probability (real/fake)</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Goal</h4>
                      <p className="text-sm">Distinguish real from fake</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">⚖️ Loss Functions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-pink-600">Generator Loss</h4>
                    <p className="text-sm">Minimize log(1 - D(G(z)))</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Discriminator Loss</h4>
                    <p className="text-sm">Maximize log(D(x)) + log(1 - D(G(z)))</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Adversarial</h4>
                    <p className="text-sm">Min-max game</p>
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
                  <h3 className="text-xl font-semibold text-pink-600">🎯 Training Steps</h3>
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Step 1: Train Discriminator</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Sample real data batch</li>
                      <li>2. Generate fake data batch</li>
                      <li>3. Train discriminator on both</li>
                      <li>4. Update discriminator weights</li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎨 Training Generator</h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Step 2: Train Generator</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Sample random noise</li>
                      <li>2. Generate fake data</li>
                      <li>3. Get discriminator predictions</li>
                      <li>4. Update generator weights</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">⚠️ Common Challenges</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-pink-600">Mode Collapse</h4>
                    <p className="text-sm">Generator produces limited variety</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Vanishing Gradients</h4>
                    <p className="text-sm">Discriminator becomes too good</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Training Instability</h4>
                    <p className="text-sm">Difficult to balance networks</p>
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
                  <h3 className="text-xl font-semibold text-pink-600">🖼️ Image Generation</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">StyleGAN</h4>
                      <p className="text-sm">High-quality face generation</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">BigGAN</h4>
                      <p className="text-sm">Large-scale image synthesis</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">CycleGAN</h4>
                      <p className="text-sm">Image-to-image translation</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎵 Audio & Video</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Music Generation</h4>
                      <p className="text-sm">Create original compositions</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Video Generation</h4>
                      <p className="text-sm">Generate video sequences</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Speech Synthesis</h4>
                      <p className="text-sm">Generate human-like speech</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔬 Scientific Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-pink-600">Drug Discovery</h4>
                    <p className="text-sm">Generate molecular structures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Medical Imaging</h4>
                    <p className="text-sm">Generate synthetic medical data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Material Science</h4>
                    <p className="text-sm">Design new materials</p>
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
                  <h3 className="text-xl font-semibold text-pink-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">GAN = Generator And Network</h4>
                      <p className="text-sm">Two networks: Generator and Adversarial Network</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Adversarial = Against Each Other</h4>
                      <p className="text-sm">Networks work against each other</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Min-Max = Minimize Maximum</h4>
                      <p className="text-sm">Generator minimizes, discriminator maximizes</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Art Forger vs Detective</h4>
                      <p className="text-sm">Generator is the forger, discriminator is the detective</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Student vs Teacher</h4>
                      <p className="text-sm">Generator learns, discriminator teaches</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Chess Players</h4>
                      <p className="text-sm">Two players improving by playing each other</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-pink-600">Generator</h4>
                    <p className="text-sm">Creates fake data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Discriminator</h4>
                    <p className="text-sm">Detects fake data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Adversarial</h4>
                    <p className="text-sm">Competitive training</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Equilibrium</h4>
                    <p className="text-sm">Optimal balance</p>
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

export default GAN; 