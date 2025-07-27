import type { Question } from './mlAlgorithmQuestions';

export const crossFoldValidationQuestions: Question[] = [
  // Basic Cross-Validation Concepts
  {
    question: "What is cross-validation?",
    options: [
      "A technique to assess model performance on unseen data",
      "A technique to train models",
      "A technique to deploy models",
      "A technique to select features"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "Why is cross-validation important?",
    options: [
      "To get a more reliable estimate of model performance",
      "To make training faster",
      "To reduce memory usage",
      "To increase model complexity"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the main advantage of cross-validation over a single train-test split?",
    options: [
      "More robust performance estimation",
      "Faster training",
      "Less memory usage",
      "Higher accuracy"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the difference between validation and test sets?",
    options: [
      "Validation is for model selection, test is for final evaluation",
      "They are the same thing",
      "Validation is for final evaluation, test is for model selection",
      "Validation is for training, test is for evaluation"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the purpose of a holdout test set?",
    options: [
      "To provide an unbiased final evaluation of the model",
      "To train the model",
      "To validate the model",
      "To select features"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // K-Fold Cross-Validation
  {
    question: "What is k-fold cross-validation?",
    options: [
      "Splitting data into k folds and training k times",
      "Training on all data k times",
      "Testing on all data k times",
      "Validating on all data k times"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "How many times is a model trained in k-fold cross-validation?",
    options: ["K times", "Once", "K-1 times", "K+1 times"],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the typical value of k in k-fold cross-validation?",
    options: ["5 or 10", "2 or 3", "20 or 30", "50 or 100"],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What happens to each fold in k-fold cross-validation?",
    options: [
      "Each fold serves as test set exactly once",
      "Each fold serves as training set exactly once",
      "Each fold serves as validation set exactly once",
      "Each fold serves as all sets multiple times"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "How is the final performance estimate calculated in k-fold CV?",
    options: [
      "Average of performance across all k folds",
      "Best performance across all k folds",
      "Worst performance across all k folds",
      "Median performance across all k folds"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Stratified Cross-Validation
  {
    question: "What is stratified k-fold cross-validation?",
    options: [
      "K-fold CV that maintains class distribution in each fold",
      "K-fold CV with random sampling",
      "K-fold CV with time series data",
      "K-fold CV with imbalanced data"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "When should you use stratified cross-validation?",
    options: [
      "When you have imbalanced classes",
      "When you have balanced classes",
      "When you have time series data",
      "When you have regression problems"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the advantage of stratified sampling?",
    options: [
      "Ensures each fold has representative class distribution",
      "Makes training faster",
      "Reduces memory usage",
      "Increases model complexity"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What happens if you don't use stratification with imbalanced data?",
    options: [
      "Some folds might have no samples from minority class",
      "Training becomes faster",
      "Memory usage decreases",
      "Model complexity increases"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "Can stratified cross-validation be used for regression?",
    options: [
      "Yes, by stratifying based on target value bins",
      "No, only for classification",
      "Yes, by stratifying based on features",
      "No, it's not possible"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Leave-One-Out Cross-Validation
  {
    question: "What is leave-one-out cross-validation (LOOCV)?",
    options: [
      "Using all data except one sample for training",
      "Using only one sample for training",
      "Using all data for training",
      "Using no data for training"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "How many times is a model trained in LOOCV?",
    options: [
      "N times (where N is the number of samples)",
      "Once",
      "N-1 times",
      "N+1 times"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the main advantage of LOOCV?",
    options: [
      "Uses maximum amount of data for training",
      "Faster than k-fold CV",
      "Less memory usage",
      "Higher accuracy"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the main disadvantage of LOOCV?",
    options: [
      "Computationally expensive for large datasets",
      "Lower accuracy",
      "Higher memory usage",
      "More complex implementation"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "When should you use LOOCV?",
    options: [
      "When you have a small dataset",
      "When you have a large dataset",
      "When you have time series data",
      "When you have imbalanced data"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Time Series Cross-Validation
  {
    question: "What is time series cross-validation?",
    options: [
      "CV that respects temporal order of data",
      "CV that ignores temporal order",
      "CV that uses random sampling",
      "CV that uses stratified sampling"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "Why is standard k-fold CV inappropriate for time series?",
    options: [
      "It violates temporal dependencies",
      "It's too slow",
      "It uses too much memory",
      "It's too complex"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is expanding window cross-validation?",
    options: [
      "Training window grows over time",
      "Training window shrinks over time",
      "Training window stays the same",
      "Training window is random"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is rolling window cross-validation?",
    options: [
      "Fixed-size window that moves forward in time",
      "Growing window that moves forward in time",
      "Shrinking window that moves forward in time",
      "Random window that moves in time"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is walk-forward analysis?",
    options: [
      "Another name for time series cross-validation",
      "A type of feature selection",
      "A type of model selection",
      "A type of data preprocessing"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Nested Cross-Validation
  {
    question: "What is nested cross-validation?",
    options: [
      "CV with an outer loop for evaluation and inner loop for model selection",
      "CV with two outer loops",
      "CV with two inner loops",
      "CV with no loops"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the purpose of the outer loop in nested CV?",
    options: [
      "To estimate generalization performance",
      "To select hyperparameters",
      "To select features",
      "To train the model"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the purpose of the inner loop in nested CV?",
    options: [
      "To select hyperparameters",
      "To estimate generalization performance",
      "To select features",
      "To train the model"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "Why is nested CV important?",
    options: [
      "To avoid data leakage in hyperparameter tuning",
      "To make training faster",
      "To reduce memory usage",
      "To increase model complexity"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the computational cost of nested CV?",
    options: [
      "High, as it requires multiple CV runs",
      "Low, as it's efficient",
      "Medium, as it's moderate",
      "Zero, as it's free"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Bootstrap Methods
  {
    question: "What is bootstrap sampling?",
    options: [
      "Sampling with replacement from the dataset",
      "Sampling without replacement from the dataset",
      "Random sampling from the dataset",
      "Stratified sampling from the dataset"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the .632 bootstrap?",
    options: [
      "A specific bootstrap method that combines training and out-of-bag performance",
      "A bootstrap with 632 samples",
      "A bootstrap with 63.2% of data",
      "A bootstrap with 6.32% of data"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is out-of-bag (OOB) estimation?",
    options: [
      "Performance estimation using samples not in bootstrap sample",
      "Performance estimation using all samples",
      "Performance estimation using bootstrap samples",
      "Performance estimation using validation samples"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the advantage of bootstrap methods?",
    options: [
      "Can provide confidence intervals for performance estimates",
      "Faster than cross-validation",
      "Less memory usage",
      "Higher accuracy"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the disadvantage of bootstrap methods?",
    options: [
      "Can be optimistic due to overlap between training sets",
      "Slower than cross-validation",
      "Higher memory usage",
      "Lower accuracy"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Cross-Validation for Different Tasks
  {
    question: "What is group k-fold cross-validation?",
    options: [
      "CV that keeps groups together (e.g., same patient, same subject)",
      "CV that separates groups",
      "CV that ignores groups",
      "CV that creates groups"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "When should you use group k-fold CV?",
    options: [
      "When you have correlated samples within groups",
      "When you have independent samples",
      "When you have time series data",
      "When you have imbalanced data"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is repeated k-fold cross-validation?",
    options: [
      "Running k-fold CV multiple times with different random splits",
      "Running k-fold CV once",
      "Running k-fold CV with different k values",
      "Running k-fold CV with different data"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "Why use repeated k-fold CV?",
    options: [
      "To reduce variance in performance estimates",
      "To increase variance in performance estimates",
      "To make training faster",
      "To reduce memory usage"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is Monte Carlo cross-validation?",
    options: [
      "Random train-test splits with fixed test set size",
      "Systematic train-test splits",
      "Stratified train-test splits",
      "Time series train-test splits"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Performance Estimation
  {
    question: "What is the bias of cross-validation performance estimates?",
    options: [
      "Generally low bias but high variance",
      "High bias and low variance",
      "Low bias and low variance",
      "High bias and high variance"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the variance of cross-validation performance estimates?",
    options: [
      "Generally high variance due to limited data",
      "Low variance due to large data",
      "Zero variance",
      "Infinite variance"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "How can you reduce variance in CV estimates?",
    options: [
      "Use repeated CV or increase k",
      "Use smaller k",
      "Use single train-test split",
      "Use bootstrap"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the trade-off in choosing k?",
    options: [
      "Higher k reduces bias but increases variance",
      "Higher k increases bias but reduces variance",
      "Higher k reduces both bias and variance",
      "Higher k increases both bias and variance"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is the optimal k for most datasets?",
    options: [
      "5 or 10 (good balance of bias and variance)",
      "2 or 3 (low variance)",
      "20 or 30 (low bias)",
      "50 or 100 (very low bias)"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Implementation Considerations
  {
    question: "What should you do with the final model after CV?",
    options: [
      "Train on all available data",
      "Use the best CV fold model",
      "Average all CV fold models",
      "Use the worst CV fold model"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What is data leakage in cross-validation?",
    options: [
      "Using information from test set during training",
      "Using information from training set during testing",
      "Using information from validation set during training",
      "Using information from all sets"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "How can you prevent data leakage in CV?",
    options: [
      "Apply preprocessing separately to each fold",
      "Apply preprocessing to all data before CV",
      "Apply preprocessing after CV",
      "Don't apply preprocessing"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What should you do with feature selection in CV?",
    options: [
      "Perform feature selection within each fold",
      "Perform feature selection on all data before CV",
      "Perform feature selection after CV",
      "Don't perform feature selection"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What should you do with hyperparameter tuning in CV?",
    options: [
      "Use nested CV or tune within each fold",
      "Tune on all data before CV",
      "Tune after CV",
      "Don't tune hyperparameters"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },

  // Best Practices
  {
    question: "What should you report from cross-validation?",
    options: [
      "Mean and standard deviation of performance",
      "Only the mean performance",
      "Only the best performance",
      "Only the worst performance"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What should you consider when choosing CV method?",
    options: [
      "Data characteristics and problem type",
      "Only computational cost",
      "Only accuracy",
      "Only speed"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What should you do with small datasets?",
    options: [
      "Use LOOCV or high k values",
      "Use low k values",
      "Use single train-test split",
      "Use bootstrap"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What should you do with large datasets?",
    options: [
      "Use lower k values or single train-test split",
      "Use high k values",
      "Use LOOCV",
      "Use bootstrap"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  },
  {
    question: "What should you do with imbalanced datasets?",
    options: [
      "Use stratified CV",
      "Use standard CV",
      "Use time series CV",
      "Use group CV"
    ],
    correct: 0,
    category: "Cross-Fold Validation"
  }
]; 