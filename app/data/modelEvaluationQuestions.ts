import type { Question } from './mlAlgorithmQuestions';

export const modelEvaluationQuestions: Question[] = [
  // Basic Model Evaluation Concepts
  {
    question: "What is model evaluation?",
    options: [
      "Assessing how well a model performs on unseen data",
      "Training a model",
      "Deploying a model",
      "Selecting a model"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "Why is model evaluation important?",
    options: [
      "To understand model performance and make informed decisions",
      "To make models faster",
      "To reduce memory usage",
      "To increase model complexity"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is the difference between training and test performance?",
    options: [
      "Training is on seen data, test is on unseen data",
      "They are always the same",
      "Training is always better",
      "Test is always better"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is generalization?",
    options: [
      "Model's ability to perform well on unseen data",
      "Model's ability to memorize training data",
      "Model's ability to train quickly",
      "Model's ability to use less memory"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is overfitting?",
    options: [
      "Model performs well on training data but poorly on new data",
      "Model performs poorly on training data",
      "Model performs well on all data",
      "Model performs poorly on all data"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Classification Metrics
  {
    question: "What is accuracy?",
    options: [
      "Proportion of correct predictions out of total predictions",
      "Proportion of positive predictions",
      "Proportion of negative predictions",
      "Proportion of true positives"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is precision?",
    options: [
      "Proportion of true positives out of all positive predictions",
      "Proportion of true positives out of all actual positives",
      "Proportion of correct predictions",
      "Proportion of positive predictions"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is recall (sensitivity)?",
    options: [
      "Proportion of true positives out of all actual positives",
      "Proportion of true positives out of all positive predictions",
      "Proportion of correct predictions",
      "Proportion of negative predictions"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is F1-score?",
    options: [
      "Harmonic mean of precision and recall",
      "Arithmetic mean of precision and recall",
      "Geometric mean of precision and recall",
      "Sum of precision and recall"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is specificity?",
    options: [
      "Proportion of true negatives out of all actual negatives",
      "Proportion of true positives out of all actual positives",
      "Proportion of true positives out of all positive predictions",
      "Proportion of correct predictions"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Advanced Classification Metrics
  {
    question: "What is the confusion matrix?",
    options: [
      "A table showing true vs predicted classifications",
      "A table showing feature correlations",
      "A table showing model parameters",
      "A table showing training metrics"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is ROC curve?",
    options: [
      "Plot of true positive rate vs false positive rate",
      "Plot of precision vs recall",
      "Plot of accuracy vs epochs",
      "Plot of loss vs epochs"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is AUC-ROC?",
    options: [
      "Area under the ROC curve",
      "Area under the precision-recall curve",
      "Area under the learning curve",
      "Area under the confusion matrix"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is precision-recall curve?",
    options: [
      "Plot of precision vs recall at different thresholds",
      "Plot of true positive rate vs false positive rate",
      "Plot of accuracy vs epochs",
      "Plot of loss vs epochs"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is average precision?",
    options: [
      "Area under the precision-recall curve",
      "Area under the ROC curve",
      "Average of precision and recall",
      "Average of all metrics"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Regression Metrics
  {
    question: "What is Mean Squared Error (MSE)?",
    options: [
      "Average of squared differences between predictions and actual values",
      "Average of absolute differences",
      "Square root of average squared differences",
      "Average of differences"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is Root Mean Squared Error (RMSE)?",
    options: [
      "Square root of MSE",
      "Square of MSE",
      "Average of absolute differences",
      "Average of differences"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is Mean Absolute Error (MAE)?",
    options: [
      "Average of absolute differences between predictions and actual values",
      "Average of squared differences",
      "Square root of average squared differences",
      "Average of differences"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is R-squared (coefficient of determination)?",
    options: [
      "Proportion of variance explained by the model",
      "Proportion of correct predictions",
      "Proportion of variance in predictions",
      "Proportion of variance in features"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is Mean Absolute Percentage Error (MAPE)?",
    options: [
      "Average of absolute percentage errors",
      "Average of squared percentage errors",
      "Average of percentage errors",
      "Average of absolute errors"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Multi-class and Multi-label Metrics
  {
    question: "What is macro-averaging?",
    options: [
      "Averaging metrics across classes equally",
      "Averaging metrics weighted by class size",
      "Averaging metrics across samples",
      "Averaging metrics across features"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is micro-averaging?",
    options: [
      "Averaging metrics across all samples regardless of class",
      "Averaging metrics across classes equally",
      "Averaging metrics weighted by class size",
      "Averaging metrics across features"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is weighted averaging?",
    options: [
      "Averaging metrics weighted by class size",
      "Averaging metrics across classes equally",
      "Averaging metrics across all samples",
      "Averaging metrics across features"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is Hamming loss for multi-label classification?",
    options: [
      "Proportion of incorrectly predicted labels",
      "Proportion of correctly predicted labels",
      "Proportion of true positives",
      "Proportion of false positives"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is subset accuracy for multi-label classification?",
    options: [
      "Proportion of samples where all labels are correctly predicted",
      "Proportion of correctly predicted individual labels",
      "Proportion of true positives",
      "Proportion of false positives"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Model Comparison and Selection
  {
    question: "What is statistical significance testing?",
    options: [
      "Testing if performance differences between models are meaningful",
      "Testing if models are the same",
      "Testing if data is random",
      "Testing if features are important"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is paired t-test for model comparison?",
    options: [
      "Testing if two models have significantly different performance",
      "Testing if one model is better than another",
      "Testing if models are the same",
      "Testing if data is random"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is McNemar's test?",
    options: [
      "Testing if two models have significantly different error rates",
      "Testing if one model is better than another",
      "Testing if models are the same",
      "Testing if data is random"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is the Wilcoxon signed-rank test?",
    options: [
      "Non-parametric test for comparing two models",
      "Parametric test for comparing two models",
      "Test for comparing multiple models",
      "Test for comparing features"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is the Friedman test?",
    options: [
      "Non-parametric test for comparing multiple models",
      "Parametric test for comparing multiple models",
      "Test for comparing two models",
      "Test for comparing features"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Cross-Validation and Resampling
  {
    question: "What is k-fold cross-validation?",
    options: [
      "Splitting data into k folds and training k times",
      "Training on all data k times",
      "Testing on all data k times",
      "Validating on all data k times"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is stratified k-fold cross-validation?",
    options: [
      "K-fold CV that maintains class distribution in each fold",
      "K-fold CV with random sampling",
      "K-fold CV with time series data",
      "K-fold CV with imbalanced data"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is leave-one-out cross-validation?",
    options: [
      "Using all data except one sample for training",
      "Using only one sample for training",
      "Using all data for training",
      "Using no data for training"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is bootstrap sampling?",
    options: [
      "Sampling with replacement from the dataset",
      "Sampling without replacement from the dataset",
      "Random sampling from the dataset",
      "Stratified sampling from the dataset"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is the purpose of cross-validation?",
    options: [
      "To get a more reliable estimate of model performance",
      "To train the model",
      "To test the model",
      "To deploy the model"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Bias and Variance
  {
    question: "What is bias in model evaluation?",
    options: [
      "Systematic error in model predictions",
      "Random error in model predictions",
      "Variance in model predictions",
      "Accuracy of model predictions"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is variance in model evaluation?",
    options: [
      "Variability in model predictions across different datasets",
      "Systematic error in model predictions",
      "Random error in model predictions",
      "Accuracy of model predictions"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is the bias-variance tradeoff?",
    options: [
      "Balance between model complexity and generalization",
      "Balance between training and testing",
      "Balance between features and samples",
      "Balance between speed and accuracy"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is high bias (underfitting)?",
    options: [
      "Model is too simple and misses important patterns",
      "Model is too complex and memorizes training data",
      "Model has high variance",
      "Model has high accuracy"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is high variance (overfitting)?",
    options: [
      "Model is too complex and memorizes training data",
      "Model is too simple and misses important patterns",
      "Model has high bias",
      "Model has low accuracy"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Learning Curves
  {
    question: "What is a learning curve?",
    options: [
      "Plot of model performance vs training set size",
      "Plot of model performance vs epochs",
      "Plot of loss vs epochs",
      "Plot of accuracy vs epochs"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What does a learning curve show?",
    options: [
      "How model performance changes with more training data",
      "How model performance changes with more epochs",
      "How loss changes with more epochs",
      "How accuracy changes with more epochs"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is the difference between training and validation learning curves?",
    options: [
      "Training shows performance on seen data, validation on unseen data",
      "They are always the same",
      "Training is always better",
      "Validation is always better"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What does a flat learning curve indicate?",
    options: [
      "Model is not learning from additional data",
      "Model is learning well",
      "Model is overfitting",
      "Model is underfitting"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What does a steep learning curve indicate?",
    options: [
      "Model is learning well from additional data",
      "Model is not learning",
      "Model is overfitting",
      "Model is underfitting"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Model Interpretability
  {
    question: "What is model interpretability?",
    options: [
      "Understanding how a model makes decisions",
      "Understanding the data",
      "Understanding the features",
      "Understanding the algorithm"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is feature importance?",
    options: [
      "How much each feature contributes to model predictions",
      "How much each feature costs",
      "How much each feature weighs",
      "How much each feature varies"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is SHAP for model interpretation?",
    options: [
      "Explaining model predictions using Shapley values",
      "Explaining model predictions using permutation",
      "Explaining model predictions using correlation",
      "Explaining model predictions using variance"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is LIME for model interpretation?",
    options: [
      "Explaining individual predictions using local approximations",
      "Explaining global model behavior",
      "Explaining feature correlations",
      "Explaining feature distributions"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What is partial dependence plot?",
    options: [
      "Showing how a feature affects model predictions",
      "Showing feature correlations",
      "Showing feature distributions",
      "Showing model performance"
    ],
    correct: 0,
    category: "Model Evaluation"
  },

  // Best Practices
  {
    question: "What should you evaluate first?",
    options: [
      "Baseline models to establish performance benchmarks",
      "Complex models",
      "Ensemble models",
      "Deep learning models"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What should you consider when choosing evaluation metrics?",
    options: [
      "Business objectives and data characteristics",
      "Only model performance",
      "Only computational cost",
      "Only dataset size"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What should you do with imbalanced datasets?",
    options: [
      "Use appropriate metrics like F1-score, precision, recall",
      "Use only accuracy",
      "Use only precision",
      "Use only recall"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What should you do with multiple evaluation metrics?",
    options: [
      "Consider trade-offs and choose based on business needs",
      "Always choose the highest metric",
      "Always choose the lowest metric",
      "Average all metrics"
    ],
    correct: 0,
    category: "Model Evaluation"
  },
  {
    question: "What should you do with evaluation results?",
    options: [
      "Document and communicate findings clearly",
      "Keep them private",
      "Ignore them",
      "Delete them"
    ],
    correct: 0,
    category: "Model Evaluation"
  }
]; 