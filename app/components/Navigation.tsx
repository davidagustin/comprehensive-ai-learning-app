'use client';

import React, { useState, useRef } from 'react';
import PortalDropdown from './PortalDropdown';

export type Section = 
  | 'ml-algorithms' | 'data-splitting' | 'epochs' 
  | 'feature-selection' | 'data-augmentation' | 'model-evaluation' 
  | 'cross-fold-validation' | 'hyperparameter-tuning' | 'experiment-tracking'
  | 'neural-networks' | 'deep-learning' | 'computer-vision' | 'nlp' | 'reinforcement-learning'
  | 'transfer-learning' | 'attention-mechanisms' | 'transformers' | 'cnn' | 'rnn' | 'lstm'
  | 'gan' | 'autoencoders' | 'bert' | 'gpt' | 'mlops' | 'deployment' | 'model-interpretability'
  | 'bias-fairness' | 'privacy-security' | 'scalability' | 'production-systems'
  | 'quiz';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const sections = [
    // Core Concepts
    { id: 'ml-algorithms' as Section, label: '🤖 ML Algorithms', icon: '🎯', description: 'Learn ML frameworks and characters', category: 'Core Concepts' },
    { id: 'data-splitting' as Section, label: '📊 Data Splitting', icon: '🔄', description: 'Master train-test splitting techniques', category: 'Core Concepts' },
    { id: 'epochs' as Section, label: '⏳ Epochs', icon: '⏰', description: 'Understand epochs in model training', category: 'Core Concepts' },
    
    // Model Development
    { id: 'feature-selection' as Section, label: '🔍 Feature Selection', icon: '🎯', description: 'Feature selection and engineering', category: 'Model Development' },
    { id: 'data-augmentation' as Section, label: '🔄 Data Augmentation', icon: '🔄', description: 'Data augmentation techniques', category: 'Model Development' },
    
    // Model Evaluation
    { id: 'model-evaluation' as Section, label: '📈 Model Evaluation', icon: '📊', description: 'Model evaluation metrics', category: 'Model Evaluation' },
    { id: 'cross-fold-validation' as Section, label: '🔄 Cross-Fold Validation', icon: '🔄', description: 'Cross-validation methods', category: 'Model Evaluation' },
    
    // Model Optimization
    { id: 'hyperparameter-tuning' as Section, label: '⚙️ Hyperparameter Tuning', icon: '🔧', description: 'Hyperparameter optimization', category: 'Model Optimization' },
    { id: 'experiment-tracking' as Section, label: '📋 Experiment Tracking', icon: '📝', description: 'Experiment tracking and reproducibility', category: 'Model Optimization' },
    
    // Deep Learning Fundamentals
    { id: 'neural-networks' as Section, label: '🧠 Neural Networks', icon: '🕸️', description: 'Fundamentals of neural networks', category: 'Deep Learning' },
    { id: 'deep-learning' as Section, label: '🔬 Deep Learning', icon: '🏗️', description: 'Deep learning architectures and concepts', category: 'Deep Learning' },
    
    // Computer Vision
    { id: 'computer-vision' as Section, label: '👁️ Computer Vision', icon: '📷', description: 'Image processing and computer vision', category: 'Computer Vision' },
    { id: 'cnn' as Section, label: '🖼️ Convolutional Neural Networks', icon: '🔲', description: 'CNN architectures and applications', category: 'Computer Vision' },
    
    // Natural Language Processing
    { id: 'nlp' as Section, label: '💬 Natural Language Processing', icon: '📝', description: 'Text processing and NLP techniques', category: 'Natural Language Processing' },
    { id: 'rnn' as Section, label: '🔄 Recurrent Neural Networks', icon: '⏳', description: 'RNN architectures for sequential data', category: 'Natural Language Processing' },
    { id: 'lstm' as Section, label: '🧠 Long Short-Term Memory', icon: '💾', description: 'LSTM networks and applications', category: 'Natural Language Processing' },
    { id: 'attention-mechanisms' as Section, label: '👁️ Attention Mechanisms', icon: '🎯', description: 'Attention and self-attention concepts', category: 'Natural Language Processing' },
    { id: 'transformers' as Section, label: '⚡ Transformers', icon: '🔄', description: 'Transformer architecture fundamentals', category: 'Natural Language Processing' },
    { id: 'bert' as Section, label: '🤖 BERT', icon: '📚', description: 'BERT and bidirectional transformers', category: 'Natural Language Processing' },
    { id: 'gpt' as Section, label: '🧠 GPT Models', icon: '💭', description: 'Generative Pre-trained Transformers', category: 'Natural Language Processing' },
    
    // Advanced AI
    { id: 'reinforcement-learning' as Section, label: '🎮 Reinforcement Learning', icon: '🎯', description: 'RL algorithms and applications', category: 'Advanced AI' },
    { id: 'transfer-learning' as Section, label: '🔄 Transfer Learning', icon: '📤', description: 'Knowledge transfer between models', category: 'Advanced AI' },
    { id: 'gan' as Section, label: '🎨 Generative Adversarial Networks', icon: '🎭', description: 'GANs for generative modeling', category: 'Advanced AI' },
    { id: 'autoencoders' as Section, label: '🔐 Autoencoders', icon: '📦', description: 'Autoencoder architectures', category: 'Advanced AI' },
    
    // MLOps & Production
    { id: 'mlops' as Section, label: '⚙️ MLOps', icon: '🔧', description: 'Machine Learning Operations', category: 'MLOps & Production' },
    { id: 'deployment' as Section, label: '🚀 Model Deployment', icon: '🌐', description: 'Deploying ML models to production', category: 'MLOps & Production' },
    { id: 'scalability' as Section, label: '📈 Scalability', icon: '🏗️', description: 'Scaling ML systems', category: 'MLOps & Production' },
    { id: 'production-systems' as Section, label: '🏭 Production Systems', icon: '⚡', description: 'Production ML system design', category: 'MLOps & Production' },
    
    // Ethics & Responsible AI
    { id: 'model-interpretability' as Section, label: '🔍 Model Interpretability', icon: '👁️', description: 'Understanding model decisions', category: 'Ethics & Responsible AI' },
    { id: 'bias-fairness' as Section, label: '⚖️ Bias & Fairness', icon: '🎯', description: 'Addressing bias in ML models', category: 'Ethics & Responsible AI' },
    { id: 'privacy-security' as Section, label: '🔒 Privacy & Security', icon: '🛡️', description: 'ML privacy and security concerns', category: 'Ethics & Responsible AI' },
    
    // Assessment
    { id: 'quiz' as Section, label: '🎯 Quiz', icon: '✅', description: 'Test your knowledge', category: 'Assessment' },
  ];

  const categories = {
    'Core Concepts': ['ml-algorithms', 'data-splitting', 'epochs'],
    'Model Development': ['feature-selection', 'data-augmentation'],
    'Model Evaluation': ['model-evaluation', 'cross-fold-validation'],
    'Model Optimization': ['hyperparameter-tuning', 'experiment-tracking'],
    'Deep Learning': ['neural-networks', 'deep-learning'],
    'Computer Vision': ['computer-vision', 'cnn'],
    'Natural Language Processing': ['nlp', 'rnn', 'lstm', 'attention-mechanisms', 'transformers', 'bert', 'gpt'],
    'Advanced AI': ['reinforcement-learning', 'transfer-learning', 'gan', 'autoencoders'],
    'MLOps & Production': ['mlops', 'deployment', 'scalability', 'production-systems'],
    'Ethics & Responsible AI': ['model-interpretability', 'bias-fairness', 'privacy-security'],
    'Assessment': ['quiz']
  };

  const getCurrentSection = () => sections.find(s => s.id === activeSection);

  return (
    <nav className="glass border-b border-white/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 sm:py-4 space-y-3 sm:space-y-0">
          {/* Current Section Display */}
          <div className="flex items-center justify-center sm:justify-start">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="text-xl sm:text-2xl">{getCurrentSection()?.icon}</span>
              <div className="text-center sm:text-left">
                <h2 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                  {getCurrentSection()?.label}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
                  {getCurrentSection()?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Quiz Button and Dropdown Menu */}
          <div className="flex items-center justify-center sm:justify-end space-x-2 sm:space-x-3">
            <button
              onClick={() => {
                onSectionChange('quiz');
                setIsDropdownOpen(false);
              }}
              className="btn-primary px-3 sm:px-4 py-2 text-sm sm:text-base"
            >
              🎯 Take Quiz
            </button>
            <button
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-200 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">📚 Browse Topics</span>
              <span className="sm:hidden">📚</span>
              <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Content via Portal */}
            <PortalDropdown anchorRef={buttonRef} open={isDropdownOpen} width={280}>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-80 sm:max-h-96 overflow-y-auto">
                <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {Object.entries(categories).map(([categoryName, sectionIds]) => (
                    <div key={categoryName} className="space-y-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm uppercase tracking-wide">
                        {categoryName}
                      </h3>
                      <div className="space-y-1">
                        {sectionIds.map((sectionId) => {
                          const section = sections.find(s => s.id === sectionId);
                          if (!section) return null;
                          return (
                            <button
                              key={section.id}
                              onClick={() => {
                                onSectionChange(section.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2 rounded-md text-left transition-all duration-200 ${
                                activeSection === section.id
                                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                              }`}
                            >
                              <span className="text-base sm:text-lg">{section.icon}</span>
                              <div className="min-w-0 flex-1">
                                <div className="font-medium text-xs sm:text-sm truncate">{section.label}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">{section.description}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PortalDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 