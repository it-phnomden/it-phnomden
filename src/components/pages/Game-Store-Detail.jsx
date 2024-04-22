import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const GameStoreDetail = () => {
  const location = useLocation();
  const gameInfo = location.state;
  return (
    <div className="mt-20 p-2" data-aos="fade-down" data-aos-offset="100">
      <div
        className="bg-gray-900 bg-opacity-10 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-5 flex flex-col gap-3"
      >
        <img
          src={gameInfo.cover}
          alt="not found.png"
          className="h-fit object-contain rounded-lg"
        />
        <p className="font-bold text-lg sm:text-xl">{gameInfo.title}</p>
        <p className="opacity-50 sm:text-[16px] text-[11px]">PC Game</p>
        <pre>Password: {gameInfo.passwd}</pre>
        <Link
          to={gameInfo.mainlink}
          class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
        >
          Main game link
        </Link>
        {gameInfo.updatelink && gameInfo.updatelink.trim() !== "" && (
          <Link
            to={gameInfo.updatelink}
            class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
          >
            Update link
          </Link>
        )}
        <pre>Password to extract: www.ovagames.com</pre>
      </div>
    </div>
  );
};

export default GameStoreDetail;
