export interface Question {
  question: string;
  options: string[];
  correct: number;
  category: string;
}

export const mlAlgorithmQuestions: Question[] = [
  // RCCA Framework Questions
  {
    question: "What does the RCCA framework stand for?",
    options: [
      "Really Cool Computer Algorithms",
      "Regression Classification Clustering Anomaly",
      "Random Computer Code Analysis",
      "Robust Classification Computer Algorithms"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'C' in RCCA represent? (First C)",
    options: ["Clustering", "Classification", "Computing", "Correlation"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'A' in RCCA stand for?",
    options: ["Analysis", "Algorithm", "Anomaly Detection", "Artificial"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "Which task type in RCCA deals with finding groups?",
    options: ["Regression", "Classification", "Clustering", "Anomaly Detection"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "Which task type in RCCA predicts continuous values?",
    options: ["Regression", "Classification", "Clustering", "Anomaly Detection"],
    correct: 0,
    category: "ML Algorithms"
  },

  // LRXS Framework Questions
  {
    question: "What does LRXS help you remember?",
    options: [
      "Classification algorithms",
      "Clustering methods",
      "Regression algorithms",
      "Anomaly detection"
    ],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What does LRXS stand for?",
    options: [
      "Large Robots eXplore Space",
      "Linear Random eXtreme Support",
      "Learning Regression eXamples Simply",
      "Logical Reasoning eXplains Science"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'X' in LRXS represent?",
    options: ["eXtreme Programming", "XGBoost", "eXponential", "eXample"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'L' in LRXS stand for?",
    options: ["Logistic Regression", "Linear Regression", "Learning", "Logic"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'R' in LRXS represent?",
    options: ["Regression", "Random Forest", "Robust", "Reasoning"],
    correct: 1,
    category: "ML Algorithms"
  },

  // LRSN Framework Questions
  {
    question: "What does LRSN help you remember?",
    options: [
      "Regression algorithms",
      "Classification algorithms",
      "Clustering methods",
      "Anomaly detection"
    ],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does LRSN stand for?",
    options: [
      "Let's Really Study Now",
      "Linear Random Support Naive",
      "Learning Requires Strong Notes",
      "Logical Reasoning Solves Nothing"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'N' in LRSN represent?",
    options: ["Neural Networks", "Naive Bayes", "Normalization", "Numerical"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'S' in LRSN stand for?",
    options: ["Simple", "SVM", "Supervised", "Support"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'L' in LRSN represent?",
    options: ["Linear Regression", "Logistic Regression", "Learning", "Logic"],
    correct: 1,
    category: "ML Algorithms"
  },

  // Character Questions - Simple Sam
  {
    question: "Which character represents Linear Regression?",
    options: ["Robust Robert", "Simple Sam", "eXtreme Xavier", "Steady Steve"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What is Simple Sam's catchphrase?",
    options: [
      "I keep it simple and straight to the point!",
      "I'm strong like a forest!",
      "I boost to extreme levels!",
      "I find the perfect boundary!"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What algorithm does Simple Sam represent?",
    options: ["Random Forest", "Linear Regression", "XGBoost", "SVM"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Simple Sam?",
    options: ["🌳", "🤖", "⚡", "🛡️"],
    correct: 1,
    category: "ML Algorithms"
  },

  // Character Questions - Robust Robert
  {
    question: "Who is the Random Forest character?",
    options: ["Simple Sam", "Logical Lisa", "Robust Robert", "Naive Nancy"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What is Robust Robert's personality trait?",
    options: [
      "Simple and straightforward",
      "Strong like a forest, handling any data",
      "Extremely fast and powerful",
      "Steady and boundary-focused"
    ],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Robust Robert?",
    options: ["🤖", "🌳", "⚡", "🛡️"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithms does Robust Robert appear in? (Select framework)",
    options: ["Only LRXS", "Only LRSN", "Both LRXS and LRSN", "Neither"],
    correct: 2,
    category: "ML Algorithms"
  },

  // Character Questions - eXtreme Xavier
  {
    question: "Which character represents XGBoost?",
    options: ["Simple Sam", "eXtreme Xavier", "Steady Steve", "Robust Robert"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What is eXtreme Xavier's catchphrase?",
    options: [
      "I keep it simple!",
      "I'm strong like a forest!",
      "I boost performance to extreme levels!",
      "I find the perfect boundary!"
    ],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents eXtreme Xavier?",
    options: ["🤖", "🌳", "⚡", "🛡️"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "In which framework does eXtreme Xavier appear?",
    options: ["LRSN", "LRXS", "RCCA", "WISP"],
    correct: 1,
    category: "ML Algorithms"
  },

  // Character Questions - Steady Steve
  {
    question: "Which character represents SVM?",
    options: ["Simple Sam", "Robust Robert", "Steady Steve", "eXtreme Xavier"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What is Steady Steve's specialty?",
    options: [
      "Simple linear relationships",
      "Forest of decision trees",
      "Extreme boosting",
      "Finding perfect boundaries"
    ],
    correct: 3,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Steady Steve?",
    options: ["🤖", "🌳", "⚡", "🛡️"],
    correct: 3,
    category: "ML Algorithms"
  },
  {
    question: "In which frameworks does Steady Steve appear?",
    options: ["Only LRXS", "Only LRSN", "Both LRXS and LRSN", "Only RCCA"],
    correct: 2,
    category: "ML Algorithms"
  },

  // Character Questions - Logical Lisa
  {
    question: "Which character represents Logistic Regression?",
    options: ["Naive Nancy", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What is Logical Lisa's strength?",
    options: [
      "Making naive assumptions",
      "Thinking logically about probabilities",
      "Finding clusters",
      "Detecting anomalies"
    ],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Logical Lisa?",
    options: ["🌸", "🧠", "🎯", "🔍"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "In which framework does Logical Lisa appear?",
    options: ["LRXS", "LRSN", "RCCA", "WISP"],
    correct: 1,
    category: "ML Algorithms"
  },

  // Character Questions - Naive Nancy
  {
    question: "Which character represents Naive Bayes?",
    options: ["Logical Lisa", "Naive Nancy", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What is Naive Nancy's catchphrase?",
    options: [
      "I think logically!",
      "I'm naive but surprisingly effective!",
      "I bring similar things together!",
      "I spot the odd ones out!"
    ],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Naive Nancy?",
    options: ["🧠", "🌸", "🎯", "🔍"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "Why is Nancy called 'naive'?",
    options: [
      "She's not very smart",
      "She makes simple assumptions about feature independence",
      "She's new to machine learning",
      "She doesn't work well"
    ],
    correct: 1,
    category: "ML Algorithms"
  },

  // Character Questions - Clustering Clara
  {
    question: "Which character represents K-Means clustering?",
    options: ["Logical Lisa", "Naive Nancy", "Clustering Clara", "Detective Dan"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What is Clustering Clara's specialty?",
    options: [
      "Logical reasoning",
      "Naive assumptions",
      "Bringing similar things together",
      "Finding outliers"
    ],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Clustering Clara?",
    options: ["🧠", "🌸", "🎯", "🔍"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "Which task type does Clustering Clara belong to?",
    options: ["Regression", "Classification", "Clustering", "Anomaly Detection"],
    correct: 2,
    category: "ML Algorithms"
  },

  // Character Questions - Detective Dan
  {
    question: "Which algorithm does 'Detective Dan' represent?",
    options: ["K-Means", "SVM", "Isolation Forest", "Naive Bayes"],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What is Detective Dan's job?",
    options: [
      "Grouping similar items",
      "Making predictions",
      "Spotting odd ones out (anomalies)",
      "Drawing boundaries"
    ],
    correct: 2,
    category: "ML Algorithms"
  },
  {
    question: "What emoji represents Detective Dan?",
    options: ["🧠", "🌸", "🎯", "🔍"],
    correct: 3,
    category: "ML Algorithms"
  },
  {
    question: "Which task type does Detective Dan specialize in?",
    options: ["Regression", "Classification", "Clustering", "Anomaly Detection"],
    correct: 3,
    category: "ML Algorithms"
  },

  // WISP Framework Questions
  {
    question: "What does WISP framework help with?",
    options: [
      "Algorithm memorization",
      "Decision making process",
      "Data preprocessing",
      "Model evaluation"
    ],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does WISP stand for?",
    options: [
      "What Input Size Performance",
      "When Is Solution Perfect",
      "Why Include Special Parameters",
      "Where Is System Problem"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'W' in WISP represent?",
    options: ["When", "What", "Where", "Why"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'I' in WISP stand for?",
    options: ["Implementation", "Input", "Iteration", "Intelligence"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'S' in WISP represent?",
    options: ["Solution", "Size", "System", "Speed"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "What does the 'P' in WISP stand for?",
    options: ["Problem", "Performance", "Process", "Prediction"],
    correct: 1,
    category: "ML Algorithms"
  },

  // Advanced Algorithm Concepts
  {
    question: "What is the bias-variance tradeoff?",
    options: [
      "The balance between model complexity and generalization",
      "The balance between training and testing",
      "The balance between features and samples",
      "The balance between speed and accuracy"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is regularization?",
    options: [
      "Adding constraints to prevent overfitting",
      "Adding more data",
      "Adding more features",
      "Adding more epochs"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is L1 regularization (Lasso)?",
    options: [
      "Adds absolute value of coefficients to loss function",
      "Adds squared value of coefficients to loss function",
      "Adds product of coefficients to loss function",
      "Adds sum of coefficients to loss function"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is L2 regularization (Ridge)?",
    options: [
      "Adds squared value of coefficients to loss function",
      "Adds absolute value of coefficients to loss function",
      "Adds product of coefficients to loss function",
      "Adds sum of coefficients to loss function"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the difference between L1 and L2 regularization?",
    options: [
      "L1 can create sparse models, L2 cannot",
      "L2 can create sparse models, L1 cannot",
      "They are the same thing",
      "L1 is faster than L2"
    ],
    correct: 0,
    category: "ML Algorithms"
  },

  // Algorithm Performance and Characteristics
  {
    question: "Which algorithm is most interpretable?",
    options: ["Linear Regression", "Random Forest", "XGBoost", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is least interpretable?",
    options: ["Linear Regression", "Random Forest", "XGBoost", "Neural Networks"],
    correct: 3,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is fastest for training?",
    options: ["Linear Regression", "Random Forest", "XGBoost", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is slowest for training?",
    options: ["Linear Regression", "Random Forest", "XGBoost", "Neural Networks"],
    correct: 3,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is fastest for prediction?",
    options: ["Linear Regression", "Random Forest", "XGBoost", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },

  // Algorithm Selection Criteria
  {
    question: "When would you choose Linear Regression?",
    options: [
      "When you have linear relationships and need interpretability",
      "When you have complex non-linear relationships",
      "When you have categorical features",
      "When you need the best possible performance"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "When would you choose Random Forest?",
    options: [
      "When you have complex relationships and need some interpretability",
      "When you have only linear relationships",
      "When you need the fastest training",
      "When you have very little data"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "When would you choose XGBoost?",
    options: [
      "When you need the best possible performance and have enough data",
      "When you need interpretability",
      "When you have very little data",
      "When you need the fastest training"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "When would you choose SVM?",
    options: [
      "When you have high-dimensional data",
      "When you have low-dimensional data",
      "When you need interpretability",
      "When you need the fastest training"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "When would you choose Naive Bayes?",
    options: [
      "When you have independent features and need fast training",
      "When you have dependent features",
      "When you need the best performance",
      "When you have continuous features only"
    ],
    correct: 0,
    category: "ML Algorithms"
  },

  // Feature Engineering and Data Types
  {
    question: "Which algorithm handles categorical features natively?",
    options: ["Linear Regression", "Random Forest", "Logistic Regression", "SVM"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm requires feature scaling?",
    options: ["Linear Regression", "Random Forest", "Decision Trees", "Naive Bayes"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is most sensitive to feature scaling?",
    options: ["Linear Regression", "Random Forest", "Decision Trees", "Naive Bayes"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is least sensitive to feature scaling?",
    options: ["Linear Regression", "Random Forest", "Decision Trees", "SVM"],
    correct: 1,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm works best with text data?",
    options: ["Linear Regression", "Naive Bayes", "Random Forest", "SVM"],
    correct: 1,
    category: "ML Algorithms"
  },

  // Hyperparameter Tuning
  {
    question: "What is hyperparameter tuning?",
    options: [
      "Finding the best values for algorithm parameters",
      "Finding the best features",
      "Finding the best data",
      "Finding the best model"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is grid search?",
    options: [
      "Systematically trying different parameter combinations",
      "Randomly trying different parameters",
      "Using the default parameters",
      "Using expert knowledge"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is random search?",
    options: [
      "Randomly sampling parameter combinations",
      "Systematically trying all combinations",
      "Using the default parameters",
      "Using expert knowledge"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is Bayesian optimization?",
    options: [
      "Using probability to guide parameter search",
      "Using random search",
      "Using grid search",
      "Using expert knowledge"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which hyperparameter tuning method is most efficient?",
    options: ["Grid Search", "Random Search", "Bayesian Optimization", "Manual Tuning"],
    correct: 2,
    category: "ML Algorithms"
  },

  // Ensemble Methods
  {
    question: "What is an ensemble method?",
    options: [
      "Combining multiple models for better performance",
      "Using a single model",
      "Using multiple features",
      "Using multiple datasets"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is bagging?",
    options: [
      "Training multiple models on different subsets of data",
      "Training multiple models on the same data",
      "Training one model on all data",
      "Training models sequentially"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is boosting?",
    options: [
      "Training models sequentially, each focusing on previous errors",
      "Training models in parallel",
      "Training one model multiple times",
      "Training models randomly"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is stacking?",
    options: [
      "Using a meta-model to combine predictions from multiple models",
      "Stacking data on top of each other",
      "Stacking features together",
      "Stacking algorithms together"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which ensemble method does Random Forest use?",
    options: ["Bagging", "Boosting", "Stacking", "None"],
    correct: 0,
    category: "ML Algorithms"
  },

  // Model Evaluation
  {
    question: "What is overfitting?",
    options: [
      "Model performs well on training data but poorly on new data",
      "Model performs poorly on training data",
      "Model performs well on all data",
      "Model performs poorly on all data"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is underfitting?",
    options: [
      "Model performs poorly on both training and new data",
      "Model performs well on training data but poorly on new data",
      "Model performs well on all data",
      "Model performs poorly only on new data"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the difference between training and validation performance?",
    options: [
      "Training is on seen data, validation is on unseen data",
      "They are always the same",
      "Training is always better",
      "Validation is always better"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is cross-validation used for?",
    options: [
      "To get a more reliable estimate of model performance",
      "To train the model",
      "To test the model",
      "To deploy the model"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the purpose of a validation set?",
    options: [
      "To tune hyperparameters without using the test set",
      "To train the model",
      "To test the model",
      "To deploy the model"
    ],
    correct: 0,
    category: "ML Algorithms"
  },

  // Algorithm-Specific Details
  {
    question: "What is the loss function for Linear Regression?",
    options: ["Mean Squared Error", "Cross-entropy", "Hinge Loss", "Log Loss"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the loss function for Logistic Regression?",
    options: ["Cross-entropy", "Mean Squared Error", "Hinge Loss", "Log Loss"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the loss function for SVM?",
    options: ["Hinge Loss", "Mean Squared Error", "Cross-entropy", "Log Loss"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the activation function for Logistic Regression?",
    options: ["Sigmoid", "ReLU", "Tanh", "Linear"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is the activation function for Linear Regression?",
    options: ["Linear", "Sigmoid", "ReLU", "Tanh"],
    correct: 0,
    category: "ML Algorithms"
  },

  // Real-world Applications
  {
    question: "Which algorithm is commonly used for credit scoring?",
    options: ["Logistic Regression", "Random Forest", "XGBoost", "All of the above"],
    correct: 3,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is commonly used for recommendation systems?",
    options: ["Collaborative Filtering", "Linear Regression", "SVM", "Naive Bayes"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is commonly used for image classification?",
    options: ["Convolutional Neural Networks", "Linear Regression", "Random Forest", "SVM"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is commonly used for natural language processing?",
    options: ["Recurrent Neural Networks", "Linear Regression", "Random Forest", "SVM"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is commonly used for anomaly detection?",
    options: ["Isolation Forest", "Linear Regression", "Random Forest", "SVM"],
    correct: 0,
    category: "ML Algorithms"
  },

  // Algorithm Comparison
  {
    question: "Which algorithm is most robust to outliers?",
    options: ["Random Forest", "Linear Regression", "SVM", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm is most sensitive to outliers?",
    options: ["Linear Regression", "Random Forest", "SVM", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm handles missing data best?",
    options: ["Random Forest", "Linear Regression", "SVM", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm requires the most data?",
    options: ["Neural Networks", "Linear Regression", "Random Forest", "SVM"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm requires the least data?",
    options: ["Linear Regression", "Neural Networks", "Random Forest", "XGBoost"],
    correct: 0,
    category: "ML Algorithms"
  },

  // Advanced Concepts
  {
    question: "What is the curse of dimensionality?",
    options: [
      "Performance degrades as number of features increases",
      "Performance improves as number of features increases",
      "Memory usage increases with features",
      "Training time increases with features"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is feature selection?",
    options: [
      "Choosing the most important features",
      "Creating new features",
      "Scaling features",
      "Normalizing features"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is feature engineering?",
    options: [
      "Creating new features from existing ones",
      "Selecting existing features",
      "Scaling features",
      "Normalizing features"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is dimensionality reduction?",
    options: [
      "Reducing the number of features while preserving information",
      "Removing all features",
      "Adding more features",
      "Scaling features"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is PCA used for?",
    options: [
      "Dimensionality reduction",
      "Feature selection",
      "Feature engineering",
      "Model training"
    ],
    correct: 0,
    category: "ML Algorithms"
  },

  // Model Interpretability
  {
    question: "What is feature importance?",
    options: [
      "How much each feature contributes to predictions",
      "How much each feature costs",
      "How much each feature weighs",
      "How much each feature varies"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "Which algorithm provides feature importance?",
    options: ["Random Forest", "Linear Regression", "SVM", "Neural Networks"],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is SHAP used for?",
    options: [
      "Explaining model predictions",
      "Training models",
      "Evaluating models",
      "Deploying models"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is LIME used for?",
    options: [
      "Explaining individual predictions",
      "Training models",
      "Evaluating models",
      "Deploying models"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is model interpretability?",
    options: [
      "Understanding how a model makes decisions",
      "Understanding the data",
      "Understanding the features",
      "Understanding the algorithm"
    ],
    correct: 0,
    category: "ML Algorithms"
  },

  // Model Deployment
  {
    question: "What is model serialization?",
    options: [
      "Saving a trained model to disk",
      "Training a model",
      "Evaluating a model",
      "Deploying a model"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is model versioning?",
    options: [
      "Keeping track of different model versions",
      "Training multiple models",
      "Evaluating multiple models",
      "Deploying multiple models"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is A/B testing for models?",
    options: [
      "Comparing two different models in production",
      "Training two models",
      "Evaluating two models",
      "Deploying two models"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is model monitoring?",
    options: [
      "Tracking model performance in production",
      "Training the model",
      "Evaluating the model",
      "Deploying the model"
    ],
    correct: 0,
    category: "ML Algorithms"
  },
  {
    question: "What is model drift?",
    options: [
      "When model performance degrades over time",
      "When the model moves",
      "When the data changes",
      "When the algorithm changes"
    ],
    correct: 0,
    category: "ML Algorithms"
  }
]; 