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
    
    if (percentage >= 90) {
      return { message: "🎉 Excellent! You've mastered the mnemonics!", color: "text-green-600 dark:text-green-400" };
    } else if (percentage >= 70) {
      return { message: "👍 Good job! Keep practicing to improve!", color: "text-blue-600 dark:text-blue-400" };
    } else if (percentage >= 50) {
      return { message: "📚 Not bad! Review the frameworks and try again!", color: "text-yellow-600 dark:text-yellow-400" };
    } else {
      return { message: "💪 Keep studying! The mnemonics will help you improve!", color: "text-red-600 dark:text-red-400" };
    }
  };

  // Category Selection Page
  if (!quizCategory) {
    return (
      <div className="space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="text-xl sm:text-2xl">🎯</span>
            <span className="font-semibold text-purple-700 dark:text-purple-300 text-sm sm:text-base">Interactive Quiz System</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Choose Your Quiz Topic
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Select a topic to test your knowledge with interactive questions and immediate feedback
          </p>
        </div>
        
        <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {QUIZ_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              className="flex flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm sm:text-base font-semibold shadow-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 cursor-pointer min-h-[100px] sm:min-h-[120px]"
              onClick={() => setQuizCategory(cat.value)}
              tabIndex={0}
              aria-label={cat.label}
            >
              <span className="text-xl sm:text-2xl mb-2">{cat.icon}</span>
              <span className="mb-1 text-gray-900 dark:text-white text-center text-sm sm:text-base">{cat.label}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-normal text-center leading-tight">{cat.description}</span>
            </button>
          ))}
        </nav>
      </div>
    );
  }

  // Quiz Information Page
  if (!quizStarted) {
    return (
      <div className="space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <span className="text-xl sm:text-2xl">🎯</span>
            <span className="font-semibold text-purple-700 dark:text-purple-300 text-sm sm:text-base">{quizCategory === 'All' ? 'All Topics Quiz' : `${quizCategory} Quiz`}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Test Your Knowledge
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            {quizCategory === 'All'
              ? 'Challenge yourself with questions covering ML algorithms, data splitting, and applications'
              : `Challenge yourself with questions covering ${quizCategory}`}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
          <div className="card p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">📋 Quiz Information</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                { icon: "🎲", text: `${filteredQuestions.length} total questions available in this section` },
                { icon: "⚡", text: "Immediate feedback after each question" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Question Count Selector */}
          <div className="card p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">📊 Choose Question Count</h3>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <label htmlFor="questionCount" className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                  Number of questions:
                </label>
                <input
                  id="questionCount"
                  type="text"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(e.target.value.replace(/[^\d]/g, ''))}
                  className="input w-full sm:w-24 text-center cursor-text"
                  placeholder="All"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Suggested: 5, 10, 15, 20, 25, 30
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                  You'll get {(!questionCount || questionCount === '0') ? filteredQuestions.length : Math.min(parseInt(questionCount), filteredQuestions.length)} questions from {filteredQuestions.length} available
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center flex flex-col gap-3 sm:gap-4">
            <button 
              className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 relative overflow-hidden group cursor-pointer"
              onClick={startQuiz}
              disabled={!isQuestionCountValid || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Loading Quiz...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>🚀</span>
                  <span>Start Quiz</span>
                </div>
              )}
            </button>
            <button className="btn-secondary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 cursor-pointer" onClick={resetQuiz}>
              🔄 Choose Different Topic
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results Page
  if (showResults) {
    const percentage = (quizScore / quizData.length) * 100;
    const scoreInfo = getScoreMessage();
    
    return (
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">🎯 Quiz Results</h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 text-center">
            {/* Score Display */}
            <div className="mb-8">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray={`${percentage}, 100`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{quizScore}</div>
                    <div className="text-gray-600 dark:text-gray-400">/ {quizData.length}</div>
                  </div>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {percentage.toFixed(1)}%
              </div>
            </div>
            
            {/* Score Message */}
            <div className="mb-8">
              <h3 className={`text-xl font-semibold ${scoreInfo.color}`}>
                {scoreInfo.message}
              </h3>
            </div>
            
            {/* Quiz Stats */}
            <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-2">
              <p>This quiz randomly selected {quizData.length} questions from a bank of {filteredQuestions.length} total questions.</p>
              <p>Take the quiz again for different questions!</p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
              <button 
                className="btn-primary w-full cursor-pointer"
                onClick={startQuiz}
              >
                🔄 Take Quiz Again
              </button>
              <button 
                className="btn-secondary w-full cursor-pointer"
                onClick={resetQuiz}
              >
                🏠 Back to Quiz Selection
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz in Progress
  const progress = ((currentQuiz + 1) / quizData.length) * 100;
  const currentQuestion = quizData[currentQuiz];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎯 Quiz in Progress</h2>
        <div className="text-gray-600 dark:text-gray-400 text-lg">
          Question {currentQuiz + 1} of {quizData.length} • Score: {quizScore}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        
        {/* Question Card */}
        <div className="card p-8">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-800 dark:text-purple-200 text-sm font-medium px-4 py-2 rounded-full">
              Category: {currentQuestion.category}
            </span>
          </div>
          
          {/* Question */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-relaxed">
              {currentQuestion.question}
            </h3>
          </div>
          
          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 cursor-pointer ${
                  selectedAnswer === index
                    ? index === currentQuestion.correct
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 shadow-lg'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 shadow-lg'
                    : selectedAnswer !== null && index === currentQuestion.correct
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 shadow-lg'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
                onClick={() => selectAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                <div className="flex items-center space-x-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    selectedAnswer === index
                      ? index === currentQuestion.correct
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : selectedAnswer !== null && index === currentQuestion.correct
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium leading-relaxed">{option}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Next Button */}
          {selectedAnswer !== null && (
            <div className="text-center">
              <button 
                className="btn-primary text-lg px-8 py-4 cursor-pointer"
                onClick={nextQuestion}
              >
                {currentQuiz + 1 >= quizData.length ? '🏁 Finish Quiz' : '➡️ Next Question'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 