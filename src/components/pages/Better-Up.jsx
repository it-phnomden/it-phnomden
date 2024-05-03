import React from "react";
import { article } from "./data/article";
import { quotes, covers } from "./data/quote";
import { Carousel } from "@material-tailwind/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import comingSoon from "../../assets/coming-soon.png";

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
              src={covers[Math.floor(Math.random() * covers.length)]}
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
