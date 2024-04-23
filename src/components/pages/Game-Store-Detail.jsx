import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import YoutubeEmbed from "../YoutubeEmbed";

const GameStoreDetail = () => {
  const location = useLocation();
  const gameInfo = location.state;
  return (
    <div
      className="mt-20 p-2 w-full"
      data-aos="fade-down"
      data-aos-offset="100"
    >
      <div
        className="bg-gray-900 bg-opacity-10 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-5 flex flex-col gap-3"
      >
        <YoutubeEmbed embedId={gameInfo.youtubeid} />
        <p className="font-bold text-xl sm:text-2xl">{gameInfo.title}</p>
        <p className="opacity-50 text-lg sm:text-xl">PC Game</p>
        <div
          className={`${
            gameInfo.passwd === null ? "hidden" : ""
          } flex flex-col gap-2`}
        >
          <pre>Password: {gameInfo.passwd}</pre>
          <Link
            to={gameInfo.mainlink}
            class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
          >
            Download link
          </Link>
          {gameInfo.updatelink && gameInfo.updatelink.trim() !== "" && (
            <Link
              to={gameInfo.updatelink}
              class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
            >
              DLC update link
            </Link>
          )}
          <pre>Password to extract: www.ovagames.com</pre>
        </div>
        <p
          className={`${
            gameInfo.passwd != null ? "hidden" : ""
          } text-red-600 font-bold`}
        >
          Link not yet available!
        </p>
      </div>
    </div>
  );
};

export default GameStoreDetail;
