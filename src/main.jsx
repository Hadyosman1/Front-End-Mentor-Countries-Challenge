import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./store/ThemeProvider.jsx";
import CountriesProvider from "./store/CountriesProvider.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./components/MainContent.jsx";
import SingleCountry from "./components/SingleCountry.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainContent />,
      },
      {
        path: "single-country/:name",
        element: <SingleCountry />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  </ThemeProvider>
);
