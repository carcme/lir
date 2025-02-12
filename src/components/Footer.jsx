import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { getLanguage, useLanguage } from "../context/LanguageContext";
import navData from "../data/navbarLinks";
import Pdf from "/assets/pdf/Menu.pdf";
import DirectionsImg from "/assets/directions2.webp";

export const Footer = () => {
  const lang = useLanguage();
  const text = getLanguage(navData);

  return (
    <div id="footer" className="relative h-full w-full bg-cover">
      <div className="animate-bgBlur bg-primaryGreen">
        <div className="relative z-10">
          <footer className="">
            <div className="container mx-auto px-5 py-24 md:px-8 lg:px-16">
              <div className="mx-auto flex flex-wrap text-left">
                <div className="px-8 pb-16 md:w-1/2 lg:w-1/3">
                  <h2 className="relative mb-10 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['01'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Our Address
                  </h2>
                  <div className="flex gap-4 pb-8 lg:justify-start">
                    <div className="flex gap-4">
                      {/* instagram */}
                      <Link
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
                      target="_blank"
                    >
                      <p className="mb-4 w-fit hover:text-white">
                        Flensburger Str. 7,
                        <br />
                        10557, Berlin
                      </p>
                    </Link>
                    <p className="mb-4 w-fit text-gray-200">
                      Email:
                      {/* <Link to={"#"} className="hover:text-gray-400"> */}
                      <a
                        href="mailto:info@thelir.de"
                        className="hover:text-white"
                      >
                        {" "}
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
                        className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-white hover:before:bg-white"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                    <li className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-white hover:before:bg-white">
                      <a href={Pdf} target="_blank" rel="noopener noreferrer">
                        {lang === "en" ? "Our Menu" : "Unser Menü"}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-8 lg:w-5/12">
                  <h2 className="relative mb-5 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-top-2 before:left-0 before:block before:text-[10px] before:font-normal before:content-['03'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Location
                  </h2>
                  <Link
                    to={"https://maps.app.goo.gl/AZEBrbXgjTQbpgFC7"}
                    target="_blank"
                  >
                    <img
                      src={DirectionsImg}
                      alt="Map of directions to The Lir pub berlin"
                      className="hover:scale-105 transition-all duration-300 rounded-lg hover:shadow-xl shadow-lg"
                    />
                  </Link>
                  {/* replace hidden with flex  */}

                  {/* add google map */}
                </div>
              </div>
            </div>
            <div className="bg-primaryGreen">
              <div className="container mx-auto flex flex-col items-center px-5 py-6 text-sm text-gray-400">
                <Link
                  to="https://www.hammer3.com"
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
