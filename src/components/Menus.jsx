import React from "react";
import game from "../assets/game.png";
import book from "../assets/book.png";
import music from "../assets/music.png";
import program from "../assets/program.png";
import { Link } from "react-router-dom";

const menus = [
  {
    id: 1,
    src: book,
    title: "BOOK STORE",
  },
  {
    id: 2,
    src: game,
    title: "PC GAME",
  },
  {
    id: 3,
    src: program,
    title: "PC PROGRAM",
  },

  {
    id: 4,
    src: music,
    title: "MUSIC CAMP",
  },
];

const Menus = () => {
  return (
    <div name="menu">
      <div>
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          className="grid grid-cols-2 gap-2 md:grid-cols-5"
        >
          {menus.map(({ id, src, title }) => (
            <Link to="/Menus" class="bg-white bg-opacity-5 rounded-2xl px-4 py-2 flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out border-transparent border-2 hover:border-white dark:hover:bg-opacity-20 hover:bg-opacity-25 active:scale-105 active:duration-100">
              <span class="ease absolute right-0 -mt-12 h-72 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-500 group-hover:-translate-x-64"></span>
              <span class="relative">
                <img src={src} alt="html.png" className="h-32 object-contain" />
                <p>{title}</p>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Menus;
