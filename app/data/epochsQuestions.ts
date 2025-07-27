import type { Question } from './mlAlgorithmQuestions';

export const epochsQuestions: Question[] = [
  // Basic Epochs Concepts
  {
    question: "What does one epoch represent in model training?",
    options: [
      "A single batch update",
      "One complete pass through the training data",
      "A single prediction",
      "A model evaluation step"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "What is the mnemonic for remembering what EPOCHS stands for?",
    options: [
      "Every Pass Over Complete Helps Strengthen",
      "Each Pattern Observed Counts Heavily",
      "Epochs Provide Outstanding Convergence",
      "Every Prediction Over Correct Hypothesis"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What can happen if you train for too many epochs?",
    options: [
      "The model will always improve",
      "The model may overfit the training data",
      "The model will underfit",
      "The model will stop learning completely"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "In the visual, what does each orange circle represent?",
    options: [
      "A batch",
      "A data point",
      "A pass (epoch) through all data",
      "A model parameter"
    ],
    correct: 2,
    category: "Epochs"
  },
  {
    question: "What is the character associated with epochs?",
    options: ["Epoch Emma", "Simple Sam", "Split Steve", "Logical Lisa"],
    correct: 0,
    category: "Epochs"
  },

  // EPOCHS Framework Questions
  {
    question: "What does the 'E' in EPOCHS stand for?",
    options: ["Every", "Each", "Epoch", "End"],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What does the 'P' in EPOCHS represent?",
    options: ["Pass", "Pattern", "Process", "Predict"],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What does the 'O' in EPOCHS stand for?",
    options: ["Over", "Once", "Order", "Output"],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What does the 'C' in EPOCHS represent?",
    options: ["Complete", "Cycle", "Correct", "Count"],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What does the 'H' in EPOCHS stand for?",
    options: ["Helps", "High", "Hard", "Hold"],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What does the 'S' in EPOCHS represent?",
    options: ["Strengthen", "Start", "Stop", "Sample"],
    correct: 0,
    category: "Epochs"
  },

  // Epoch Emma Character Questions
  {
    question: "What is Epoch Emma's emoji?",
    options: ["⏰", "⏳", "🕐", "⏱️"],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is Epoch Emma's catchphrase?",
    options: [
      "I love learning from every pass!",
      "I keep it simple!",
      "I divide data fairly!",
      "I find the perfect boundary!"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is Epoch Emma's specialty?",
    options: ["Data Splitting", "Model Training", "Algorithm Selection", "Feature Engineering"],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "What is Epoch Emma's personality?",
    options: ["Simple and fast", "Persistent and patient", "Extreme and powerful", "Methodical and fair"],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "What is Epoch Emma's motto?",
    options: [
      "More epochs, more learning!",
      "Keep it simple!",
      "Divide data fairly!",
      "Find the perfect boundary!"
    ],
    correct: 0,
    category: "Epochs"
  },

  // Training Process Questions
  {
    question: "What happens during each epoch?",
    options: [
      "The model sees each training sample once",
      "The model makes predictions on test data",
      "The model evaluates its performance",
      "The model saves its weights"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "How does the model learn during epochs?",
    options: [
      "By updating weights based on errors",
      "By memorizing the training data",
      "By copying the test data",
      "By ignoring the data"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is the relationship between epochs and batches?",
    options: [
      "One epoch contains multiple batches",
      "One batch contains multiple epochs",
      "They are the same thing",
      "They are unrelated"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "Why do we need multiple epochs?",
    options: [
      "To see the data multiple times and learn better",
      "To make the training longer",
      "To use more memory",
      "To confuse the model"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is the typical range for number of epochs?",
    options: [
      "1-10 epochs",
      "10-1000+ epochs",
      "1000-10000 epochs",
      "Always exactly 100 epochs"
    ],
    correct: 1,
    category: "Epochs"
  },

  // Overfitting and Underfitting
  {
    question: "What is overfitting in terms of epochs?",
    options: [
      "Training for too few epochs",
      "Training for too many epochs until the model memorizes training data",
      "Using too much data",
      "Using too little data"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "What is underfitting in terms of epochs?",
    options: [
      "Training for too many epochs",
      "Training for too few epochs, not learning enough",
      "Using too much data",
      "Using too little data"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "How can you detect overfitting during training?",
    options: [
      "Training loss keeps decreasing, validation loss starts increasing",
      "Both training and validation loss keep decreasing",
      "Training loss increases, validation loss decreases",
      "Both losses stay the same"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is early stopping?",
    options: [
      "Stopping training when the model starts overfitting",
      "Stopping training after one epoch",
      "Stopping training when the model underfits",
      "Stopping training randomly"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is the sweet spot for epochs?",
    options: [
      "As many as possible",
      "As few as possible",
      "Enough to learn well but not overfit",
      "Always exactly 50"
    ],
    correct: 2,
    category: "Epochs"
  },

  // Learning Curves
  {
    question: "What does a learning curve show?",
    options: [
      "How loss changes over epochs",
      "How the model looks",
      "How much data you have",
      "How fast your computer is"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What should you look for in a good learning curve?",
    options: [
      "Training loss decreasing, validation loss stable",
      "Both losses increasing",
      "Both losses staying the same",
      "Training loss increasing, validation loss decreasing"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What does a flat learning curve indicate?",
    options: [
      "The model is learning well",
      "The model is not learning (learning rate too low)",
      "The model is overfitting",
      "The model is perfect"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "What does a very steep learning curve indicate?",
    options: [
      "The model is learning too fast (learning rate too high)",
      "The model is learning well",
      "The model is not learning",
      "The model is overfitting"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "When should you stop training based on learning curves?",
    options: [
      "When training loss reaches zero",
      "When validation loss starts increasing while training loss keeps decreasing",
      "When both losses reach zero",
      "After a fixed number of epochs"
    ],
    correct: 1,
    category: "Epochs"
  },

  // Practical Considerations
  {
    question: "How does dataset size affect the number of epochs needed?",
    options: [
      "Larger datasets need more epochs",
      "Larger datasets need fewer epochs",
      "Dataset size doesn't affect epochs",
      "Smaller datasets always need more epochs"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "How does model complexity affect epochs?",
    options: [
      "More complex models need more epochs",
      "More complex models need fewer epochs",
      "Model complexity doesn't affect epochs",
      "Simple models always need more epochs"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is the relationship between learning rate and epochs?",
    options: [
      "Higher learning rate means fewer epochs needed",
      "Higher learning rate means more epochs needed",
      "Learning rate doesn't affect epochs",
      "Lower learning rate always means fewer epochs"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "How does batch size affect epochs?",
    options: [
      "Larger batch size means more epochs needed",
      "Larger batch size means fewer epochs needed",
      "Batch size doesn't affect epochs",
      "Smaller batch size always means fewer epochs"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is convergence in terms of epochs?",
    options: [
      "When the model stops improving over epochs",
      "When the model starts overfitting",
      "When the model underfits",
      "When training stops"
    ],
    correct: 0,
    category: "Epochs"
  },

  // Memory and Computational Considerations
  {
    question: "How do epochs affect memory usage?",
    options: [
      "More epochs use more memory",
      "More epochs use less memory",
      "Epochs don't affect memory",
      "Fewer epochs use more memory"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "How do epochs affect training time?",
    options: [
      "More epochs take longer to train",
      "More epochs take less time to train",
      "Epochs don't affect training time",
      "Fewer epochs take longer to train"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is the trade-off with epochs?",
    options: [
      "More epochs = better performance but longer training time",
      "More epochs = worse performance but faster training",
      "More epochs = better performance and faster training",
      "More epochs = worse performance and longer training"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "How can you reduce training time with epochs?",
    options: [
      "Use early stopping",
      "Use more epochs",
      "Use larger batch sizes",
      "Use smaller datasets"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch scheduling?",
    options: [
      "Changing learning rate over epochs",
      "Changing batch size over epochs",
      "Changing model architecture over epochs",
      "Changing data over epochs"
    ],
    correct: 0,
    category: "Epochs"
  },

  // Advanced Concepts
  {
    question: "What is a warmup period in epochs?",
    options: [
      "Starting with a low learning rate and gradually increasing it",
      "Starting with a high learning rate and gradually decreasing it",
      "Training without data for a few epochs",
      "Evaluating the model before training"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch decay?",
    options: [
      "Gradually reducing learning rate over epochs",
      "Gradually increasing learning rate over epochs",
      "Reducing the number of epochs",
      "Increasing the number of epochs"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch annealing?",
    options: [
      "Gradually reducing learning rate over epochs",
      "Gradually increasing learning rate over epochs",
      "Changing the model architecture",
      "Changing the data distribution"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch momentum?",
    options: [
      "Using previous epoch's gradients to influence current epoch",
      "Training faster in later epochs",
      "Training slower in later epochs",
      "Using multiple models per epoch"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch regularization?",
    options: [
      "Adding constraints to prevent overfitting over epochs",
      "Adding more data each epoch",
      "Adding more parameters each epoch",
      "Adding more epochs"
    ],
    correct: 0,
    category: "Epochs"
  },

  // Real-world Applications
  {
    question: "For image classification, how many epochs are typically needed?",
    options: [
      "1-10 epochs",
      "10-100 epochs",
      "100-1000+ epochs",
      "Always exactly 50 epochs"
    ],
    correct: 2,
    category: "Epochs"
  },
  {
    question: "For text classification, how many epochs are typically needed?",
    options: [
      "1-5 epochs",
      "5-50 epochs",
      "50-500+ epochs",
      "Always exactly 100 epochs"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "For regression problems, how many epochs are typically needed?",
    options: [
      "1-10 epochs",
      "10-100 epochs",
      "100-1000+ epochs",
      "Always exactly 25 epochs"
    ],
    correct: 1,
    category: "Epochs"
  },
  {
    question: "For deep learning models, how many epochs are typically needed?",
    options: [
      "1-10 epochs",
      "10-100 epochs",
      "100-1000+ epochs",
      "Always exactly 200 epochs"
    ],
    correct: 2,
    category: "Epochs"
  },
  {
    question: "For transfer learning, how many epochs are typically needed?",
    options: [
      "1-10 epochs",
      "10-50 epochs",
      "50-200+ epochs",
      "Always exactly 75 epochs"
    ],
    correct: 1,
    category: "Epochs"
  },

  // Monitoring and Debugging
  {
    question: "What should you monitor during training?",
    options: [
      "Training loss, validation loss, and metrics",
      "Only training loss",
      "Only validation loss",
      "Only the number of epochs"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is a good practice for epoch monitoring?",
    options: [
      "Save model checkpoints at regular intervals",
      "Never save checkpoints",
      "Save only at the end",
      "Save randomly"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch logging?",
    options: [
      "Recording metrics and losses for each epoch",
      "Printing epoch numbers",
      "Saving epoch data",
      "Deleting epoch data"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch visualization?",
    options: [
      "Plotting learning curves over epochs",
      "Drawing the model",
      "Showing data samples",
      "Displaying parameters"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is epoch debugging?",
    options: [
      "Identifying and fixing issues during training",
      "Removing epochs",
      "Adding more epochs",
      "Changing epoch order"
    ],
    correct: 0,
    category: "Epochs"
  },

  // Best Practices
  {
    question: "What is a good practice for choosing initial epochs?",
    options: [
      "Start with a reasonable number and adjust based on results",
      "Always start with 1000 epochs",
      "Always start with 1 epoch",
      "Start randomly"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is a good practice for epoch validation?",
    options: [
      "Validate every few epochs to monitor progress",
      "Validate only at the end",
      "Never validate",
      "Validate randomly"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is a good practice for epoch patience?",
    options: [
      "Wait several epochs before stopping if no improvement",
      "Stop immediately if no improvement",
      "Never stop training",
      "Stop randomly"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is a good practice for epoch reproducibility?",
    options: [
      "Set random seeds for consistent results",
      "Use different seeds each time",
      "Don't use seeds",
      "Use random seeds"
    ],
    correct: 0,
    category: "Epochs"
  },
  {
    question: "What is a good practice for epoch documentation?",
    options: [
      "Record the number of epochs and results",
      "Don't record anything",
      "Record only the final result",
      "Record randomly"
    ],
    correct: 0,
    category: "Epochs"
  }
]; 