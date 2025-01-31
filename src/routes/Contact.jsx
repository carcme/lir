import React, { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center w-full h-screen text-3xl font-bold text-center bg-neutral-700 text-neutral-300">
        Nothing Here yet
        {/* <button className="px-4 py-2 font-bold text-white bg-primaryGreen rounded hover:bg-primaryGreenDark">
          Does Nothing
        </button> */}
      </div>
    </>
  );
};

export default Contact;
