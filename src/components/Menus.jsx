import React from "react";
import game from "../assets/game.png"
import book from "../assets/book.png"
import music from "../assets/music.png"

const menus = [
  {
    id: 1,
    src: game,
    title: "PC GAME",
  },
  {
    id: 2,
    src: book,
    title: "BOOK STORE",
  },
  {
    id: 3,
    src: music,
    title: "MUSIC CAMP",
  }
]

const Menus = () => {
  return (
    <div name="menu" >
      <div>
        <div data-aos="fade-right" data-aos-offset="100"
          className="grid grid-cols-2 gap-2 md:grid-cols-5">
          {
            menus.map(({ id, src, title }) => (
              <div
                key={id}
                className={`dark:bg-white dark:bg-opacity-5 bg-black bg-opacity-5 rounded-2xl px-4 py-2  flex flex-col items-center`}>
                <img src={src} alt="html.png"
                  className="h-32 object-contain"
                />
                <p>{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default Menus;
