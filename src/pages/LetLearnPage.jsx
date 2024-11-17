import React from "react";
import { Link } from "react-router-dom";

const LetLearnPage = () => {
  const lessons = Array.from({ length: 10 }, (_, index) => index + 1); 


  const videoLinks = [
    "https://www.youtube.com/embed/rrsQrt06MLc?si=cEZGs4R-Dz6Uwlm5"
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Let's Learn Vocabulary!</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {lessons.map((lesson) => (
          <Link key={lesson} to={`/lessons/${lesson}`} className="text-xl font-semibold text-blue-600">
            <div className="bg-white p-6 rounded-lg shadow-md">
              Lesson {lesson}
            </div>
          </Link>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center mb-4">Learn the Alphabet!</h2>
        <div className="w-full max-w-4xl mx-auto">
          {/* Loop over the videoLinks array and render iframes for each video */}
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

      <div className="text-center">
        <Link
          to="/tutorials"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View More Tutorials
        </Link>
      </div>
    </div>
  );
};

export default LetLearnPage;
