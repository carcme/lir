import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import helmetData from "@/json/helmetData";
import { useLanguage, getLanguage } from "../context/LanguageContext";

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const meta = getLanguage(helmetData);

  const onMapLoaded = () => {
    setMapLoaded(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet htmlAttributes={{ lang: useLanguage() }}>
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
        <section class="text-primaryGreen body-font relative">
          <div class="absolute inset-0 bg-gray-200 ">
            {!mapLoaded && (
              <h2 className="absolute text-4xl inset-0 top-[6%] md:right-[50%] lg:right-0 md:top-1/2 font-semibold justify-center text-center">
                Loading Map
              </h2>
            )}
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9710.926251435141!2d13.3340262!3d52.5201969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85109d53aa221%3A0x76f0488133aba72!2sThe%20Lir!5e0!3m2!1sen!2sde!4v1738666779264!5m2!1sen!2sde"
              onLoad={() => onMapLoaded()}
            ></iframe>
          </div>{" "}
          data-netlify="true"
          <form action="POST" method="POST" data-netlify="true">
            <div class="container px-5 py-24 mx-auto flex">
              <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                  Contact Us
                </h2>
                <p class="leading-relaxed text-sm text-gray-600">
                  Tuesday – Thursday: 16:30 – 00:00
                </p>
                <p class="leading-relaxed text-sm text-gray-600">
                  Friday & Saturday: 15:00 – 02:00
                </p>
                <p class="leading-relaxed text-sm text-gray-600">
                  Sunday: 15:00 – 23:30
                </p>
                <p class="leading-relaxed text-sm text-gray-600">
                  Monday: Closed
                </p>
                <div class="relative my-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-primaryGreen focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-primaryGreen focus:border-primaryGreen focus:ring-1 focus:ring-primaryGreen h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button
                  class="text-white bg-primaryGreen border py-2 px-6 focus:outline-none hover:bg-white hover:text-primaryGreen  border-primaryGreen rounded text-lg transition-colors duration-300 ease-in-out"
                  type="submit"
                >
                  Send
                </button>
                <p class="text-xs font-light text-gray-500 mt-3">
                  By clicking send you agree to the Website Privacy Policy and
                  Terms of Use.
                </p>
              </div>
            </div>
          </form>
        </section>
        <div className="pb-10"></div>
      </div>
    </>
  );
};

export default Contact;
