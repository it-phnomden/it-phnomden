import React from "react";
import { Link } from "react-router-dom";
import { gameInfo } from "./data/game";

const GameStore = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="100"
      className="grid grid-cols-2 gap-2 md:grid-cols-4 px-1 mt-20 w-full"
    >
      {gameInfo.map((data, key) => (
        <div
          key={key}
          className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-2 flex flex-col gap-1"
        >
          <img
            src={data.cover}
            alt="not found.png"
            className="h-fit object-contain rounded-lg"
          />
          <p className="font-bold sm:text-[16px] text-[11px]">{data.title}</p>
          <p className="opacity-50 sm:text-[16px] text-[11px]">PC Game</p>
          <Link
            to="/GameStoreDetail"  state= {data}
            class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
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
