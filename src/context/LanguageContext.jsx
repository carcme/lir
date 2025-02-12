import React, { createContext, useState } from "react";

const LanguageContext = createContext();
const LanguageChangeContext = createContext();

export function getLanguage(script) {
  const language = React.useContext(LanguageContext);
  return language === "en" ? script.en : script.de;
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}

export function useLanguageChange() {
  return React.useContext(LanguageChangeContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [showWelcome, setShowWelcome] = useState(true);

  function changeLanguage() {
    setLanguage(language === "en" ? "de" : "en");
  }

  function shownWelcome() {
    setShowWelcome(false);
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageChangeContext.Provider value={(changeLanguage, shownWelcome)}>
        {children}
      </LanguageChangeContext.Provider>
    </LanguageContext.Provider>
  );
}
