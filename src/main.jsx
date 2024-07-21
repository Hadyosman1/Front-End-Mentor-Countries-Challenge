import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./store/ThemeProvider.jsx";
import CountriesProvider from "./store/CountriesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CountriesProvider>
      <App />
    </CountriesProvider>
  </ThemeProvider>
);
