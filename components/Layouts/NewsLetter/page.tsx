"use client";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className={`w-full`}>
      <div className={`flex relative w-full `}>
        <Image
          alt={``}
          className={`w-full md:w-[597px] h-[480px] object-cover flex`}
          src={`/newsletter-bg-1.jpeg`}
          width={1000}
          height={1000}
        />
        <Image
          alt={``}
          className={`w-full h-[480px] object-cover hidden md:flex`}
          src={`/newsletter-bg-2.jpeg`}
          width={1000}
          height={1000}
        />
        <div className={`absolute w-full h-full bg-black/30 top-0 z-20`} />
        <div
          className={`absolute top-0 w-full h-full flex flex-col items-center justify-center z-30`}
        >
          <div className={`md:w-[458px] p-6`}>
            <p className={`font-heavitas text-white md:text-2xl`}>
              Want to <span className={`text-xl md:text-4xl`}>order & Further info?</span>
            </p>
            <p className={`text-white my-4`}>Hubungi kami melalui Whatsapp</p>

            <div
              onClick={() => {
                console.log("hello");
              }}
              className={`bg-[#FFDA48] hover:bg-opacity-90 w-full   hover:cursor-pointer text-text-themed  flex items-center gap-2 justify-between transition-all duration-150 rounded-[20px] `}
            >
              <div
                className={`flex text-start items-center md:text-xl gap-5 pl-4 md:pl-7 py-2 `}
              >
                <Image
                  className={`size-6 md:size-10`}
                  alt={``}
                  src={`/icons/logos_whatsapp_outlined.png`}
                  width={1000}
                  height={1000}
                />
                Chat 081242424543
              </div>

              <div
                className={`h-full bg-white p-3 text-primary rounded-r-[20px]`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className={` text-[#FFDA48] size-6 md:size-10`}
                >
                  <path
                    fill="currentColor"
                    className={`text-[#FFDA48]`}
                    d="M9.31 6.71a.996.996 0 0 0 0 1.41L13.19 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.72 6.7c-.38-.38-1.02-.38-1.41.01"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
