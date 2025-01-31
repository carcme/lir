import React, { useState, useRef } from "react";

const AnimatedPageSlider = ({ data }) => {
  const [currIndex, setCurrIndex] = useState(1);
  const listRef = useRef(null);

  const handleNext = () => {
    const index = currIndex < data.length - 1 ? currIndex + 1 : 0;
    setCurrIndex(index);
    showSlider("next");
  };
  const handlePrevious = () => {
    const index =
      currIndex <= data.length - 1 && currIndex > 0
        ? currIndex - 1
        : data.length - 1;
    setCurrIndex(index);
    showSlider("prev");
  };

  function showSlider(type, index) {
    const list = document.querySelector(".list");
    const arrSlides = list.querySelectorAll(".carousel .list .carouselitem");

    if (type === "next") {
      console.log("🚀 ~ beofer ~ listRef.current:", listRef.current);
      listRef.current.appendChild(arrSlides[0]);
      console.log("🚀 ~ after ~ listRef.current:", listRef.current);
    } else if (type === "prev") {
      listRef.current.prepend(arrSlides[arrSlides.length - 1]);
    }
  }

  return (
    <div className="carousel">
      <div className="list" ref={listRef}>
        {data.map((slide, i) => (
          <div
            key={i}
            className="carouselitem border-0 border-white rounded-lg"
            style={{
              backgroundImage: `url(${slide.url})`,
            }}
          >
            <div className="content">
              {/* <div className="hidden text-md text-primaryGreenLight lg:pt-5 pt-20 uppercase font-bold  opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards]">
                {slide.tag}
              </div> */}
              <div className="lg:text-5xl text-2xl pt-20 lg:pt-8 uppercase font-bold text-white opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards]">
                {slide.name}
              </div>
              <div className="lg:text-md text-sm opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards] mt-2.5 mb-2">
                {slide.desc.map((desc, i) => (
                  <p className="font-serif p-2" key={i}>
                    {desc}
                  </p>
                ))}
              </div>
              <div className="lg:text-lg text-green-400 text-sm opacity-0 animate-[blurScale_700ms_ease-in-out_300ms_1_forwards] ml-2 mb-5">
                {slide.tag}
              </div>
              {/* <div className="opacity-0 animate-[blurScale_500ms_ease-in-out_0.5s_1_forwards] ml-1 "> */}
              <div className=" w-full opacity-0 flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start animate-[blurScale_700ms_ease-in-out_300ms_1_forwards] hidden sm:flex ">
                {slide.btn1Link.length > 0 && (
                  <a
                    href={slide.btn1Link}
                    className="inline-block rounded-lg sm:bg-primaryGreen px-4 py-3 text-center text-sm font-semibold text-white ring-0 ring-white  transition duration-100 hover:bg-primaryGreenDark focus-visible:ring active:bg-accentDecoration md:text-base bg-black/50"
                  >
                    {slide.btn1}
                  </a>
                )}
                {slide.btn2Link.length > 0 && (
                  <a
                    href={slide.btn2Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg sm:bg-white px-4 py-3 text-center text-sm font-semibold text-white sm:text-primaryGreen ring-0 ring-white transition duration-100 hover:bg-primaryGreen hover:text-white focus-visible:ring active:text-primaryGreen md:text-base bg-black/50"
                  >
                    {slide.btn2}
                  </a>
                  // <a href={Pdf} target="_blank" rel="noopener noreferrer">
                  //       {lang === "en" ? "Our Menu" : "Unser Menü"}
                  //     </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-10 w-[200px] max-w-[30%] flex gap-2.5 left-[5%] translate-y-[-20%] top-[90%]">
        <button
          className="w-14 h-14 bg-primaryGreen font-extrabold text-white text-base  transition-colors duration-300 cursor-pointer hover:bg-white hover:text-primaryGreen font-mono"
          onClick={handlePrevious}
        >
          &lt;
        </button>
        <button
          className="w-14 h-14 bg-primaryGreen font-extrabold text-white text-base  transition-colors duration-300 cursor-pointer hover:bg-white hover:text-primaryGreen font-mono"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AnimatedPageSlider;
