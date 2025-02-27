import React from "react";
import { Link, useLocation } from "react-router-dom";

const LirGridText = ({
  orientation,
  name,
  tag,
  desc,
  btn1,
  btn2,
  btn1Link,
  btn2Link,
}) => {
  return (
    <>
      <div
        className={`flex flex-col bg-primaryGreenDark justify-center items-center mx-auto w- max-w-4xl  ${
          orientation === "center"
            ? "mt-0 border-t border-x px-2 border-white/50 rounded-t-xl"
            : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-5xl text-center text-white">
          <div
            className={`pt-5 text-2xl font-bold uppercase lg:text-5xl lg:pb-4`}
          >
            {name}
          </div>
          <div className="mx-2 text-sm text-justify text-white sm:mx-10 lg:text-md">
            {desc.map((text, i) => (
              <p
                // className={`py-2 max-w-5xl leading-5`}
                className={`py-2 leading-5  testclass ${
                  orientation === "right" && desc.length > 2
                    ? "sm:pl-24"
                    : orientation === "right" && desc.length <= 2
                      ? "sm:pl-20"
                      : ""
                }`}
                // style={{ marginLeft: (i + 1) * 38 + "px" }}
                key={i}
              >
                {text}
              </p>
            ))}
          </div>
          <div
            className={`mt-2 mx-10 w-full mb-5  text-center text-xl text-white capitalize ${
              orientation === "center" ? "" : "sm:text-right sm:mr-10"
            }`}
          >
            {tag}
          </div>
        </div>
        <div className="w-full flex-col gap-2.5 sm:flex-row  sm:mr-10 sm:justify-end lg:justify-end flex pb-8">
          {btn1Link?.length > 0 && (
            <Link
              to={btn1Link}
              state={"home"}
              className="inline-block px-4 py-2 mx-1 text-sm font-semibold text-center text-white transition duration-100 rounded-lg ring-1 ring-white bg-primaryGreen xs:py-3 hover:bg-primaryGreenDark focus-visible:ring active:bg-accentDecoration md:text-base"
              aria-label={btn1}
            >
              {btn1}
            </Link>
          )}
          {btn2Link?.length > 0 && (
            <Link
              to={btn2Link}
              state={"home"}
              aria-label={btn2}
              className="inline-block px-4 py-2 mx-1 text-sm font-semibold text-center transition duration-100 bg-white rounded-lg ring-1 ring-white xs:py-3 text-primaryGreen hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base bg-black/50"
            >
              {btn2}
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default LirGridText;
