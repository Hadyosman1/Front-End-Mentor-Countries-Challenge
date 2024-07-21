/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeCotext = createContext();

const storedTheme = localStorage.getItem("theme");

const matchMedia = window.matchMedia("prefers-color-scheme: dark").matches
  ? "dark"
  : "light";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(storedTheme ? storedTheme : matchMedia);
  }, []);

  if (theme === "light") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.add("light");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.remove("light");
  }

  return (
    <ThemeCotext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCotext.Provider>
  );
};

export default ThemeProvider;
