import React from "react";
import { Link } from "react-router-dom";
import { bookInfo, quotes } from "./data/book";
import { Carousel } from "@material-tailwind/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

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

const BookStore = () => {
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
      <div className="btn-group grid grid-cols-6 mb-1">
        <button className="col-span-3">General Knowledge</button>
        <button>ITs</button>
        <button className="col-span-2">Grade 12</button>
        <button className="col-span-2">Architecture</button>
        <button className="col-span-2">Grammars</button>
        <button className="col-span-2">History</button>
        <button className="col-span-2 rounded-bl-lg">Literature</button>
        <button>Novel</button>
        <button>Poem</button>
        <button className="rounded-br-lg col-span-2">Tale</button>
      </div>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6 w-full px-2 mt-2">
        {bookInfo.map((data, key) => (
          <div
            key={key}
            className="bg-gray-900 bg-opacity-10 dark:bg-black dark:bg-opacity-20
            rounded-lg flex flex-col"
          >
            <img
              src={data.cover}
              alt="not found.png"
              className="w-fit object-contain rounded-tl-md rounded-tr-md"
            />
            {/* <p className="font-bold sm:text-[16px] text-[11px]">{data.title}</p> */}
            {/* <p className="opacity-50 sm:text-[16px] text-[11px]">{data.type}</p> */}
            <Link
              to="/it-phnomden/BookStoreDetail"
              state={data}
              class="border-[1px] dark:border-gray-700 border-slate-600 rounded-bl-md rounded-br-md px-4 sm:py-2 py-[9px] flex flex-col items-center group relative overflow-hidden transition duration-700 ease-in-out dark:hover:bg-opacity-30 dark:hover:border-gray-600 hover:bg-opacity-30 hover: active:scale-105 active:duration-100"
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
