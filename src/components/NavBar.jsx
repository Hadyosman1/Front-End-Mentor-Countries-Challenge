import { useContext } from "react";
import { ThemeCotext } from "../store/ThemeProvider";

// eslint-disable-next-line react/prop-types
const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeCotext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav>
      <div className="container">
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}>
          <span>{theme === "dark" ? "🌙" : "☀️"}</span>
          {theme === "dark" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
