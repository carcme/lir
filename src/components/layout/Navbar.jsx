import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { FaEnvelope } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import Logo from "../../assets/logo/lirLogo.svg";
import navlinks from "../../data/navbarLinks";
import useScrollPosition from "../../hooks/useScrollPosition";

import {
  GlobalStateContext,
  getLanguage,
} from "../../context/GlobalContextProvider";
import LangBtn from "./langBtn";

const Navbar = () => {
  const globalState = useContext(GlobalStateContext);
  const navbarTexts = getLanguage(globalState.lang, navlinks);
  const [isOpen, setOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={`flex fixed justify-between items-center h-20 xl:px-40 mx-auto px-2 text-white 
       top-0 z-50 w-full transition-colors ease-in-out duration-700
      ${scrollPosition < 100 ? "bg-primaryGreen" : "bg-primaryGreen/90"} ${
        isOpen ? "bg-primaryGreenDark" : ""
      } `}
    >
      {/* Logo */}
      <Link to="/" className="z-50 pl-4 sm:pl-12">
        <img
          src={Logo}
          aria-label="logo/Home"
          alt="The Lir Berlin Logo"
          className="w-16 h-16"
        />
      </Link>
      {/* Desktop Navigation */}

      <ul className="hidden ml-8 text-white md:flex">
        {navbarTexts.map((item, index) => (
          <li key={index} className="px-4 mx-2 capitalize cursor-pointer">
            <NavLink
              to={item.path}
              aria-label={item.text}
              className={({ isActive }) =>
                isActive
                  ? "relative before:absolute before:-left-0 before:-top-2 before:block before:border before:border-white before:w-full before:content-['']"
                  : "text-slate-300"
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        id="big-nav-buttons"
        className="flex flex-grow justify-end px-2 text-white md:flex-grow-0"
      >
        <div className="items-end space-x-2 sm:space-x-6">
          <LangBtn clsName="z-50 cursor-pointer px-2" />
          <Link to="/sports" aria-label="sports">
            <button
              tabIndex={-1}
              className="p-3 bg-transparent rounded-full border-2 transition duration-300 hover:bg-primaryGreenDark border-primaryGreenDark hover:cursor-pointer"
            >
              <PiTelevisionSimpleBold size={16} color="#eee" />
            </button>
          </Link>

          <Link to="/contact">
            <button
              tabIndex={-1}
              className="p-3 rounded-full border-2 transition duration-300 bg-primaryGreenDark hover:bg-primaryGreenDark/20 border-primaryGreenDark hover:cursor-pointer"
              aria-label="Contact"
            >
              {/* disabled text is tooltip */}
              {/* <div className="has-tooltip">
                <span className="p-1 -mb-20 -ml-28 bg-gray-300 rounded shadow-lg tooltip text-primaryGreen">
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
        <Hamburger
          toggled={isOpen}
          arial-label="Open menu"
          aria-expanded={isOpen}
          toggle={setOpen}
          color="#eee"
          size={20}
        />
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
        {navbarTexts.map((item, index) => (
          <NavLink
            to={item.path}
            aria-label={item.text}
            key={index}
            className={({ isActive }) =>
              isActive ? " text-white " : "text-gray-400"
            }
            onClick={() => setOpen(false)}
          >
            <li className="z-50 p-4 border-b duration-300 cursor-pointer border-primaryGreen hover:border-gray-400 hover:font-extrabold hover:text-white">
              {item.text}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
