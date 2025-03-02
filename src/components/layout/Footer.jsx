import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  // FaTwitter,
  FaInstagram,
  // FaYoutube,
  // FaLinkedin,
  // FaGithub,
} from "react-icons/fa";

import navData from "../../data/navbarLinks";
import Pdf from "/assets/pdf/Menu.pdf";

import srcsetDirections from "/assets/directions2.webp?w=200;300;400&as=srcset";
// import {
//   src as Directions,
//   width as wDirections,
//   height as hDirections,
// } from "/assets/directions2.webp?w=200&format=webp&as=metadata";

import { img as fallback } from "/assets/directions2.webp?w=400&as=picture";

import {
  GlobalStateContext,
  getLanguage,
} from "../../context/GlobalContextProvider";
import { useLirMenuStore } from "../../store";

export const Footer = () => {
  const { lirDocs } = useLirMenuStore();
  const menuDoc = lirDocs.find((doc) => doc.type === "menu");

  const globalState = useContext(GlobalStateContext);
  const text = getLanguage(globalState.lang, navData);

  return (
    <div id="footer" className="relative w-full h-full bg-cover">
      <div className="animate-bgBlur bg-primaryGreen">
        <div className="relative z-10">
          <footer className="">
            <div className="container px-5 py-24 mx-auto md:px-8 lg:px-16">
              <div className="flex flex-wrap mx-auto text-left">
                <div className="px-8 pb-16 md:w-1/2 lg:w-1/3">
                  <h2 className="relative mb-10 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['01'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Our Address
                  </h2>
                  <div className="flex gap-4 pb-8 lg:justify-start">
                    <div className="flex gap-4">
                      {/* instagram */}
                      <Link
                        aria-label="instagram"
                        to="https://www.instagram.com/thelirberlin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="hover:text-primaryGreen"></span>
                        <FaInstagram
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-200 transition-all hover:scale-110 hover:text-white"
                        />
                      </Link>

                      <Link
                        to="https://www.facebook.com/irishpubberlin/"
                        target="_blank"
                        aria-label="facebook"
                        rel="noopener noreferrer"
                      >
                        <span className="inner"></span>
                        <FaFacebook
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-200  transition-all hover:scale-110 hover:text-white"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="text-[14px] leading-6 tracking-widest text-gray-200">
                    <Link
                      to={"https://maps.app.goo.gl/AZEBrbXgjTQbpgFC7"}
                      aria-label="address"
                      target="_blank"
                    >
                      <p className="mb-4 w-fit hover:text-white">
                        Flensburger Str. 7,
                        <br />
                        10557, Berlin
                      </p>
                    </Link>
                    <p className="mb-4 text-gray-200 w-fit">
                      Email:
                      {/* <Link to={"#"} className="hover:text-gray-400"> */}
                      <a
                        href="mailto:info@thelir.de"
                        aria-label="email"
                        className="hover:text-white"
                      >
                        Click Here
                      </a>
                      {/* </Link> */}
                      {/* <br />
                      <Link to={"tel:+4917634398803"}>
                        Tel:
                        <span className="text-white">+49 176 3439 8803</span>
                      </Link> */}
                    </p>
                  </div>
                </div>

                <div className="w-1/2 px-8 lg:w-1/4">
                  <h2 className="relative mb-8 pt-8 text-[18px] font-semibold tracking-widest text-white  before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['02'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Useful Links
                  </h2>
                  <ul className="mb-10 list-none text-[12px] leading-6 tracking-[3px] text-gray-300">
                    {text.map((item, index) => (
                      <li
                        key={index}
                        state={"footer"}
                        aria-label={item.text}
                        className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-white hover:before:bg-white"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                    <li className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-white hover:before:bg-white">
                      <a
                        href={menuDoc.doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="menu"
                      >
                        {globalState.lang === "en" ? "Our Menu" : "Unser Menü"}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-8 lg:w-5/12">
                  <h2 className="relative mb-5 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-top-2 before:left-0 before:block before:text-[10px] before:font-normal before:content-['03'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Location
                  </h2>
                  <Link
                    aria-label="map"
                    to={"https://maps.app.goo.gl/AZEBrbXgjTQbpgFC7"}
                    target="_blank"
                  >
                    <picture>
                      <source srcSet={srcsetDirections} type="image/webp" />
                      <img
                        src={fallback.src}
                        width={fallback.w}
                        height={fallback.h}
                        aria-label="directions to Us"
                        loading="lazy"
                        alt="Map of directions to The Lir pub berlin"
                        className="transition-all duration-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
                      />
                    </picture>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-primaryGreen">
              <div className="container flex flex-col items-center px-5 py-6 mx-auto text-sm text-gray-300">
                <Link
                  to="https://www.hammer3.com"
                  aria-label="hammer3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    © <span className="hover:text-white">Hammer3 </span> 2024 |
                    All Rights Reserved
                  </p>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
