import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookStore from "./components/pages/Book-Store";
import GameStore from "./components/pages/Game-Store";
import GameStoreDetail from "./components/pages/Game-Store-Detail";
import PcProgramStore from "./components/pages/Pc-Program-Store";
import MusicCamp from "./components/pages/Better-Up";
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
          <Route path="/it-phnomden/BookStore" element={<BookStore />} />
          <Route path="/it-phnomden/GameStore" element={<GameStore />} />
          <Route path="/it-phnomden/PcProgramStore" element={<PcProgramStore />} />
          <Route path="/it-phnomden/BetterUp" element={<MusicCamp />} />
          <Route path="/it-phnomden/GameStoreDetail" element={<GameStoreDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
