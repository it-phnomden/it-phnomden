import React from "react";
import { Link } from "react-router-dom";
import { bookInfo, quotes } from "./data/book";
import { Carousel } from "@material-tailwind/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import {} from "react-icons/ri";

import p1 from "../../assets/books/quoteCover/1.jpg";
import p2 from "../../assets/books/quoteCover/2.jpg";
import p3 from "../../assets/books/quoteCover/3.jpg";
import p4 from "../../assets/books/quoteCover/4.jpg";
import p5 from "../../assets/books/quoteCover/5.jpg";
import p6 from "../../assets/books/quoteCover/6.jpg";
import p7 from "../../assets/books/quoteCover/7.jpg";
import p8 from "../../assets/books/quoteCover/8.jpg";
import p9 from "../../assets/books/quoteCover/9.jpg";
import p10 from "../../assets/books/quoteCover/10.jpg";
import p11 from "../../assets/books/quoteCover/11.jpg";
import p12 from "../../assets/books/quoteCover/12.jpg";
const quoteCover = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12
];

const BookStore = () => {
  return (
    <div data-aos="fade-right" data-aos-offset="100"
    className="p-2">
      <Carousel
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
        className="rounded-lg sm:h-80 h-48 dark:bg-black dark:bg-opacity-20 bg-gray-900 bg-opacity-10"
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
              src={quoteCover[Math.floor(Math.random() * quoteCover.length)]}
              alt="Not found"
              className="h-full w-full object-cover rounded-lg"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center
              sm:w-[60%] w-[70%]
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
