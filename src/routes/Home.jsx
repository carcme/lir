import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import AnimatedPageSlider from "../components/AnimatedPageSlider";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import { getLanguage, useLanguage } from "../context/LanguageContext";

const Home = () => {
  const data = getLanguage(AnimatedPageSliderData);
  const meta = getLanguage(helmetData);

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
    </>
  );
};

export default Home;
