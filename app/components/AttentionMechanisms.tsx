'use client';

import React, { useState } from 'react';

const AttentionMechanisms: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '👁️' },
    { id: 'theory', label: 'Theory', icon: '🧠' },
    { id: 'implementation', label: 'Implementation', icon: '⚙️' },
    { id: 'applications', label: 'Applications', icon: '🎯' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          👁️ Attention Mechanisms
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the revolutionary attention mechanism that transformed neural networks and enabled modern AI breakthroughs
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
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
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
            <h2 className="text-2xl font-bold mb-4">What is Attention?</h2>
            <p className="text-lg mb-6">
              Attention is a mechanism that allows neural networks to focus on specific parts of input data when making predictions, 
              similar to how humans pay attention to relevant information.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600">🎯 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Query:</strong> What we're looking for</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Key:</strong> What we're matching against</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Value:</strong> What we retrieve</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span><strong>Attention Score:</strong> How relevant each item is</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-600">🚀 Why Attention?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Handles variable-length sequences</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Provides interpretability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Captures long-range dependencies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span>Enables parallel processing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🔍 Types of Attention</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Self-Attention</h4>
                  <p className="text-sm">Attention within the same sequence</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Cross-Attention</h4>
                  <p className="text-sm">Attention between different sequences</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Multi-Head Attention</h4>
                  <p className="text-sm">Multiple attention mechanisms in parallel</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📊 Attention Formula</h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm font-mono">
                  Attention(Q,K,V) = softmax(QK^T/√d_k)V
                </p>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p><strong>Q:</strong> Query matrix</p>
                <p><strong>K:</strong> Key matrix</p>
                <p><strong>V:</strong> Value matrix</p>
                <p><strong>d_k:</strong> Dimension of keys</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">🎯 Applications</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🤖</span>
                  <span>Machine Translation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">📝</span>
                  <span>Text Summarization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🖼️</span>
                  <span>Image Captioning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">🎵</span>
                  <span>Speech Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'theory' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Theoretical Foundation</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🧮 Mathematical Foundation</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm mb-2"><strong>1. Compute Attention Scores:</strong></p>
                    <p className="text-sm font-mono">scores = Q × K^T</p>
                    <p className="text-sm mb-2 mt-4"><strong>2. Scale Scores:</strong></p>
                    <p className="text-sm font-mono">scaled_scores = scores / √d_k</p>
                    <p className="text-sm mb-2 mt-4"><strong>3. Apply Softmax:</strong></p>
                    <p className="text-sm font-mono">attention_weights = softmax(scaled_scores)</p>
                    <p className="text-sm mb-2 mt-4"><strong>4. Compute Output:</strong></p>
                    <p className="text-sm font-mono">output = attention_weights × V</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🎯 Intuition</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Query-Key Matching</h4>
                      <p className="text-sm">Higher similarity between query and key = higher attention weight</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Softmax Normalization</h4>
                      <p className="text-sm">Converts scores to probabilities that sum to 1</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Scaling Factor</h4>
                      <p className="text-sm">Prevents gradients from becoming too large</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔄 Multi-Head Attention</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-600">Parallel Heads</h4>
                    <p className="text-sm">Multiple attention mechanisms run simultaneously</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Different Perspectives</h4>
                    <p className="text-sm">Each head learns different types of relationships</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Concatenation</h4>
                    <p className="text-sm">Outputs are concatenated and linearly transformed</p>
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
import torch.nn.functional as F
import math

def scaled_dot_product_attention(Q, K, V, mask=None):
    # Compute attention scores
    scores = torch.matmul(Q, K.transpose(-2, -1))
    
    # Scale scores
    d_k = Q.size(-1)
    scores = scores / math.sqrt(d_k)
    
    # Apply mask if provided
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    
    # Apply softmax
    attention_weights = F.softmax(scores, dim=-1)
    
    # Compute output
    output = torch.matmul(attention_weights, V)
    
    return output, attention_weights

class MultiHeadAttention(torch.nn.Module):
    def __init__(self, d_model, num_heads):
        super().__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads
        
        self.W_q = torch.nn.Linear(d_model, d_model)
        self.W_k = torch.nn.Linear(d_model, d_model)
        self.W_v = torch.nn.Linear(d_model, d_model)
        self.W_o = torch.nn.Linear(d_model, d_model)
    
    def forward(self, Q, K, V, mask=None):
        batch_size = Q.size(0)
        
        # Linear transformations
        Q = self.W_q(Q).view(batch_size, -1, self.num_heads, self.d_k)
        K = self.W_k(K).view(batch_size, -1, self.num_heads, self.d_k)
        V = self.W_v(V).view(batch_size, -1, self.num_heads, self.d_k)
        
        # Transpose for attention
        Q = Q.transpose(1, 2)
        K = K.transpose(1, 2)
        V = V.transpose(1, 2)
        
        # Apply attention
        output, attention_weights = scaled_dot_product_attention(Q, K, V, mask)
        
        # Concatenate heads
        output = output.transpose(1, 2).contiguous().view(
            batch_size, -1, self.d_model
        )
        
        # Final linear transformation
        output = self.W_o(output)
        
        return output, attention_weights`}
                    </pre>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔧 Key Components</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Linear Transformations</h4>
                      <p className="text-sm">W_q, W_k, W_v matrices transform input to Q, K, V</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Head Splitting</h4>
                      <p className="text-sm">Reshape to multiple attention heads</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Attention Computation</h4>
                      <p className="text-sm">Scaled dot-product attention for each head</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Output Projection</h4>
                      <p className="text-sm">W_o matrix combines all heads</p>
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
                  <h3 className="text-xl font-semibold text-purple-600">🤖 Natural Language Processing</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Machine Translation</h4>
                      <p className="text-sm">Attention helps align source and target words</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Text Summarization</h4>
                      <p className="text-sm">Focus on important sentences and phrases</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Question Answering</h4>
                      <p className="text-sm">Attention highlights relevant context</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🖼️ Computer Vision</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Image Captioning</h4>
                      <p className="text-sm">Attention focuses on relevant image regions</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Object Detection</h4>
                      <p className="text-sm">Attention highlights object locations</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Visual Question Answering</h4>
                      <p className="text-sm">Attention bridges vision and language</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Attention Visualization</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-600">Heatmaps</h4>
                    <p className="text-sm">Visualize attention weights as color intensity</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Alignment Plots</h4>
                    <p className="text-sm">Show source-target word alignments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Attention Heads</h4>
                    <p className="text-sm">Analyze what each attention head learns</p>
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
                      <h4 className="font-semibold">QKV = Question, Key, Value</h4>
                      <p className="text-sm">Think of it as asking a question (Q), finding the right key (K), and getting the value (V)</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Attention = Spotlight</h4>
                      <p className="text-sm">Like a spotlight focusing on important parts of a stage</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Multi-Head = Multiple Eyes</h4>
                      <p className="text-sm">Like having multiple eyes looking at different aspects</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Library Search</h4>
                      <p className="text-sm">Query = search term, Keys = book titles, Values = book content</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Restaurant Menu</h4>
                      <p className="text-sm">Query = what you want, Keys = menu items, Values = actual dishes</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Social Media Feed</h4>
                      <p className="text-sm">Query = your interests, Keys = post topics, Values = post content</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-600">Query</h4>
                    <p className="text-sm">What we're looking for</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Key</h4>
                    <p className="text-sm">What we match against</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Value</h4>
                    <p className="text-sm">What we retrieve</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Score</h4>
                    <p className="text-sm">How relevant it is</p>
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

export default AttentionMechanisms; 