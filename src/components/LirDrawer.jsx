import React from "react";
import LirGridText from "./LirGridText";

const LirDrawer = ({ isOpen, setIsOpen, data }) => {
  const { name, tag, desc, btn1, btn2, btn1Link, btn2Link } = data;
  return (
    <>
      <main
        className={
          "fixed overflow-hidden z-50 inset-0 transform ease-in-out" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          onClick={() => {
            setIsOpen(false);
          }}
          className={`absolute md:w-2/3 xl:w-3/5 bottom-0 bg-primaryGreen top-20 right-0 h-screen max-h-fit shadow-xl duration-500 ease-in-out rounded-bl-full transition-all transform  ${
            isOpen ? " translate-x-0 " : " translate-x-full "
          } `}
        >
          <article className="relative flex flex-col h-fit">
            <LirGridText
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
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
};

export default LirDrawer;
