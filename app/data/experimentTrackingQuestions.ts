import type { Question } from './mlAlgorithmQuestions';

export const experimentTrackingQuestions: Question[] = [
  // Basic Experiment Tracking Concepts
  {
    question: "What is experiment tracking?",
    options: [
      "Systematically recording and organizing machine learning experiments",
      "Tracking training progress",
      "Tracking model performance",
      "Tracking data changes"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "Why is experiment tracking important?",
    options: [
      "To reproduce results, compare experiments, and maintain organization",
      "To make training faster",
      "To reduce memory usage",
      "To increase model complexity"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is the main goal of experiment tracking?",
    options: [
      "To ensure reproducibility and enable systematic experimentation",
      "To make experiments faster",
      "To reduce computational cost",
      "To increase accuracy"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is reproducibility in machine learning?",
    options: [
      "Ability to obtain the same results given the same inputs and conditions",
      "Ability to train models quickly",
      "Ability to use less memory",
      "Ability to increase accuracy"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is the difference between reproducibility and replicability?",
    options: [
      "Reproducibility is same code/data, replicability is different code/data",
      "They are the same thing",
      "Reproducibility is different code/data, replicability is same code/data",
      "They are completely different"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // What to Track
  {
    question: "What hyperparameters should you track?",
    options: [
      "All hyperparameters used in the experiment",
      "Only the best hyperparameters",
      "Only the worst hyperparameters",
      "Only random hyperparameters"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What metrics should you track?",
    options: [
      "All relevant performance metrics and their evolution over time",
      "Only the final metrics",
      "Only the best metrics",
      "Only the worst metrics"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What data information should you track?",
    options: [
      "Dataset versions, splits, preprocessing steps, and data sources",
      "Only dataset names",
      "Only dataset sizes",
      "Only dataset types"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What model information should you track?",
    options: [
      "Model architecture, parameters, and training configuration",
      "Only model names",
      "Only model sizes",
      "Only model types"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What environment information should you track?",
    options: [
      "Software versions, hardware specifications, and dependencies",
      "Only software names",
      "Only hardware names",
      "Only dependency names"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Experiment Organization
  {
    question: "What is an experiment run?",
    options: [
      "A single execution of a machine learning experiment",
      "Multiple executions of experiments",
      "A collection of experiments",
      "A type of experiment"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is an experiment?",
    options: [
      "A collection of related runs with a common goal",
      "A single run",
      "A collection of unrelated runs",
      "A type of run"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is a project in experiment tracking?",
    options: [
      "A collection of related experiments",
      "A single experiment",
      "A single run",
      "A collection of unrelated experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is versioning in experiment tracking?",
    options: [
      "Tracking different versions of code, data, and models",
      "Tracking only code versions",
      "Tracking only data versions",
      "Tracking only model versions"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is tagging in experiment tracking?",
    options: [
      "Adding descriptive labels to experiments for easy organization",
      "Adding random labels",
      "Adding numerical labels",
      "Adding binary labels"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Tools and Platforms
  {
    question: "What is MLflow?",
    options: [
      "An open-source platform for managing the ML lifecycle",
      "A closed-source platform",
      "A commercial platform",
      "A research platform"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is Weights & Biases (wandb)?",
    options: [
      "A commercial platform for experiment tracking and visualization",
      "An open-source platform",
      "A research platform",
      "A local platform"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is TensorBoard?",
    options: [
      "TensorFlow's visualization toolkit for tracking experiments",
      "PyTorch's visualization toolkit",
      "A general visualization toolkit",
      "A commercial platform"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is Neptune.ai?",
    options: [
      "A commercial platform for experiment tracking and collaboration",
      "An open-source platform",
      "A research platform",
      "A local platform"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is Comet.ml?",
    options: [
      "A commercial platform for experiment tracking and model management",
      "An open-source platform",
      "A research platform",
      "A local platform"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Artifact Management
  {
    question: "What are artifacts in experiment tracking?",
    options: [
      "Files generated during experiments (models, data, logs)",
      "Only model files",
      "Only data files",
      "Only log files"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is model versioning?",
    options: [
      "Tracking different versions of trained models",
      "Tracking only the best models",
      "Tracking only the latest models",
      "Tracking only the first models"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is data versioning?",
    options: [
      "Tracking different versions of datasets",
      "Tracking only the latest datasets",
      "Tracking only the best datasets",
      "Tracking only the first datasets"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is code versioning?",
    options: [
      "Tracking different versions of code using systems like Git",
      "Tracking only the latest code",
      "Tracking only the best code",
      "Tracking only the first code"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is the importance of artifact management?",
    options: [
      "To ensure reproducibility and enable model deployment",
      "To make experiments faster",
      "To reduce storage usage",
      "To increase accuracy"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Visualization and Monitoring
  {
    question: "What is experiment visualization?",
    options: [
      "Creating charts and graphs to understand experiment results",
      "Creating only tables",
      "Creating only text reports",
      "Creating only numbers"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What are learning curves?",
    options: [
      "Plots showing training and validation metrics over time",
      "Plots showing only training metrics",
      "Plots showing only validation metrics",
      "Plots showing only test metrics"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is real-time monitoring?",
    options: [
      "Tracking experiment progress as it runs",
      "Tracking only after completion",
      "Tracking only at the beginning",
      "Tracking only at the end"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment comparison?",
    options: [
      "Comparing multiple experiments side by side",
      "Comparing only two experiments",
      "Comparing only the best experiments",
      "Comparing only the worst experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment dashboarding?",
    options: [
      "Creating interactive dashboards to explore experiment results",
      "Creating only static reports",
      "Creating only text summaries",
      "Creating only numerical summaries"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Collaboration and Sharing
  {
    question: "What is experiment sharing?",
    options: [
      "Making experiments accessible to team members",
      "Keeping experiments private",
      "Deleting experiments",
      "Ignoring experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment collaboration?",
    options: [
      "Working together on experiments with team members",
      "Working alone on experiments",
      "Working randomly on experiments",
      "Working sequentially on experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment commenting?",
    options: [
      "Adding notes and observations to experiments",
      "Adding only positive comments",
      "Adding only negative comments",
      "Adding only neutral comments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment review?",
    options: [
      "Systematically evaluating experiment quality and results",
      "Randomly evaluating experiments",
      "Ignoring experiment evaluation",
      "Deleting experiment evaluation"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment approval?",
    options: [
      "Formal process of accepting experiments for production",
      "Informal process of accepting experiments",
      "Random process of accepting experiments",
      "No process of accepting experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Best Practices
  {
    question: "What should you track for every experiment?",
    options: [
      "All inputs, outputs, and metadata",
      "Only inputs",
      "Only outputs",
      "Only metadata"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What should you use for experiment naming?",
    options: [
      "Descriptive names that indicate the purpose and key parameters",
      "Random names",
      "Short names",
      "Long names"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What should you do with failed experiments?",
    options: [
      "Track them to understand what went wrong",
      "Delete them",
      "Ignore them",
      "Hide them"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What should you do with experiment documentation?",
    options: [
      "Document the purpose, methodology, and results clearly",
      "Document only the purpose",
      "Document only the methodology",
      "Document only the results"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What should you do with experiment backups?",
    options: [
      "Regularly backup experiment data and artifacts",
      "Never backup experiments",
      "Backup only successful experiments",
      "Backup only failed experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Advanced Features
  {
    question: "What is automated experiment tracking?",
    options: [
      "Automatically capturing experiment data without manual intervention",
      "Manually capturing experiment data",
      "Randomly capturing experiment data",
      "Periodically capturing experiment data"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment scheduling?",
    options: [
      "Automatically running experiments at specified times",
      "Manually running experiments",
      "Randomly running experiments",
      "Never running experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment orchestration?",
    options: [
      "Coordinating multiple experiments and their dependencies",
      "Running single experiments",
      "Running random experiments",
      "Running no experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment optimization?",
    options: [
      "Using experiment results to guide future experiments",
      "Ignoring experiment results",
      "Deleting experiment results",
      "Hiding experiment results"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment automation?",
    options: [
      "Automating the entire experiment lifecycle",
      "Automating only experiment execution",
      "Automating only experiment tracking",
      "Automating only experiment analysis"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Integration and Workflows
  {
    question: "What is CI/CD for ML?",
    options: [
      "Continuous integration and deployment for machine learning",
      "Continuous integration only",
      "Continuous deployment only",
      "Continuous monitoring only"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is MLOps?",
    options: [
      "DevOps practices applied to machine learning",
      "DevOps practices for software only",
      "DevOps practices for data only",
      "DevOps practices for infrastructure only"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment pipeline integration?",
    options: [
      "Integrating experiment tracking into ML pipelines",
      "Separating experiment tracking from pipelines",
      "Ignoring experiment tracking in pipelines",
      "Deleting experiment tracking from pipelines"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment workflow management?",
    options: [
      "Managing the flow of experiments from development to production",
      "Managing only development experiments",
      "Managing only production experiments",
      "Managing only research experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment governance?",
    options: [
      "Establishing policies and procedures for experiment management",
      "Establishing only policies",
      "Establishing only procedures",
      "Establishing only guidelines"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },

  // Challenges and Solutions
  {
    question: "What is experiment drift?",
    options: [
      "Changes in experiment behavior over time",
      "Changes in data over time",
      "Changes in models over time",
      "Changes in code over time"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment reproducibility crisis?",
    options: [
      "Difficulty in reproducing published ML results",
      "Difficulty in running experiments",
      "Difficulty in tracking experiments",
      "Difficulty in sharing experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment scalability?",
    options: [
      "Ability to handle large numbers of experiments efficiently",
      "Ability to run single experiments",
      "Ability to track single experiments",
      "Ability to share single experiments"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment security?",
    options: [
      "Protecting sensitive experiment data and intellectual property",
      "Protecting only experiment data",
      "Protecting only intellectual property",
      "Protecting only experiment code"
    ],
    correct: 0,
    category: "Experiment Tracking"
  },
  {
    question: "What is experiment compliance?",
    options: [
      "Ensuring experiments meet regulatory and organizational requirements",
      "Ensuring only regulatory requirements",
      "Ensuring only organizational requirements",
      "Ensuring only technical requirements"
    ],
    correct: 0,
    category: "Experiment Tracking"
  }
]; 