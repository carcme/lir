import React, { useEffect, useState } from "react";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import Barn from "../assets/barn.jpg";
import srcsetWebp from "../assets/barn.jpg?w=500;700;900;1200&format=webp&as=srcset";
// create a small placeholder and import its metadata
import {
  src as placeholder,
  width,
  height,
} from "../assets/barn.jpg?w=300&as=metadata";

const Temp = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  console.log("🚀 ~ height:", height);
  console.log("🚀 ~ width:", width);

  return (
    <>
      <div className="mt-32">
        <h1>Hello Imagetools!</h1>
        <a
          href="https://github.com/JonasKruckenberg/imagetools/tree/main/docs"
          target="_blank"
        >
          Documentation
        </a>

        {/* <!-- Now we can use our images --> */}
        <picture>
          <source srcset={srcsetWebp} type="image/webp" />
          <img
            src={placeholder}
            width={width}
            height={height}
            alt="Women Lying Near to a Multicolored Glass Window Close-up Photography"
          />
        </picture>

        <div style={{ width: "300px", margin: "50px  auto" }}>
          Here are a few sponsors of Vite:
          <br />
        </div>
        {/* <div>
          {isDesktop ? (
            <div className="text-4xl text-red-700">Larger than 1000px</div>
          ) : (
            <div className="text-4xl text-blue-700">Lower than 1000px </div>
          )}
        </div> */}
        {/* <HeroTextSlideIn />
        <ImagesPage /> */}
        {/* <LirGrid data={data} /> */}
        {/* <MyHeroSlider /> */}
        {/* <TDSlider />
        <FullScrn /> */}
      </div>
    </>
  );
};

export default Temp;
