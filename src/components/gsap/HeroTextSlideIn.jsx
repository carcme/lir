import React, { useState, useRef } from "react";
import { GiShamrock } from "react-icons/gi";

import { gsap, Power1 } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroTextSlideIn = ({ endAction }) => {
  const [hasRun, setHasRun] = useState(false);
  const left = useRef(null);
  const right = useRef(null);
  const logo = useRef(null);

  useGSAP(() => {
    if (hasRun) return;
    const timeline = gsap.timeline();
    const leftID = left.current;
    const rightID = right.current;
    const logoID = logo.current;

    timeline
      .fromTo(
        leftID,
        {
          x: -400,
          autoAlpha: 0,
          // rotation: "-1480deg",
        },
        {
          x: 0,
          autoAlpha: 1,
          // rotation: "0deg",
          duration: 2,
          ease: Power1.out,
        }
      )
      .fromTo(
        rightID,
        {
          x: 400,
          autoAlpha: 0,
          // rotation: "0deg",
        },
        {
          x: 0,
          autoAlpha: 1,
          // rotation: "-1440deg",
          delay: -1,
          duration: 1.5,
          ease: Power1.out,
        }
      )
      .fromTo(
        logoID,
        {
          opacity: 0,
          autoAlpha: 0,
          scale: 1,
          //   rotation: "-1480deg",
        },
        {
          autoAlpha: 1,
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: Power1.out,
        }
      )
      .call(() => {
        endAction();
      });

    setHasRun(true);
  }, []);

  return (
    <>
      <div className="page-transition__red">
        <div className="w-screen h-screen flex items-center justify-center bg-primaryGreen">
          <div className="w-2/5 h-2/5 relative">
            <div
              ref={left}
              id="left"
              className="absolute uppercase top-1/4 lg:top-[50%] text-white font-Hind text-5xl left-3 lg:left-0 xl:left-20"
            >
              The
            </div>
            <div className="absolute top-[calc(48%)] left-0 w-full flex justify-center items-center">
              <div
                ref={logo}
                id="logo"
                className="uppercase font-Hind text-primaryGreenDark text-6xl pl-5"
              >
                Berlin
                {/* <GiShamrock className="text-white text-3xl" /> */}
              </div>
            </div>
            <div
              ref={right}
              id="right"
              className="absolute uppercase top-3/4 lg:top-[50%] -right-2 lg:right-0 xl:right-20 text-white font-Hind text-5xl"
            >
              Lir
            </div>
          </div>
        </div>
        {/* <div
          id="mainContent"
          className="w-screen h-screen flex items-center justify-center bg-black"
        ></div> */}
      </div>
    </>
  );
};

export default HeroTextSlideIn;
