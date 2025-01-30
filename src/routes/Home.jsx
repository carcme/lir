import React from "react";
import Hero from "../components/Hero";
import AnimatedPageSlider from "../components/AnimatedPageSlider";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import { getLanguage } from "../context/LanguageContext";

const Home = () => {
  console.log("Home page");
  const data = getLanguage(AnimatedPageSliderData);

  console.log(data);

  return (
    <>
      <AnimatedPageSlider data={data} />
    </>
  );
};

export default Home;
