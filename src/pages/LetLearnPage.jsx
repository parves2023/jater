import React from "react";
import { Link } from "react-router-dom";
import { FaHeadphones, FaMicrophone, FaPenFancy, FaBook } from "react-icons/fa"; // Import icons

const LetLearnPage = () => {
  const lessons = Array.from({ length: 10 }, (_, index) => index + 1);
  const videoLinks = [
    "https://www.youtube.com/embed/rrsQrt06MLc?si=cEZGs4R-Dz6Uwlm5"
  ];

  const skills = [
    { id: 1, name: "Listening", icon: <FaHeadphones size={40} color="#309255" /> },
    { id: 2, name: "Speaking", icon: <FaMicrophone size={40} color="#309255" /> },
    { id: 3, name: "Writing", icon: <FaPenFancy size={40} color="#309255" /> },
    { id: 4, name: "Reading", icon: <FaBook size={40} color="#309255" /> }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Main Heading */}
      <h1 className="text-3xl ralewayfont font-bold text-center mb-6">
        Lingo <span className="text-[#309255]">Bingo</span>
      </h1>

      {/* Skills Section */}
      <div className="mb-10">
        <h2 className="text-2xl ralewayfont font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-4 rounded-lg shadow-md text-center flex flex-col items-center"
            >
              {skill.icon}
              <p className="text-lg font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lessons Section */}
      <div className="mb-10">
        <h2 className="text-2xl ralewayfont font-bold text-center mb-6">Lessons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <Link
              key={lesson}
              to={`/lessons/${lesson}`}
              className="text-xl font-semibold text-white"
            >
              <div className="bg-[#EEFBF3] text-green-700 p-4 rounded-2xl border border-green-300 shadow-md text-center hover:shadow-lg">
                Lesson {lesson}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tutorial Section */}
      <div className="mb-6">
      
        <h1 className="text-3xl ralewayfont font-bold text-center mb-6">
        Learn <span className="text-[#309255]">the Alphabet!</span>
      </h1>
        <div className="w-full max-w-4xl mx-auto">
          {videoLinks.map((videoLink, index) => (
            <iframe
              key={index}
              width="100%"
              height="400"
              src={videoLink}
              title={`YouTube video player for lesson ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

      {/* More Tutorials Link */}
      <div className="text-center">
        <Link
          to="/tutorials"
          className="btn bg-green-50 px-10 hover:bg-green-800 hover:text-white font-medium border border-green-500"
        >
          View More Tutorials
        </Link>
      </div>
    </div>
  );
};

export default LetLearnPage;
