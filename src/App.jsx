import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HelmetProvider } from "react-helmet-async";
import GlobalContextProvider from "./context/GlobalContextProvider";
import { getMenus } from "./lib/contentful";

function App() {
  console.log("App");
  // const { menus, isLoading, error, fetchMenus } = useLirMenuStore();

  useEffect(() => {
    getMenus();
  }, []);
  return (
    <>
      <GlobalContextProvider>
        <HelmetProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </HelmetProvider>
      </GlobalContextProvider>
    </>
  );
}

export default App;
