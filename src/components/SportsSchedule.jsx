import React from "react";
import ImageZoom from "react-image-zooom";

import Img from "/assets/sport.webp";

const SportsSchedule = () => {
  return (
    <>
      <section className=" justify-center flex items-center text-white bg-primaryGreen">
        <ImageZoom src={Img} alt="The Lir Sports Schedule" zoom="200" />
      </section>
    </>
  );
};

export default SportsSchedule;
