import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Rays from "./Rays";

const HeroMotionSlide = ({ endAction }) => {
  useEffect(() => {
    setTimeout(() => {
      !import.meta.env.DEV && endAction();
    }, 5500);
  }, []);

  return (
    <>
      <div className="w-full">
        <main className="relative w-full overflow-hidden">
          <div className="relative z-0 flex items-center justify-center w-screen h-screen bg-primaryGreen">
            <div className="relative z-50 w-full md:w-2/5 h-2/5">
              <motion.div
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ duration: 3 }}
                className="absolute uppercase top-1/4 lg:top-[53%] text-primaryGreenLight font-Hind text-5xl left-10 lg:-left-10 xl:left-2 overflow-hidden"
              >
                The
              </motion.div>
              <div className="absolute top-[45%] lg:top-[48%] left-0 w-full flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                  className="pl-5 font-serif uppercase text-black/50 text-7xl"
                >
                  Berlin
                </motion.div>
              </div>
              <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 3 }}
                className="absolute uppercase top-3/4 lg:top-[53%] right-10 lg:-right-10 xl:right-2 text-primaryGreenLight font-Hind text-5xl overflow-hidden"
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
        </main>
      </div>
    </>
  );
};

export default HeroMotionSlide;
