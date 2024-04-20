import React from "react";
import { useLocation } from "react-router-dom";

const GameStoreDetail = (props) => {
  const location = useLocation();
  const gameInfo = location.state;
  return (
    <div className="mt-20">
      <div
        className="bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-2 flex flex-col gap-1"
      >
        <img
          src={gameInfo.cover}
          alt="not found.png"
          className="h-fit object-contain rounded-lg"
        />
        <p className="font-bold sm:text-[16px] text-[11px]">{gameInfo.title}</p>
        <p className="opacity-50 sm:text-[16px] text-[11px]">PC Game</p>
      </div>
    </div>
  );
};

export default GameStoreDetail;
