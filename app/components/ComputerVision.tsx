'use client';

import React, { useState } from 'react';

const ComputerVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '👁️' },
    { id: 'tasks', label: 'Vision Tasks', icon: '🎯' },
    { id: 'preprocessing', label: 'Image Processing', icon: '🖼️' },
    { id: 'cnn-basics', label: 'CNN Basics', icon: '🔲' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          👁️ Computer Vision
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Teach computers to see, understand, and interpret visual information from the world around us.
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
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
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
              <h2 className="text-2xl font-bold mb-4">What is Computer Vision?</h2>
              <p className="text-lg mb-6">
                Computer Vision is a field of artificial intelligence that enables computers to interpret and understand visual information from images, videos, and other visual inputs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Core Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Image Understanding:</strong> Extract meaningful information from images</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Object Recognition:</strong> Identify and classify objects in images</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Spatial Understanding:</strong> Understand relationships between objects</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Visual Reasoning:</strong> Make decisions based on visual information</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔍 Key Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Variability:</strong> Objects look different from various angles</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Lighting:</strong> Changes in illumination affect appearance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Occlusion:</strong> Objects can be partially hidden</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Scale:</strong> Objects appear at different sizes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 Computer Vision Pipeline</h3>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📷</div>
                    <p className="font-semibold">Input Image</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔧</div>
                    <p className="font-semibold">Preprocessing</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🧠</div>
                    <p className="font-semibold">Feature Extraction</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="font-semibold">Classification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Computer Vision Tasks</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🏷️ Image Classification</h3>
                  <p className="mb-2">Assign a label to an entire image from a predefined set of categories.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> Classify an image as "cat", "dog", or "bird"</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📍 Object Detection</h3>
                  <p className="mb-2">Locate and classify multiple objects within an image using bounding boxes.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> Detect cars, pedestrians, and traffic signs in a street scene</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">✂️ Image Segmentation</h3>
                  <p className="mb-2">Assign a class label to each pixel in the image.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> Separate foreground objects from background</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔍 Feature Detection</h3>
                  <p className="mb-2">Identify specific points or features in images (corners, edges, keypoints).</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> Detect facial landmarks for face recognition</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-red-600">📐 Pose Estimation</h3>
                  <p className="mb-2">Estimate the pose (position and orientation) of objects or people.</p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> Track human body joints for motion analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preprocessing' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Image Preprocessing</h2>
              <p className="text-lg mb-6">
                Preprocessing transforms raw images into a format that's easier for algorithms to process and analyze.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔄 Common Operations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Resizing:</strong> Scale images to consistent dimensions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Normalization:</strong> Scale pixel values to [0,1] or [-1,1]</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Color Space Conversion:</strong> RGB to grayscale, HSV, etc.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Data Augmentation:</strong> Rotation, flipping, cropping</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Why Preprocess?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Consistency:</strong> Standardize input format</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Performance:</strong> Reduce computational complexity</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Robustness:</strong> Handle variations in input</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Training:</strong> Improve model convergence</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cnn-basics' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Convolutional Neural Networks (CNNs)</h2>
              <p className="text-lg mb-6">
                CNNs are specialized neural networks designed for processing grid-like data, such as images.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔲 Convolutional Layers</h3>
                    <p>Apply filters (kernels) to extract features like edges, textures, and patterns.</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Key Concept:</strong> Local receptive fields that scan the image</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">📊 Pooling Layers</h3>
                    <p>Reduce spatial dimensions while preserving important features.</p>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Types:</strong> Max pooling, average pooling</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-purple-600">🔗 Fully Connected Layers</h3>
                    <p>Make final predictions based on extracted features.</p>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <p className="text-sm"><strong>Purpose:</strong> Classification or regression</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎨 CNN Architecture Example</h3>
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Input Image (224×224×3)</p>
                    <p className="text-gray-600">↓</p>
                    <p className="font-semibold">Convolutional Layers (Feature Extraction)</p>
                    <p className="text-gray-600">↓</p>
                    <p className="font-semibold">Pooling Layers (Dimensionality Reduction)</p>
                    <p className="text-gray-600">↓</p>
                    <p className="font-semibold">Fully Connected Layers (Classification)</p>
                    <p className="text-gray-600">↓</p>
                    <p className="font-semibold">Output (Class Probabilities)</p>
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🚗 Autonomous Vehicles</h3>
                  <ul className="space-y-2">
                    <li>• Object detection for pedestrians and vehicles</li>
                    <li>• Lane detection and road segmentation</li>
                    <li>• Traffic sign recognition</li>
                    <li>• Obstacle avoidance</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🏥 Medical Imaging</h3>
                  <ul className="space-y-2">
                    <li>• Tumor detection in X-rays and MRIs</li>
                    <li>• Disease diagnosis from medical scans</li>
                    <li>• Surgical planning and guidance</li>
                    <li>• Drug discovery and analysis</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">📱 Mobile Applications</h3>
                  <ul className="space-y-2">
                    <li>• Face recognition and authentication</li>
                    <li>• Augmented reality filters</li>
                    <li>• QR code and barcode scanning</li>
                    <li>• Photo organization and tagging</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🏭 Industrial Applications</h3>
                  <ul className="space-y-2">
                    <li>• Quality control and defect detection</li>
                    <li>• Product counting and inventory</li>
                    <li>• Safety monitoring in factories</li>
                    <li>• Predictive maintenance</li>
                  </ul>
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
                  <h3 className="text-xl font-semibold text-yellow-600">👁️ VISION Acronym</h3>
                  <p className="mb-4">Remember the key aspects of computer vision:</p>
                  <ul className="space-y-2">
                    <li><strong>V</strong>isual - Processing visual information</li>
                    <li><strong>I</strong>mage - Working with images and videos</li>
                    <li><strong>S</strong>egmentation - Dividing images into parts</li>
                    <li><strong>I</strong>dentification - Recognizing objects and patterns</li>
                    <li><strong>O</strong>bject Detection - Locating objects in images</li>
                    <li><strong>N</strong>eural Networks - Using AI to process vision</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔲 CNN Memory Story</h3>
                  <p className="mb-4">Think of CNN layers as a detective investigation:</p>
                  <ul className="space-y-2">
                    <li><strong>Convolutional Layers:</strong> Detectives looking for clues (features)</li>
                    <li><strong>Pooling Layers:</strong> Summarizing findings (reducing information)</li>
                    <li><strong>Fully Connected:</strong> Making final decisions (classification)</li>
                    <li><strong>Filters/Kernels:</strong> Different types of magnifying glasses</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Vision Tasks Memory</h3>
                  <p className="mb-4">Remember vision tasks with this hierarchy:</p>
                  <ul className="space-y-2">
                    <li><strong>Classification:</strong> "What is this?" (whole image)</li>
                    <li><strong>Detection:</strong> "Where is it?" (bounding boxes)</li>
                    <li><strong>Segmentation:</strong> "What is each pixel?" (pixel-level)</li>
                    <li><strong>Pose:</strong> "How is it positioned?" (spatial relationships)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔄 Preprocessing Rhyme</h3>
                  <p className="mb-4">"Resize, normalize, augment, repeat"</p>
                  <ul className="space-y-2">
                    <li><strong>Resize:</strong> Make all images the same size</li>
                    <li><strong>Normalize:</strong> Scale pixel values to standard range</li>
                    <li><strong>Augment:</strong> Create variations for better training</li>
                    <li><strong>Repeat:</strong> Apply consistently to all images</li>
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
            Take the quiz to reinforce what you've learned about computer vision!
          </p>
          <button 
            onClick={() => {
              window.location.hash = 'quiz';
              window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                detail: { section: 'computer-vision' } 
              }));
            }}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            🎯 Take Computer Vision Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerVision; 