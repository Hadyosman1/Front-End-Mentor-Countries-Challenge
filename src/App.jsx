import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTopBtn from "./components/ScrollToTopBtn";

function App() {
  return (
    <>
      <ScrollToTopBtn />
      <NavBar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}

export default App;
