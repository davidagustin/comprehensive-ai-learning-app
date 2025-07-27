'use client';

import React, { useState } from 'react';

const Transformers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '⚡' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'implementation', label: 'Implementation', icon: '⚙️' },
    { id: 'applications', label: 'Applications', icon: '🎯' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
          ⚡ Transformers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the transformer architecture that revolutionized natural language processing and enabled modern AI breakthroughs
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
            <h2 className="text-2xl font-bold mb-4">What are Transformers?</h2>
            <p className="text-lg mb-6">
              Transformers are a revolutionary neural network architecture that uses self-attention mechanisms to process sequential data, 
              eliminating the need for recurrent connections and enabling parallel processing.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">🎯 Key Innovations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Self-Attention:</strong> Direct connections between all positions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Parallel Processing:</strong> No sequential dependencies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Positional Encoding:</strong> Preserves sequence order</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span><strong>Multi-Head Attention:</strong> Multiple attention mechanisms</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-green-600">🚀 Advantages</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Captures long-range dependencies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Highly parallelizable</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Scalable to large models</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Interpretable attention patterns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🏗️ Architecture Components</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Encoder</h4>
                  <p className="text-sm">Processes input sequence</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Decoder</h4>
                  <p className="text-sm">Generates output sequence</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Attention Layers</h4>
                  <p className="text-sm">Multi-head self-attention</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 mb-4">📊 Model Variants</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">BERT</h4>
                  <p className="text-sm">Bidirectional encoder</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">GPT</h4>
                  <p className="text-sm">Unidirectional decoder</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">T5</h4>
                  <p className="text-sm">Encoder-decoder</p>
                </div>
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
                  <span>Text Generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">❓</span>
                  <span>Question Answering</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">📊</span>
                  <span>Text Classification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Transformer Architecture</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔧 Core Components</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Input Embedding</h4>
                      <p className="text-sm">Convert tokens to vectors</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Positional Encoding</h4>
                      <p className="text-sm">Add position information</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Multi-Head Attention</h4>
                      <p className="text-sm">Compute attention weights</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Feed Forward</h4>
                      <p className="text-sm">Process each position</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🔄 Layer Structure</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`Encoder Layer:
├── Multi-Head Attention
├── Add & Norm
├── Feed Forward
└── Add & Norm

Decoder Layer:
├── Masked Multi-Head Attention
├── Add & Norm
├── Multi-Head Attention
├── Add & Norm
├── Feed Forward
└── Add & Norm`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">📐 Positional Encoding</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Sinusoidal</h4>
                    <p className="text-sm">Original transformer encoding</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Learned</h4>
                    <p className="text-sm">Trainable position embeddings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Relative</h4>
                    <p className="text-sm">Position relative to current token</p>
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
                  <h3 className="text-xl font-semibold text-blue-600">🐍 Python Implementation</h3>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
{`import torch
import torch.nn as nn
import math

class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super().__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2) * 
                           -(math.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0)
        self.register_buffer('pe', pe)
    
    def forward(self, x):
        return x + self.pe[:, :x.size(1)]

class TransformerEncoderLayer(nn.Module):
    def __init__(self, d_model, n_heads, d_ff, dropout=0.1):
        super().__init__()
        self.self_attn = nn.MultiheadAttention(d_model, n_heads, dropout=dropout)
        self.feed_forward = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Dropout(dropout),
            nn.Linear(d_ff, d_model)
        )
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)
    
    def forward(self, x):
        # Self-attention
        attn_output, _ = self.self_attn(x, x, x)
        x = self.norm1(x + self.dropout(attn_output))
        
        # Feed forward
        ff_output = self.feed_forward(x)
        x = self.norm2(x + self.dropout(ff_output))
        
        return x

class Transformer(nn.Module):
    def __init__(self, vocab_size, d_model, n_heads, n_layers, d_ff, max_len=5000):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        self.pos_encoding = PositionalEncoding(d_model, max_len)
        self.encoder_layers = nn.ModuleList([
            TransformerEncoderLayer(d_model, n_heads, d_ff)
            for _ in range(n_layers)
        ])
        self.dropout = nn.Dropout(0.1)
    
    def forward(self, x):
        x = self.embedding(x) * math.sqrt(self.embedding.embedding_dim)
        x = self.pos_encoding(x)
        x = self.dropout(x)
        
        for layer in self.encoder_layers:
            x = layer(x)
        
        return x`}
                    </pre>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🔧 Key Parameters</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">d_model</h4>
                      <p className="text-sm">Dimension of embeddings and hidden states</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">n_heads</h4>
                      <p className="text-sm">Number of attention heads</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">n_layers</h4>
                      <p className="text-sm">Number of transformer layers</p>
                    </div>
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">d_ff</h4>
                      <p className="text-sm">Dimension of feed-forward network</p>
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
                  <h3 className="text-xl font-semibold text-blue-600">🤖 Language Models</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">GPT Series</h4>
                      <p className="text-sm">Text generation and completion</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">BERT</h4>
                      <p className="text-sm">Bidirectional understanding</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">T5</h4>
                      <p className="text-sm">Text-to-text transfer</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Specific Tasks</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Machine Translation</h4>
                      <p className="text-sm">Sequence-to-sequence translation</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Summarization</h4>
                      <p className="text-sm">Extractive and abstractive</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Question Answering</h4>
                      <p className="text-sm">Reading comprehension</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🚀 Model Scaling</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-600">Small Models</h4>
                    <p className="text-sm">BERT-base: 110M parameters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Large Models</h4>
                    <p className="text-sm">GPT-3: 175B parameters</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Efficient Models</h4>
                    <p className="text-sm">DistilBERT, MobileBERT</p>
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
                      <h4 className="font-semibold">TRAIN = Transformers Rule AI Now</h4>
                      <p className="text-sm">Remember that transformers dominate modern AI</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">ATTENTION = All Tokens Talk To Each Other</h4>
                      <p className="text-sm">Every token can attend to every other token</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">PE = Position Encoding</h4>
                      <p className="text-sm">Adds position information to embeddings</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Social Network</h4>
                      <p className="text-sm">Each person (token) can connect to everyone else</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Spotlight System</h4>
                      <p className="text-sm">Multiple spotlights (heads) focus on different aspects</p>
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
                    <h4 className="font-semibold text-blue-600">Encoder</h4>
                    <p className="text-sm">Processes input</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Decoder</h4>
                    <p className="text-sm">Generates output</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Attention</h4>
                    <p className="text-sm">Connects all positions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Position</h4>
                    <p className="text-sm">Preserves order</p>
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

export default Transformers; 