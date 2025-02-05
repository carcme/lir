import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import AnimatedPageSlider from "../components/AnimatedPageSlider";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import { getLanguage, useLanguage } from "../context/LanguageContext";
import Carousel from "../components/Carousel";

const Home = () => {
  const data = getLanguage(AnimatedPageSliderData);
  const meta = getLanguage(helmetData);
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleHome}</title>
        <meta name="description" content={meta.descHome} />
        <meta name="keywords" content={meta.keysHome} />
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

      <AnimatedPageSlider data={data} />

      <div className="bg-primaryGreen">
        <div className="max-w-xl justify-center items-center mx-auto  rounded-lg shadow-lg p-4">
          {/* <Carousel
            children={slides}
            autoSlide={false}
            autoSlideInterval={8000}
          >
            {slides.map((slide) => (
              <img src={slide} alt="slide" className="object-cover" />
            ))}
          </Carousel> */}
        </div>
      </div>
    </>
  );
};

export default Home;
