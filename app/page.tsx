'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import type { Section } from './components/Navigation';
import MLAlgorithms from './components/MLAlgorithms';
import Quiz from './components/Quiz';
import PlaceholderSection from './components/PlaceholderSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('ml-algorithms');

  const renderSection = () => {
    switch (activeSection) {
      case 'ml-algorithms':
        return <MLAlgorithms />;
      case 'quiz':
        return <Quiz />;
      case 'data-splitting':
        return <PlaceholderSection 
          title="Data Splitting" 
          description="Master train-test splitting techniques and data partitioning strategies for robust model development."
          icon="📊"
        />;
      case 'epochs':
        return <PlaceholderSection 
          title="Epochs" 
          description="Understand epochs in model training, iteration strategies, and convergence patterns."
          icon="⏳"
        />;
      case 'feature-selection':
        return <PlaceholderSection 
          title="Feature Selection" 
          description="Learn feature selection and engineering techniques to improve model performance."
          icon="🔍"
        />;
      case 'data-augmentation':
        return <PlaceholderSection 
          title="Data Augmentation" 
          description="Master data augmentation techniques and synthetic data generation methods."
          icon="🔄"
        />;
      case 'model-evaluation':
        return <PlaceholderSection 
          title="Model Evaluation" 
          description="Explore model evaluation metrics and techniques for comprehensive model assessment."
          icon="📈"
        />;
      case 'cross-fold-validation':
        return <PlaceholderSection 
          title="Cross-Fold Validation" 
          description="Learn cross-validation and resampling methods for robust model validation."
          icon="🔄"
        />;
      case 'hyperparameter-tuning':
        return <PlaceholderSection 
          title="Hyperparameter Tuning" 
          description="Master hyperparameter optimization techniques for model performance enhancement."
          icon="⚙️"
        />;
      case 'experiment-tracking':
        return <PlaceholderSection 
          title="Experiment Tracking" 
          description="Learn experiment tracking and reproducibility practices for ML projects."
          icon="📋"
        />;
      case 'neural-networks':
        return <PlaceholderSection 
          title="Neural Networks" 
          description="Explore the fundamentals of neural networks and their applications."
          icon="🧠"
        />;
      case 'deep-learning':
        return <PlaceholderSection 
          title="Deep Learning" 
          description="Dive into deep learning architectures and advanced neural network concepts."
          icon="🔬"
        />;
      case 'computer-vision':
        return <PlaceholderSection 
          title="Computer Vision" 
          description="Learn image processing and computer vision techniques and applications."
          icon="👁️"
        />;
      case 'cnn':
        return <PlaceholderSection 
          title="Convolutional Neural Networks" 
          description="Master CNN architectures and their applications in image processing."
          icon="🖼️"
        />;
      case 'nlp':
        return <PlaceholderSection 
          title="Natural Language Processing" 
          description="Explore text processing and NLP techniques for language understanding."
          icon="💬"
        />;
      case 'rnn':
        return <PlaceholderSection 
          title="Recurrent Neural Networks" 
          description="Learn RNN architectures for sequential data processing."
          icon="🔄"
        />;
      case 'lstm':
        return <PlaceholderSection 
          title="Long Short-Term Memory" 
          description="Master LSTM networks and their applications in sequence modeling."
          icon="🧠"
        />;
      case 'attention-mechanisms':
        return <PlaceholderSection 
          title="Attention Mechanisms" 
          description="Understand attention and self-attention concepts in modern AI."
          icon="👁️"
        />;
      case 'transformers':
        return <PlaceholderSection 
          title="Transformers" 
          description="Explore transformer architecture fundamentals and applications."
          icon="⚡"
        />;
      case 'bert':
        return <PlaceholderSection 
          title="BERT" 
          description="Learn about BERT and bidirectional transformers for language understanding."
          icon="🤖"
        />;
      case 'gpt':
        return <PlaceholderSection 
          title="GPT Models" 
          description="Explore Generative Pre-trained Transformers and their capabilities."
          icon="🧠"
        />;
      case 'reinforcement-learning':
        return <PlaceholderSection 
          title="Reinforcement Learning" 
          description="Master RL algorithms and their applications in decision-making systems."
          icon="🎮"
        />;
      case 'transfer-learning':
        return <PlaceholderSection 
          title="Transfer Learning" 
          description="Learn knowledge transfer techniques between models and domains."
          icon="🔄"
        />;
      case 'gan':
        return <PlaceholderSection 
          title="Generative Adversarial Networks" 
          description="Explore GANs for generative modeling and creative AI applications."
          icon="🎨"
        />;
      case 'autoencoders':
        return <PlaceholderSection 
          title="Autoencoders" 
          description="Master autoencoder architectures for dimensionality reduction and feature learning."
          icon="🔐"
        />;
      case 'mlops':
        return <PlaceholderSection 
          title="MLOps" 
          description="Learn Machine Learning Operations for production ML systems."
          icon="⚙️"
        />;
      case 'deployment':
        return <PlaceholderSection 
          title="Model Deployment" 
          description="Master deploying ML models to production environments."
          icon="🚀"
        />;
      case 'scalability':
        return <PlaceholderSection 
          title="Scalability" 
          description="Learn techniques for scaling ML systems and handling large-scale data."
          icon="📈"
        />;
      case 'production-systems':
        return <PlaceholderSection 
          title="Production Systems" 
          description="Design and implement production-ready ML system architectures."
          icon="🏭"
        />;
      case 'model-interpretability':
        return <PlaceholderSection 
          title="Model Interpretability" 
          description="Understand model decisions and build interpretable AI systems."
          icon="🔍"
        />;
      case 'bias-fairness':
        return <PlaceholderSection 
          title="Bias & Fairness" 
          description="Address bias in ML models and ensure fair AI systems."
          icon="⚖️"
        />;
      case 'privacy-security':
        return <PlaceholderSection 
          title="Privacy & Security" 
          description="Learn ML privacy and security concerns and mitigation strategies."
          icon="🔒"
        />;
      default:
        return <MLAlgorithms />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="sticky top-0 z-50 glass border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🧠 AI Learning Hub
              </h1>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 font-medium">
                Master AI concepts with interactive mnemonics, quizzes, and memory techniques
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Ready to learn</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="min-h-[calc(100vh-200px)]">
          {renderSection()}
        </div>
      </main>

      <footer className="mt-16 glass border-t border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Master the art of machine learning through memorable frameworks and interactive learning
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
