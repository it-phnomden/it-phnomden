import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Menus from "./components/Menus";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({duration:1000,offset: 200,anchorPlacement: 'top-bottom'});
    AOS.refresh();
  }, []);
  return (
    <div className="h-screen">
      <NavBar />
      <Logo />
      <div className="max-w-screen-lg mx-auto px-5">
        <Menus />
      </div>
        <Footer />
    </div>
  );
};
export default App;
