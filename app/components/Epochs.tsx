

'use client';

const epochsFramework = {
  title: "⏳ EPOCHS Framework",
  mnemonic: "Every Pass Over Complete Helps Strengthen",
  items: [
    { letter: "E", meaning: "Every", description: "Each time the model sees the full dataset" },
    { letter: "P", meaning: "Pass", description: "A single pass through all training data" },
    { letter: "O", meaning: "Over", description: "Going over the data again and again" },
    { letter: "C", meaning: "Complete", description: "Completing one cycle of all samples" },
    { letter: "H", meaning: "Helps", description: "Helps the model learn better" },
    { letter: "S", meaning: "Strengthen", description: "Strengthens the model's understanding" },
  ]
};

const epochCharacter = {
  name: "Epoch Emma",
  emoji: "⏰",
  specialty: "Model Training",
  catchphrase: "I love learning from every pass!",
  personality: "Persistent and patient",
  motto: "More epochs, more learning!"
};

const quickRecall = [
  "EPOCHS: Every Pass Over Complete Helps Strengthen",
  "Each epoch = one full pass through the data",
  "More epochs can mean better learning, but watch for overfitting!"
];

const rhyme = `Epoch Emma counts each round,
Through the data, up and down!
One pass, two pass, three and more,
Learning patterns, never a bore!`;

export default function Epochs() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 px-6 py-3 rounded-full">
          <span className="text-2xl">⏳</span>
          <span className="font-semibold text-yellow-700 dark:text-yellow-300">Epochs in Model Training</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Understand Epochs: The Heartbeat of Model Learning
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          An epoch is one complete pass through your training data. More epochs help your model learn, but too many can lead to overfitting. Let's make it memorable!
        </p>
      </div>

      {/* Character Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎭 Meet {epochCharacter.name}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your guide to mastering epochs</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="text-8xl lg:text-9xl animate-bounce">{epochCharacter.emoji}</div>
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{epochCharacter.name}</h4>
              <div className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold mb-3">{epochCharacter.specialty}</div>
              <div className="text-lg text-gray-600 dark:text-gray-300 italic mb-6">"{epochCharacter.catchphrase}"</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-white">Personality:</strong>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{epochCharacter.personality}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-white">Motto:</strong>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{epochCharacter.motto}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mnemonic Framework Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📚 Epochs Mnemonic Framework</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Memorize epochs with this powerful mnemonic</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-4 rounded-lg mb-6">
            <p className="text-yellow-700 dark:text-yellow-300 font-semibold italic text-lg">
              "{epochsFramework.mnemonic}"
            </p>
          </div>
          <div className="space-y-4">
            {epochsFramework.items.map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.letter}
                </span>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.meaning}</h5>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🖼️ Visual: What is an Epoch?</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">See how epochs work in model training</p>
        </div>
        <div className="flex justify-center">
          <svg width="400" height="160" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="360" height="40" rx="20" fill="#FDE68A" />
            <text x="200" y="65" textAnchor="middle" fontSize="18" fill="#92400E">Training Data</text>
            <g>
              <circle cx="60" cy="120" r="14" fill="#F59E42" stroke="#fff" strokeWidth="3" />
              <text x="60" y="125" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">1</text>
              <circle cx="120" cy="120" r="14" fill="#F59E42" stroke="#fff" strokeWidth="3" />
              <text x="120" y="125" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">2</text>
              <circle cx="180" cy="120" r="14" fill="#F59E42" stroke="#fff" strokeWidth="3" />
              <text x="180" y="125" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">3</text>
              <circle cx="240" cy="120" r="14" fill="#F59E42" stroke="#fff" strokeWidth="3" />
              <text x="240" y="125" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">4</text>
              <circle cx="300" cy="120" r="14" fill="#F59E42" stroke="#fff" strokeWidth="3" />
              <text x="300" y="125" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">5</text>
              <circle cx="360" cy="120" r="14" fill="#F59E42" stroke="#fff" strokeWidth="3" />
              <text x="360" y="125" textAnchor="middle" fontSize="13" fill="#fff" fontWeight="bold">6</text>
            </g>
            <text x="200" y="150" textAnchor="middle" fontSize="15" fill="#92400E" fontWeight="bold">Each circle = one pass (epoch) through all data</text>
          </svg>
        </div>
      </div>

      {/* Quick Recall Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">📝 Quick Recall Phrases</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">Memorize these key phrases for instant recall</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {quickRecall.map((phrase, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {idx + 1}
                </span>
                <span className="text-gray-900 dark:text-white font-medium leading-relaxed">
                  {phrase}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rhyme Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎵 Epochs Rhyme</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">A catchy rhyme to remember the basics</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-pink-50 to-yellow-50 dark:from-pink-900/20 dark:to-yellow-900/20 p-6 rounded-lg">
            <pre className="text-gray-900 dark:text-white font-mono text-lg leading-relaxed whitespace-pre-wrap">
              {rhyme}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 