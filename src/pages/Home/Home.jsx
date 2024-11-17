import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider";
import About from "../../components/About";
import SuccessSection from "../../components/SuccessSection";
import JoyfulMomentsSection from "../../components/JoyfulMomentsSection";
import LearningAchievementsSection from "../../components/LearningAchievementsSection";


const Home = () => {
  const words = useLoaderData();

  return (
    <div className="my-10">
      {/* {words.length} */}
      <Slider></Slider>
      <About></About>
      <SuccessSection></SuccessSection>
      <JoyfulMomentsSection></JoyfulMomentsSection>
      <LearningAchievementsSection></LearningAchievementsSection>
    </div>
  );
};

export default Home;
