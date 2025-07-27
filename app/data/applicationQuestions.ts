import type { Question } from './mlAlgorithmQuestions';

export const applicationQuestions: Question[] = [
  // Practical ML Algorithm Application
  {
    question: "If you need to predict house prices, which character would you choose first?",
    options: ["Logical Lisa", "Simple Sam", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For classifying emails as spam/not spam, which character is most suitable?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For detecting credit card fraud, which character is most suitable?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For finding customer segments, which character is most relevant?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 2,
    category: "Application"
  },
  {
    question: "When you have a small dataset, which character might be best?",
    options: ["Simple Sam (simple model)", "eXtreme Xavier (complex model)", "Robust Robert (ensemble)", "Detective Dan (anomaly)"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you have a large, complex dataset, which character excels?",
    options: ["Simple Sam", "eXtreme Xavier", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For predicting stock prices, which framework helps you choose?",
    options: ["LRSN (classification)", "LRXS (regression)", "RCCA task types", "WISP decision"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For medical diagnosis (disease/no disease), which framework is appropriate?",
    options: ["LRXS (regression)", "LRSN (classification)", "Only clustering", "Only anomaly detection"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For recommendation systems grouping similar users, which character fits?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 2,
    category: "Application"
  },
  {
    question: "For network intrusion detection, which character is most appropriate?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 3,
    category: "Application"
  },

  // Framework Selection Questions
  {
    question: "Which framework helps you choose between regression algorithms?",
    options: ["RCCA", "LRSN", "LRXS", "WISP"],
    correct: 2,
    category: "Application"
  },
  {
    question: "Which framework helps you choose between classification algorithms?",
    options: ["RCCA", "LRSN", "LRXS", "WISP"],
    correct: 1,
    category: "Application"
  },
  {
    question: "Which framework helps you decide what type of problem you're solving?",
    options: ["RCCA", "LRSN", "LRXS", "WISP"],
    correct: 0,
    category: "Application"
  },
  {
    question: "Which framework helps with algorithm selection decisions?",
    options: ["RCCA", "LRSN", "LRXS", "WISP"],
    correct: 3,
    category: "Application"
  },

  // Data Splitting Application
  {
    question: "When you have imbalanced classes, what should you do during data splitting?",
    options: [
      "Use larger test size",
      "Use stratification",
      "Use random_state=0",
      "Skip validation"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "For time series data, what special consideration is needed for splitting?",
    options: [
      "Use stratification",
      "Use larger test size",
      "Maintain temporal order (no random splitting)",
      "Use random_state=42"
    ],
    correct: 2,
    category: "Application"
  },
  {
    question: "When your dataset is very small (< 1000 samples), what might you consider?",
    options: [
      "Use 50/50 split",
      "Use cross-validation instead of simple train-test split",
      "Skip testing entirely",
      "Use larger test size"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "For image classification with unequal class representation, what's important?",
    options: [
      "Random splitting only",
      "Stratification to maintain class balance",
      "Use 90/10 split",
      "Skip validation"
    ],
    correct: 1,
    category: "Application"
  },

  // Real-world Scenario Questions
  {
    question: "You're building a system to predict customer lifetime value. Which approach?",
    options: [
      "Use Detective Dan (anomaly detection)",
      "Use Clustering Clara (grouping)",
      "Use Simple Sam (regression)",
      "Use Logical Lisa (classification)"
    ],
    correct: 2,
    category: "Application"
  },
  {
    question: "You need to categorize support tickets by urgency level. Which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "You want to find unusual patterns in network traffic. Which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 3,
    category: "Application"
  },
  {
    question: "You're predicting temperature based on weather features. Which framework?",
    options: ["LRSN (classification)", "LRXS (regression)", "Clustering only", "Anomaly detection"],
    correct: 1,
    category: "Application"
  },
  {
    question: "You need to group similar products for inventory management. Which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 2,
    category: "Application"
  },
  {
    question: "You're building a spam filter with millions of emails. Which character for performance?",
    options: ["Simple Sam", "eXtreme Xavier", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },

  // Decision Making Questions
  {
    question: "When choosing between Simple Sam and eXtreme Xavier, what's the key factor?",
    options: [
      "Dataset size and complexity",
      "Algorithm name preference",
      "Random choice",
      "Always choose the complex one"
    ],
    correct: 0,
    category: "Application"
  },
  {
    question: "When would you choose Naive Nancy over Logical Lisa?",
    options: [
      "When you need simple, fast classification with independence assumptions",
      "When you need complex probability modeling",
      "When you have continuous outputs",
      "When you need clustering"
    ],
    correct: 0,
    category: "Application"
  },
  {
    question: "When is Robust Robert (Random Forest) preferred over Simple Sam?",
    options: [
      "When you need interpretability",
      "When you have complex, non-linear relationships",
      "When you have very little data",
      "When you need the fastest training"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "What's the main advantage of using Split Steve's stratification?",
    options: [
      "Faster training",
      "Better memory usage",
      "Maintains class balance in train/test splits",
      "Reduces model complexity"
    ],
    correct: 2,
    category: "Application"
  },

  // Integration Questions
  {
    question: "How do the RCCA and LRXS frameworks work together?",
    options: [
      "They are independent",
      "RCCA identifies task type (Regression), then LRXS suggests algorithms",
      "They both do the same thing",
      "Only one should be used"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "How do Split Steve and the ML Avengers work together?",
    options: [
      "They are separate processes",
      "Split Steve prepares data, then ML Avengers train on it",
      "They compete with each other",
      "Only one is needed"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "When should you use the WISP framework?",
    options: [
      "Only for data splitting",
      "When deciding between multiple algorithm options",
      "Only for clustering",
      "Never, it's not useful"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "What's the complete workflow using all frameworks?",
    options: [
      "RCCA → LRXS/LRSN → WISP → Split Steve → Train",
      "Split Steve → RCCA → Train → WISP",
      "WISP → Split Steve → RCCA → Train",
      "Train → RCCA → Split Steve → WISP"
    ],
    correct: 0,
    category: "Application"
  },

  // Advanced Application Scenarios
  {
    question: "You're building a recommendation system for Netflix. Which approach?",
    options: [
      "Use Simple Sam (regression)",
      "Use Clustering Clara (user segmentation)",
      "Use Detective Dan (anomaly detection)",
      "Use Logical Lisa (classification)"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "For predicting customer churn, which character is most suitable?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "You need to predict sales for next quarter. Which framework?",
    options: ["LRSN (classification)", "LRXS (regression)", "RCCA (clustering)", "WISP (decision)"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For sentiment analysis of social media posts, which character?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "You're building a fraud detection system for credit cards. Which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For image classification (cat vs dog), which framework?",
    options: ["LRXS (regression)", "LRSN (classification)", "RCCA (clustering)", "WISP (decision)"],
    correct: 1,
    category: "Application"
  },
  {
    question: "You need to segment customers for marketing campaigns. Which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 2,
    category: "Application"
  },
  {
    question: "For predicting house prices based on features, which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 0,
    category: "Application"
  },
  {
    question: "You're building a spam filter. Which character for best performance?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "eXtreme Xavier"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For detecting network intrusions, which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 3,
    category: "Application"
  },

  // Industry-Specific Applications
  {
    question: "In healthcare, for disease diagnosis, which framework?",
    options: ["LRXS (regression)", "LRSN (classification)", "RCCA (clustering)", "WISP (decision)"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For financial risk assessment, which character is most appropriate?",
    options: ["Simple Sam", "Logical Lisa", "Robust Robert", "Detective Dan"],
    correct: 2,
    category: "Application"
  },
  {
    question: "In e-commerce, for product recommendation, which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 2,
    category: "Application"
  },
  {
    question: "For weather forecasting, which framework?",
    options: ["LRSN (classification)", "LRXS (regression)", "RCCA (clustering)", "WISP (decision)"],
    correct: 1,
    category: "Application"
  },
  {
    question: "In manufacturing, for quality control, which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For predicting stock market trends, which character?",
    options: ["Simple Sam", "eXtreme Xavier", "Naive Nancy", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "In education, for predicting student performance, which framework?",
    options: ["LRXS (regression)", "LRSN (classification)", "RCCA (clustering)", "WISP (decision)"],
    correct: 0,
    category: "Application"
  },
  {
    question: "For autonomous vehicle object detection, which framework?",
    options: ["LRXS (regression)", "LRSN (classification)", "RCCA (clustering)", "WISP (decision)"],
    correct: 1,
    category: "Application"
  },
  {
    question: "In cybersecurity, for malware detection, which character?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For natural language processing tasks, which character often works well?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "eXtreme Xavier"],
    correct: 3,
    category: "Application"
  },

  // Data Size and Complexity Considerations
  {
    question: "When you have millions of data points, which character excels?",
    options: ["Simple Sam", "eXtreme Xavier", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For a dataset with only 100 samples, which character might be best?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Detective Dan"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you have high-dimensional data (many features), which character?",
    options: ["Simple Sam", "Steady Steve", "eXtreme Xavier", "Naive Nancy"],
    correct: 1,
    category: "Application"
  },
  {
    question: "For real-time predictions, which character is fastest?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need interpretable results, which character is best?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },

  // Algorithm Selection Scenarios
  {
    question: "When would you choose XGBoost over Linear Regression?",
    options: [
      "When you have complex, non-linear relationships",
      "When you need fast predictions",
      "When you have very little data",
      "When you need interpretability"
    ],
    correct: 0,
    category: "Application"
  },
  {
    question: "When would you choose SVM over Random Forest?",
    options: [
      "When you have high-dimensional data",
      "When you need ensemble methods",
      "When you have categorical features",
      "When you need fast training"
    ],
    correct: 0,
    category: "Application"
  },
  {
    question: "When would you choose Naive Bayes over Logistic Regression?",
    options: [
      "When you need probability estimates",
      "When you have independent features",
      "When you have continuous features",
      "When you need regularization"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "When would you choose Random Forest over XGBoost?",
    options: [
      "When you need the best possible performance",
      "When you want simpler hyperparameter tuning",
      "When you have very large datasets",
      "When you need gradient boosting"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "When would you choose Linear Regression over XGBoost?",
    options: [
      "When you have complex relationships",
      "When you need interpretability and simple relationships",
      "When you have categorical features",
      "When you need the best performance"
    ],
    correct: 1,
    category: "Application"
  },

  // Framework Integration Questions
  {
    question: "How do you use RCCA and LRXS together for a regression problem?",
    options: [
      "Use RCCA to identify it's regression, then LRXS for algorithm selection",
      "Use LRXS first, then RCCA",
      "Use them independently",
      "Only use RCCA"
    ],
    correct: 0,
    category: "Application"
  },
  {
    question: "How do you use RCCA and LRSN together for a classification problem?",
    options: [
      "Use RCCA to identify it's classification, then LRSN for algorithm selection",
      "Use LRSN first, then RCCA",
      "Use them independently",
      "Only use RCCA"
    ],
    correct: 0,
    category: "Application"
  },
  {
    question: "When should you use the WISP framework in your workflow?",
    options: [
      "Before data splitting",
      "After choosing algorithms but before training",
      "After training",
      "Never"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "What's the role of Split Steve in the complete ML workflow?",
    options: [
      "Choose algorithms",
      "Prepare data for training and testing",
      "Evaluate models",
      "Deploy models"
    ],
    correct: 1,
    category: "Application"
  },
  {
    question: "How do the ML Avengers work with Split Steve?",
    options: [
      "They compete for data",
      "Split Steve prepares data, ML Avengers train on it",
      "They work independently",
      "Only one is needed"
    ],
    correct: 1,
    category: "Application"
  },

  // Performance and Optimization Questions
  {
    question: "When you need the highest possible accuracy, which character?",
    options: ["Simple Sam", "eXtreme Xavier", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },
  {
    question: "When you need fast training times, which character?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need to handle missing data well, which character?",
    options: ["Simple Sam", "Robust Robert", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },
  {
    question: "When you need to avoid overfitting, which character?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need ensemble methods, which character?",
    options: ["Simple Sam", "Robust Robert", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },

  // Feature Engineering Considerations
  {
    question: "When you have categorical features, which character handles them well?",
    options: ["Simple Sam", "Robust Robert", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },
  {
    question: "When you have text data, which character is often used?",
    options: ["Simple Sam", "Naive Nancy", "Logical Lisa", "eXtreme Xavier"],
    correct: 1,
    category: "Application"
  },
  {
    question: "When you have numerical features only, which character works well?",
    options: ["Simple Sam", "Logical Lisa", "Clustering Clara", "Detective Dan"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you have mixed data types, which character is most flexible?",
    options: ["Simple Sam", "Robust Robert", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },
  {
    question: "When you need feature importance, which character provides it?",
    options: ["Simple Sam", "Robust Robert", "Naive Nancy", "Logical Lisa"],
    correct: 1,
    category: "Application"
  },

  // Model Deployment Considerations
  {
    question: "When you need to deploy a model to production, which character is easiest?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need model explainability, which character is best?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need real-time predictions, which character is fastest?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need to update the model frequently, which character is easiest?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need model versioning, which character is most manageable?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },

  // Advanced Scenarios
  {
    question: "For multi-class classification (more than 2 classes), which character?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "All of the above"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For multi-label classification, which character is most suitable?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "eXtreme Xavier"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For time series forecasting, which character might work?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "All of the above"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For reinforcement learning problems, which character is not suitable?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "All are suitable"],
    correct: 3,
    category: "Application"
  },
  {
    question: "For deep learning problems, which character represents the approach?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "None of the above"],
    correct: 1,
    category: "Application"
  },

  // Business Impact Questions
  {
    question: "When cost of false positives is high, which character helps?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "All can be tuned"],
    correct: 3,
    category: "Application"
  },
  {
    question: "When cost of false negatives is high, which character helps?",
    options: ["Simple Sam", "Logical Lisa", "Naive Nancy", "All can be tuned"],
    correct: 3,
    category: "Application"
  },
  {
    question: "When you need to explain decisions to stakeholders, which character?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need to comply with regulations, which character is best?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  },
  {
    question: "When you need to build trust with users, which character helps?",
    options: ["Simple Sam", "eXtreme Xavier", "Robust Robert", "Logical Lisa"],
    correct: 0,
    category: "Application"
  }
];
 