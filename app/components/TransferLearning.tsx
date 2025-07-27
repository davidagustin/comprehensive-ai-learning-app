'use client';

import React, { useState } from 'react';

const TransferLearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔄' },
    { id: 'techniques', label: 'Techniques', icon: '⚙️' },
    { id: 'implementation', label: 'Implementation', icon: '🐍' },
    { id: 'applications', label: 'Applications', icon: '🎯' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          🔄 Transfer Learning
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the art of transferring knowledge from pre-trained models to solve new tasks efficiently
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
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What is Transfer Learning?</h2>
            <p className="text-lg mb-6">
              Transfer learning is a machine learning technique where a model trained on one task is adapted to perform 
              a related but different task, leveraging previously learned knowledge.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Source Domain:</strong> Original task and data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Target Domain:</strong> New task and data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Knowledge Transfer:</strong> Reuse learned features</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Fine-tuning:</strong> Adapt to new task</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-indigo-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Reduced training time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Less data required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Better performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Cost-effective</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🔄 Transfer Types</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Inductive Transfer</h4>
                  <p className="text-sm">Same domain, different task</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Transductive Transfer</h4>
                  <p className="text-sm">Same task, different domain</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Unsupervised Transfer</h4>
                  <p className="text-sm">No labels in target domain</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">🎯 Common Scenarios</h3>
              <div className="space-y-3">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Image Classification</h4>
                  <p className="text-sm">ResNet → Custom classes</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">NLP Tasks</h4>
                  <p className="text-sm">BERT → Sentiment analysis</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Audio Processing</h4>
                  <p className="text-sm">Speech model → Music</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">📊 Benefits</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">⏱️</span>
                  <span>Faster training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">📈</span>
                  <span>Better accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">💰</span>
                  <span>Lower costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🎯</span>
                  <span>Less data needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'techniques' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Transfer Learning Techniques</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔧 Feature Extraction</h3>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Process:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Use pre-trained model as feature extractor</li>
                      <li>2. Freeze all pre-trained layers</li>
                      <li>3. Add new classification head</li>
                      <li>4. Train only the new layers</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> When target dataset is small</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🎯 Fine-tuning</h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Process:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Load pre-trained weights</li>
                      <li>2. Unfreeze some/all layers</li>
                      <li>3. Use lower learning rate</li>
                      <li>4. Train on target data</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Use Case:</strong> When target dataset is larger</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎛️ Fine-tuning Strategies</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-600">Layer-wise</h4>
                    <p className="text-sm">Unfreeze layers gradually</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600">Differential Learning</h4>
                    <p className="text-sm">Different rates for different layers</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Selective</h4>
                    <p className="text-sm">Choose specific layers to fine-tune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'implementation' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Implementation Guide</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🐍 Python Implementation</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`import torch
import torch.nn as nn
from torchvision import models

# Load pre-trained model
model = models.resnet50(pretrained=True)

# Freeze all layers
for param in model.parameters():
    param.requires_grad = False

# Replace classifier
num_classes = 10
model.fc = nn.Linear(model.fc.in_features, num_classes)

# Feature extraction approach
def feature_extraction(model, train_loader, epochs=10):
    # Only train the new classifier
    optimizer = torch.optim.Adam(model.fc.parameters())
    criterion = nn.CrossEntropyLoss()
    
    for epoch in range(epochs):
        for inputs, labels in train_loader:
            optimizer.zero_grad()
            outputs = model(inputs)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()

# Fine-tuning approach
def fine_tuning(model, train_loader, epochs=10):
    # Unfreeze some layers
    for param in model.layer4.parameters():
        param.requires_grad = True
    
    # Use lower learning rate
    optimizer = torch.optim.Adam([
        {'params': model.fc.parameters(), 'lr': 0.001},
        {'params': model.layer4.parameters(), 'lr': 0.0001}
    ])
    
    criterion = nn.CrossEntropyLoss()
    
    for epoch in range(epochs):
        for inputs, labels in train_loader:
            optimizer.zero_grad()
            outputs = model(inputs)
            loss = criterion(outputs, labels)
            loss.backward()
            optimizer.step()`}
                    </pre>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🔧 Best Practices</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Learning Rate</h4>
                      <p className="text-sm">Use lower LR for pre-trained layers</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Data Augmentation</h4>
                      <p className="text-sm">Especially important for small datasets</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Early Stopping</h4>
                      <p className="text-sm">Prevent overfitting</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Validation</h4>
                      <p className="text-sm">Monitor performance carefully</p>
                    </div>
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
                  <h3 className="text-xl font-semibold text-purple-600">🖼️ Computer Vision</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Medical Imaging</h4>
                      <p className="text-sm">ImageNet → X-ray classification</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Object Detection</h4>
                      <p className="text-sm">COCO → Custom objects</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Style Transfer</h4>
                      <p className="text-sm">VGG → Artistic styles</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">📝 Natural Language Processing</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Sentiment Analysis</h4>
                      <p className="text-sm">BERT → Domain-specific sentiment</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Text Classification</h4>
                      <p className="text-sm">GPT → Custom categories</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Translation</h4>
                      <p className="text-sm">Multi-language → New language pair</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Domain Adaptation</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-600">Cross-Domain</h4>
                    <p className="text-sm">Adapt to different data distributions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600">Multi-Task</h4>
                    <p className="text-sm">Learn multiple related tasks</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Incremental</h4>
                    <p className="text-sm">Add new classes gradually</p>
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
                  <h3 className="text-xl font-semibold text-purple-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Transfer = Take + Transform</h4>
                      <p className="text-sm">Take knowledge and transform it for new use</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fine-tuning = Fine + Tuning</h4>
                      <p className="text-sm">Fine adjustments to tune the model</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Feature Extraction = Extract + Features</h4>
                      <p className="text-sm">Extract useful features from pre-trained model</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Learning to Drive</h4>
                      <p className="text-sm">Like learning to drive a car after knowing how to ride a bike</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Cooking Skills</h4>
                      <p className="text-sm">Like using cooking skills to make different cuisines</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Language Learning</h4>
                      <p className="text-sm">Like learning Spanish after knowing French</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-600">Source</h4>
                    <p className="text-sm">Original task</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600">Target</h4>
                    <p className="text-sm">New task</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Extract</h4>
                    <p className="text-sm">Use as features</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Fine-tune</h4>
                    <p className="text-sm">Adapt layers</p>
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

export default TransferLearning; 