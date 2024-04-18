import React from "react";
import { FaRegHeart, FaDownload, FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import got from "../../assets/games/Lies of P.jpg";

const GameStore = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="100"
      className="grid grid-cols-2 gap-2 md:grid-cols-4 w-full px-1 mt-20"
    >
      <div
        className="bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 p-3 
      rounded-lg flex flex-col items-center gap-1 relative"
      >
        <p className="absolute sm:top-36 top-32 bg-black font-bold text-xl p-4 rounded-lg bg-opacity-70 text-yellow-500">Life of P</p>
        <img
          src={got}
          alt="html.png"
          className="sm:h-56 h-48 object-contain rounded-lg"
        />
        <div className="flex items-center gap-2">
          <FaRegHeart />
          <p>124</p>
          <FaDownload />
          <p>67</p>
        </div>
        <button className="btn-primary text-white bg-opacity-10 rounded-2xl px-5 py-1">
          Download
        </button>
      </div>{" "}
    </div>
  );
};

export default GameStore;
