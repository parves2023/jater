import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";
import About from "../../components/About";
import SuccessSection from "../../components/SuccessSection";
import JoyfulMomentsSection from "../../components/JoyfulMomentsSection";
import LearningAchievementsSection from "../../components/LearningAchievementsSection";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="my-10">
      <Slider></Slider>
      <About></About>
      <div data-aos="zoom-out-left">
        <SuccessSection></SuccessSection>
      </div>
      <div data-aos="zoom-out-right">
        <JoyfulMomentsSection></JoyfulMomentsSection>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <LearningAchievementsSection></LearningAchievementsSection>
      </div>
    </div>
  );
};

export default Home;
