import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import AllMenuItems from "../components/AllMenuItems";
import Pdf from "../components/Pdf";
import { getLanguage, useLanguage } from "../context/LanguageContext";

const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const meta = getLanguage(helmetData);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
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

        <label className="flex cursor-pointer justify-center select-none items-center my-10">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            value=""
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primaryGreenLight rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primaryGreen"></div>
          <span className="ms-3 text-sm font-medium text-primaryGreen">
            Show Menu
          </span>
        </label>

        {isChecked && <Pdf />}
      </div>
    </>
  );
};

export default Menu;
