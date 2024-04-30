import React from "react";
import { Link } from "react-router-dom";
import { bookInfo, quotes } from "./data/book";
import { Carousel } from "@material-tailwind/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import comingSoon from "../../assets/coming-soon.png";

const quoteCover = [
  "https://images.unsplash.com/photo-1470019903270-8f285e50ddd9?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524756614325-ab25ba59e6e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1646733664215-8ed78bc93968?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1447798451861-0bc763df1c5e?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1610963566222-1837b2728b02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1603449139781-7c5de9d12393?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1545845408-d4f4d8365515?q=80&w=1850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
];

const BetterUp = () => {
  return (
    <div data-aos="fade-right" data-aos-offset="100">
      <Carousel
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
        className="relative sm:h-80 h-48"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-8 sm:bg-white bg-transparent"
                    : "w-4 sm:bg-white/50 bg-transparent"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {quotes.map((data, key) => (
          <span>
            <img
              key={key}
              src={quoteCover[Math.floor(Math.random() * quoteCover.length)]}
              alt="Not found"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute w-full h-full top-0 text-center flex flex-col items-center justify-center
            sm:text-2xl text-[11px]"
            >
              <p className="w-[70%] h-fit font-bold dark:drop-shadow-[0_0_1px_rgba(0,0,0,1)] drop-shadow-[0_0_1px_rgba(255,255,255,1)]">
                {data.content}
              </p>
              <p className="h-fit flex gap-2 font-bold dark:drop-shadow-[0_0_1px_rgba(0,0,0,1)] drop-shadow-[0_0_1px_rgba(255,255,255,1)]">
                <RiDoubleQuotesL />
                {data.author}
                <RiDoubleQuotesR />
              </p>
            </div>
          </span>
        ))}
      </Carousel>
      <div className="flex justify-center">
      <img data-aos="fade-right" data-aos-offset="100" src={comingSoon} alt="html.png" className="sm:h-56 h-48 object-contain" />
      </div>
    </div>
  );
};

export default BetterUp;
