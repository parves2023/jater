import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoVolumeHighOutline } from "react-icons/io5";



function Lessons() {

  const { id } = useParams(); // id is a string
  const [lesson, setLesson] = useState([]);
  const [modalData, setModalData] = useState(null); // State for modal data

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch("/words.json");
        const data = await response.json();


        // Convert id to a number for comparison
        const selectedLesson = data.filter(
          (lesson) => lesson.lesson_no === Number(id)
        );


        setLesson(selectedLesson);
      } catch (error) {

      }
    };

    fetchLessons();
  }, [id]);

  const speakWord = (word, lang = "en-US") => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = lang; 
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech!");
    }
  };
  


  

  if (!lesson.length) {
    return <p>Loading lesson {id}...</p>;
  }

  // Function to open the modal
  const openModal = (word) => {
    setModalData(word); // Set the data for the modal
    document.getElementById("my_modal_1").showModal(); // Open the modal
  };

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
              <strong>Pronunciation:</strong> {word.pronunciation}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Part of Speech:</strong> {word.part_of_speech}
            </p>
           <div className="flex justify-between items-center mt-4">
           <button
              className=" btn btn-sm btn-primary"
              onClick={() => openModal(word)}
            >
              When to Say
            </button>
            <div   onClick={() => speakWord(word.meaning)} className="flex gap-2 ml-4 items-center cursor-pointer btn btn-sm"><IoVolumeHighOutline /> SpeakUp</div>
           </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link  to={"/start-learning"} className="btn btn-primary my-8">GO to Lessons</Link>
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {modalData && (
            <>
              <h3 className="font-bold text-lg">{modalData.word}</h3>
              <p className="py-4">
                <strong>Meaning:</strong> {modalData.meaning}
              </p>
              <p className="py-2">
                <strong>When to Say:</strong> {modalData.when_to_say}
              </p>
              <p className="py-2">
                <strong>Example:</strong> {modalData.example}
              </p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              {/* Close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Lessons;
