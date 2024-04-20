import React from "react";
import { FaRegHeart, FaDownload } from "react-icons/fa";
import got from "../../assets/games/got.jpg";
import lop from "../../assets/games/lop.jpg";
import hzd from "../../assets/games/hzd.jpg";
import hfw from "../../assets/games/hfw.jpg";
import spm from "../../assets/games/spm.jpg";
import gow from "../../assets/games/gow.jpg";
import { Link } from "react-router-dom";

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
      className="grid grid-cols-2 gap-2 md:grid-cols-4 px-1 mt-20"
    >
      {gameInfo.map(({ id, cover, title, likeCount, downCount }) => (
        <div
          className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-4 flex flex-col gap-2"
        >
          <img
            src={cover}
            alt="not found.png"
            className="h-fit object-contain rounded-lg"
          />
          <p className="font-bold sm:text-[16px] text-[11px]">{title}</p>
          <p className="opacity-50 sm:text-[16px] text-[11px]">PC Game</p>
          <Link
            // to={page}
            class="dark:bg-black dark:bg-opacity-10 bg-white bg-opacity-10 rounded-lg px-4 py-2 flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out border-transparent border-2 hover:border-[#dadad9dd] dark:hover:border-gray-800 dark:hover:bg-opacity-20 hover:bg-opacity-25 active:scale-105 active:duration-100"
          >
            <span class="ease absolute right-0 -mt-12 h-72 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-500 group-hover:-translate-x-64"></span>
            Get
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GameStore;
