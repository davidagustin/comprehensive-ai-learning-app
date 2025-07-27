'use client';

import React, { useState } from 'react';

const PrivacySecurity: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🔒' },
    { id: 'principles', label: 'Principles', icon: '📜' },
    { id: 'techniques', label: 'Techniques', icon: '🛡️' },
    { id: 'regulations', label: 'Regulations', icon: '⚖️' },
    { id: 'memory', label: 'Memory Techniques', icon: '💡' }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          🔒 Privacy & Security
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the principles and best practices for protecting data privacy and ensuring security in machine learning systems
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-pink-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">What is Privacy & Security?</h2>
            <p className="text-lg mb-6">
              Privacy and security in machine learning involve protecting sensitive data, ensuring confidentiality, integrity, and availability, and complying with legal and ethical standards.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-pink-600">🔒 Key Concepts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Confidentiality:</strong> Prevent unauthorized access</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Integrity:</strong> Ensure data accuracy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Availability:</strong> Ensure data is accessible</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-pink-500 mt-1">•</span>
                    <span><strong>Compliance:</strong> Follow laws and regulations</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-indigo-600">🚀 Importance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Protect user trust</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Prevent data breaches</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Meet legal requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span>Maintain business reputation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-pink-600 mb-4">📜 Privacy Principles</h3>
              <div className="space-y-3">
                <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Data Minimization</h4>
                  <p className="text-sm">Collect only necessary data</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Purpose Limitation</h4>
                  <p className="text-sm">Use data only for stated purposes</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">User Consent</h4>
                  <p className="text-sm">Obtain explicit permission</p>
                </div>
              </div>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">🛡️ Security Principles</h3>
              <div className="space-y-3">
                <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Encryption</h4>
                  <p className="text-sm">Protect data in transit and at rest</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Access Control</h4>
                  <p className="text-sm">Restrict data access</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <h4 className="font-semibold">Audit Logging</h4>
                  <p className="text-sm">Track data access and changes</p>
                </div>
              </div>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">⚖️ Regulations</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🇪🇺</span>
                  <span>GDPR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🇺🇸</span>
                  <span>CCPA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🏥</span>
                  <span>HIPAA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🔒</span>
                  <span>Data Protection Laws</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'principles' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Privacy & Security Principles</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔒 Privacy Principles</h3>
                  <ul className="space-y-2">
                    <li>Data minimization</li>
                    <li>Purpose limitation</li>
                    <li>User consent</li>
                    <li>Transparency</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🛡️ Security Principles</h3>
                  <ul className="space-y-2">
                    <li>Encryption</li>
                    <li>Access control</li>
                    <li>Audit logging</li>
                    <li>Incident response</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'techniques' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Privacy & Security Techniques</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🔒 Privacy Techniques</h3>
                  <ul className="space-y-2">
                    <li>Differential privacy</li>
                    <li>Data anonymization</li>
                    <li>Pseudonymization</li>
                    <li>Federated learning</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🛡️ Security Techniques</h3>
                  <ul className="space-y-2">
                    <li>Encryption (AES, RSA)</li>
                    <li>Multi-factor authentication</li>
                    <li>Role-based access control</li>
                    <li>Penetration testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'regulations' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Privacy & Security Regulations</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🇪🇺 GDPR</h3>
                  <ul className="space-y-2">
                    <li>Right to be forgotten</li>
                    <li>Data portability</li>
                    <li>Consent requirements</li>
                    <li>Breach notification</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">🇺🇸 CCPA & HIPAA</h3>
                  <ul className="space-y-2">
                    <li>Consumer privacy rights</li>
                    <li>Healthcare data protection</li>
                    <li>Access and deletion rights</li>
                    <li>Security safeguards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === 'memory' && (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Memory Techniques</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-600">🧠 Mnemonics</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">CIA = Confidentiality, Integrity, Availability</h4>
                      <p className="text-sm">The three pillars of security</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">GDPR = General Data Protection Regulation</h4>
                      <p className="text-sm">EU privacy law</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">HIPAA = Health Insurance Portability and Accountability Act</h4>
                      <p className="text-sm">US healthcare privacy law</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-indigo-600">💡 Analogies</h3>
                  <div className="space-y-3">
                    <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Lock and Key</h4>
                      <p className="text-sm">Like locking your house to protect valuables</p>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Passport Control</h4>
                      <p className="text-sm">Like checking IDs at a border</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <h4 className="font-semibold">Safe Deposit Box</h4>
                      <p className="text-sm">Like storing valuables in a secure box</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-pink-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 Quick Reference</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <h4 className="font-semibold text-pink-600">Confidentiality</h4>
                    <p className="text-sm">Keep data secret</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-indigo-600">Integrity</h4>
                    <p className="text-sm">Keep data accurate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600">Availability</h4>
                    <p className="text-sm">Keep data accessible</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600">Compliance</h4>
                    <p className="text-sm">Follow the law</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacySecurity; 