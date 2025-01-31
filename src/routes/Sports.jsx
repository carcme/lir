import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import SportsSchedule from "../components/SportsSchedule";

const Sports = () => {
  const lang = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex items-center flex-col justify-center pt-28 pb-16 w-full h-fit sm:text-3xl font-bold text-center px-4 bg-neutral-700 text-neutral-300">
        {lang === "en" && (
          <p className="py-5 max-w-2xl text-justify">
            Live Sports Football, rugby, hurling and other sport events on big
            screen in HD. World Cup, Premier League, Champions & Euro League,
            Bundesliga Highlights, Six Nations
          </p>
        )}
        {lang === "de" && (
          <p className="py-5 max-w-2xl text-justify">
            Fußball, Rugby, Hurling und andere Sport Events auf Großbildleinwand
            in HD. World Cup, Premier League, Champions & Euro League,
            Bundesliga Highlights, Six Nations
          </p>
        )}
        <Link
          to="https://www.facebook.com/irishpubberlin/"
          target="_blank"
          className="hover:underline text-xl"
        >
          <button className="px-4 py-3text-white bg-primaryGreen rounded-md hover:bg-primaryGreenDark">
            {lang === "en" &&
              "Visit our Facebook page for our live fixture list"}
            {lang === "de" &&
              "Bitte besuchen Sie unsere Facebook-Seite für unsere Live Übertragungsliste"}
          </button>
        </Link>
      </div>
      <SportsSchedule />
    </>
  );
};

export default Sports;
