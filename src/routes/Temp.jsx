import React, { useEffect, useState } from "react";
import FullScrn from "../components/hero/FullScrn";
import TDSlider from "../components/Sliders/TDSlider";
import MyHeroSlider from "../components/hero/MyHeroSlider";
import LirGrid from "../components/LirGrid";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";
import { getLanguage, useLanguage } from "../context/LanguageContext";

const Temp = () => {
  const data = getLanguage(AnimatedPageSliderData);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <div className="page pb-10">
        {/* <div>
          {isDesktop ? (
            <div className="text-4xl text-red-700">Larger than 1000px</div>
          ) : (
            <div className="text-4xl text-blue-700">Lower than 1000px </div>
          )}
        </div> */}
        <LirGrid data={data} />
        {/* <MyHeroSlider /> */}
        {/* <TDSlider />
        <FullScrn /> */}
      </div>
    </>
  );
};

export default Temp;
