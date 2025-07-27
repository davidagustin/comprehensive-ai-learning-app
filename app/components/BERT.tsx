'use client';

import React, { useState } from 'react';

const BERT: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🤖' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'pretraining', label: 'Pre-training', icon: '🎯' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          🤖 BERT
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master Bidirectional Encoder Representations from Transformers - the revolutionary model that understands context from both directions
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
                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What is BERT?</h2>
            <p className="text-lg mb-6">
              BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based model that uses bidirectional context 
              to understand the meaning of words in relation to all other words in a sentence.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-orange-600">🎯 Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Bidirectional:</strong> Reads text from both directions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Contextual:</strong> Same word has different representations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Pre-trained:</strong> Trained on massive text corpus</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span><strong>Fine-tunable:</strong> Adaptable to specific tasks</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Better understanding of context</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>State-of-the-art performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Wide range of applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Strong transfer learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-600 mb-4">📊 Model Variants</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">BERT-Base</h4>
                  <p className="text-sm">110M parameters, 12 layers</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">BERT-Large</h4>
                  <p className="text-sm">340M parameters, 24 layers</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">DistilBERT</h4>
                  <p className="text-sm">66M parameters, 6 layers</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-red-600 mb-4">🎯 Pre-training Tasks</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">MLM</h4>
                  <p className="text-sm">Masked Language Modeling</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">NSP</h4>
                  <p className="text-sm">Next Sentence Prediction</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Tokenization</h4>
                  <p className="text-sm">WordPiece tokenization</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🚀 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">❓</span>
                  <span>Question Answering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">📝</span>
                  <span>Text Classification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🏷️</span>
                  <span>Named Entity Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🔗</span>
                  <span>Sentence Similarity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">BERT Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🏗️ Core Components</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Token Embeddings</h4>
                      <p className="text-sm">Convert tokens to vectors</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Position Embeddings</h4>
                      <p className="text-sm">Add position information</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Segment Embeddings</h4>
                      <p className="text-sm">Distinguish sentence pairs</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Transformer Encoders</h4>
                      <p className="text-sm">Multi-layer bidirectional processing</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">🔧 Model Details</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`BERT-Base Configuration:
├── Hidden Size: 768
├── Layers: 12
├── Attention Heads: 12
├── Parameters: 110M
└── Max Sequence: 512

BERT-Large Configuration:
├── Hidden Size: 1024
├── Layers: 24
├── Attention Heads: 16
├── Parameters: 340M
└── Max Sequence: 512`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📐 Input Format</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">[CLS] Token</h4>
                    <p className="text-sm">Classification token at start</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">[SEP] Token</h4>
                    <p className="text-sm">Separator between sentences</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">[MASK] Token</h4>
                    <p className="text-sm">Masked token for MLM task</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pretraining' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Pre-training Tasks</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🎯 Masked Language Modeling (MLM)</h3>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Process:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Randomly mask 15% of tokens</li>
                      <li>2. Replace with [MASK] token</li>
                      <li>3. Model predicts original tokens</li>
                      <li>4. Learn contextual representations</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Example:</strong> "The [MASK] is bright" → "The sun is bright"</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">🔗 Next Sentence Prediction (NSP)</h3>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="mb-2"><strong>Process:</strong></p>
                    <ol className="text-sm space-y-1">
                      <li>1. Take two sentences</li>
                      <li>2. 50% are consecutive (IsNext)</li>
                      <li>3. 50% are random (NotNext)</li>
                      <li>4. Predict if second follows first</li>
                    </ol>
                    <p className="mt-3 text-sm"><strong>Example:</strong> "I went to the store. I bought milk." → IsNext</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📚 Training Data</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">BooksCorpus</h4>
                    <p className="text-sm">800M words from books</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">English Wikipedia</h4>
                    <p className="text-sm">2,500M words from articles</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Total</h4>
                    <p className="text-sm">3,300M words combined</p>
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
                  <h3 className="text-xl font-semibold text-orange-600">❓ Question Answering</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">SQuAD</h4>
                      <p className="text-sm">Extract answer spans from context</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Natural Questions</h4>
                      <p className="text-sm">Long-form question answering</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">HotpotQA</h4>
                      <p className="text-sm">Multi-hop reasoning</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">📝 Text Classification</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Sentiment Analysis</h4>
                      <p className="text-sm">Positive/negative classification</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Topic Classification</h4>
                      <p className="text-sm">Categorize text by topic</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Intent Recognition</h4>
                      <p className="text-sm">Identify user intent</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔧 Fine-tuning Strategies</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">Feature Extraction</h4>
                    <p className="text-sm">Use BERT embeddings as features</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Fine-tuning</h4>
                    <p className="text-sm">Update all BERT parameters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Adapter Tuning</h4>
                    <p className="text-sm">Add small adapter layers</p>
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
                  <h3 className="text-xl font-semibold text-orange-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">BERT = Both Ends Read Text</h4>
                      <p className="text-sm">Reads from both directions</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">MLM = Mask, Learn, Model</h4>
                      <p className="text-sm">Mask tokens and learn to predict</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">NSP = Next Sentence Prediction</h4>
                      <p className="text-sm">Predict if sentences are consecutive</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-red-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Reading a Book</h4>
                      <p className="text-sm">Like reading a sentence while knowing what comes before and after</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Fill in the Blanks</h4>
                      <p className="text-sm">MLM is like a sophisticated fill-in-the-blank game</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Story Continuation</h4>
                      <p className="text-sm">NSP is like predicting if a story continues naturally</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-600">Bidirectional</h4>
                    <p className="text-sm">Reads both ways</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600">Contextual</h4>
                    <p className="text-sm">Same word, different meaning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Pre-trained</h4>
                    <p className="text-sm">Trained on massive data</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Fine-tunable</h4>
                    <p className="text-sm">Adaptable to tasks</p>
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

export default BERT; 