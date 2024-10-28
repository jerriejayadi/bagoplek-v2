"use client";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Image from "next/image";
import { LOCATION_LIST } from "../page";

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
      <div className={`grid md:grid-cols-3 p-6 md:p-20 gap-6 `}>
        {LOCATION_LIST.map((rows, index) => (
          <div
            key={`location-${index}`}
            className={`flex flex-col bg-white rounded-sm md:rounded-3xl shadow-xl `}
          >
            <Image
              className={`aspect-video md:h-72 object-cover rounded-sm md:rounded-t-3xl`}
              alt={``}
              src={`/images/partnership/partnership-1.jpeg`}
              width={1000}
              height={1000}
            />
            <div
              className={`px-2 py-4 md:p-6 text-center text-text-themed flex-grow  flex flex-col justify-between items-center`}
            >
              <h1
                className={`text-base md:text-2xl font-heavitas text-primaryOrange align-middle `}
              >
                {rows.title}
              </h1>
              <div className="mt-4">
                <p className={`text-sm md:text-base font-barlow font-medium`}>
                  {rows.address}
                </p>
                <p className={`text-sm md:text-base font-barlow font-medium`}>
                  031 - 374918
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Newsletter />
    </>
  );
}
