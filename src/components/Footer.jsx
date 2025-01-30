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
import Pdf from "../assets/Menu.pdf";

import navData from "../data/navbarLinks";
import { getLanguage, useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const lang = useLanguage();
  const text = getLanguage(navData);

  const onMapLoaded = () => {
    setMapLoaded(true);
  };

  return (
    <div id="footer" className="relative h-full w-full bg-cover">
      <div className="animate-bgBlur bg-primaryGreen">
        <div className="relative z-10">
          <footer className="">
            <div className="container mx-auto px-5 py-24 md:px-8 lg:px-16">
              <div className="mx-auto flex flex-wrap text-left">
                <div className="px-8 pb-16 md:w-1/2 lg:w-1/3">
                  <h2 className="hover-diagonal-line before:font-Jost relative mb-10 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['01'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Our Address
                  </h2>
                  <div className="font-Jost text-[14px] leading-6 tracking-widest text-white">
                    <Link
                      to={"https://maps.app.goo.gl/AZEBrbXgjTQbpgFC7"}
                      target="_blank"
                    >
                      <p className="mb-4 w-fit hover:text-gray-400">
                        Flensburger Str. 7,
                        <br />
                        10557,
                        <br />
                        Berlin
                      </p>
                    </Link>
                    <p>
                      Email:
                      <Link to="/contact" className="hover:text-gray-400">
                        {/* <a
                        href="mailto:hammer@hammer3.com"
                        className="text-white"
                        > */}
                        Use Contact Form
                        {/* </a> */}
                      </Link>
                      {/* <br />
                      <Link to={"tel:+4917634398803"}>
                        Tel:
                        <span className="text-white">+49 176 3439 8803</span>
                      </Link> */}
                    </p>
                  </div>
                </div>

                <div className="w-1/2 px-8 lg:w-1/4">
                  <h2 className="before:font-Jost relative mb-8 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-left-0 before:-top-2 before:block before:text-[10px] before:font-normal before:content-['02'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Useful Links
                  </h2>
                  <ul className="font-Jost mb-10 list-none text-[12px] leading-6 tracking-[3px] text-white">
                    {text.map((item, index) => (
                      <li
                        key={index}
                        className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-gray-400 hover:before:bg-gray-400"
                      >
                        <Link to={item.path}>{item.text}</Link>
                      </li>
                    ))}
                    <li className="relative ml-2 translate-x-[-5px] cursor-pointer py-1.5 uppercase duration-200 before:absolute before:-left-5 before:top-[14px] before:block before:h-1.5 before:w-1.5 before:rounded-full before:bg-transparent before:font-normal before:transition-all before:duration-200 before:content-[''] hover:text-gray-400 hover:before:bg-gray-400">
                      <a href={Pdf} target="_blank" rel="noopener noreferrer">
                        {lang === "en" ? "Our Menu" : "Unser Menü"}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-8 lg:w-5/12">
                  <h2 className="hover-diagonal-line before:font-Jost relative mb-5 pt-8 text-[18px] font-semibold tracking-widest text-white before:absolute before:-top-2 before:left-0 before:block before:text-[10px] before:font-normal before:content-['03'] after:absolute after:left-6 after:top-1 after:block after:h-0.5 after:w-6 after:overflow-hidden after:bg-white">
                    Location
                  </h2>
                  {/* replace hidden with flex  */}
                  <div className="hidden  items-center justify-center gap-4 pb-8 lg:justify-start">
                    <div className="flex gap-4">
                      {/* instagram */}
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="hover:text-primaryGreen"></span>
                        <FaInstagram
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* twitter */}
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="inner"></span>
                        <FaTwitter
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="inner"></span>
                        <FaFacebook
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      <Link to="#" target="_blank" rel="noopener noreferrer">
                        <span className="inner"></span>
                        <FaYoutube
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* linkdin */}
                      <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-gray-600"
                      >
                        <span className="inner"></span>
                        <FaLinkedin
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                      {/* github */}
                      <Link
                        to="https://github.com/carcme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition duration-100 hover:text-primaryGreen active:text-primaryGreen"
                      >
                        <span className="inner"></span>
                        <FaGithub
                          size={20}
                          className="relative z-[1] cursor-pointer bg-transparent text-gray-400 transition-all hover:scale-110 hover:text-primaryGreen"
                        />
                      </Link>
                    </div>
                  </div>
                  {/* add google map */}

                  <Link
                    to={"https://maps.app.goo.gl/AZEBrbXgjTQbpgFC7"}
                    target="_blank"
                  >
                    <img
                      src="../assets/images/directions.jpg"
                      alt="Map of directions to The Lir pub berlin"
                    />
                  </Link>
                  {/* <iframe
                    className={`${mapLoaded ? "visible" : "invisible"}`}
                    title="The Lir"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9710.721435924757!2d13.334026201039054!3d52.520196911637534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85109d53aa221%3A0x76f0488133aba72!2sThe%20Lir!5e0!3m2!1sde!2sde!4v1738233858069!5m2!1sde!2sde"
                    width="250"
                    height="150"
                    loading="lazy"
                    referrerPolicy="noReferrerWhenDowngrade"
                    style={{
                      filter: "grayscale(0) contrast(1) invert(0%)",
                    }}
                    onLoad={() => onMapLoaded()}
                  ></iframe> */}
                </div>
              </div>
            </div>
            <div className="bg-primaryGreen">
              <div className="container mx-auto flex flex-col items-center px-5 py-6 text-sm text-almostWhite">
                <Link
                  to="https://www.hammer3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    © <span className="hover:text-gray-500">Hammer3 </span> 2024
                    | All Rights Reserved
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
