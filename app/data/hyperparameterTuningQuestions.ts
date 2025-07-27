import type { Question } from './mlAlgorithmQuestions';

export const hyperparameterTuningQuestions: Question[] = [
  // Basic Hyperparameter Concepts
  {
    question: "What are hyperparameters?",
    options: [
      "Parameters that control the learning process but are not learned from data",
      "Parameters that are learned from data",
      "Parameters that are randomly assigned",
      "Parameters that are fixed"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is hyperparameter tuning?",
    options: [
      "Finding the best values for hyperparameters",
      "Finding the best values for model parameters",
      "Finding the best values for features",
      "Finding the best values for data"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "Why is hyperparameter tuning important?",
    options: [
      "To optimize model performance",
      "To make training faster",
      "To reduce memory usage",
      "To increase model complexity"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the difference between parameters and hyperparameters?",
    options: [
      "Parameters are learned from data, hyperparameters are set before training",
      "Parameters are set before training, hyperparameters are learned from data",
      "They are the same thing",
      "Parameters are random, hyperparameters are fixed"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What are examples of hyperparameters?",
    options: [
      "Learning rate, number of layers, regularization strength",
      "Weights, biases, feature values",
      "Training data, test data, validation data",
      "Accuracy, precision, recall"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Manual Tuning
  {
    question: "What is manual hyperparameter tuning?",
    options: [
      "Manually trying different hyperparameter values",
      "Automatically trying different hyperparameter values",
      "Randomly trying different hyperparameter values",
      "Systematically trying different hyperparameter values"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main disadvantage of manual tuning?",
    options: [
      "Time-consuming and not systematic",
      "Too fast",
      "Too systematic",
      "Too random"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is grid search?",
    options: [
      "Systematically trying all combinations of hyperparameter values",
      "Randomly trying hyperparameter values",
      "Manually trying hyperparameter values",
      "Automatically trying hyperparameter values"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main disadvantage of grid search?",
    options: [
      "Computationally expensive for high-dimensional spaces",
      "Too fast",
      "Too random",
      "Too systematic"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "When is manual tuning appropriate?",
    options: [
      "When you have domain knowledge and limited computational resources",
      "When you have unlimited computational resources",
      "When you have no domain knowledge",
      "When you have too much data"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Random Search
  {
    question: "What is random search?",
    options: [
      "Randomly sampling hyperparameter values from specified distributions",
      "Systematically sampling hyperparameter values",
      "Manually sampling hyperparameter values",
      "Automatically sampling hyperparameter values"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main advantage of random search over grid search?",
    options: [
      "More efficient exploration of high-dimensional spaces",
      "More systematic exploration",
      "More thorough exploration",
      "More accurate exploration"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main disadvantage of random search?",
    options: [
      "May miss optimal values due to randomness",
      "Too systematic",
      "Too thorough",
      "Too accurate"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "When is random search most effective?",
    options: [
      "When only a few hyperparameters are important",
      "When all hyperparameters are equally important",
      "When no hyperparameters are important",
      "When hyperparameters are not important"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the relationship between random search and grid search?",
    options: [
      "Random search is often more efficient than grid search",
      "Grid search is always more efficient than random search",
      "They are equally efficient",
      "They cannot be compared"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Bayesian Optimization
  {
    question: "What is Bayesian optimization?",
    options: [
      "Using probabilistic models to guide hyperparameter search",
      "Using deterministic models to guide hyperparameter search",
      "Using random models to guide hyperparameter search",
      "Using manual models to guide hyperparameter search"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the acquisition function in Bayesian optimization?",
    options: [
      "Function that determines which hyperparameters to try next",
      "Function that evaluates hyperparameters",
      "Function that samples hyperparameters",
      "Function that optimizes hyperparameters"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the surrogate model in Bayesian optimization?",
    options: [
      "Probabilistic model that approximates the objective function",
      "Deterministic model that approximates the objective function",
      "Random model that approximates the objective function",
      "Manual model that approximates the objective function"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main advantage of Bayesian optimization?",
    options: [
      "More efficient exploration of the hyperparameter space",
      "More systematic exploration",
      "More random exploration",
      "More manual exploration"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main disadvantage of Bayesian optimization?",
    options: [
      "More complex to implement and tune",
      "Too simple to implement",
      "Too fast to implement",
      "Too slow to implement"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Population-Based Methods
  {
    question: "What is population-based hyperparameter tuning?",
    options: [
      "Maintaining a population of hyperparameter configurations",
      "Maintaining a single hyperparameter configuration",
      "Maintaining random hyperparameter configurations",
      "Maintaining fixed hyperparameter configurations"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is genetic algorithm for hyperparameter tuning?",
    options: [
      "Using evolutionary principles to evolve hyperparameter configurations",
      "Using genetic principles to fix hyperparameter configurations",
      "Using random principles to sample hyperparameter configurations",
      "Using manual principles to set hyperparameter configurations"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is particle swarm optimization for hyperparameter tuning?",
    options: [
      "Using swarm intelligence to optimize hyperparameters",
      "Using particle physics to optimize hyperparameters",
      "Using random particles to optimize hyperparameters",
      "Using manual particles to optimize hyperparameters"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main advantage of population-based methods?",
    options: [
      "Can escape local optima and find global optima",
      "Always find local optima",
      "Always find global optima",
      "Never find optima"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main disadvantage of population-based methods?",
    options: [
      "Computationally expensive and complex",
      "Too simple",
      "Too fast",
      "Too slow"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Early Stopping and Pruning
  {
    question: "What is early stopping in hyperparameter tuning?",
    options: [
      "Stopping training when validation performance stops improving",
      "Stopping training when training performance stops improving",
      "Stopping training after a fixed number of epochs",
      "Stopping training immediately"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is pruning in hyperparameter tuning?",
    options: [
      "Eliminating unpromising hyperparameter configurations early",
      "Eliminating all hyperparameter configurations",
      "Eliminating random hyperparameter configurations",
      "Eliminating manual hyperparameter configurations"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is successive halving?",
    options: [
      "Allocating more resources to promising configurations",
      "Allocating equal resources to all configurations",
      "Allocating random resources to configurations",
      "Allocating no resources to configurations"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is Hyperband?",
    options: [
      "A bandit-based approach that combines random search with successive halving",
      "A bandit-based approach that uses only random search",
      "A bandit-based approach that uses only successive halving",
      "A bandit-based approach that uses neither"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the main advantage of early stopping and pruning?",
    options: [
      "Reduces computational cost by avoiding unpromising configurations",
      "Increases computational cost",
      "Increases accuracy",
      "Increases complexity"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Hyperparameter Spaces
  {
    question: "What is a continuous hyperparameter?",
    options: [
      "A hyperparameter that can take any real value in a range",
      "A hyperparameter that can only take integer values",
      "A hyperparameter that can only take categorical values",
      "A hyperparameter that can only take binary values"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is a discrete hyperparameter?",
    options: [
      "A hyperparameter that can only take specific values",
      "A hyperparameter that can take any real value",
      "A hyperparameter that can only take categorical values",
      "A hyperparameter that can only take binary values"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is a categorical hyperparameter?",
    options: [
      "A hyperparameter that can only take values from a predefined set",
      "A hyperparameter that can take any real value",
      "A hyperparameter that can only take integer values",
      "A hyperparameter that can only take binary values"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is log-uniform sampling?",
    options: [
      "Sampling uniformly in log space for hyperparameters like learning rate",
      "Sampling uniformly in linear space",
      "Sampling randomly in any space",
      "Sampling manually in any space"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "When should you use log-uniform sampling?",
    options: [
      "For hyperparameters that span multiple orders of magnitude",
      "For hyperparameters that span small ranges",
      "For categorical hyperparameters",
      "For binary hyperparameters"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Common Hyperparameters
  {
    question: "What is learning rate?",
    options: [
      "Step size in gradient descent optimization",
      "Rate of learning",
      "Rate of forgetting",
      "Rate of convergence"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the typical range for learning rate?",
    options: [
      "0.0001 to 1.0",
      "0.1 to 10.0",
      "1.0 to 100.0",
      "0.000001 to 0.0001"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is batch size?",
    options: [
      "Number of samples processed before updating model parameters",
      "Size of the dataset",
      "Size of the model",
      "Size of the features"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the typical range for batch size?",
    options: [
      "16 to 512",
      "1 to 10",
      "1000 to 10000",
      "1 to 1000000"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is regularization strength?",
    options: [
      "Parameter that controls the amount of regularization",
      "Parameter that controls the amount of training",
      "Parameter that controls the amount of testing",
      "Parameter that controls the amount of validation"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Model-Specific Hyperparameters
  {
    question: "What are common hyperparameters for neural networks?",
    options: [
      "Number of layers, neurons per layer, activation functions",
      "Learning rate, batch size, regularization",
      "Kernel size, number of filters, stride",
      "Number of trees, max depth, min samples split"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What are common hyperparameters for random forests?",
    options: [
      "Number of trees, max depth, min samples split",
      "Number of layers, neurons per layer, activation functions",
      "Learning rate, batch size, regularization",
      "Kernel size, number of filters, stride"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What are common hyperparameters for support vector machines?",
    options: [
      "C (regularization), kernel type, gamma",
      "Number of trees, max depth, min samples split",
      "Number of layers, neurons per layer, activation functions",
      "Learning rate, batch size, regularization"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What are common hyperparameters for gradient boosting?",
    options: [
      "Learning rate, number of estimators, max depth",
      "Number of trees, max depth, min samples split",
      "Number of layers, neurons per layer, activation functions",
      "C (regularization), kernel type, gamma"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What are common hyperparameters for convolutional neural networks?",
    options: [
      "Kernel size, number of filters, stride",
      "Number of layers, neurons per layer, activation functions",
      "Learning rate, batch size, regularization",
      "Number of trees, max depth, min samples split"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Evaluation and Selection
  {
    question: "What should you use to evaluate hyperparameter configurations?",
    options: [
      "Cross-validation or a separate validation set",
      "Training set performance",
      "Test set performance",
      "All data performance"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is the risk of using test set for hyperparameter tuning?",
    options: [
      "Overfitting to the test set",
      "Underfitting to the test set",
      "No risk",
      "Random risk"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is nested cross-validation for hyperparameter tuning?",
    options: [
      "Using CV for both hyperparameter selection and performance estimation",
      "Using CV only for hyperparameter selection",
      "Using CV only for performance estimation",
      "Using CV for neither"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What should you do after finding the best hyperparameters?",
    options: [
      "Train the final model on all training data with those hyperparameters",
      "Use the best CV fold model",
      "Average all CV fold models",
      "Use the worst CV fold model"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What should you report about hyperparameter tuning?",
    options: [
      "The search space, method used, and best hyperparameters found",
      "Only the best hyperparameters found",
      "Only the method used",
      "Only the search space"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Tools and Libraries
  {
    question: "What is scikit-learn's GridSearchCV?",
    options: [
      "Grid search with cross-validation",
      "Random search with cross-validation",
      "Bayesian optimization with cross-validation",
      "Manual search with cross-validation"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is scikit-learn's RandomizedSearchCV?",
    options: [
      "Random search with cross-validation",
      "Grid search with cross-validation",
      "Bayesian optimization with cross-validation",
      "Manual search with cross-validation"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is Optuna?",
    options: [
      "A hyperparameter optimization framework",
      "A machine learning library",
      "A data preprocessing library",
      "A model evaluation library"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is Hyperopt?",
    options: [
      "A hyperparameter optimization library",
      "A machine learning library",
      "A data preprocessing library",
      "A model evaluation library"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What is Ray Tune?",
    options: [
      "A distributed hyperparameter tuning library",
      "A centralized hyperparameter tuning library",
      "A local hyperparameter tuning library",
      "A cloud hyperparameter tuning library"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },

  // Best Practices
  {
    question: "What should you do first in hyperparameter tuning?",
    options: [
      "Establish a baseline with default hyperparameters",
      "Try the most complex hyperparameters",
      "Try random hyperparameters",
      "Try manual hyperparameters"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What should you consider when choosing a search space?",
    options: [
      "Domain knowledge and computational constraints",
      "Only computational constraints",
      "Only domain knowledge",
      "Only random constraints"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What should you do with hyperparameter interactions?",
    options: [
      "Consider them in your search strategy",
      "Ignore them",
      "Randomize them",
      "Fix them"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What should you do with computational budget?",
    options: [
      "Allocate it wisely across different hyperparameter configurations",
      "Use it all on one configuration",
      "Use it randomly",
      "Don't use it"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  },
  {
    question: "What should you do with hyperparameter tuning results?",
    options: [
      "Document and analyze them thoroughly",
      "Ignore them",
      "Delete them",
      "Randomize them"
    ],
    correct: 0,
    category: "Hyperparameter Tuning"
  }
]; 