'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import type { Section } from './components/Navigation';
import MLAlgorithms from './components/MLAlgorithms';
import Quiz from './components/Quiz';
import PlaceholderSection from './components/PlaceholderSection';
import DataSplitting from './components/DataSplitting';
import Epochs from './components/Epochs';
import FeatureSelection from './components/FeatureSelection';
import DataAugmentation from './components/DataAugmentation';
import ModelEvaluation from './components/ModelEvaluation';
import CrossFoldValidation from './components/CrossFoldValidation';
import HyperparameterTuning from './components/HyperparameterTuning';
import ExperimentTracking from './components/ExperimentTracking';
import NeuralNetworks from './components/NeuralNetworks';
import DeepLearning from './components/DeepLearning';
import ComputerVision from './components/ComputerVision';
import CNN from './components/CNN';
import NLP from './components/NLP';
import RNN from './components/RNN';
import LSTM from './components/LSTM';
import AttentionMechanisms from './components/AttentionMechanisms';
import Transformers from './components/Transformers';
import BERT from './components/BERT';
import GPT from './components/GPT';
import ReinforcementLearning from './components/ReinforcementLearning';
import TransferLearning from './components/TransferLearning';
import GAN from './components/GAN';
import Autoencoders from './components/Autoencoders';
import MLOps from './components/MLOps';
import ModelDeployment from './components/ModelDeployment';
import Scalability from './components/Scalability';
import ProductionSystems from './components/ProductionSystems';
import ModelInterpretability from './components/ModelInterpretability';
import BiasFairness from './components/BiasFairness';
import PrivacySecurity from './components/PrivacySecurity';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('ml-algorithms');

  const renderSection = () => {
    switch (activeSection) {
      case 'ml-algorithms':
        return <MLAlgorithms />;
      case 'quiz':
        return <Quiz />;
      case 'data-splitting':
        return <DataSplitting />;
      case 'epochs':
        return <Epochs />;
      case 'feature-selection':
        return <FeatureSelection />;
      case 'data-augmentation':
        return <DataAugmentation />;
      case 'model-evaluation':
        return <ModelEvaluation />;
      case 'cross-fold-validation':
        return <CrossFoldValidation />;
      case 'hyperparameter-tuning':
        return <HyperparameterTuning />;
      case 'experiment-tracking':
        return <ExperimentTracking />;
      case 'neural-networks':
        return <NeuralNetworks />;
      case 'deep-learning':
        return <DeepLearning />;
      case 'computer-vision':
        return <ComputerVision />;
      case 'cnn':
        return <CNN />;
      case 'nlp':
        return <NLP />;
      case 'rnn':
        return <RNN />;
      case 'lstm':
        return <LSTM />;
      case 'attention-mechanisms':
        return <AttentionMechanisms />;
      case 'transformers':
        return <Transformers />;
      case 'bert':
        return <BERT />;
      case 'gpt':
        return <GPT />;
      case 'reinforcement-learning':
        return <ReinforcementLearning />;
      case 'transfer-learning':
        return <TransferLearning />;
      case 'gan':
        return <GAN />;
      case 'autoencoders':
        return <Autoencoders />;
      case 'mlops':
        return <MLOps />;
      case 'deployment':
        return <ModelDeployment />;
      case 'scalability':
        return <Scalability />;
      case 'production-systems':
        return <ProductionSystems />;
      case 'model-interpretability':
        return <ModelInterpretability />;
      case 'bias-fairness':
        return <BiasFairness />;
      case 'privacy-security':
        return <PrivacySecurity />;
      default:
        return <MLAlgorithms />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="sticky top-0 z-50 glass border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🧠 AI Learning Hub
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-medium">
                Master AI concepts with interactive mnemonics, quizzes, and memory techniques
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="min-h-[calc(100vh-200px)]">
          {renderSection()}
        </div>
      </main>

      <footer className="mt-8 sm:mt-16 glass border-t border-white/20 dark:border-gray-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
            </p>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
              Master the art of machine learning through memorable frameworks and interactive learning
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
