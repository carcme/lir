import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";

import {
  GlobalStateContext,
  getLanguage,
} from "../context/GlobalContextProvider";

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const globalState = useContext(GlobalStateContext);
  const meta = getLanguage(globalState.lang, helmetData);

  const onMapLoaded = () => {
    setMapLoaded(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: globalState.lang }}>
        <title>{meta.titleContact}</title>
        <meta name="description" content={meta.descContact} />
        <meta name="keywords" content={meta.keysContact} />
        <meta name="robots" content={meta.robots} />
        <meta name="charSet" content={meta.charset} />

        <meta name="og:image" content={meta.og.image} />
        <meta name="og:image:url" content={meta.og.imageUrl} />
        <meta name="og:image:width" content={meta.og.imageWidth} />
        <meta name="og:image:height" content={meta.og.imageHeight} />
        <meta name="og:image:alt" content={meta.og.imageAlt} />
        <meta name="og:description" content={meta.descHome} />
        <meta name="og:title" content={meta.og.title} />
        <meta name="og:site_name" content={meta.og.siteName} />

        <meta name="charSet" content={meta.charset} />
        <meta name="charSet" content={meta.charset} />
        <meta name="charSet" content={meta.charset} />

        <meta name="apple-mobile-web-app-capable" content={meta.apple} />
        <meta name="google" content={meta.google} />
      </Helmet>
      <div className="page">
        <section className="relative text-primaryGreen body-font">
          <div className="relative bg-white sm:absolute sm:inset-0">
            {!mapLoaded && (
              <h2 className="absolute text-4xl inset-0 top-[6%] md:right-[50%] lg:right-0 md:top-1/2 font-semibold text-primaryGreen justify-center text-center z-50">
                Loading Map
              </h2>
            )}
            <div className="bg-white iframe-wrapper">
              <iframe
                className="rounded-lg"
                width="100%"
                height="100%"
                title="The Lir Berlin"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9710.926251435141!2d13.3340262!3d52.5201969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85109d53aa221%3A0x76f0488133aba72!2sThe%20Lir!5e0!3m2!1sen!2sde!4v1738666779264!5m2!1sen!2sde"
                onLoad={() => onMapLoaded()}
              />
            </div>
          </div>

          <form
            name="contact"
            id="contact-form"
            method="POST"
            netlify="true"
            netlify-honeypot="bot-field"
          >
            <div className="container flex mx-auto sm:px-5 sm:py-24">
              <div className="flex relative z-10 flex-col p-4 mt-4 w-full rounded-lg shadow-md lg:w-1/3 md:w-1/2 bg-primaryGreen md:ml-auto md:mt-0">
                <h2 className="mb-1 text-lg font-medium text-white title-font">
                  {globalState.lang === "en" ? "Open Hours" : "TODO"}
                </h2>
                <p className="text-sm leading-relaxed text-white">
                  Tuesday – Thursday: 16:30 – 00:00
                </p>
                <p className="text-sm leading-relaxed text-white">
                  Friday & Saturday: 15:00 – 02:00
                </p>
                <p className="text-sm leading-relaxed text-white">
                  Sunday: 15:00 – 23:30
                </p>
                <p className="text-sm leading-relaxed text-white">
                  Monday: Closed
                </p>
                <div className="relative my-4">
                  <label
                    htmlFor="email"
                    className="text-sm leading-7 text-white"
                  >
                    Email
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="px-3 py-1 w-full text-base leading-8 text-gray-700 bg-white rounded border transition-colors duration-200 ease-in-out outline-none border-primaryGreen focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen"
                    />
                  </label>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="text-sm leading-7 text-white"
                  >
                    Message
                    <textarea
                      id="message"
                      type="text"
                      name="message"
                      className="px-3 py-1 w-full h-32 text-base leading-6 text-gray-700 bg-white rounded border transition-colors duration-200 ease-in-out outline-none resize-none border-primaryGreen focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen"
                    ></textarea>
                  </label>
                </div>
                <button
                  className="px-6 py-2 text-lg text-white rounded border border-white transition-colors duration-300 ease-in-out bg-primaryGreen focus:outline-none hover:bg-white hover:text-primaryGreen"
                  type="submit"
                  // disabled="true"
                >
                  Send
                </button>
                <p className="mt-3 text-xs font-light text-gray-300">
                  By clicking send you agree to the Website Privacy Policy and
                  Terms of Use.
                </p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
