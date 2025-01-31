import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import { useLanguage, getLanguage } from "../context/LanguageContext";

const Contact = () => {
  const meta = getLanguage(helmetData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
        <title>{meta.titleContact}</title>
        <meta name="description" content={meta.descContact} />
        <meta name="keywords" content={meta.keysContact} />
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
      <div className="flex flex-col gap-4 items-center justify-center w-full h-screen text-3xl font-bold text-center bg-neutral-700 text-neutral-300">
        Nothing Here yet
        {/* <button className="px-4 py-2 font-bold text-white bg-primaryGreen rounded hover:bg-primaryGreenDark">
          Does Nothing
        </button> */}
      </div>
    </>
  );
};

export default Contact;
