import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menus from "./components/Menus";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, anchorPlacement: "top-bottom" });
    AOS.refresh();
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center mx-2">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/it-phnomden" element={<Home />} />
          <Route path="Menus" element={<Menus />} />
          {/* <Route path="Games" element={<Menus />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
