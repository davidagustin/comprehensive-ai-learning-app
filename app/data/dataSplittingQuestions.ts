import type { Question } from './mlAlgorithmQuestions';

export const dataSplittingQuestions: Question[] = [
  // SPLIT Framework Questions
  {
    question: "What does the SPLIT framework stand for?",
    options: [
      "Smart People Learn Important Things",
      "Split Programs Learn Individual Tasks",
      "Simple People Like Important Training",
      "Structured Programming Leads Important Tests"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does the 'S' in SPLIT represent?",
    options: ["Stratify", "Split the data", "Standard practice", "Separate data"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does the 'P' in SPLIT stand for?",
    options: ["Parameters matter", "Performance", "Process", "Prediction"],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does the 'L' in SPLIT represent?",
    options: ["Learning", "Labels and features", "Linear", "Logic"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does the 'I' in SPLIT stand for?",
    options: ["Important to stratify", "Implementation", "Input", "Intelligence"],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does the 'T' in SPLIT represent?",
    options: ["Testing", "Training", "Train and test separately", "Time"],
    correct: 2,
    category: "Data Splitting"
  },

  // Split Steve Character Questions
  {
    question: "Who is the data splitting character?",
    options: ["Simple Sam", "Split Steve", "Steady Steve", "Smart Sam"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is Split Steve's catchphrase?",
    options: [
      "I keep it simple!",
      "I divide data fairly and squarely!",
      "I find the perfect boundary!",
      "I boost performance!"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What emoji represents Split Steve?",
    options: ["🤖", "🔄", "🛡️", "⚡"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is Split Steve's personality?",
    options: ["Simple and fast", "Methodical and fair", "Extreme and powerful", "Naive but effective"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What tools does Split Steve use?",
    options: ["Linear regression", "train_test_split() function", "Random forest", "XGBoost"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is Split Steve's motto?",
    options: [
      "Keep it simple!",
      "Stratify when classes are imbalanced!",
      "Boost to the extreme!",
      "Find the perfect boundary!"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is Split Steve's saying?",
    options: [
      "Simple is better!",
      "80 for training, 20 for testing - that's the way!",
      "Extreme performance matters!",
      "Boundaries define success!"
    ],
    correct: 1,
    category: "Data Splitting"
  },

  // 80/20 Rule Questions
  {
    question: "What is the standard train-test split ratio?",
    options: ["70/30", "80/20", "90/10", "75/25"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does the EIGHT-TWENTY mnemonic stand for?",
    options: [
      "Everyone In Great Health Takes Twenty Vitamins Every Night, Thank You!",
      "Eight Tigers Take Twenty Treats Every Night",
      "Excellent Ideas Generate Happy Thoughts Twenty Times Every Night",
      "Easy Instructions Give High Test Twenty Victory Every Night"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What percentage of data typically goes to training?",
    options: ["70%", "75%", "80%", "85%"],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "What percentage of data typically goes to testing?",
    options: ["15%", "20%", "25%", "30%"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "Why is 80% used for training?",
    options: [
      "It's a magic number",
      "More data helps the model learn better patterns",
      "It's required by scikit-learn",
      "It makes calculations easier"
    ],
    correct: 1,
    category: "Data Splitting"
  },

  // Parameters Questions
  {
    question: "What is the purpose of random_state=42?",
    options: [
      "It's a magic number",
      "Ensures reproducible results",
      "Improves model performance",
      "Reduces overfitting"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does the 42-20 mnemonic stand for?",
    options: [
      "Forty-Two Researchers Studied Twenty Outstanding Models",
      "Forty-Two Random States Twenty Optimal Models",
      "Forty-Two Rules Support Twenty Operations",
      "Forty-Two Reasons Support Twenty Options"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does test_size=0.2 mean?",
    options: [
      "2% of data for testing",
      "20% of data for testing",
      "0.2 samples for testing",
      "2 samples for testing"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "Why is random_state important?",
    options: [
      "Makes the model faster",
      "Ensures reproducible results across runs",
      "Improves accuracy",
      "Reduces memory usage"
    ],
    correct: 1,
    category: "Data Splitting"
  },

  // Stratification Questions
  {
    question: "What does stratification help with?",
    options: [
      "Faster training",
      "Better accuracy",
      "Balanced class distribution",
      "Reduced memory usage"
    ],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "What does the BALANCE framework help remember?",
    options: [
      "Training parameters",
      "Stratification benefits",
      "Model evaluation",
      "Feature selection"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does BALANCE stand for?",
    options: [
      "Balanced Algorithms Love All Nice Class Examples",
      "Basic Algorithms Learn All New Class Examples",
      "Better Algorithms Like All Natural Class Examples",
      "Balanced Analysis Leads All New Class Examples"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "When should you use stratification?",
    options: [
      "Always",
      "Never",
      "When you have imbalanced classes",
      "Only for large datasets"
    ],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "What does the 'B' in BALANCE represent?",
    options: ["Better", "Balanced class distribution", "Basic", "Boundary"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does the 'A' in BALANCE stand for? (First A)",
    options: ["All classes represented proportionally", "Algorithm", "Analysis", "Artificial"],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does the 'L' in BALANCE represent?",
    options: ["Learning", "Linear", "Less bias in splits", "Logic"],
    correct: 2,
    category: "Data Splitting"
  },

  // Variable Names Questions
  {
    question: "What does X typically represent in train_test_split?",
    options: ["Labels", "Features (input data)", "Test data", "Training data"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does y typically represent in train_test_split?",
    options: ["Features", "Labels (target values)", "Test data", "Training data"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does X_train contain?",
    options: ["Training labels", "Training features", "Test features", "Test labels"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What does y_test contain?",
    options: ["Training labels", "Training features", "Test features", "Test labels"],
    correct: 3,
    category: "Data Splitting"
  },
  {
    question: "What does the X-Y TRAIN-TEST mnemonic stand for?",
    options: [
      "eXcellent Youngsters Take Rides And Investigate New Towns Every Single Time",
      "eXtra Years Take Real Analysis In New Towns Every Single Time",
      "eXpert Youth Take Rides And Investigate New Territories Every Single Time",
      "eXcellent Years Take Real Adventures In New Towns Every Single Time"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Memory Palace Questions
  {
    question: "In the Memory Palace, where is the splitting machine located?",
    options: [
      "Training Wing",
      "Testing Wing",
      "Center of the laboratory",
      "Parameter Control Panel"
    ],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "What is in the Training Wing of the Memory Palace?",
    options: [
      "20% of data (smaller room)",
      "80% of data (larger room)",
      "Parameter controls",
      "Stratification station"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is in the Testing Wing of the Memory Palace?",
    options: [
      "80% of data (larger room)",
      "20% of data (smaller room)",
      "Parameter controls",
      "Splitting machine"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is at the Parameter Control Panel?",
    options: [
      "X and y variables",
      "test_size=0.2, random_state=42",
      "Training data",
      "Test results"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What happens at the Stratification Station?",
    options: [
      "Data gets split randomly",
      "Parameters are set",
      "Balanced class distribution is ensured",
      "Results are evaluated"
    ],
    correct: 2,
    category: "Data Splitting"
  },

  // Application Questions
  {
    question: "When you have imbalanced classes, what should you do during data splitting?",
    options: [
      "Use larger test size",
      "Use stratification",
      "Use random_state=0",
      "Skip validation"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What happens if you don't use stratification with imbalanced data?",
    options: [
      "Better performance",
      "Faster training",
      "Skewed splits and biased evaluation",
      "Reduced memory usage"
    ],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "What is the main purpose of the test set?",
    options: [
      "To train the model",
      "To tune hyperparameters",
      "To evaluate model performance on unseen data",
      "To store extra data"
    ],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "Why shouldn't the test set be used during training?",
    options: [
      "It's too small",
      "It would cause data leakage and overfitting",
      "It's not important",
      "It would slow down training"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is data leakage in the context of train-test splitting?",
    options: [
      "Data getting corrupted",
      "Using test data during training",
      "Losing data during splitting",
      "Having too much data"
    ],
    correct: 1,
    category: "Data Splitting"
  },

  // Advanced Data Splitting Concepts
  {
    question: "What is cross-validation?",
    options: [
      "A type of data splitting that uses multiple train-test splits",
      "A way to validate cross-references",
      "A method to cross-check data",
      "A type of data corruption"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is k-fold cross-validation?",
    options: [
      "Splitting data into k equal parts and training k times",
      "Using k different random seeds",
      "Training k different models",
      "Using k different algorithms"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is leave-one-out cross-validation?",
    options: [
      "Using all data except one sample for training",
      "Using only one sample for training",
      "Leaving out one feature",
      "Using one fold for validation"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is stratified k-fold cross-validation?",
    options: [
      "K-fold CV that maintains class distribution in each fold",
      "K-fold CV with stratification",
      "K-fold CV with random sampling",
      "K-fold CV with time series data"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "When should you use cross-validation instead of simple train-test split?",
    options: [
      "When you have a small dataset",
      "When you have a large dataset",
      "When you have categorical features",
      "When you have numerical features"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Time Series Data Splitting
  {
    question: "For time series data, what is the correct splitting approach?",
    options: [
      "Random splitting",
      "Stratified splitting",
      "Temporal splitting (train on past, test on future)",
      "Cross-validation"
    ],
    correct: 2,
    category: "Data Splitting"
  },
  {
    question: "What is walk-forward validation?",
    options: [
      "A type of time series validation",
      "A type of random validation",
      "A type of stratified validation",
      "A type of cross-validation"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "Why can't you use random splitting for time series data?",
    options: [
      "It would cause data leakage",
      "It would be too slow",
      "It would use too much memory",
      "It would be too complex"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the train-validation-test split for time series?",
    options: [
      "Train on past, validate on recent past, test on future",
      "Random split into three parts",
      "Stratified split into three parts",
      "Cross-validation split"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is expanding window validation?",
    options: [
      "Gradually increasing training set size",
      "Gradually decreasing training set size",
      "Using a fixed window size",
      "Using random window sizes"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Imbalanced Data Handling
  {
    question: "What is class imbalance?",
    options: [
      "When classes have very different numbers of samples",
      "When classes have the same number of samples",
      "When classes are perfectly balanced",
      "When classes are randomly distributed"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What happens if you don't use stratification with imbalanced data?",
    options: [
      "Better performance",
      "Some classes might not appear in test set",
      "Faster training",
      "More accurate results"
    ],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "What is the ratio of positive to negative samples in a balanced dataset?",
    options: [
      "1:1",
      "2:1",
      "1:2",
      "It varies"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is SMOTE in the context of imbalanced data?",
    options: [
      "A technique to create synthetic minority samples",
      "A type of stratification",
      "A type of cross-validation",
      "A type of random sampling"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is undersampling?",
    options: [
      "Reducing the number of majority class samples",
      "Reducing the number of minority class samples",
      "Reducing the total number of samples",
      "Reducing the number of features"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Data Splitting Parameters
  {
    question: "What does shuffle=True do in train_test_split?",
    options: [
      "Randomly shuffles the data before splitting",
      "Shuffles the features",
      "Shuffles the labels",
      "Shuffles the parameters"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the default value for shuffle in train_test_split?",
    options: ["True", "False", "None", "Random"],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does random_state=None mean?",
    options: [
      "Results will be different each time",
      "Results will be the same each time",
      "Results will be random",
      "Results will be None"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the purpose of setting random_state to a fixed value?",
    options: [
      "To ensure reproducible results",
      "To make results random",
      "To improve performance",
      "To reduce memory usage"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What happens if you don't set random_state?",
    options: [
      "Results will be different each time you run the code",
      "Results will be the same each time",
      "Results will be None",
      "Results will be random"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Memory Palace Extended Questions
  {
    question: "What is the Memory Palace for data splitting?",
    options: [
      "A mental visualization technique to remember splitting concepts",
      "A physical building for storing data",
      "A computer memory location",
      "A type of algorithm"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the Training Wing in the Memory Palace?",
    options: [
      "Where 80% of data goes (larger room)",
      "Where 20% of data goes (smaller room)",
      "Where parameters are set",
      "Where results are stored"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the Testing Wing in the Memory Palace?",
    options: [
      "Where 20% of data goes (smaller room)",
      "Where 80% of data goes (larger room)",
      "Where parameters are set",
      "Where results are stored"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the Parameter Control Panel in the Memory Palace?",
    options: [
      "Where test_size=0.2 and random_state=42 are set",
      "Where data is stored",
      "Where results are displayed",
      "Where models are trained"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the Stratification Station in the Memory Palace?",
    options: [
      "Where balanced class distribution is ensured",
      "Where data is split",
      "Where parameters are set",
      "Where results are stored"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Practical Application Questions
  {
    question: "For a dataset with 1000 samples, how many would go to training?",
    options: ["200", "800", "500", "1000"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "For a dataset with 1000 samples, how many would go to testing?",
    options: ["200", "800", "500", "1000"],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "If you have 100 positive samples and 900 negative samples, what's the imbalance ratio?",
    options: ["1:9", "9:1", "1:1", "1:10"],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "For a dataset with 5 classes and 100 samples each, what's the total size?",
    options: ["100", "500", "1000", "50"],
    correct: 1,
    category: "Data Splitting"
  },
  {
    question: "If you use test_size=0.3, what percentage goes to training?",
    options: ["30%", "70%", "60%", "40%"],
    correct: 1,
    category: "Data Splitting"
  },

  // Advanced Scenarios
  {
    question: "What should you do if your test set is too small?",
    options: [
      "Use cross-validation instead",
      "Use a larger test size",
      "Use a smaller test size",
      "Use all data for training"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your training set is too small?",
    options: [
      "Collect more data",
      "Use a smaller test size",
      "Use cross-validation",
      "Use all data for training"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is nested cross-validation?",
    options: [
      "Cross-validation within cross-validation",
      "A type of stratification",
      "A type of random splitting",
      "A type of time series splitting"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "When would you use nested cross-validation?",
    options: [
      "When you need to tune hyperparameters",
      "When you have a small dataset",
      "When you have imbalanced data",
      "When you have time series data"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the difference between validation and test sets?",
    options: [
      "Validation set is for hyperparameter tuning, test set is for final evaluation",
      "They are the same thing",
      "Validation set is larger than test set",
      "Test set is used during training"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Data Quality and Preprocessing
  {
    question: "What should you do before splitting data?",
    options: [
      "Clean and preprocess the data",
      "Train the model",
      "Evaluate the model",
      "Deploy the model"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What happens if you split data before preprocessing?",
    options: [
      "You might leak information from test set",
      "Nothing happens",
      "It's faster",
      "It's more accurate"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the correct order: preprocessing or splitting?",
    options: [
      "Preprocessing first, then splitting",
      "Splitting first, then preprocessing",
      "It doesn't matter",
      "Do them simultaneously"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do with missing values before splitting?",
    options: [
      "Handle them appropriately",
      "Ignore them",
      "Remove all rows with missing values",
      "Fill with zeros"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do with outliers before splitting?",
    options: [
      "Decide how to handle them based on domain knowledge",
      "Always remove them",
      "Always keep them",
      "Ignore them"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Performance and Evaluation
  {
    question: "What is the purpose of having a separate test set?",
    options: [
      "To get an unbiased estimate of model performance",
      "To train the model",
      "To tune hyperparameters",
      "To preprocess data"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "Why shouldn't you use the test set for hyperparameter tuning?",
    options: [
      "It would cause overfitting to the test set",
      "It would be too slow",
      "It would use too much memory",
      "It would be too complex"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is the difference between training and test performance?",
    options: [
      "Training performance is on seen data, test performance is on unseen data",
      "They are always the same",
      "Training performance is always better",
      "Test performance is always better"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does it mean if training performance is much better than test performance?",
    options: [
      "The model is overfitting",
      "The model is underfitting",
      "The model is perfect",
      "The data is bad"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What does it mean if training and test performance are both poor?",
    options: [
      "The model is underfitting",
      "The model is overfitting",
      "The model is perfect",
      "The data is perfect"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Best Practices
  {
    question: "What is a good practice for data splitting?",
    options: [
      "Document your splitting strategy",
      "Use different splits for each run",
      "Never use stratification",
      "Always use 50/50 split"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your results are inconsistent?",
    options: [
      "Set a fixed random_state",
      "Use different random seeds",
      "Use different algorithms",
      "Use different data"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What is a good practice for handling multiple datasets?",
    options: [
      "Use the same splitting strategy for all",
      "Use different strategies for each",
      "Don't split them",
      "Combine them first"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your dataset is very small (< 100 samples)?",
    options: [
      "Use cross-validation",
      "Use a larger test size",
      "Use all data for training",
      "Collect more data"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your dataset is very large (> 1M samples)?",
    options: [
      "Use a smaller test size (e.g., 10%)",
      "Use a larger test size",
      "Use cross-validation",
      "Use all data for training"
    ],
    correct: 0,
    category: "Data Splitting"
  },

  // Edge Cases and Troubleshooting
  {
    question: "What happens if you try to split an empty dataset?",
    options: [
      "You'll get an error",
      "You'll get empty train and test sets",
      "You'll get all data in training",
      "You'll get all data in testing"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What happens if you try to split a dataset with only one sample?",
    options: [
      "You'll get an error",
      "You'll get one sample in training, zero in testing",
      "You'll get zero in training, one in testing",
      "You'll get one sample in both"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your test set has no samples from a class?",
    options: [
      "Use stratification",
      "Use random splitting",
      "Use cross-validation",
      "Ignore the missing class"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your dataset has duplicate samples?",
    options: [
      "Remove duplicates before splitting",
      "Keep duplicates",
      "Split duplicates randomly",
      "Use duplicates only in training"
    ],
    correct: 0,
    category: "Data Splitting"
  },
  {
    question: "What should you do if your dataset has very high dimensionality?",
    options: [
      "Consider dimensionality reduction before splitting",
      "Use larger test size",
      "Use smaller test size",
      "Use cross-validation"
    ],
    correct: 0,
    category: "Data Splitting"
  }
]; 