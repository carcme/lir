import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import helmetData from "@/json/helmetData";
import AllMenuItems from "../components/AllMenuItems";
// const Pdf = React.lazy(() => import("../components/Pdf"));
import Pdf from "../components/Pdf";

import {
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";
import LirHelmet from "../components/layout/LirHelmet";

const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);
  const globalState = useContext(GlobalStateContext);
  const meta = getLanguage(globalState.lang, helmetData);
  const location = useLocation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (location.pathname !== "/menu") {
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <>
      <LirHelmet
        lang={globalState.lang}
        page={meta.menu}
        common={meta.common}
      />
      <div className="page">
        <AllMenuItems />

        <label className="flex justify-center items-center my-10 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={isChecked}
            aria-expanded={isChecked}
            onChange={handleCheckboxChange}
            value=""
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primaryGreenLight rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primaryGreen"></div>
          <span
            aria-label="show menu"
            className="text-sm font-medium ms-3 text-primaryGreen"
          >
            {globalState.lang === "en" && "Show Menu"}
            {globalState.lang === "de" && "Menü anzeigen"}
          </span>
        </label>

        {isChecked && <Pdf />}
      </div>
    </>
  );
};

export default Menu;
