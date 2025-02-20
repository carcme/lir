import React from "react";
import cn from "@/lib/cn";

const LirGridText = ({ name, tag, desc, btn1, btn2, btn1Link, btn2Link }) => {
  const paragraphs = desc.length;
  console.log("🚀 ~ LirGridText ~ paragraphs:", paragraphs);

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-4 md:mx8 md:items-end">
        <div className="pt-1 w-full text-2xl font-bold text-center text-white uppercase lg:text-5xl lg:pb-10 xs:pt-5 lg:text-left lg:pl-9">
          {name}
        </div>
        <div className="text-sm text-justify text-white lg:text-md">
          {desc.map((text, i) => (
            <p
              className={`py-2 leading-5 sm:pl-16 testclass ${
                paragraphs > 2 ? "sm:pl-24" : "sm:pl-20"
              }`}
              // style={{ marginLeft: (i + 1) * 38 + "px" }}
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="justify-end mt-2 mb-5 text-xl text-center text-white">
          {tag}
        </div>
        <div className="w-full flex-col gap-2.5 sm:flex-row sm:justify-end lg:justify-end flex pb-8">
          {btn1Link?.length > 0 && (
            <a
              href={btn1Link}
              className="inline-block px-4 py-2 mx-1 text-sm font-semibold text-center text-white rounded-lg ring-1 ring-white transition duration-100 bg-primaryGreen xs:py-3 hover:bg-primaryGreenDark focus-visible:ring active:bg-accentDecoration md:text-base"
            >
              {btn1}
            </a>
          )}
          {btn2Link?.length > 0 && (
            <a
              href={btn2Link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mx-1 text-sm font-semibold text-center bg-white rounded-lg ring-1 ring-white transition duration-100 xs:py-3 text-primaryGreen hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base bg-black/50"
            >
              {btn2}
            </a>
            // <a href={Pdf} target="_blank" rel="noopener noreferrer">
            //       {lang === "en" ? "Our Menu" : "Unser Menü"}
            //     </a>
          )}
        </div>
      </div>
    </>
  );
};

export default LirGridText;
