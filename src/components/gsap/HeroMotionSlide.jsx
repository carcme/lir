import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Rays from "./Rays";

const HeroMotionSlide = ({ endAction }) => {
  useEffect(() => {
    setTimeout(() => {
      endAction();
    }, 5500);
  }, []);

  return (
    <>
      <div>
        <div className="flex relative z-0 justify-center items-center w-screen h-screen bg-primaryGreen">
          <div className="relative z-50 w-2/5 h-2/5">
            <motion.div
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 3 }}
              className="absolute uppercase top-1/4 lg:top-[50%] text-white font-Hind text-5xl left-3 lg:left-0 xl:left-20 overflow-hidden"
            >
              The
            </motion.div>
            <div className="absolute top-[calc(48%)] left-0 w-full flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="pl-5 text-6xl uppercase font-Hind text-primaryGreenDark"
              >
                Berlin
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              transition={{ duration: 3 }}
              className="absolute uppercase top-3/4 lg:top-[50%] -right-2 lg:right-0 xl:right-20 text-white font-Hind text-5xl overflow-hidden"
            >
              Lir
            </motion.div>
          </div>
        </div>
        <Rays
          castDirection="from-left"
          rayColor="white"
          className="top-0 z-30"
        />
      </div>
    </>
  );
};

export default HeroMotionSlide;
