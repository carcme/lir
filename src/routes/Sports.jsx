import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import { Link } from "react-router-dom";
import SportsSchedule from "../components/SportsSchedule";

import {
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";

const Sports = () => {
  const globalState = useContext(GlobalStateContext);
  const meta = getLanguage(globalState.lang, helmetData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{ lang: globalState.lang }}>
        <title>{meta.titleSports}</title>
        <meta name="description" content={meta.descSports} />
        <meta name="keywords" content={meta.keysSports} />
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
      <div className="flex flex-col justify-center items-center px-4 pt-28 pb-16 w-full font-bold text-center text-white h-fit sm:text-3xl bg-primaryGreen">
        {globalState.lang === "en" && (
          <p className="py-5 max-w-2xl text-justify">
            Live Sports Football, rugby, hurling and other sport events on big
            screen in HD. World Cup, Premier League, Champions & Euro League,
            Bundesliga Highlights, Six Nations
          </p>
        )}
        {globalState.lang === "de" && (
          <p className="py-5 max-w-2xl text-justify">
            Fußball, Rugby, Hurling und andere Sport Events auf Großbildleinwand
            in HD. World Cup, Premier League, Champions & Euro League,
            Bundesliga Highlights, Six Nations
          </p>
        )}
        <Link
          to="https://www.facebook.com/irishpubberlin/"
          target="_blank"
          className="text-xl hover:underline"
        >
          <button className="px-4 bg-white rounded-md border py-3text-white text-primaryGreen hover:bg-primaryGreen hover:border-white hover:text-white">
            {globalState.lang === "en" &&
              "Visit our Facebook page for our live fixture list"}
            {globalState.lang === "de" &&
              "Bitte besuchen Sie unsere Facebook-Seite für unsere Live Übertragungsliste"}
          </button>
        </Link>
      </div>
      <SportsSchedule />
    </>
  );
};

export default Sports;
