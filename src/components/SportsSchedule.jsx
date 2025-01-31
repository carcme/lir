import React from "react";
import ImageZoom from "react-image-zooom";

import Img from "/assets/sport.webp";

const SportsSchedule = () => {
  return (
    <>
      <section className=" justify-center flex items-center text-white bg-neutral-700 ">
        <ImageZoom src={Img} alt="The Lir Sports Schedule" zoom="200" />
      </section>
      <div className="py-10 bg-neutral-700"></div>
    </>
  );
};

export default SportsSchedule;
