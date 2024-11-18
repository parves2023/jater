import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Lessons() {
  const { id } = useParams(); // id is a string
  const [lesson, setLesson] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch("/words.json");
        const data = await response.json();

        console.log("Fetched Data:", data);
        console.log("ID from Params:", id);

        // Convert id to a number for comparison
        const selectedLesson = data.filter(
          (lesson) => lesson.lesson_no === Number(id)
        );

        console.log("Selected Lesson:", selectedLesson);
        setLesson(selectedLesson);
      } catch (error) {
        console.error("Error fetching lessons:", error.message);
      }
    };

    fetchLessons();
  }, [id]);

  if (!lesson.length) {
    return <p>Loading lesson {id}...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Currently Showing Lesson {id}
      </h1>
      <p className="text-lg text-center mb-8">
        Number of Words in this Lesson: {lesson.length}
      </p>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lesson.map((word) => (
          <div
            key={word.id}
            className={`p-6 rounded-lg shadow-md transition-all transform hover:scale-105 ${
              word.difficulty === "easy"
                ? "bg-green-100 border-l-4 border-green-500"
                : word.difficulty === "medium"
                ? "bg-yellow-100 border-l-4 border-yellow-500"
                : "bg-red-100 border-l-4 border-red-500"
            }`}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">{word.word}</h2>
            <p className="text-sm text-gray-600">
              <strong>Meaning:</strong> {word.meaning}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Part of Speech:</strong> {word.part_of_speech}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Pronunciation:</strong> {word.pronunciation}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Difficulty:</strong>{" "}
              <span
                className={`${
                  word.difficulty === "easy"
                    ? "text-green-700"
                    : word.difficulty === "medium"
                    ? "text-yellow-700"
                    : "text-red-700"
                }`}
              >
                {word.difficulty}
              </span>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Example:</strong> {word.example}
            </p>
            <p className="text-sm text-gray-600">
              <strong>When to Say:</strong> {word.when_to_say}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Lessons;
