import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  const videos = [
    "https://youtu.be/AHFBK0YDk3s?si=B6mTA8bVE9-50wmo",
    "https://youtu.be/W1FKsIMipdw?si=o02Fr1EUVUu0F6re",
    "https://youtu.be/ITbbpElhGbM?si=XLXr1OmmctZoh_-j",
    "https://youtu.be/tv43okv6v1Y?si=pH6H_W65YuUOBBuF",
    "https://youtu.be/LIXZ2cuPv5c?si=X7cKKPkVERpVd7qu",
    "https://youtu.be/6T0NWKiXe4Y?si=j69557l6cOcA0bX1",
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Tutorial Page</h2>
      <div className="flex flex-col gap-6">
        {videos.map((video, index) => (
          <div key={index} className="w-full h-96">
            <iframe
              className="w-full h-96 rounded-lg shadow-md"
              src={video.replace("youtu.be", "www.youtube.com/embed").split("?")[0]}
              title={`Tutorial Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/start-learning")}
          className="btn btn-primary"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
