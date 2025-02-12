import React from "react";
import cn from "@/lib/cn";

const LirGridText = ({ name, tag, desc, btn1, btn2, btn1Link, btn2Link }) => {
  return (
    <div>
      <div className="md:mx8 mx-4 justify-center md:items-end items-center flex flex-col">
        <div className="lg:text-5xl lg:pb-10 w-full text-2xl pt-1 xs:pt-5 uppercase font-bold text-white lg:text-left text-center lg:pl-9">
          {name}
        </div>
        <div className="lg:text-md text-sm text-justify text-white">
          {desc.map((text, i) => (
            <p
              className="py-2 leading-5 testclass"
              style={{ marginLeft: (i + 1) * 38 + "px" }}
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="text-xl text-white text-center justify-end mt-2 mb-5">
          {tag}
        </div>
        <div className="w-full flex-col gap-2.5 sm:flex-row sm:justify-end lg:justify-end flex pb-8">
          {btn1Link?.length > 0 && (
            <a
              href={btn1Link}
              className="inline-block rounded-lg mx-1 bg-primaryGreen px-4 py-2 xs:py-3 text-center text-sm font-semibold text-white ring-1 ring-white  transition duration-100 hover:bg-primaryGreenDark focus-visible:ring active:bg-accentDecoration md:text-base"
            >
              {btn1}
            </a>
          )}
          {btn2Link?.length > 0 && (
            <a
              href={btn2Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg mx-1 bg-white px-4 py-2 xs:py-3 text-center text-sm font-semibold text-primaryGreen ring-1 ring-white transition duration-100 hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base bg-black/50"
            >
              {btn2}
            </a>
            // <a href={Pdf} target="_blank" rel="noopener noreferrer">
            //       {lang === "en" ? "Our Menu" : "Unser Menü"}
            //     </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LirGridText;
