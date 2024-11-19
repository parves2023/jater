import React from 'react';
import { motion } from 'framer-motion';

const JoyfulMomentsSection = () => {
  return (
    <section className="container mx-auto bg-gradient-to-r from-teal-500 to-green-800 py-16 text-center">
      <h2 className="text-4xl text-gray-200 font-bold  mb-6 animate__animated animate__bounceIn">
        🎉 Celebrate Your <span className="text-green-400">
         Learning Journey! 🎉
          
        </span>
      </h2>
      <p className="text-lg text-white mb-12 animate__animated animate__fadeIn">
        Every step you take brings you closer to mastering a new skill! Let's make the most of this journey.
      </p>

      {/* Fun Stats */}
      <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 mb-16">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-green-600 mb-4">100+</h3>
          <p className="text-lg text-gray-800">Courses Completed</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-green-600 mb-4">1,500+</h3>
          <p className="text-lg text-gray-800">Vocabulary Learned</p>
        </motion.div>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-green-600 mb-4">50+</h3>
          <p className="text-lg text-gray-800">Tutorials Available</p>
        </motion.div>
      </div>

      {/* Motivational Quote */}
      <div className="bg-white py-10 px-4 mx-auto w-full max-w-2xl rounded-lg shadow-lg text-center">
        <blockquote className="text-2xl font-semibold italic text-gray-800 mb-4">
          "Learning is a treasure that will follow its owner everywhere."
        </blockquote>
        <p className="text-lg text-gray-600">– Chinese Proverb</p>
      </div>

      {/* Fun Emoji Section */}
      <div className="mt-12 text-white">
        <p className="text-2xl font-semibold mb-4">🎈 Let's Keep the Fun Going! 🎈</p>
        <div className="text-5xl">
          <span role="img" aria-label="Celebration">🎉</span>
          <span role="img" aria-label="Book">📚</span>
          <span role="img" aria-label="Lightbulb">💡</span>
          <span role="img" aria-label="Star">⭐</span>
        </div>
      </div>
    </section>
  );
};

export default JoyfulMomentsSection;
