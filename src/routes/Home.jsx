import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import AnimatedPageSlider from "../components/hero/AnimatedPageSlider";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import { getLanguage, useLanguage } from "../context/LanguageContext";
import Carousel from "../components/Carousel";
import LirGrid from "../components/LirGrid";

const Home = () => {
  const data = getLanguage(AnimatedPageSliderData);
  const meta = getLanguage(helmetData);
  const scrollTo = useRef(null);

  const showHeader = false;

  useEffect(() => {
    scrollTo.current.scrollIntoView();
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
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

      {/* this is hidden by the text color and4 the navbar */}
      <h1 className="text-primaryGreen">
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
        <div className="max-w-xl justify-center items-center mx-auto  rounded-lg shadow-lg p-4"> */}
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
