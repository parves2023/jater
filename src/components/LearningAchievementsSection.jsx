import React from "react";
import Marquee from "react-fast-marquee";

const LearningAchievementsSection = () => {
  // Milestone Data
  const milestones = [
    { title: "🎉 Milestone 1", description: "Completed your first lesson! You're on the right path." },
    { title: "🏅 Milestone 2", description: "Mastered 100 new words! Amazing progress!" },
    { title: "🎓 Milestone 3", description: "Completed your first project! You're officially a learner!" },
    { title: "🚀 Milestone 4", description: "Achieved 500 words learned! You're flying high!" },
    { title: "🌟 Milestone 5", description: "Completed your first quiz with a perfect score!" },
    { title: "🎯 Milestone 6", description: "Reached 1000 words learned! You're a master!" },
  ];

  return (
    <section className="bg-gradient-to-r container mx-auto from-teal-400 to-gray-800 text-center p-16 my-10 rounded-2xl">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-white mb-8">🎓 Learning <span className="text-green-400">Achievements</span> 🏅</h2>

      {/* Marquee Component with Text */}
      <Marquee gradient={false} speed={50} className="text-white font-semibold text-xl mb-8">
        🎉 Milestone 1: Completed your first lesson! 🎓 Milestone 2: Mastered 100 new words! 🚀 Milestone 3: Achieved 500 words learned! 🌟 Milestone 4: Completed your first quiz with a perfect score! 🎯 Milestone 5: Reached 1000 words learned! 🏆 Milestone 6: Completed your first project!
      </Marquee>

      {/* Milestone Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-teal-600 mb-4">{milestone.title}</h3>
            <p className="text-lg text-gray-800">{milestone.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningAchievementsSection;
