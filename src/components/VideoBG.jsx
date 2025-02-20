import React from "react";
import lirFire from "../assets/lirFire.mp4";

const VideoBG = () => {
  return (
    <div>
      <video class="w-full h-fit" controls autoPlay loop>
        <source src={lirFire} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBG;
