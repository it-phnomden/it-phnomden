import React from "react";
import { Link } from "react-router-dom";
import { bookInfo, quotes } from "./data/book";
import { Carousel } from "@material-tailwind/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import {} from "react-icons/ri";

import cover1 from "../../assets/books/qoutecover/pexels-jess-vide-5007008.jpg";
import cover2 from "../../assets/books/qoutecover/pexels-peggy-johnson-philip-waikoloa-867723-11718641.jpg";
import cover3 from "../../assets/books/qoutecover/pexels-pixabay-262325.jpg";
import cover4 from "../../assets/books/qoutecover/pexels-pixabay-416676.jpg";
const qouteCover = [cover1, cover2, cover3, cover4];

const BookStore = () => {
  return (
    <div data-aos="fade-right" data-aos-offset="100">
      <Carousel
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
        className="rounded-bl-md sm:h-80 h-40  rounded-br-md dark:bg-black dark:bg-opacity-20 bg-gray-900 bg-opacity-10"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {quotes.map((data, key) => (
          <span className="relative">
            <img
              key={key}
              src={qouteCover[Math.floor(Math.random() * qouteCover.length)]}
              alt="Not found"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-center
            sm:text-2xl text-[11px] dark:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] drop-shadow-[1px_1px_1px_rgba(255,255,255,1)]"
            >
              <p>{data.content}</p>
              <p className="flex items-center justify-center gap-2">
                <RiDoubleQuotesL />
                {data.author}
                <RiDoubleQuotesR />
              </p>
            </div>
          </span>
        ))}
      </Carousel>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 mt-3 w-full">
        {bookInfo.map((data, key) => (
          <div
            key={key}
            className="bg-gray-900 bg-opacity-10 dark:bg-black dark:bg-opacity-20
         rounded-2xl p-2 flex flex-col gap-1"
          >
            <img
              src={data.cover}
              alt="not found.png"
              className="w-fit object-contain rounded-lg"
            />
            <p className="font-bold sm:text-[16px] text-[11px]">{data.title}</p>
            <p className="opacity-50 sm:text-[16px] text-[11px]">{data.type}</p>
            <Link
              to="/it-phnomden/BookStoreDetail"
              state={data}
              class="dark:bg-black dark:bg-opacity-20 bg-white bg-opacity-20 rounded-lg px-4 sm:py-2 py-[7px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 border-[0.5px] border-transparent hover:border-white hover: active:scale-105 active:duration-100"
            >
              <span class="ease absolute right-0 -mt-12 h-72 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-500 group-hover:-translate-x-64"></span>
              Get
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookStore;
