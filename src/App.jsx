import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  console.log("App");
  return (
    <>
      <LanguageProvider>
        <HelmetProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </HelmetProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
