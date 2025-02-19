import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import AllMenuItems from "../components/AllMenuItems";
import Pdf from "../components/Pdf";

import {
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";

const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const globalState = useContext(GlobalStateContext);
  const meta = getLanguage(globalState.lang, helmetData);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: globalState.lang }}>
        <title>{meta.titleMenu}</title>
        <meta name="description" content={meta.descMenu} />
        <meta name="keywords" content={meta.keysMenu} />
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
      <div className="page">
        <AllMenuItems />

        <label className="flex justify-center items-center my-10 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            value=""
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primaryGreenLight rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primaryGreen"></div>
          <span className="text-sm font-medium ms-3 text-primaryGreen">
            {globalState.lang === "en" && "Show Menu"}
            {globalState.lang === "de" && "TODO: DE lang"}
          </span>
        </label>

        {isChecked && <Pdf />}
      </div>
    </>
  );
};

export default Menu;
