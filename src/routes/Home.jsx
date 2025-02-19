import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import AnimatedPageSlider from "../components/hero/AnimatedPageSlider";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import {
  GlobalDispatchContext,
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";

import LirGrid from "../components/LirGrid";
import HeroTextSlideIn from "../components/gsap/HeroTextSlideIn";

const Home = () => {
  const globalDispatch = useContext(GlobalDispatchContext);
  const globalState = useContext(GlobalStateContext);
  const data = getLanguage(globalState.lang, AnimatedPageSliderData);
  console.log("🚀 ~ Home ~ data:", data);
  const meta = getLanguage(globalState.lang, helmetData);
  const scrollTo = useRef(null);

  const showHeader = false;

  const welcomeFinished = () => {
    scrollTo.current.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      globalDispatch({ type: "TOGGLE_WELCOME" });
    }, 1000);
  };

  useEffect(() => {
    if (globalState.welcome) {
      window.scrollTo(0, 0);
    }
  }, [globalState.welcome]);
  return (
    <>
      <Helmet htmlAttributes={{ lang: globalState.lang }}>
        <title>{meta.titleHome}</title>
        <meta name="description" content={meta.descHome} />
        <meta name="keywords" content={meta.keysHomeuseScroll} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />

        <meta name="og:image" content={meta.og.image} />
        <meta name="og:image:url" content={meta.og.imageUrl} />
        <meta name="og:image:width" content={meta.og.imageWidth} />
        <meta name="og:image:height" content={meta.og.imageHeight} />
        <meta name="og:image:alt" content={meta.og.imageAlt} />
        <meta name="og:description" content={meta.descHome} />
        <meta name="og:title" content={meta.og.title} />
        <meta name="og:site_name" content={meta.og.siteName} />

        <meta name="charSet" content={meta.charset} />
        <meta name="charSet" content={meta.charset} />
        <meta name="charSet" content={meta.charset} />

        <meta name="apple-mobile-web-app-capable" content={meta.apple} />
        <meta name="google" content={meta.google} />
      </Helmet>

      {globalState.welcome && <HeroTextSlideIn endAction={welcomeFinished} />}

      {/* this is hidden by the text color and4 the navbar */}
      <h1 className="text-primaryGreen bg-primaryGreen">
        The Lir Berlin - Great Drinks, Live Sports & Warm Hospitality
      </h1>
      {/* <AnimatedPageSlider data={data} /> */}
      <div
        ref={scrollTo}
        className={`bg-primaryGreen pb-6 px-6 ${
          showHeader ? "pt-20" : "pt-20"
        }`}
      >
        <LirGrid showHeader={showHeader} data={data} />
      </div>
      {/* <div className="bg-primaryGreen">
        <div className="justify-center items-center p-4 mx-auto max-w-xl rounded-lg shadow-lg"> */}
      {/* <Carousel
            children={slides}
            autoSlide={false}
            autoSlideInterval={8000}
          >
            {slides.map((slide) => (
              <img src={slide} alt="slide" className="object-cover" />
            ))}
          </Carousel> */}
      {/* </div>
      </div> */}
    </>
  );
};

export default Home;
