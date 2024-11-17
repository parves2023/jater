import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* About Section */}
      <section className="text-center mb-10">
        <h2 className="text-4xl font-bold  mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to <span className="font-semibold text-yellow-500">Lingo Bingo</span>, your go-to platform for mastering new vocabularies and enhancing your language skills! 🧠📚
        </p>
        <p className="text-lg text-gray-700 mb-6">
          At <span className="font-semibold text-yellow-500">Lingo Bingo</span>, our mission is simple: <strong className="text-green-600">to make language learning fun, accessible, and effective for everyone. 🌍💬</strong> Whether you're just starting your language journey or looking to improve your vocabulary, our platform offers a variety of tools and resources that make learning both engaging and rewarding. 🎉
        </p>
      </section>

      {/* How We Help Section */}
      <section className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-center text-purple-600">How We Help You Learn Vocabulary 📖✨</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Curated Vocabulary Lists */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-semibold text-xl text-blue-600">📝 Curated Vocabulary Lists</h4>
            <p className="text-gray-600">
              Our platform offers a wide array of carefully curated vocabulary sets across different themes, making learning relevant to your needs and interests.
            </p>
          </div>

          {/* Interactive Quizzes */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-semibold text-xl text-blue-600">📚 Interactive Quizzes</h4>
            <p className="text-gray-600">
              Practice makes perfect! With our quizzes and flashcards, you can reinforce your vocabulary skills and track your progress.
            </p>
          </div>

          {/* Personalized Learning Paths */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-semibold text-xl text-blue-600">🎯 Personalized Learning Paths</h4>
            <p className="text-gray-600">
              Based on your level, we suggest a personalized learning path that evolves as you progress. Whether you're a beginner or advanced learner, we ensure that every lesson is tailored to your needs.
            </p>
          </div>

          {/* Motivational Content */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-semibold text-xl text-blue-600">💪 Motivational Content</h4>
            <p className="text-gray-600">
              Learning vocabulary can be challenging, but we’re here to inspire you. Expect to see motivational messages and success stories along your learning journey to keep you engaged and motivated!
            </p>
          </div>

          {/* Real-Life Examples */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h4 className="font-semibold text-xl text-blue-600">🌍 Real-Life Examples</h4>
            <p className="text-gray-600">
              Learn how each vocabulary word is used in real-world contexts with example sentences, so you not only remember the word but also understand how to apply it in conversation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
