import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




// Import images
import banner3 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner1 from "../assets/banner.jpg";

const Slider = () => {
  const banners = [
    {
      image: banner1,
      heading: "Unlock Your Potential",
      text: "Embark on a journey of endless learning and growth.",
    },
    {
      image: banner2,
      heading: "Learn and Excel",
      text: "Push boundaries and achieve new heights.",
    },
    {
      image: banner3,
      heading: "Shape Your Future",
      text: "Every small step leads to a brighter tomorrow.",
    },
  ];





  return (
    <div className="w-full h-[400px] md:h-[500px] container mx-auto">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        className="text-center"
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="relative h-full"
          >
            {/* Image with gray overlay */}
            <img
              src={banner.image}
              alt={`Slide ${index + 1}`}
              className="h-[30rem] object-cover brightness-50 rounded-2xl"
            />

            {/* Centered text */}
            <div
              className=" absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center"
              data-aos="fade-up" // Additional animation for text
            >
              <h2 className="text-4xl animate__animated animate__bounce md:text-5xl font-bold">{banner.heading}</h2>
              <span className="text-green-300">
              <p className="mt-4 text-lg md:text-xl">{banner.text}</p>

              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
