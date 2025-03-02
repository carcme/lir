import React, { useContext, useEffect, useRef } from "react";
import helmetData from "@/json/helmetData";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";
import AnimatedPageSlider from "../components/hero/AnimatedPageSlider";
import {
  GlobalDispatchContext,
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";

import HeroMotionSlide from "../components/hero/HeroMotionSlide";
import LirGridBento from "../components/LirGridBento";
import LirHelmet from "../components/layout/LirHelmet";

const Home = () => {
  const globalDispatch = useContext(GlobalDispatchContext);
  const globalState = useContext(GlobalStateContext);
  const data = getLanguage(globalState.lang, AnimatedPageSliderData);
  const meta = getLanguage(globalState.lang, helmetData);
  const scrollTo = useRef(null);

  const showHeader = false;

  const welcomeFinished = () => {
    scrollTo.current.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      globalDispatch({ type: "TOGGLE_WELCOME" });
    }, 700);
  };

  useEffect(() => {
    if (globalState.welcome) {
      window.scrollTo(0, 0);
    }
  }, [globalState.welcome]);
  return (
    <>
      <LirHelmet
        lang={globalState.lang}
        page={meta.home}
        common={meta.common}
      />
      {
        // !import.meta.env.DEV &&
        !import.meta.env.DEV && globalState.welcome && (
          <HeroMotionSlide endAction={welcomeFinished} />
        )
      }
      {/* this is hidden by the text color and4 the navbar */}
      <h1 className="text-primaryGreen bg-primaryGreen">
        The Lir Berlin - Great Drinks, Live Sports & Warm Hospitality
      </h1>

      {/* Add a screen size check and show if desktop. Show Bento otherwise*/}
      {/* <AnimatedPageSlider data={data} /> */}
      <div
        ref={scrollTo}
        className={`block bg-primaryGreen pb-6 px-6 ${
          showHeader ? "pt-20" : "pt-20"
        }`}
      >
        <LirGridBento showHeader={showHeader} data={data} />
        <div className="h-px mx-10 border-0 sm:mx-32 bg-white/20" />
      </div>
    </>
  );
};

export default Home;
