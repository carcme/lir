import React, { useEffect, useState } from "react";
import AnimatedPageSliderData from "../json/AnimatedPageSliderData";

import srcsetWebp from "../assets/images/Lir6.webp?w=500;700;900;1200&format=webp&as=srcset";
// create a small placeholder and import its metadata
import {
  src as placeholder,
  width,
  height,
} from "../assets/images/Lir6.webp?w=300&as=metadata";

import lirFire from "../assets/lirFire.mp4";
import Rays from "../components/gsap/Rays";

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
      <header className="flex overflow-hidden relative justify-center items-center mb-12 h-screen bg-primaryGreen">
        <div className="relative z-30 p-5 text-2xl text-white rounded-xl bg-primaryGreenDark/80">
          Welcome to The Lir
        </div>
        <video
          class="absolute w-[40rem] rounded-xl shadow-2xl"
          controls={true}
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source src={lirFire} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>

      <div className="w-full h-screen bg-primaryGreen">
        <main className="overflow-hidden relative px-4 py-36 mx-auto w-full h-full">
          <h1 className="text-4xl font-bold tracking-tight text-center text-transparent capitalize bg-clip-text bg-gradient-to-t from-white md:text-5xl lg:text-7xl via-neutral-400 to-neutral-600">
            Add a ray of sunshine <br />
            or some shite
          </h1>
          <h2 className="px-4 mx-auto my-4 mt-4 max-w-2xl text-base font-normal text-justify text-muted-foreground md:mt-4 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dignissimos tenetur adipisci dolores dolorem ducimus exercitationem?
            Mollitia laboriosam est ducimus inventore nobis, quisquam, quae quos
            labore maxime laudantium expedita! Quisquam soluta totam ratione
            aspernatur eius non iusto? Cumque, magni rem. ipsum dolor sit, amet
            consectetur adipisicing elit. Error suscipit soluta facilis repellat
            debitis quae repudiandae. Quos aspernatur recusandae.
          </h2>
          <Rays castDirection="from-left" rayColor="yellow" className="top-0" />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </main>
      </div>
      <div className="m-12">
        {/* <!-- Now we can use our images --> */}
        <picture>
          <source srcset={srcsetWebp} type="image/webp" />
          <img
            src={placeholder}
            width={width}
            height={height}
            alt="Image didnt show!!"
          />
        </picture>
        <p>Image resized to 300px</p>

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
