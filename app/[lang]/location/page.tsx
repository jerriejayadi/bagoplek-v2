"use client";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Image from "next/image";
import { convertEmbeddedToDirectMapURL, LOCATION_LIST } from "@/lib/utils";
import Link from "next/link";

export default function Location() {
  return (
    <>
      {/* <Image
        alt=""
        src={`/images/product/thumbnail-2.jpg`}
        className={``}
        width={1920}
        height={1080}
      /> */}
      <div className={`mt-6 flex flex-col items-center justify-center`}>
        <h1 className={`font-heavitas text-text-themed text-lg md:text-5xl`}>
          FIND OUR{" "}
          <span
            className={`text-primaryOrange text-2xl md:text-[52px] md:leading-[64px]`}
          >
            OUTLETS
          </span>
        </h1>
      </div>
      <div
        className={`grid md:grid-cols-3 p-6 md:p-20 gap-x-6 gap-y-6 md:gap-y-40 `}
      >
        {LOCATION_LIST.map((rows, index) => (
          <div className="flex flex-col items-center" key={`outlet-${index}`}>
            <p className="mb-4 font-heavitas text-text-themed text-2xl md:text-4xl">
              {rows.city}
            </p>
            <Link
              href={convertEmbeddedToDirectMapURL(rows.embedUrl)}
              target="_blank"
              key={`location-${index}`}
              className={`flex flex-col flex-grow h-full bg-white rounded-sm md:rounded-3xl shadow-xl hover:shadow-primaryOrange/10 transition-all duration-300 hover:cursor-pointer `}
            >
              <Image
                className={`aspect-video md:h-72 object-cover rounded-sm md:rounded-t-3xl`}
                alt={``}
                src={
                  rows.locationImage || `/images/partnership/partnership-1.jpeg`
                }
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
                    {rows.phone}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
