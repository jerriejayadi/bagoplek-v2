"use client";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Image from "next/image";

export default function Location() {
  return (
    <>
      <Image
        alt=""
        src={`/images/product/thumbnail.jpeg`}
        className={``}
        width={1920}
        height={1080}
      />
      <div
        className={`mt-6 md:mt-20 flex flex-col items-center justify-center`}
      >
        <h1 className={`font-heavitas text-text-themed text-base md:text-5xl`}>
          FIND OUR{" "}
          <span
            className={`text-primaryOrange text-xl md:text-[52px] md:leading-[64px]`}
          >
            OUTLETS
          </span>
        </h1>
        <p
          className={`font-lato text-text-themed mt-2 text-[10px] md:text-xl tracking-[5%] font-medium`}
        >
          Find us in three different cities
        </p>
      </div>
      <div className={`grid md:grid-cols-3 p-6 md:p-20 `}>
        <div
          className={`flex flex-col bg-[#F5DD7D] rounded-sm md:rounded-3xl aspect-square `}
        >
          <Image
            className={`h-20 md:h-72 object-cover rounded-sm md:rounded-t-3xl aspect-square`}
            alt={``}
            src={`/images/partnership/partnership-1.jpeg`}
            width={1000}
            height={1000}
          />
          <div className={`p-2 md:p-10 text-center text-text-themed`}>
            <h1 className={`text-base md:text-2xl font-heavitas`}>
              Outlet{" "}
              <span className={`text-primaryOrange`}>Citraland Surabaya</span>
            </h1>
            <p className={`text-sm md:text-base font-barlow font-medium`}>
              Jl. Taman Puspa Raya, Surabaya
            </p>
            <p className={`text-sm md:text-base font-barlow font-medium`}>
              031 - 374918
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
}
