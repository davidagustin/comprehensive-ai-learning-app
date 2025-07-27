'use client';

import React, { useState } from 'react';

const ReinforcementLearning: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🎮' },
    { id: 'concepts', label: 'Core Concepts', icon: '🎯' },
    { id: 'algorithms', label: 'Algorithms', icon: '🧠' },
    { id: 'environments', label: 'Environments', icon: '🌍' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'mnemonics', label: 'Memory Techniques', icon: '🧩' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          🎮 Reinforcement Learning
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Learn how AI agents can learn optimal behavior through trial and error, just like humans do.
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
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
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
              <h2 className="text-2xl font-bold mb-4">What is Reinforcement Learning?</h2>
              <p className="text-lg mb-6">
                Reinforcement Learning (RL) is a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize cumulative rewards.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Key Components</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Agent:</strong> The learner that makes decisions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Environment:</strong> The world where the agent operates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Actions:</strong> What the agent can do</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span><strong>Rewards:</strong> Feedback that guides learning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🔍 Learning Process</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Exploration:</strong> Try new actions to discover better strategies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Exploitation:</strong> Use known good actions to maximize rewards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Policy Learning:</strong> Develop strategies for different situations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">→</span>
                      <span><strong>Value Learning:</strong> Understand long-term consequences of actions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">🔄 RL vs Other ML Types</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">Reinforcement Learning</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Learns through trial and error</li>
                    <li>• No labeled data required</li>
                    <li>• Sequential decision making</li>
                    <li>• Maximizes long-term rewards</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600 mb-2">Supervised Learning</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Learns from labeled examples</li>
                    <li>• Requires training data</li>
                    <li>• Predicts outputs from inputs</li>
                    <li>• Minimizes prediction error</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2">Unsupervised Learning</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Finds patterns in data</li>
                    <li>• No labels required</li>
                    <li>• Discovers hidden structure</li>
                    <li>• Clustering and dimensionality reduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'concepts' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Core RL Concepts</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">📊 State, Action, Reward</h3>
                  <p className="mb-2">The fundamental building blocks of reinforcement learning.</p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>State:</strong> Current situation the agent is in</p>
                    <p className="text-sm"><strong>Action:</strong> What the agent can do in the current state</p>
                    <p className="text-sm"><strong>Reward:</strong> Immediate feedback from the environment</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎯 Policy & Value Functions</h3>
                  <p className="mb-2">Two key functions that guide the agent's learning.</p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Policy (π):</strong> Strategy that maps states to actions</p>
                    <p className="text-sm"><strong>Value Function (V):</strong> Expected long-term reward from a state</p>
                    <p className="text-sm"><strong>Q-Function:</strong> Expected reward for taking an action in a state</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚖️ Exploration vs Exploitation</h3>
                  <p className="mb-2">The fundamental trade-off in reinforcement learning.</p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>Exploration:</strong> Try new actions to discover better strategies</p>
                    <p className="text-sm"><strong>Exploitation:</strong> Use known good actions to maximize immediate rewards</p>
                    <p className="text-sm"><strong>Balance:</strong> Need both for optimal long-term performance</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-orange-600">🔄 Markov Decision Process (MDP)</h3>
                  <p className="mb-2">Mathematical framework for modeling RL problems.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <p className="text-sm"><strong>States:</strong> Set of possible situations</p>
                    <p className="text-sm"><strong>Actions:</strong> Set of possible actions</p>
                    <p className="text-sm"><strong>Transitions:</strong> How states change based on actions</p>
                    <p className="text-sm"><strong>Rewards:</strong> Immediate feedback for actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'algorithms' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">RL Algorithms</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Value-Based Methods</h3>
                  <p className="mb-2">Learn value functions to determine optimal actions.</p>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-green-600">Q-Learning</h4>
                      <p className="text-sm">Off-policy algorithm that learns action-value function</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Deep Q-Network (DQN)</h4>
                      <p className="text-sm">Q-learning with neural networks for function approximation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">SARSA</h4>
                      <p className="text-sm">On-policy algorithm for learning action-value function</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">🧠 Policy-Based Methods</h3>
                  <p className="mb-2">Directly learn policies without value functions.</p>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Policy Gradient</h4>
                      <p className="text-sm">Optimize policy parameters using gradient ascent</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600">REINFORCE</h4>
                      <p className="text-sm">Monte Carlo policy gradient algorithm</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Actor-Critic</h4>
                      <p className="text-sm">Combines policy gradient with value function</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">⚡ Advanced Algorithms</h3>
                  <p className="mb-2">State-of-the-art algorithms for complex problems.</p>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Proximal Policy Optimization (PPO)</h4>
                      <p className="text-sm">Stable policy gradient method with clipping</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-600">Advantage Actor-Critic (A2C)</h4>
                      <p className="text-sm">Actor-critic with advantage function</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600">Soft Actor-Critic (SAC)</h4>
                      <p className="text-sm">Maximum entropy RL for exploration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'environments' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">RL Environments</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">🎮 Classic Environments</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>CartPole:</strong> Balance a pole on a cart</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Mountain Car:</strong> Drive a car up a hill</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Lunar Lander:</strong> Land a spacecraft safely</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span><strong>Acrobot:</strong> Swing up a double pendulum</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-blue-600">🏆 Advanced Environments</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Atari Games:</strong> Classic video game environments</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>MuJoCo:</strong> Physics-based robotics simulation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>OpenAI Gym:</strong> Standardized RL environment library</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">→</span>
                        <span><strong>Unity ML-Agents:</strong> 3D game environments</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">🔧 Environment Characteristics</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-600">Discrete vs Continuous</h4>
                      <p className="text-sm">Action and state space types</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-600">Episodic vs Continuing</h4>
                      <p className="text-sm">Task completion structure</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600">Deterministic vs Stochastic</h4>
                      <p className="text-sm">Environment predictability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Real-World Applications</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">🤖 Robotics</h3>
                  <ul className="space-y-2">
                    <li>• Robot navigation and path planning</li>
                    <li>• Manipulation and grasping</li>
                    <li>• Autonomous vehicle control</li>
                    <li>• Drone flight control</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-600">🎮 Gaming</h3>
                  <ul className="space-y-2">
                    <li>• Game AI and NPC behavior</li>
                    <li>• Strategy game optimization</li>
                    <li>• Procedural content generation</li>
                    <li>• Player behavior modeling</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-600">💰 Finance</h3>
                  <ul className="space-y-2">
                    <li>• Algorithmic trading</li>
                    <li>• Portfolio optimization</li>
                    <li>• Risk management</li>
                    <li>• Market making</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-orange-600">🏥 Healthcare</h3>
                  <ul className="space-y-2">
                    <li>• Treatment optimization</li>
                    <li>• Drug discovery</li>
                    <li>• Medical diagnosis</li>
                    <li>• Resource allocation</li>
                  </ul>
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
                  <h3 className="text-xl font-semibold text-yellow-600">🎮 RL Acronym</h3>
                  <p className="mb-4">Remember the key aspects of reinforcement learning:</p>
                  <ul className="space-y-2">
                    <li><strong>R</strong>ewards - Feedback that guides learning</li>
                    <li><strong>L</strong>earning - Agent improves through experience</li>
                    <li><strong>A</strong>ctions - What the agent can do</li>
                    <li><strong>S</strong>tates - Current situation</li>
                    <li><strong>E</strong>nvironment - World where agent operates</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-semibold text-green-600">🎯 Learning Process Memory</h3>
                  <p className="mb-4">Think of RL as learning to ride a bike:</p>
                  <ul className="space-y-2">
                    <li><strong>State:</strong> Current position and balance</li>
                    <li><strong>Action:</strong> Pedaling, steering, braking</li>
                    <li><strong>Reward:</strong> Staying upright (positive), falling (negative)</li>
                    <li><strong>Policy:</strong> Strategy for different situations</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-blue-600">⚖️ Exploration vs Exploitation</h3>
                  <p className="mb-4">Remember the trade-off with this analogy:</p>
                  <ul className="space-y-2">
                    <li><strong>Exploration:</strong> "Try the new restaurant" (discover better options)</li>
                    <li><strong>Exploitation:</strong> "Go to your favorite restaurant" (use known good options)</li>
                    <li><strong>Balance:</strong> "Sometimes try new, sometimes stick to favorites"</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-purple-600">🧠 Algorithm Memory</h3>
                  <p className="mb-4">Remember RL algorithms with this hierarchy:</p>
                  <ul className="space-y-2">
                    <li><strong>Value-Based:</strong> "Learn what's good" (Q-learning, DQN)</li>
                    <li><strong>Policy-Based:</strong> "Learn what to do" (Policy Gradient, REINFORCE)</li>
                    <li><strong>Actor-Critic:</strong> "Learn both what to do and what's good"</li>
                    <li><strong>Advanced:</strong> "Learn efficiently and stably" (PPO, SAC)</li>
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
            Take the quiz to reinforce what you've learned about reinforcement learning!
          </p>
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200">
            🎯 Take RL Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReinforcementLearning; 