import React, { useContext, useEffect } from "react";
import helmetData from "@/json/helmetData";
import { Link } from "react-router-dom";
import SportsSchedule from "../components/SportsSchedule";

import {
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";
import LirHelmet from "../components/layout/LirHelmet";

const Sports = () => {
  const globalState = useContext(GlobalStateContext);
  const meta = getLanguage(globalState.lang, helmetData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LirHelmet
        lang={globalState.lang}
        page={meta.sports}
        common={meta.common}
      />

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
          <button
            aria-label="fixture list on facebook"
            className="px-4 bg-white rounded-md border py-3text-white text-primaryGreen hover:bg-primaryGreen hover:border-white hover:text-white"
          >
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
