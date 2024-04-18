import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookStore from "./components/pages/Book-Store";
import GameStore from "./components/pages/Game-Store";
import PcProgramStore from "./components/pages/Pc-Program-Store";
import MusicCamp from "./components/pages/Music-Camp";
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
    <div className="max-w-screen-lg mx-auto min-h-screen flex flex-col justify-between items-center">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/it-phnomden" element={<Home />} />
          <Route path="/BookStore" element={<BookStore />} />
          <Route path="/GameStore" element={<GameStore />} />
          <Route path="/PcProgramStore" element={<PcProgramStore />} />
          <Route path="/MusicCamp" element={<MusicCamp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
