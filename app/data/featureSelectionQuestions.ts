import type { Question } from './mlAlgorithmQuestions';

export const featureSelectionQuestions: Question[] = [
  // Basic Feature Selection Concepts
  {
    question: "What is feature selection?",
    options: [
      "Choosing the most important features for your model",
      "Creating new features from existing ones",
      "Scaling features to the same range",
      "Removing all features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is feature engineering?",
    options: [
      "Creating new features from existing ones",
      "Choosing existing features",
      "Scaling features",
      "Removing features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is the difference between feature selection and feature engineering?",
    options: [
      "Selection chooses existing features, engineering creates new ones",
      "Selection creates new features, engineering chooses existing ones",
      "They are the same thing",
      "Selection removes features, engineering adds features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is the curse of dimensionality?",
    options: [
      "Performance degrades as number of features increases",
      "Performance improves as number of features increases",
      "Memory usage increases with features",
      "Training time increases with features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "Why is feature selection important?",
    options: [
      "To reduce overfitting and improve model performance",
      "To increase model complexity",
      "To make models slower",
      "To use more memory"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Feature Selection Methods
  {
    question: "What is filter-based feature selection?",
    options: [
      "Using statistical measures to rank features",
      "Using model performance to select features",
      "Using domain knowledge to select features",
      "Using random selection"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is wrapper-based feature selection?",
    options: [
      "Using model performance to select features",
      "Using statistical measures to rank features",
      "Using domain knowledge to select features",
      "Using random selection"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is embedded feature selection?",
    options: [
      "Feature selection built into the model training process",
      "Feature selection done before training",
      "Feature selection done after training",
      "Feature selection done manually"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "Which method is fastest for feature selection?",
    options: ["Filter-based", "Wrapper-based", "Embedded", "Manual"],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "Which method is most accurate for feature selection?",
    options: ["Wrapper-based", "Filter-based", "Embedded", "Manual"],
    correct: 0,
    category: "Feature Selection"
  },

  // Statistical Measures for Feature Selection
  {
    question: "What is correlation-based feature selection?",
    options: [
      "Selecting features based on their correlation with the target",
      "Selecting features based on their correlation with each other",
      "Selecting features randomly",
      "Selecting features based on domain knowledge"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is mutual information used for in feature selection?",
    options: [
      "Measuring the dependency between features and target",
      "Measuring the correlation between features",
      "Measuring the variance of features",
      "Measuring the mean of features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is chi-square test used for in feature selection?",
    options: [
      "Testing independence between categorical features and target",
      "Testing correlation between numerical features",
      "Testing variance of features",
      "Testing mean of features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is ANOVA F-test used for in feature selection?",
    options: [
      "Testing if means of groups are significantly different",
      "Testing correlation between features",
      "Testing variance of features",
      "Testing distribution of features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is information gain used for in feature selection?",
    options: [
      "Measuring how much a feature reduces uncertainty about the target",
      "Measuring correlation between features",
      "Measuring variance of features",
      "Measuring mean of features"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Feature Engineering Techniques
  {
    question: "What is polynomial feature engineering?",
    options: [
      "Creating features by combining existing features with mathematical operations",
      "Creating features by adding polynomials",
      "Creating features by multiplying features",
      "Creating features by dividing features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is interaction feature engineering?",
    options: [
      "Creating features by combining two or more existing features",
      "Creating features by adding features",
      "Creating features by multiplying features",
      "Creating features by dividing features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is binning in feature engineering?",
    options: [
      "Converting continuous features into categorical features",
      "Converting categorical features into continuous features",
      "Removing features",
      "Adding features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is one-hot encoding?",
    options: [
      "Converting categorical features into binary features",
      "Converting binary features into categorical features",
      "Converting numerical features into categorical features",
      "Converting categorical features into numerical features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is label encoding?",
    options: [
      "Converting categorical features into numerical features",
      "Converting numerical features into categorical features",
      "Converting binary features into categorical features",
      "Converting categorical features into binary features"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Domain-Specific Feature Engineering
  {
    question: "What is feature extraction from text data?",
    options: [
      "Creating features from text using techniques like TF-IDF, word embeddings",
      "Removing text features",
      "Converting text to numbers",
      "Adding text features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is feature extraction from time series data?",
    options: [
      "Creating features like rolling statistics, lag features, seasonal features",
      "Removing time features",
      "Converting time to numbers",
      "Adding time features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is feature extraction from image data?",
    options: [
      "Creating features using techniques like edge detection, color histograms",
      "Removing image features",
      "Converting images to numbers",
      "Adding image features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is feature extraction from geospatial data?",
    options: [
      "Creating features like distance, area, spatial relationships",
      "Removing spatial features",
      "Converting coordinates to numbers",
      "Adding spatial features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is feature extraction from network data?",
    options: [
      "Creating features like centrality measures, clustering coefficients",
      "Removing network features",
      "Converting networks to numbers",
      "Adding network features"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Feature Scaling and Normalization
  {
    question: "What is feature scaling?",
    options: [
      "Bringing features to the same scale",
      "Removing features",
      "Adding features",
      "Selecting features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is standardization (Z-score normalization)?",
    options: [
      "Subtracting mean and dividing by standard deviation",
      "Subtracting minimum and dividing by range",
      "Dividing by maximum value",
      "Adding mean and multiplying by standard deviation"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is min-max scaling?",
    options: [
      "Scaling features to range [0,1]",
      "Scaling features to range [-1,1]",
      "Scaling features to range [0,100]",
      "Scaling features to range [0,10]"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is robust scaling?",
    options: [
      "Scaling using median and interquartile range",
      "Scaling using mean and standard deviation",
      "Scaling using minimum and maximum",
      "Scaling using mode and range"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "Which scaling method is most robust to outliers?",
    options: ["Robust scaling", "Standardization", "Min-max scaling", "No scaling"],
    correct: 0,
    category: "Feature Selection"
  },

  // Feature Selection Algorithms
  {
    question: "What is Recursive Feature Elimination (RFE)?",
    options: [
      "Iteratively removing least important features",
      "Iteratively adding most important features",
      "Randomly selecting features",
      "Selecting all features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is SelectKBest?",
    options: [
      "Selecting k features with highest scores",
      "Selecting k features with lowest scores",
      "Selecting k random features",
      "Selecting k features with median scores"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is SelectPercentile?",
    options: [
      "Selecting top percentile of features",
      "Selecting bottom percentile of features",
      "Selecting random percentile of features",
      "Selecting median percentile of features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is Lasso regularization for feature selection?",
    options: [
      "L1 regularization that can set coefficients to zero",
      "L2 regularization that cannot set coefficients to zero",
      "No regularization",
      "Both L1 and L2 regularization"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is Ridge regularization for feature selection?",
    options: [
      "L2 regularization that shrinks coefficients but doesn't set them to zero",
      "L1 regularization that can set coefficients to zero",
      "No regularization",
      "Both L1 and L2 regularization"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Feature Importance
  {
    question: "What is feature importance?",
    options: [
      "How much each feature contributes to model predictions",
      "How much each feature costs",
      "How much each feature weighs",
      "How much each feature varies"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "Which algorithms provide feature importance?",
    options: [
      "Random Forest, XGBoost, Decision Trees",
      "Linear Regression, Logistic Regression",
      "SVM, Neural Networks",
      "K-means, DBSCAN"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is permutation importance?",
    options: [
      "Measuring importance by randomly shuffling feature values",
      "Measuring importance by removing features",
      "Measuring importance by adding features",
      "Measuring importance by scaling features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is SHAP for feature importance?",
    options: [
      "Explaining model predictions using Shapley values",
      "Explaining model predictions using permutation",
      "Explaining model predictions using correlation",
      "Explaining model predictions using variance"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is LIME for feature importance?",
    options: [
      "Explaining individual predictions using local approximations",
      "Explaining global model behavior",
      "Explaining feature correlations",
      "Explaining feature distributions"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Best Practices
  {
    question: "When should you do feature selection?",
    options: [
      "Before model training to reduce overfitting",
      "After model training to improve performance",
      "During model training",
      "Never"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is the correct order: feature selection or feature engineering?",
    options: [
      "Feature engineering first, then feature selection",
      "Feature selection first, then feature engineering",
      "They can be done simultaneously",
      "It doesn't matter"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What should you do with highly correlated features?",
    options: [
      "Remove one of them to reduce multicollinearity",
      "Keep both of them",
      "Combine them into one feature",
      "Scale them differently"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What should you do with features that have low variance?",
    options: [
      "Consider removing them as they provide little information",
      "Keep them as they might be important",
      "Scale them to increase variance",
      "Combine them with other features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What should you do with features that have many missing values?",
    options: [
      "Consider removing them or imputing missing values",
      "Always remove them",
      "Always impute missing values",
      "Ignore missing values"
    ],
    correct: 0,
    category: "Feature Selection"
  },

  // Advanced Topics
  {
    question: "What is autoencoder for feature selection?",
    options: [
      "Using neural networks to learn compressed representations",
      "Using neural networks to predict features",
      "Using neural networks to classify features",
      "Using neural networks to cluster features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is PCA for feature selection?",
    options: [
      "Dimensionality reduction that creates new features",
      "Feature selection that removes features",
      "Feature engineering that creates features",
      "Feature scaling that normalizes features"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is t-SNE for feature selection?",
    options: [
      "Dimensionality reduction for visualization",
      "Feature selection for prediction",
      "Feature engineering for modeling",
      "Feature scaling for normalization"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is UMAP for feature selection?",
    options: [
      "Dimensionality reduction that preserves both local and global structure",
      "Feature selection that only preserves local structure",
      "Feature engineering that creates new structure",
      "Feature scaling that normalizes structure"
    ],
    correct: 0,
    category: "Feature Selection"
  },
  {
    question: "What is feature hashing?",
    options: [
      "Converting features to fixed-size vectors using hash functions",
      "Converting features to random vectors",
      "Converting features to binary vectors",
      "Converting features to categorical vectors"
    ],
    correct: 0,
    category: "Feature Selection"
  }
]; 