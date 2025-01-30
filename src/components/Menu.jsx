import React from "react";
import ImageZoom from "react-image-zooom";

const Menu = () => {
  return (
    <>
      <section className="">
        <ImageZoom
          src="/assets/images/sport.jpg"
          alt="Sports Schedule"
          zoom="200"
        />
      </section>
    </>
  );
};

export default Menu;
