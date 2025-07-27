'use client';interface PlaceholderSectionProps {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ title, description, icon, category }) => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 px-6 py-3 rounded-full">
          <span className="text-2xl">{icon}</span>
          <span className="font-semibold text-purple-700 dark:text-purple-300">{category}</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Content Placeholder */}
      <div className="max-w-4xl mx-auto">
        <div className="card p-8 text-center">
          <div className="space-y-6">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Content Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We're working hard to create comprehensive content for this section. 
              In the meantime, you can explore the quiz questions related to this topic!
            </p>
            <div className="mt-8">
              <a 
                href="#quiz" 
                className="btn-primary text-lg px-8 py-3 inline-flex items-center space-x-2"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'quiz';
                  window.dispatchEvent(new CustomEvent('navigateToQuiz', { 
                    detail: { section: 'placeholder' } 
                  }));
                }}
              >
                <span>🎯</span>
                <span>Take Quiz</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderSection; 