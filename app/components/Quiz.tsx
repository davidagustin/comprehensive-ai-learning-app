'use client';

import React, { useState } from 'react';
import { mlAlgorithmQuestions, type Question } from '../data/mlAlgorithmQuestions';
import { dataSplittingQuestions } from '../data/dataSplittingQuestions';
import { applicationQuestions } from '../data/applicationQuestions';
import { epochsQuestions } from '../data/epochsQuestions';
import { featureSelectionQuestions } from '../data/featureSelectionQuestions';
import { dataAugmentationQuestions } from '../data/dataAugmentationQuestions';
import { modelEvaluationQuestions } from '../data/modelEvaluationQuestions';
import { crossFoldValidationQuestions } from '../data/crossFoldValidationQuestions';
import { hyperparameterTuningQuestions } from '../data/hyperparameterTuningQuestions';
import { experimentTrackingQuestions } from '../data/experimentTrackingQuestions';

const QUIZ_CATEGORIES = [
  { label: 'All Topics', value: 'All', description: 'Mix of all question types', icon: '🎯' },
  { label: 'ML Algorithms', value: 'ML Algorithms', description: 'Frameworks, characters, and algorithms', icon: '🤖' },
  { label: 'Data Splitting', value: 'Data Splitting', description: 'Train-test splitting techniques', icon: '📊' },
  { label: 'Epochs', value: 'Epochs', description: 'Epochs in model training', icon: '⏳' },
  { label: 'Application', value: 'Application', description: 'Real-world scenarios and decision making', icon: '🚀' },
  { label: 'Feature Selection', value: 'Feature Selection', description: 'Feature selection and engineering techniques', icon: '🔍' },
  { label: 'Data Augmentation', value: 'Data Augmentation', description: 'Data augmentation and synthetic data generation', icon: '🔄' },
  { label: 'Model Evaluation', value: 'Model Evaluation', description: 'Model evaluation metrics and techniques', icon: '📈' },
  { label: 'Cross-Fold Validation', value: 'Cross-Fold Validation', description: 'Cross-validation and resampling methods', icon: '🔄' },
  { label: 'Hyperparameter Tuning', value: 'Hyperparameter Tuning', description: 'Hyperparameter optimization techniques', icon: '⚙️' },
  { label: 'Experiment Tracking', value: 'Experiment Tracking', description: 'Experiment tracking and reproducibility', icon: '📋' },
];

const Quiz: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quizCategory, setQuizCategory] = useState<string | null>(null);
  const [questionCount, setQuestionCount] = useState<string>('');

  // Combine all questions from different files
  const allQuestions: Question[] = [
    ...mlAlgorithmQuestions,
    ...dataSplittingQuestions,
    ...applicationQuestions,
    ...epochsQuestions,
    ...featureSelectionQuestions,
    ...dataAugmentationQuestions,
    ...modelEvaluationQuestions,
    ...crossFoldValidationQuestions,
    ...hyperparameterTuningQuestions,
    ...experimentTrackingQuestions
  ];

  // Filter questions by category if provided
  const filteredQuestions = quizCategory && quizCategory !== 'All'
    ? allQuestions.filter(q => q.category === quizCategory)
    : allQuestions;

  // Helper to check if the question count is valid
  const isQuestionCountValid =
    !questionCount ||
    (/^\d+$/.test(questionCount) && parseInt(questionCount) > 0 && parseInt(questionCount) <= filteredQuestions.length);

  const startQuiz = () => {
    if (!isQuestionCountValid) return;
    setIsLoading(true);
    setTimeout(() => {
      const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
      const maxQuestions = (!questionCount)
        ? filteredQuestions.length
        : Math.min(parseInt(questionCount), filteredQuestions.length);
      setQuizData(shuffledQuestions.slice(0, maxQuestions));
      setCurrentQuiz(0);
      setQuizScore(0);
      setSelectedAnswer(null);
      setShowResults(false);
      setQuizStarted(true);
      setIsLoading(false);
    }, 1000);
  };

  const selectAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === quizData[currentQuiz].correct) {
      setQuizScore(quizScore + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuiz + 1 >= quizData.length) {
      setShowResults(true);
    } else {
      setCurrentQuiz(currentQuiz + 1);
      setSelectedAnswer(null);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setShowResults(false);
    setCurrentQuiz(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setQuizData([]);
    setQuizCategory(null);
    setQuestionCount('');
  };

  const getScoreMessage = () => {
    const percentage = (quizScore / quizData.length) * 100;
    if (percentage >= 90) return { message: "🎉 Outstanding! You're an AI expert!", color: "text-green-600" };
    if (percentage >= 80) return { message: "🌟 Excellent! Great understanding!", color: "text-green-500" };
    if (percentage >= 70) return { message: "👍 Good job! Solid knowledge!", color: "text-blue-600" };
    if (percentage >= 60) return { message: "📚 Not bad! Keep learning!", color: "text-yellow-600" };
    return { message: "📖 Keep studying! You'll get there!", color: "text-red-600" };
  };

  if (!quizStarted) {
    return (
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 px-6 py-3 rounded-full">
            <span className="text-2xl">🎯</span>
            <span className="font-semibold text-gray-900 dark:text-white">Knowledge Assessment</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Test Your AI Knowledge
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Challenge yourself with interactive quizzes covering all aspects of machine learning. 
            Choose your topics and question count to customize your learning experience.
          </p>
        </div>

        {/* Quiz Setup */}
        <div className="glass p-8 rounded-xl space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            🎯 Quiz Configuration
          </h2>
          
          {/* Category Selection */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900 dark:text-white">
              📚 Select Topic Category
            </label>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {QUIZ_CATEGORIES.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setQuizCategory(category.value)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    quizCategory === category.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {category.label}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {category.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Question Count */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-900 dark:text-white">
              📊 Number of Questions
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={questionCount}
                onChange={(e) => setQuestionCount(e.target.value)}
                placeholder={`Max: ${filteredQuestions.length}`}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <span className="text-gray-600 dark:text-gray-400">
                Available: {filteredQuestions.length}
              </span>
            </div>
            {!isQuestionCountValid && questionCount && (
              <p className="text-red-600 text-sm">
                Please enter a valid number between 1 and {filteredQuestions.length}
              </p>
            )}
          </div>

          {/* Start Button */}
          <div className="text-center pt-4">
            <button
              onClick={startQuiz}
              disabled={!isQuestionCountValid || isLoading}
              className="btn-primary px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '🔄 Loading...' : '🚀 Start Quiz'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const scoreInfo = getScoreMessage();
    return (
      <div className="space-y-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            🎉 Quiz Complete!
          </h1>
          <div className="glass p-8 rounded-xl max-w-md mx-auto">
            <div className="text-6xl mb-4">🎯</div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {quizScore}/{quizData.length}
            </div>
            <div className={`text-xl font-semibold mb-4 ${scoreInfo.color}`}>
              {scoreInfo.message}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {Math.round((quizScore / quizData.length) * 100)}% Score
            </div>
          </div>
          <button
            onClick={resetQuiz}
            className="btn-primary px-6 py-3 text-lg"
          >
            🔄 Take Another Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData[currentQuiz];

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Question {currentQuiz + 1} of {quizData.length}</span>
          <span>Score: {quizScore}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuiz + 1) / quizData.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="glass p-8 rounded-xl space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {currentQuestion.question}
          </h2>
          {/* Explanation removed as it's not in the Question interface */}
        </div>

        {/* Answers */}
        <div className="space-y-3">
          {currentQuestion.options.map((answer, index) => (
            <button
              key={index}
              onClick={() => selectAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                selectedAnswer === index
                  ? index === currentQuestion.correct
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                  : selectedAnswer !== null && index === currentQuestion.correct
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold text-gray-600 dark:text-gray-400">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-900 dark:text-white">{answer}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        {selectedAnswer !== null && (
          <div className="text-center pt-4">
            <button
              onClick={nextQuestion}
              className="btn-primary px-6 py-3 text-lg"
            >
              {currentQuiz + 1 >= quizData.length ? '🎯 See Results' : '⏭️ Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz; 