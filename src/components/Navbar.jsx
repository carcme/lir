import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { FaEnvelope } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import Logo from "../assets/logo/lirLogo.svg";
import LinksData from "../data/navbarLinks";
import useScrollPosition from "../hooks/useScrollPosition";
import {
  getLanguage,
  useLanguage,
  useLanguageChange,
} from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  const language = useLanguage();
  const changeLanguage = useLanguageChange();
  const navbarLinks = getLanguage(LinksData);

  const langClicked = () => {
    setOpen(false);
    changeLanguage();
  };

  return (
    <div
      className={`flex fixed justify-between items-center h-20 xl:px-40 mx-auto px-2 text-white 
       top-0 z-50 w-full transition-colors ease-in-out duration-700
      ${scrollPosition < 100 ? "bg-primaryGreen" : "bg-primaryGreen/90"} ${
        isOpen ? "bg-primaryGreenDark" : ""
      } `}
    >
      {/* Logo */}
      <Link to="/" className="pl-4 sm:pl-12 z-50">
        <img src={Logo} alt="The Lir Berlin Logo" className="h-16 w-16" />
      </Link>
      {/* Desktop Navigation */}
      <button
        className="ml-10 hidden transition duration-300 hover:cursor-pointer md:flex"
        aria-label="language"
        onClick={changeLanguage}
      >
        <span
          className={`fi fib py-[14px] ${
            language === "de" ? "fi-gb" : "fi-de"
          }`}
        ></span>
      </button>
      <ul className="hidden md:flex text-white">
        {navbarLinks.map((item, index) => (
          <li
            key={index}
            className="p-4 m-2 duration-300 cursor-pointer capitalize"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "relative text-white" : "relative"
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex justify-end flex-grow px-4 mb-4 text-white"
      >
        <div className="items-end mt-4 space-x-4">
          <Link to="/sports">
            <button
              className="bg-transparent hover:bg-primaryGreenDark border-primaryGreenDark border-2 p-3 rounded-full transition duration-300 hover:cursor-pointer"
              aria-label="Show mysteries"
            >
              <PiTelevisionSimpleBold size={16} color="#eee" />
            </button>
          </Link>

          <Link to="/contact">
            <button
              className="bg-primaryGreenDark hover:bg-primaryGreenDark/20 border-primaryGreenDark border-2 p-3 rounded-full transition duration-300 hover:cursor-pointer"
              aria-label="Contact"
            >
              {/* disabled text is tooltip */}
              {/* <div className="has-tooltip">
                <span className="tooltip rounded shadow-lg p-1 bg-gray-300 text-primaryGreen -mb-20 -ml-28">
                  Contact Us
                </span> */}
              <FaEnvelope size={16} color="#eee" />
              {/* </div> */}
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation Icon */}
      <div className="block transition duration-700 ease-in-out md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#eee" size={20} />
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={`top-[80px] md:hidden left-0 w-[60%] p-10 bg-primaryGreen text-white fixed
           h-full z-50 ease-in-out duration-700 
        ${
          isOpen
            ? "translate-x-0 bg-primaryGreenDark"
            : "-translate-x-full bg-transparent"
        }`}
      >
        {/* Mobile Navigation Items */}
        {navbarLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive ? " text-white " : "text-gray-400"
            }
            onClick={() => setOpen(false)}
          >
            <li className="z-50 p-4 duration-300 border-b border-primaryGreen  cursor-pointer hover:border-gray-400 hover:font-extrabold hover:text-white ">
              {item.text}
            </li>
          </NavLink>
        ))}
        <button
          className="z-50 cursor-pointer p-4 duration-300"
          aria-label="language"
          onClick={langClicked}
        >
          {language === "de" && <span className="fi fi-gb fib"></span>}
          {language === "en" && <span className="fi fi-de fib"></span>}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
