'use client';

import React, { useState } from 'react';

const ExperimentTracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'components', label: 'Tracking Components', icon: '🔍' },
    { id: 'tools', label: 'Tools & Platforms', icon: '🛠️' },
    { id: 'best-practices', label: 'Best Practices', icon: '⭐' },
    { id: 'workflow', label: 'Workflow Integration', icon: '🔄' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          📋 Experiment Tracking
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Track, organize, and reproduce your machine learning experiments to ensure reproducibility and accelerate research.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">What is Experiment Tracking?</h2>
              <p className="text-lg mb-6">
                Experiment tracking is the systematic recording and organization of machine learning experiments, including parameters, metrics, code, and results for reproducibility and collaboration.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-600">🎯 Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span><strong>Reproducibility:</strong> Recreate exact experiments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span><strong>Collaboration:</strong> Share experiments with team</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span><strong>Comparison:</strong> Compare different approaches</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span><strong>Debugging:</strong> Identify what went wrong</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyan-600">🔍 What to Track</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Hyperparameters:</strong> Model configuration</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Metrics:</strong> Performance measurements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Code:</strong> Version and environment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-cyan-500 mt-1">→</span>
                      <span><strong>Data:</strong> Dataset versions and splits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">📊 Tracking Pipeline</h3>
              <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="font-semibold">Plan</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📝</div>
                    <p className="font-semibold">Track</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="font-semibold">Monitor</p>
                  </div>
                  <div className="text-2xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🔄</div>
                    <p className="font-semibold">Iterate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'components' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Experiment Tracking Components</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-xl font-semibold text-teal-600">⚙️ Hyperparameters</h3>
                  <p className="mb-2">Track all model configuration parameters.</p>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Model Parameters:</strong> Architecture, layers, activation functions</p>
                    <p className="text-sm"><strong>Training Parameters:</strong> Learning rate, batch size, epochs</p>
                    <p className="text-sm"><strong>Data Parameters:</strong> Preprocessing steps, augmentation</p>
                    <p className="text-sm"><strong>Environment:</strong> Random seeds, hardware configuration</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">📈 Metrics & Results</h3>
                  <p className="mb-2">Record performance measurements and outcomes.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Performance Metrics:</strong> Accuracy, loss, precision, recall</p>
                    <p className="text-sm"><strong>Training Metrics:</strong> Learning curves, convergence</p>
                    <p className="text-sm"><strong>Resource Usage:</strong> Training time, memory, GPU usage</p>
                    <p className="text-sm"><strong>Artifacts:</strong> Model files, visualizations, logs</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">💻 Code & Environment</h3>
                  <p className="mb-2">Track code versions and execution environment.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Code Version:</strong> Git commits, code snapshots</p>
                    <p className="text-sm"><strong>Dependencies:</strong> Package versions, requirements</p>
                    <p className="text-sm"><strong>Environment:</strong> OS, Python version, hardware</p>
                    <p className="text-sm"><strong>Execution:</strong> Command line arguments, scripts</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">📊 Data & Metadata</h3>
                  <p className="mb-2">Track dataset information and experiment metadata.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Dataset Info:</strong> Version, size, splits, features</p>
                    <p className="text-sm"><strong>Preprocessing:</strong> Steps applied, transformations</p>
                    <p className="text-sm"><strong>Experiment Info:</strong> Name, description, tags</p>
                    <p className="text-sm"><strong>Timestamps:</strong> Start/end times, duration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Tools & Platforms</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-xl font-semibold text-teal-600">🐍 Python Tools</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-teal-600">MLflow</h4>
                      <p className="text-sm">Open-source platform for ML lifecycle management</p>
                      <p className="text-sm"><strong>Features:</strong> Experiment tracking, model registry, deployment</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Weights & Biases</h4>
                      <p className="text-sm">Cloud-based experiment tracking platform</p>
                      <p className="text-sm"><strong>Features:</strong> Real-time monitoring, collaboration, visualization</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">TensorBoard</h4>
                      <p className="text-sm">TensorFlow's visualization toolkit</p>
                      <p className="text-sm"><strong>Features:</strong> Training visualization, model graphs, profiling</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">☁️ Cloud Platforms</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Google Cloud AI Platform</h4>
                      <p className="text-sm">Managed ML platform with experiment tracking</p>
                      <p className="text-sm"><strong>Features:</strong> AutoML, custom training, model serving</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">AWS SageMaker</h4>
                      <p className="text-sm">End-to-end ML platform</p>
                      <p className="text-sm"><strong>Features:</strong> Experiment tracking, model registry, pipelines</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Azure ML</h4>
                      <p className="text-sm">Microsoft's ML platform</p>
                      <p className="text-sm"><strong>Features:</strong> Experiment tracking, AutoML, MLOps</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🔄 Version Control</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-green-600">DVC (Data Version Control)</h4>
                      <p className="text-sm">Version control for ML projects</p>
                      <p className="text-sm"><strong>Features:</strong> Data versioning, pipeline management</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Git LFS</h4>
                      <p className="text-sm">Large file storage for Git</p>
                      <p className="text-sm"><strong>Features:</strong> Version large files, model storage</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Pachyderm</h4>
                      <p className="text-sm">Data versioning and pipeline platform</p>
                      <p className="text-sm"><strong>Features:</strong> Data lineage, reproducible pipelines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'best-practices' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
              <p className="text-lg mb-6">
                Follow these guidelines to ensure effective and reliable experiment tracking.
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-teal-600">✅ Do's</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Track everything systematically</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Use descriptive experiment names</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Set random seeds for reproducibility</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Version your code and data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>Document experiment purpose and hypotheses</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600">❌ Don'ts</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't track experiments manually</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't ignore failed experiments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't forget to track environment details</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't rely on memory for experiment details</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Don't skip documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">📊 Organization Tips</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-teal-600">Naming Convention</h4>
                      <p className="text-sm">Use consistent, descriptive names for experiments</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Tagging System</h4>
                      <p className="text-sm">Use tags to categorize and filter experiments</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Version Control</h4>
                      <p className="text-sm">Keep code and data under version control</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workflow' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Workflow Integration</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-teal-600">🔄 Integration Steps</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span><strong>Setup:</strong> Initialize tracking system</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span><strong>Instrument:</strong> Add tracking calls to code</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span><strong>Automate:</strong> Integrate with CI/CD pipelines</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-teal-500 mt-1">•</span>
                        <span><strong>Monitor:</strong> Set up alerts and dashboards</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🔧 Implementation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Code Integration:</strong> Add tracking to training scripts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Configuration:</strong> Set up tracking parameters</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Automation:</strong> Trigger tracking automatically</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Analysis:</strong> Review and compare experiments</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🎯 Workflow Benefits</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-teal-600">Reproducibility</h4>
                      <p className="text-sm">Recreate experiments exactly as run</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Collaboration</h4>
                      <p className="text-sm">Share experiments with team members</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">Efficiency</h4>
                      <p className="text-sm">Avoid repeating failed experiments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mnemonics' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Memory Techniques & Mnemonics</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-xl font-semibold text-yellow-600">📋 TRACK Acronym</h3>
                  <p className="mb-4">Remember the key aspects of experiment tracking:</p>
                  <ul className="space-y-2">
                    <li><strong>T</strong>race - Trace experiment execution</li>
                    <li><strong>R</strong>ecord - Record all parameters and results</li>
                    <li><strong>A</strong>nalyze - Analyze performance and trends</li>
                    <li><strong>C</strong>ompare - Compare different experiments</li>
                    <li><strong>K</strong>eep - Keep everything for reproducibility</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h3 className="text-xl font-semibold text-teal-600">🔍 Components Memory</h3>
                  <p className="mb-4">Remember tracking components with "HARD":</p>
                  <ul className="space-y-2">
                    <li><strong>H</strong>yperparameters - Model configuration</li>
                    <li><strong>A</strong>rtifacts - Model files and outputs</li>
                    <li><strong>R</strong>esults - Performance metrics</li>
                    <li><strong>D</strong>ata - Dataset information</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🛠️ Tools Memory</h3>
                  <p className="mb-4">Remember tracking tools with this hierarchy:</p>
                  <ul className="space-y-2">
                    <li><strong>MLflow:</strong> "Open source standard" (comprehensive, free)</li>
                    <li><strong>W&B:</strong> "Cloud collaboration" (real-time, team features)</li>
                    <li><strong>TensorBoard:</strong> "TensorFlow native" (visualization focused)</li>
                    <li><strong>Cloud Platforms:</strong> "Enterprise solution" (integrated, managed)</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">📊 Workflow Rhyme</h3>
                  <p className="mb-4">"Plan, track, monitor, iterate"</p>
                  <ul className="space-y-2">
                    <li><strong>Plan:</strong> Define experiment goals and parameters</li>
                    <li><strong>Track:</strong> Record all experiment details</li>
                    <li><strong>Monitor:</strong> Watch progress and performance</li>
                    <li><strong>Iterate:</strong> Improve based on results</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <div className="glass p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Ready to Test Your Knowledge?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Take the quiz to reinforce what you've learned about experiment tracking!
          </p>
          <button 
            onClick={() => {
              window.location.hash = 'quiz';
              window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                detail: { section: 'experiment-tracking' } 
              }));
            }}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
          >
            🎯 Take Experiment Tracking Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperimentTracking; 