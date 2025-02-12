import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";
import GlobalContextProvider from "./context/GlobalContextProvider";

function App() {
  console.log("App");
  return (
    <>
      <GlobalContextProvider>
        <LanguageProvider>
          <HelmetProvider>
            <Navbar />
            <Outlet />
            <Footer />
          </HelmetProvider>
        </LanguageProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
