import type { Question } from './mlAlgorithmQuestions';

export const dataAugmentationQuestions: Question[] = [
  // Basic Data Augmentation Concepts
  {
    question: "What is data augmentation?",
    options: [
      "Creating new training examples from existing data",
      "Removing data from the dataset",
      "Scaling data to the same range",
      "Selecting the best data"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "Why is data augmentation used?",
    options: [
      "To increase dataset size and improve model generalization",
      "To reduce dataset size",
      "To make training faster",
      "To reduce memory usage"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "When is data augmentation most useful?",
    options: [
      "When you have limited training data",
      "When you have unlimited training data",
      "When you have too much data",
      "When you have no data"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is the main goal of data augmentation?",
    options: [
      "To improve model generalization and reduce overfitting",
      "To make models more complex",
      "To make training faster",
      "To reduce model accuracy"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is synthetic data generation?",
    options: [
      "Creating artificial data that mimics real data",
      "Removing real data",
      "Scaling real data",
      "Selecting real data"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Image Data Augmentation
  {
    question: "What is rotation in image augmentation?",
    options: [
      "Rotating images by different angles",
      "Scaling images",
      "Translating images",
      "Flipping images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is horizontal flipping in image augmentation?",
    options: [
      "Flipping images left to right",
      "Flipping images top to bottom",
      "Rotating images",
      "Scaling images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is vertical flipping in image augmentation?",
    options: [
      "Flipping images top to bottom",
      "Flipping images left to right",
      "Rotating images",
      "Scaling images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is scaling in image augmentation?",
    options: [
      "Resizing images to different sizes",
      "Rotating images",
      "Translating images",
      "Flipping images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is translation in image augmentation?",
    options: [
      "Moving images in different directions",
      "Rotating images",
      "Scaling images",
      "Flipping images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Advanced Image Augmentation
  {
    question: "What is color jittering in image augmentation?",
    options: [
      "Randomly changing brightness, contrast, saturation, and hue",
      "Changing image size",
      "Changing image position",
      "Changing image rotation"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is noise injection in image augmentation?",
    options: [
      "Adding random noise to images",
      "Removing noise from images",
      "Smoothing images",
      "Sharpening images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is blur in image augmentation?",
    options: [
      "Applying Gaussian blur to images",
      "Sharpening images",
      "Adding noise to images",
      "Changing image colors"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is cropping in image augmentation?",
    options: [
      "Taking random portions of images",
      "Resizing images",
      "Rotating images",
      "Flipping images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is elastic deformation in image augmentation?",
    options: [
      "Applying non-linear transformations to images",
      "Linear scaling of images",
      "Simple rotation of images",
      "Simple translation of images"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Text Data Augmentation
  {
    question: "What is synonym replacement in text augmentation?",
    options: [
      "Replacing words with their synonyms",
      "Removing words",
      "Adding words",
      "Changing word order"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is back-translation in text augmentation?",
    options: [
      "Translating text to another language and back",
      "Translating text once",
      "Removing translation",
      "Adding translation"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is random insertion in text augmentation?",
    options: [
      "Inserting random words into text",
      "Removing words from text",
      "Replacing words in text",
      "Changing word order"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is random deletion in text augmentation?",
    options: [
      "Randomly removing words from text",
      "Adding words to text",
      "Replacing words in text",
      "Changing word order"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is random swap in text augmentation?",
    options: [
      "Randomly swapping positions of words",
      "Adding words",
      "Removing words",
      "Replacing words"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Audio Data Augmentation
  {
    question: "What is time stretching in audio augmentation?",
    options: [
      "Changing the speed of audio without changing pitch",
      "Changing the pitch of audio",
      "Adding noise to audio",
      "Removing noise from audio"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is pitch shifting in audio augmentation?",
    options: [
      "Changing the pitch of audio",
      "Changing the speed of audio",
      "Adding noise to audio",
      "Removing noise from audio"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is noise injection in audio augmentation?",
    options: [
      "Adding background noise to audio",
      "Removing noise from audio",
      "Changing audio speed",
      "Changing audio pitch"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is time shifting in audio augmentation?",
    options: [
      "Shifting audio in time",
      "Changing audio speed",
      "Changing audio pitch",
      "Adding noise to audio"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is volume adjustment in audio augmentation?",
    options: [
      "Changing the volume of audio",
      "Changing audio speed",
      "Changing audio pitch",
      "Adding noise to audio"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Tabular Data Augmentation
  {
    question: "What is SMOTE for tabular data augmentation?",
    options: [
      "Creating synthetic samples for minority classes",
      "Removing samples",
      "Scaling samples",
      "Selecting samples"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is ADASYN for tabular data augmentation?",
    options: [
      "Adaptive synthetic sampling for imbalanced data",
      "Random sampling",
      "Stratified sampling",
      "Cluster sampling"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is random oversampling?",
    options: [
      "Duplicating minority class samples",
      "Removing majority class samples",
      "Creating new samples",
      "Scaling samples"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is random undersampling?",
    options: [
      "Removing majority class samples",
      "Duplicating minority class samples",
      "Creating new samples",
      "Scaling samples"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is Tomek links for tabular data?",
    options: [
      "Removing borderline samples to clean the dataset",
      "Adding samples",
      "Scaling samples",
      "Selecting samples"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Time Series Data Augmentation
  {
    question: "What is time warping in time series augmentation?",
    options: [
      "Non-linear transformation of time axis",
      "Linear scaling of time",
      "Adding noise to time series",
      "Removing noise from time series"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is window slicing in time series augmentation?",
    options: [
      "Taking random windows from time series",
      "Scaling time series",
      "Adding noise to time series",
      "Removing noise from time series"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is window warping in time series augmentation?",
    options: [
      "Stretching or compressing time windows",
      "Moving time windows",
      "Adding noise to windows",
      "Removing noise from windows"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is magnitude warping in time series augmentation?",
    options: [
      "Applying smooth distortion to magnitude values",
      "Changing time values",
      "Adding noise to magnitude",
      "Removing noise from magnitude"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is jittering in time series augmentation?",
    options: [
      "Adding random noise to time series",
      "Removing noise from time series",
      "Scaling time series",
      "Translating time series"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Advanced Augmentation Techniques
  {
    question: "What is mixup augmentation?",
    options: [
      "Combining two samples with weighted average",
      "Mixing different datasets",
      "Mixing different models",
      "Mixing different features"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is cutmix augmentation?",
    options: [
      "Replacing rectangular regions between samples",
      "Cutting samples in half",
      "Mixing samples randomly",
      "Combining samples linearly"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is cutout augmentation?",
    options: [
      "Randomly masking rectangular regions",
      "Cutting out samples",
      "Removing features",
      "Adding features"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is random erasing?",
    options: [
      "Randomly replacing rectangular regions with random values",
      "Removing random samples",
      "Adding random samples",
      "Scaling random samples"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is autoaugment?",
    options: [
      "Automatically learning augmentation policies",
      "Manual augmentation",
      "Random augmentation",
      "Fixed augmentation"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Augmentation Best Practices
  {
    question: "When should you apply data augmentation?",
    options: [
      "Only to training data, not validation/test data",
      "To all data including validation/test",
      "Only to validation data",
      "Only to test data"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is the risk of over-augmentation?",
    options: [
      "Creating unrealistic data that hurts model performance",
      "Making training faster",
      "Reducing memory usage",
      "Improving model accuracy"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "How much augmentation should you apply?",
    options: [
      "Enough to improve generalization without making data unrealistic",
      "As much as possible",
      "As little as possible",
      "None at all"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What should you consider when choosing augmentation techniques?",
    options: [
      "Domain knowledge and data characteristics",
      "Only computational cost",
      "Only model performance",
      "Only dataset size"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is the relationship between augmentation and regularization?",
    options: [
      "Augmentation can act as a form of regularization",
      "They are completely independent",
      "Augmentation reduces regularization",
      "Regularization reduces augmentation"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Domain-Specific Considerations
  {
    question: "What augmentation is appropriate for medical images?",
    options: [
      "Conservative transformations that preserve diagnostic features",
      "Aggressive transformations",
      "No transformations",
      "Random transformations"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What augmentation is appropriate for natural language?",
    options: [
      "Semantic-preserving transformations",
      "Random word changes",
      "No changes",
      "Aggressive changes"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What augmentation is appropriate for time series forecasting?",
    options: [
      "Transformations that preserve temporal relationships",
      "Random transformations",
      "No transformations",
      "Aggressive transformations"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What augmentation is appropriate for audio classification?",
    options: [
      "Transformations that preserve audio characteristics",
      "Random transformations",
      "No transformations",
      "Aggressive transformations"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What augmentation is appropriate for recommendation systems?",
    options: [
      "User behavior preserving transformations",
      "Random transformations",
      "No transformations",
      "Aggressive transformations"
    ],
    correct: 0,
    category: "Data Augmentation"
  },

  // Implementation and Tools
  {
    question: "What is albumentations?",
    options: [
      "A fast image augmentation library",
      "A text augmentation library",
      "An audio augmentation library",
      "A time series augmentation library"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is imgaug?",
    options: [
      "A comprehensive image augmentation library",
      "A text augmentation library",
      "An audio augmentation library",
      "A time series augmentation library"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is nlpaug?",
    options: [
      "A natural language processing augmentation library",
      "An image augmentation library",
      "An audio augmentation library",
      "A time series augmentation library"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is torchaudio for audio augmentation?",
    options: [
      "PyTorch's audio processing library with augmentation",
      "A text augmentation library",
      "An image augmentation library",
      "A time series augmentation library"
    ],
    correct: 0,
    category: "Data Augmentation"
  },
  {
    question: "What is imbalanced-learn for tabular augmentation?",
    options: [
      "A library for handling imbalanced datasets",
      "An image augmentation library",
      "A text augmentation library",
      "An audio augmentation library"
    ],
    correct: 0,
    category: "Data Augmentation"
  }
]; 