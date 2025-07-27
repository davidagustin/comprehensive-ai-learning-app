'use client';

import React, { useState } from 'react';

const DataAugmentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔄' },
    { id: 'techniques', label: 'Techniques', icon: '🎯' },
    { id: 'domains', label: 'Domain-Specific', icon: '🌍' },
    { id: 'strategies', label: 'Strategies', icon: '📈' },
    { id: 'tools', label: 'Tools & Libraries', icon: '🛠️' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          🔄 Data Augmentation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn techniques to expand your dataset and improve model generalization through intelligent data synthesis.
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
              <h2 className="text-2xl font-bold mb-4">What is Data Augmentation?</h2>
              <p className="text-lg mb-6">
                Data augmentation is a technique used to increase the diversity and size of training datasets by creating modified versions of existing data samples.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Increased Dataset Size:</strong> More training examples</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Better Generalization:</strong> Reduced overfitting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Improved Robustness:</strong> Handle variations in data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Cost Effective:</strong> Reduce data collection costs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-emerald-600">🔍 When to Use</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">→</span>
                      <span><strong>Small Datasets:</strong> Limited training data available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">→</span>
                      <span><strong>Class Imbalance:</strong> Uneven distribution of classes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">→</span>
                      <span><strong>Overfitting:</strong> Model memorizes training data</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-emerald-500 mt-1">→</span>
                      <span><strong>Domain Adaptation:</strong> Adapt to new environments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 Augmentation Pipeline</h3>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Original Data</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔧</div>
                    <p className="font-semibold">Apply Transformations</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <p className="font-semibold">Validate Quality</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="font-semibold">Enhanced Dataset</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'techniques' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Data Augmentation Techniques</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🖼️ Image Augmentation</h3>
                  <p className="mb-2">Transform images while preserving their semantic meaning.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Geometric:</strong> Rotation, scaling, flipping, cropping, translation</p>
                    <p className="text-sm"><strong>Color:</strong> Brightness, contrast, saturation, hue adjustment</p>
                    <p className="text-sm"><strong>Noise:</strong> Gaussian noise, salt-and-pepper, blur</p>
                    <p className="text-sm"><strong>Advanced:</strong> Cutout, mixup, cutmix, style transfer</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📝 Text Augmentation</h3>
                  <p className="mb-2">Create variations of text data while maintaining meaning.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Synonym Replacement:</strong> Replace words with synonyms</p>
                    <p className="text-sm"><strong>Back Translation:</strong> Translate to another language and back</p>
                    <p className="text-sm"><strong>Random Insertion/Deletion:</strong> Add or remove words</p>
                    <p className="text-sm"><strong>Paraphrasing:</strong> Rewrite sentences with same meaning</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔢 Numerical Augmentation</h3>
                  <p className="mb-2">Generate variations of numerical data.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Noise Addition:</strong> Add random noise to values</p>
                    <p className="text-sm"><strong>Scaling:</strong> Multiply by random factors</p>
                    <p className="text-sm"><strong>Interpolation:</strong> Create intermediate values</p>
                    <p className="text-sm"><strong>SMOTE:</strong> Synthetic Minority Over-sampling Technique</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎵 Audio Augmentation</h3>
                  <p className="mb-2">Modify audio signals for speech and music applications.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Time Stretching:</strong> Change speed without pitch</p>
                    <p className="text-sm"><strong>Pitch Shifting:</strong> Modify frequency content</p>
                    <p className="text-sm"><strong>Noise Addition:</strong> Add background noise</p>
                    <p className="text-sm"><strong>Time Shifting:</strong> Shift audio in time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'domains' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Domain-Specific Augmentation</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">🏥 Medical Imaging</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Elastic Deformation:</strong> Simulate tissue movement</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Intensity Variations:</strong> Different scanning conditions</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Anatomical Variations:</strong> Patient-specific differences</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Artifact Simulation:</strong> Realistic imaging artifacts</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🚗 Autonomous Driving</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Weather Conditions:</strong> Rain, snow, fog simulation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Lighting Changes:</strong> Day, night, shadows</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Camera Angles:</strong> Different viewpoints</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Traffic Scenarios:</strong> Various driving conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Domain Considerations</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600">Realism</h4>
                      <p className="text-sm">Augmentations should be realistic for the domain</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Preservation</h4>
                      <p className="text-sm">Maintain important features and labels</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Diversity</h4>
                      <p className="text-sm">Create varied but representative samples</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'strategies' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Augmentation Strategies</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-4">📊 Strategy Types</h3>
                    <ul className="space-y-2">
                      <li><strong>Basic:</strong> Simple transformations (rotation, flipping)</li>
                      <li><strong>Advanced:</strong> Complex techniques (GANs, style transfer)</li>
                      <li><strong>Adaptive:</strong> Learn optimal augmentations</li>
                      <li><strong>Curriculum:</strong> Gradually increase difficulty</li>
                      <li><strong>Ensemble:</strong> Combine multiple techniques</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-600 mb-4">⚙️ Implementation</h3>
                    <ul className="space-y-2">
                      <li><strong>Online:</strong> Apply during training</li>
                      <li><strong>Offline:</strong> Pre-generate augmented data</li>
                      <li><strong>Hybrid:</strong> Combine both approaches</li>
                      <li><strong>Conditional:</strong> Apply based on data characteristics</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Best Practices</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600">Validation</h4>
                      <p className="text-sm">Test augmentations on validation set</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-emerald-600">Balance</h4>
                      <p className="text-sm">Don't over-augment or under-augment</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Monitoring</h4>
                      <p className="text-sm">Track impact on model performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Tools & Libraries</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🖼️ Image Augmentation</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-green-600">Albumentations</h4>
                      <p className="text-sm">Fast image augmentation library for deep learning</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">imgaug</h4>
                      <p className="text-sm">Comprehensive image augmentation library</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">torchvision.transforms</h4>
                      <p className="text-sm">PyTorch's built-in image transformations</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📝 Text Augmentation</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">nlpaug</h4>
                      <p className="text-sm">Comprehensive text augmentation library</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">TextAttack</h4>
                      <p className="text-sm">Framework for adversarial text generation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">transformers</h4>
                      <p className="text-sm">Use pre-trained models for paraphrasing</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔢 General Purpose</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">imbalanced-learn</h4>
                      <p className="text-sm">Tools for handling imbalanced datasets</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600">AugLy</h4>
                      <p className="text-sm">Multi-modal augmentation library by Facebook</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600">AutoAugment</h4>
                      <p className="text-sm">Automated augmentation policy search</p>
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
              <h2 className="text-2xl font-bold mb-4">Memory Techniques & Mnemonics</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-600">🔄 AUGMENT Acronym</h3>
                  <p className="mb-4">Remember the key aspects of data augmentation:</p>
                  <ul className="space-y-2">
                    <li><strong>A</strong>dd - Add new samples to dataset</li>
                    <li><strong>U</strong>se - Use domain knowledge</li>
                    <li><strong>G</strong>eneralize - Improve model generalization</li>
                    <li><strong>M</strong>aintain - Preserve data meaning</li>
                    <li><strong>E</strong>valuate - Test augmentation quality</li>
                    <li><strong>N</strong>ormalize - Apply appropriate scaling</li>
                    <li><strong>T</strong>ransform - Apply various transformations</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Technique Memory</h3>
                  <p className="mb-4">Remember augmentation techniques with this hierarchy:</p>
                  <ul className="space-y-2">
                    <li><strong>Basic:</strong> "Simple changes" (rotation, flipping, scaling)</li>
                    <li><strong>Color:</strong> "Visual adjustments" (brightness, contrast, hue)</li>
                    <li><strong>Noise:</strong> "Add randomness" (Gaussian, salt-and-pepper)</li>
                    <li><strong>Advanced:</strong> "Complex transformations" (GANs, style transfer)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📊 Strategy Memory</h3>
                  <p className="mb-4">Remember augmentation strategies with "ROPE":</p>
                  <ul className="space-y-2">
                    <li><strong>R</strong>ealistic - Keep augmentations realistic</li>
                    <li><strong>O</strong>verfitting - Prevent overfitting</li>
                    <li><strong>P</strong>reservation - Maintain important features</li>
                    <li><strong>E</strong>valuation - Always evaluate impact</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🛠️ Tools Rhyme</h3>
                  <p className="mb-4">"Albument, augment, transform, repeat"</p>
                  <ul className="space-y-2">
                    <li><strong>Albument:</strong> Albumentations for images</li>
                    <li><strong>Augment:</strong> nlpaug for text</li>
                    <li><strong>Transform:</strong> torchvision transforms</li>
                    <li><strong>Repeat:</strong> Apply consistently across dataset</li>
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
            Take the quiz to reinforce what you've learned about data augmentation!
          </p>
          <button 
            onClick={() => {
              // Navigate to quiz section
              window.location.hash = 'quiz';
              // Trigger a custom event to notify the parent component
              window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                detail: { section: 'data-augmentation' } 
              }));
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
          >
            🎯 Take Data Augmentation Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataAugmentation; 