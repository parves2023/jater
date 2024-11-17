import React from "react";
import CountUp from "react-countup";

const SuccessSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Success So Far</h2>
      <p className="text-lg text-gray-700 mb-12">
        We're proud of what we've achieved, and we're just getting started! Here are some key milestones we've reached.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* User Count */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-600">User Count</h3>
          <p className="text-4xl font-bold text-blue-800">
            <CountUp start={0} end={5000} duration={3} separator="," />
          </p>
        </div>

        {/* Lesson Count */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-600">Lesson Count</h3>
          <p className="text-4xl font-bold text-green-800">
            <CountUp start={0} end={150} duration={3} separator="," />
          </p>
        </div>

        {/* Vocabulary Count */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-yellow-600">Vocabulary Count</h3>
          <p className="text-4xl font-bold text-yellow-800">
            <CountUp start={0} end={5000} duration={3} separator="," />
          </p>
        </div>

        {/* Tutorial Count */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-purple-600">Tutorial Count</h3>
          <p className="text-4xl font-bold text-purple-800">
            <CountUp start={0} end={25} duration={3} separator="," />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
