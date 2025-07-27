'use client';

import React, { useState } from 'react';

const CNN: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🖼️' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'layers', label: 'Layers', icon: '📊' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
          🖼️ Convolutional Neural Networks
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master CNNs - the revolutionary neural networks designed for processing grid-like data such as images
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
                ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What are CNNs?</h2>
            <p className="text-lg mb-6">
              Convolutional Neural Networks (CNNs) are specialized neural networks designed to process data with a grid-like topology, 
              such as images, by using convolutional layers that automatically learn spatial hierarchies of features.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">🎯 Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Convolutional Layers:</strong> Extract spatial features</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Pooling Layers:</strong> Reduce spatial dimensions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Parameter Sharing:</strong> Efficient weight reuse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Translation Invariance:</strong> Robust to position shifts</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Excellent for image processing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Parameter efficiency</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Hierarchical feature learning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Robust to variations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏗️ CNN Architecture</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Input Layer</h4>
                  <p className="text-sm">Raw image data</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Convolutional Layers</h4>
                  <p className="text-sm">Feature extraction</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Fully Connected</h4>
                  <p className="text-sm">Classification</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-4">🎯 Common Architectures</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">LeNet-5</h4>
                  <p className="text-sm">First successful CNN</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">AlexNet</h4>
                  <p className="text-sm">Deep learning breakthrough</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">ResNet</h4>
                  <p className="text-sm">Residual connections</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🚀 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🖼️</span>
                  <span>Image Classification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🎯</span>
                  <span>Object Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">👤</span>
                  <span>Face Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🏥</span>
                  <span>Medical Imaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">CNN Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🏗️ Core Components</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Convolutional Layer</h4>
                      <p className="text-sm">Apply filters to extract features</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Pooling Layer</h4>
                      <p className="text-sm">Reduce spatial dimensions</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Activation Function</h4>
                      <p className="text-sm">Introduce non-linearity</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fully Connected</h4>
                      <p className="text-sm">Final classification</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">📐 Feature Hierarchy</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`Early Layers:
├── Edges and textures
├── Simple patterns
└── Basic shapes

Middle Layers:
├── Complex patterns
├── Object parts
└── Intermediate features

Late Layers:
├── High-level features
├── Object concepts
└── Semantic information`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔄 Information Flow</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Input</h4>
                    <p className="text-sm">Raw image pixels</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Convolution</h4>
                    <p className="text-sm">Extract features</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Pooling</h4>
                    <p className="text-sm">Reduce size</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Classification</h4>
                    <p className="text-sm">Predict class</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'layers' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">CNN Layers</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔍 Convolutional Layer</h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Extract spatial features</p>
                    <ul className="text-sm space-y-1">
                      <li>• Apply filters (kernels) to input</li>
                      <li>• Detect patterns and features</li>
                      <li>• Parameter sharing across spatial locations</li>
                      <li>• Translation invariance</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Parameters:</strong> Filter size, stride, padding</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">📉 Pooling Layer</h3>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Reduce spatial dimensions</p>
                    <ul className="text-sm space-y-1">
                      <li>• Downsample feature maps</li>
                      <li>• Reduce computational cost</li>
                      <li>• Provide translation invariance</li>
                      <li>• Control overfitting</li>
                    </ul>
                    <p className="mt-3 text-sm"><strong>Types:</strong> Max, Average, Global</p>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚡ Activation Layer</h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Introduce non-linearity</p>
                    <ul className="text-sm space-y-1">
                      <li>• ReLU: Most common choice</li>
                      <li>• Leaky ReLU: Avoid dead neurons</li>
                      <li>• ELU: Smooth activation</li>
                      <li>• Swish: Self-gated activation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔗 Fully Connected Layer</h3>
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Purpose:</strong> Final classification</p>
                    <ul className="text-sm space-y-1">
                      <li>• Flatten feature maps</li>
                      <li>• Learn complex patterns</li>
                      <li>• Output class probabilities</li>
                      <li>• Usually last few layers</li>
                    </ul>
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
                  <h3 className="text-xl font-semibold text-blue-600">🖼️ Computer Vision</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Image Classification</h4>
                      <p className="text-sm">Categorize images into classes</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Object Detection</h4>
                      <p className="text-sm">Locate and classify objects</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Semantic Segmentation</h4>
                      <p className="text-sm">Pixel-level classification</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🏥 Medical Applications</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Medical Imaging</h4>
                      <p className="text-sm">X-ray, MRI, CT scan analysis</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Disease Detection</h4>
                      <p className="text-sm">Identify abnormalities</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Drug Discovery</h4>
                      <p className="text-sm">Analyze molecular structures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🚗 Autonomous Systems</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Self-Driving Cars</h4>
                    <p className="text-sm">Road scene understanding</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Robotics</h4>
                    <p className="text-sm">Object manipulation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Drones</h4>
                    <p className="text-sm">Aerial image analysis</p>
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
                  <h3 className="text-xl font-semibold text-blue-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">CNN = Convolutional Neural Network</h4>
                      <p className="text-sm">Convolutional layers process images like a network</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Filter = Feature Detector</h4>
                      <p className="text-sm">Filters detect specific features in images</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Pooling = Reduce Size</h4>
                      <p className="text-sm">Pooling reduces the size like a pool collects water</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Visual Cortex</h4>
                      <p className="text-sm">Like the human visual system processing images</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Microscope</h4>
                      <p className="text-sm">Filters zoom in on specific patterns</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Assembly Line</h4>
                      <p className="text-sm">Each layer processes and refines the information</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Convolution</h4>
                    <p className="text-sm">Extract features</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Pooling</h4>
                    <p className="text-sm">Reduce size</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Activation</h4>
                    <p className="text-sm">Add non-linearity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">FC Layer</h4>
                    <p className="text-sm">Classify</p>
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

export default CNN; 