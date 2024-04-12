import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Menus from "./components/Menus";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, anchorPlacement: "top-bottom" });
    AOS.refresh();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center mx-2">
      <NavBar />
      <div className="sm:mt-24 mt-16 flex flex-col items-center">
        <Logo />
        <Menus />
      </div>
      <Footer />
    </div>
  );
};
export default App;
