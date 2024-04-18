import React from "react";
import { FaRegHeart, FaDownload } from "react-icons/fa";
import got from "../../assets/games/Ghost-of-Tsushima.jpg";
import lop from "../../assets/games/Lies of P.jpg";
import hzd from "../../assets/games/Horizon-Zero-Dawn.jpg";
import hfw from "../../assets/games/Horizon-Forbidden-West.jpg";
import spm from "../../assets/games/Marvels Spider Man Miles Morales.jpg";
import gow from "../../assets/games/God of war.jpg";

const gameInfo = [
  {
    id: 1,
    cover: got,
    title: "Ghost of Tsushima",
    likeCount: 122,
    downCount: 24,
  },
  {
    id: 1,
    cover: lop,
    title: "Life of P",
    likeCount: 102,
    downCount: 76,
  },
  {
    id: 1,
    cover: hzd,
    title: "Horizon Zero Dawn",
    likeCount: 126,
    downCount: 98,
  },
  {
    id: 1,
    cover: hfw,
    title: "Horizon Forbidden West",
    likeCount: 322,
    downCount: 124,
  },
  {
    id: 1,
    cover: spm,
    title: "Spider Man Miles Morales",
    likeCount: 112,
    downCount: 86,
  },
  {
    id: 1,
    cover: gow,
    title: "God of war",
    likeCount: 132,
    downCount: 76,
  },
];

const GameStore = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="100"
      className="grid grid-cols-2 gap-2 md:grid-cols-4 w-full px-1 mt-20"
    >
      {gameInfo.map(({ id, cover, title, likeCount, downCount }) => (
        <div
          className="bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-10 p-3 
         rounded-lg flex flex-col items-center gap-1 relative"
        >
          <div className="relative">
            <p className="absolute bottom-0 text-white font-bold text-lg text-center w-full bg-black pt-1 bg-opacity-30 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              {title}
            </p>
            <img
              src={cover}
              alt="not found.png"
              className="sm:h-56 h-48 object-contain rounded-lg"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaRegHeart />
            <p>{likeCount}</p>
            <FaDownload />
            <p>{downCount}</p>
          </div>
          <button className="btn-primary text-white bg-opacity-10 rounded-2xl px-5 py-1">
            Download
          </button>
        </div>
      ))}
    </div>
  );
};

export default GameStore;
