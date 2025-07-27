'use client';

import React, { useState } from 'react';

const NLP: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '💬' },
    { id: 'tasks', label: 'NLP Tasks', icon: '🎯' },
    { id: 'preprocessing', label: 'Text Processing', icon: '📝' },
    { id: 'embeddings', label: 'Word Embeddings', icon: '🔤' },
    { id: 'models', label: 'Language Models', icon: '🤖' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          💬 Natural Language Processing
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Teach computers to understand, interpret, and generate human language through advanced AI techniques.
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
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
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
              <h2 className="text-2xl font-bold mb-4">What is Natural Language Processing?</h2>
              <p className="text-lg mb-6">
                Natural Language Processing (NLP) is a branch of artificial intelligence that helps computers understand, interpret, and manipulate human language.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎯 Core Goals</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Understanding:</strong> Comprehend the meaning of text</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Generation:</strong> Create human-like text</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Translation:</strong> Convert between languages</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span><strong>Analysis:</strong> Extract insights from text</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔍 Key Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Ambiguity:</strong> Words can have multiple meanings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Context:</strong> Meaning depends on surrounding words</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Variability:</strong> Same meaning expressed differently</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-purple-500 mt-1">→</span>
                      <span><strong>Languages:</strong> Different structures and rules</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 NLP Pipeline</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">📝</div>
                    <p className="font-semibold">Raw Text</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔧</div>
                    <p className="font-semibold">Preprocessing</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔤</div>
                    <p className="font-semibold">Tokenization</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🧠</div>
                    <p className="font-semibold">Analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">NLP Tasks</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🏷️ Text Classification</h3>
                  <p className="mb-2">Assign categories or labels to text based on its content.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Sentiment analysis, spam detection, topic classification</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🔍 Named Entity Recognition (NER)</h3>
                  <p className="mb-2">Identify and classify named entities like people, organizations, locations.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> "Apple Inc. is headquartered in Cupertino, California"</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🔄 Machine Translation</h3>
                  <p className="mb-2">Translate text from one language to another while preserving meaning.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> English to Spanish, French to German</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">❓ Question Answering</h3>
                  <p className="mb-2">Answer questions based on given context or knowledge base.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Example:</strong> "What is the capital of France?" → "Paris"</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-red-600">📝 Text Generation</h3>
                  <p className="mb-2">Generate human-like text based on prompts or context.</p>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Story writing, code generation, summarization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preprocessing' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Text Preprocessing</h2>
              <p className="text-lg mb-6">
                Text preprocessing transforms raw text into a format that's easier for NLP models to process and understand.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔧 Common Steps</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Tokenization:</strong> Split text into words or subwords</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Lowercasing:</strong> Convert all text to lowercase</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Stop Word Removal:</strong> Remove common words like "the", "is", "at"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span><strong>Stemming/Lemmatization:</strong> Reduce words to root form</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Why Preprocess?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Standardization:</strong> Consistent text format</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Noise Reduction:</strong> Remove irrelevant information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Dimensionality:</strong> Reduce vocabulary size</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">→</span>
                      <span><strong>Performance:</strong> Improve model efficiency</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">📝 Example: Text Preprocessing Pipeline</h3>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">Original:</span>
                    <span className="text-gray-600">"The quick brown fox jumps over the lazy dog!"</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">Lowercase:</span>
                    <span className="text-gray-600">"the quick brown fox jumps over the lazy dog!"</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">Tokenized:</span>
                    <span className="text-gray-600">["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">No Stop Words:</span>
                    <span className="text-gray-600">["quick", "brown", "fox", "jumps", "lazy", "dog"]</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-semibold">Stemmed:</span>
                    <span className="text-gray-600">["quick", "brown", "fox", "jump", "lazi", "dog"]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'embeddings' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Word Embeddings</h2>
              <p className="text-lg mb-6">
                Word embeddings represent words as dense vectors in a continuous vector space, capturing semantic relationships between words.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔤 What are Embeddings?</h3>
                    <ul className="space-y-2">
                      <li>• Convert words to numerical vectors</li>
                      <li>• Capture semantic meaning</li>
                      <li>• Enable mathematical operations on words</li>
                      <li>• Represent relationships between words</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">🎯 Key Properties</h3>
                    <ul className="space-y-2">
                      <li>• Similar words have similar vectors</li>
                      <li>• Vector operations preserve meaning</li>
                      <li>• Dense representation (not sparse)</li>
                      <li>• Learned from large text corpora</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🔢 Popular Embedding Models</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Word2Vec</h4>
                      <p className="text-sm">Predicts surrounding words given a target word</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">GloVe</h4>
                      <p className="text-sm">Uses global word co-occurrence statistics</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">FastText</h4>
                      <p className="text-sm">Uses character n-grams for subword information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'models' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Language Models</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔄 Recurrent Neural Networks (RNN)</h3>
                  <p className="mb-2">Process sequential data by maintaining hidden state information.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Can handle variable-length sequences</p>
                    <p className="text-sm"><strong>Limitations:</strong> Vanishing gradient problem, limited context</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🧠 Long Short-Term Memory (LSTM)</h3>
                  <p className="mb-2">Advanced RNN architecture that can learn long-term dependencies.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Better at capturing long-range dependencies</p>
                    <p className="text-sm"><strong>Use Cases:</strong> Text generation, machine translation</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚡ Transformers</h3>
                  <p className="mb-2">Attention-based architecture that revolutionized NLP.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Advantages:</strong> Parallel processing, self-attention mechanism</p>
                    <p className="text-sm"><strong>Examples:</strong> BERT, GPT, T5</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🤖 Large Language Models (LLMs)</h3>
                  <p className="mb-2">Massive transformer models trained on vast amounts of text data.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> GPT-4, Claude, LLaMA</p>
                    <p className="text-sm"><strong>Capabilities:</strong> Text generation, reasoning, coding</p>
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
                  <h3 className="text-xl font-semibold text-yellow-600">💬 NLP Acronym</h3>
                  <p className="mb-4">Remember the key aspects of Natural Language Processing:</p>
                  <ul className="space-y-2">
                    <li><strong>N</strong>atural - Processing human language naturally</li>
                    <li><strong>L</strong>anguage - Working with text and speech</li>
                    <li><strong>P</strong>rocessing - Analyzing and understanding content</li>
                    <li><strong>U</strong>nderstanding - Comprehending meaning and context</li>
                    <li><strong>G</strong>eneration - Creating human-like text</li>
                    <li><strong>E</strong>mbeddings - Converting words to vectors</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔤 Word Embeddings Story</h3>
                  <p className="mb-4">Think of word embeddings as a language map:</p>
                  <ul className="space-y-2">
                    <li><strong>Words as Cities:</strong> Each word is a city on a map</li>
                    <li><strong>Distance as Similarity:</strong> Close cities = similar words</li>
                    <li><strong>Directions as Relationships:</strong> "King - Man + Woman = Queen"</li>
                    <li><strong>Coordinates as Vectors:</strong> Each city has GPS coordinates</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🔄 Model Evolution Memory</h3>
                  <p className="mb-4">Remember the progression of language models:</p>
                  <ul className="space-y-2">
                    <li><strong>RNN:</strong> "Remember the last thing" (short memory)</li>
                    <li><strong>LSTM:</strong> "Remember important things for a long time" (selective memory)</li>
                    <li><strong>Transformer:</strong> "Look at everything at once" (attention to all)</li>
                    <li><strong>LLM:</strong> "Know everything about language" (massive knowledge)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">📝 Preprocessing Rhyme</h3>
                  <p className="mb-4">"Tokenize, lowercase, clean, repeat"</p>
                  <ul className="space-y-2">
                    <li><strong>Tokenize:</strong> Break text into words</li>
                    <li><strong>Lowercase:</strong> Make everything consistent</li>
                    <li><strong>Clean:</strong> Remove noise and stop words</li>
                    <li><strong>Repeat:</strong> Apply to all text data</li>
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
            Take the quiz to reinforce what you've learned about Natural Language Processing!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            🎯 Take NLP Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default NLP; 