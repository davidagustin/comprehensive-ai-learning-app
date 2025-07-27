'use client';

import React, { useState } from 'react';

const LSTM: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🧠' },
    { id: 'architecture', label: 'Architecture', icon: '🏗️' },
    { id: 'gates', label: 'LSTM Gates', icon: '🚪' },
    { id: 'applications', label: 'Applications', icon: '🎯' },
    { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          🧠 Long Short-Term Memory (LSTM)
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover how LSTMs solve the vanishing gradient problem and capture long-term dependencies in sequences.
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
                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
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
              <h2 className="text-2xl font-bold mb-4">What are LSTMs?</h2>
              <p className="text-lg mb-4">
                Long Short-Term Memory (LSTM) networks are a type of RNN designed to capture long-term dependencies and avoid the vanishing gradient problem by using special gating mechanisms.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎯 Key Concepts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span><strong>Cell State:</strong> Memory that runs through the network</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span><strong>Gates:</strong> Control flow of information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span><strong>Long-Term Memory:</strong> Remembers information over long sequences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span><strong>Short-Term Memory:</strong> Handles recent information</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔍 Why LSTMs?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Solves Vanishing Gradient:</strong> Retains gradients over long sequences</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Captures Long-Term Dependencies:</strong> Remembers distant information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Widely Used:</strong> NLP, speech, time series</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Foundation:</strong> For GRU, attention, and transformers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">LSTM Architecture</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">📥 Input Layer</h3>
                  <p>Receives sequential data (e.g., words, time steps).</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔄 LSTM Cell</h3>
                  <p>Processes input, previous hidden state, and cell state at each time step.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🧠 Cell State</h3>
                  <p>Memory that flows through the network, modified by gates.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🚪 Gates</h3>
                  <p>Input, forget, and output gates control information flow.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">📤 Output Layer</h3>
                  <p>Produces output at each time step or at the end of the sequence.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'gates' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">LSTM Gates</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">Input Gate</h3>
                  <p>Controls how much new information flows into the cell state.</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-xl font-semibold text-pink-600">Forget Gate</h3>
                  <p>Decides what information to discard from the cell state.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">Output Gate</h3>
                  <p>Controls what information is output from the cell state.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Applications of LSTMs</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Text Generation:</strong> Generate text sequences</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Speech Recognition:</strong> Convert audio to text</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Time Series Forecasting:</strong> Predict future values</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Machine Translation:</strong> Translate text between languages</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Video Analysis:</strong> Understand video sequences</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'best-practices' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Use sequence padding and masking for variable-length inputs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Monitor for vanishing/exploding gradients</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Use dropout and regularization to prevent overfitting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Visualize cell states for interpretability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Consider GRU for simpler architectures</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeTab === 'mnemonics' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Memory Techniques & Mnemonics</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-pink-500 pl-4">
                  <h3 className="text-xl font-semibold text-pink-600">🧠 LSTM Acronym</h3>
                  <ul className="space-y-2">
                    <li><strong>L</strong>ong - Long-term memory</li>
                    <li><strong>S</strong>hort - Short-term memory</li>
                    <li><strong>T</strong>erm - Time steps in sequence</li>
                    <li><strong>M</strong>emory - Cell state and gates</li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🎯 Gate Memory</h3>
                  <ul className="space-y-2">
                    <li><strong>Input Gate:</strong> "Let new info in"</li>
                    <li><strong>Forget Gate:</strong> "Decide what to forget"</li>
                    <li><strong>Output Gate:</strong> "Control what comes out"</li>
                  </ul>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🧠 Application Rhyme</h3>
                  <ul className="space-y-2">
                    <li>"Remember, forget, output, see,</li>
                    <li>LSTMs learn dependencies!"</li>
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
            Take the quiz to reinforce what you've learned about LSTMs!
          </p>
          <button 
            onClick={() => {
              window.location.hash = 'quiz';
              window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                detail: { section: 'lstm' } 
              }));
            }}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
          >
            🎯 Take LSTM Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default LSTM; 