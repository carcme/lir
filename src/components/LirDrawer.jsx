import React from "react";
import LirGridText from "./LirGridText";
import cn from "../lib/cn";

const POSITION_CLASSES = {
  right:
    "absolute h-[80%] md:w-2/3 xl:w-3/5 bottom-0 bg-primaryGreen top-20 right-0 max-h-fit shadow-xl duration-500 ease-in-out rounded-bl-full transition-all transform",
  center:
    "absolute right-0 bottom-0 w-full  transition-all duration-500 ease-in-out transform bg-primaryGreen max-h-fit rounded-t-xl",
};

const TRANSLATE_CLASSES = {
  right: ["translate-x-0", "translate-x-full"],
  center: ["translate-y-0", "translate-y-full"],
};

const LirDrawer = ({ isOpen, setIsOpen, data, orientation = "right" }) => {
  const { name, tag, desc, btn1, btn2, btn1Link, btn2Link } = data;

  const orientationClasses = POSITION_CLASSES[orientation];
  const translateClasses = TRANSLATE_CLASSES[orientation];

  return (
    <>
      <main
        className={
          "fixed mx-auto overflow-hidden z-20 inset-0 transform ease-in-out" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ") +
          (orientation === "center" ? " max-w-4xl " : " ")
        }
      >
        <section
          onClick={() => {
            setIsOpen(false);
          }}
          className={cn(
            orientationClasses,
            ` ${isOpen ? translateClasses[0] : translateClasses[1]}`
          )}
        >
          <article className="flex relative flex-col h-[100%] ">
            <LirGridText
              orientation={orientation}
              name={name}
              tag={tag}
              desc={desc}
              btn1={btn1}
              btn2={btn2}
              btn1Link={btn1Link}
              btn2Link={btn2Link}
            />
          </article>
        </section>
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
};

export default LirDrawer;
