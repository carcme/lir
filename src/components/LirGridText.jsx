import React from "react";

const LirGridText = ({ name, tag, desc, btn1, btn2, btn1Link, btn2Link }) => {
  return (
    <div>
      <div className="md:mx4 mx-8  justify-center md:items-start items-center flex flex-col">
        <div className="lg:text-5xl text-2xl pt-12 xs:pt-20 lg:pt-8 uppercase font-bold text-white text-center">
          {name}
        </div>
        <div className="lg:text-md text-lg text-justify my-3 text-white">
          {desc.map((text, i) => (
            <p className="font-serif p-2" key={i}>
              {text}
            </p>
          ))}
        </div>
        <div className="text-lg text-gray-200 mx-2 group-hover:grayscale-0 mb-5">
          {tag}
        </div>
        <div className="px-2 w-full flex-col gap-2.5 sm:flex-row sm:justify-start lg:justify-start flex">
          {btn1Link?.length > 0 && (
            <a
              href={btn1Link}
              className="inline-block rounded-lg bg-primaryGreen px-4 py-1 xs:py-3 text-center text-sm font-semibold text-white ring-1 ring-white  transition duration-100 hover:bg-primaryGreenDark focus-visible:ring active:bg-accentDecoration md:text-base"
            >
              {btn1}
            </a>
          )}
          {btn2Link?.length > 0 && (
            <a
              href={btn2Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-4 py-1 xs:py-3 text-center text-sm font-semibold text-primaryGreen ring-1 ring-white transition duration-100 hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base bg-black/50"
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
