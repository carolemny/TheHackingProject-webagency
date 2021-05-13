import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setTheme] = useState(() => {
    const settings = localStorage.getItem("settings");
    if (settings) {
      return JSON.parse(settings).themeMode;
    } else {
      return "light";
    }
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify({ themeMode: mode }));
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
