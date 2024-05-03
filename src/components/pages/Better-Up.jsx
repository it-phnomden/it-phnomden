import React from "react";
import { articles } from "./data/article";
import { quotes } from "./data/quote";
import { Carousel } from "@material-tailwind/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

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
              src={data.cover}
              alt={data.cover}
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
      <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-4 mt-3 w-full">
        {articles.map((data, key) => (
          <div
            key={key}
            className="bg-gray-900 bg-opacity-10 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-2 flex flex-col gap-1"
          >
            <img
              src={data.imgcoverlink}
              alt={data.imgcoverlink}
              className="h-36 w-full object-contain rounded-lg bg-black"
            />
            <div className="flex flex-col justify-center h-32">
              <p className="font-bold sm:text-[16px] text-[11px] h-fit">{data.title} </p>
              <p className="sm:text-[16px] text-[11px]">Type: {data.type}</p>
              <p className="opacity-50 sm:text-[13px] text-[10px]">{data.readduration}</p>
            </div>
            <a
              href={data.articlelink}
              class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
            >
              <span class="ease absolute right-0 -mt-12 h-72 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-500 group-hover:-translate-x-64"></span>
              Read
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetterUp;
