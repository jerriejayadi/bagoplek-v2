"use client";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Image from "next/image";
import { convertEmbeddedToDirectMapURL, LOCATION_LIST } from "@/lib/utils";
import Link from "next/link";
import { LocationProps } from "@/lib/utils";

interface GroupedLocations {
  [city: string]: LocationProps[];
}

export default function Location() {
  const groupedLocations: GroupedLocations = {};

  // Group locations by city
  LOCATION_LIST.forEach((location) => {
    if (!groupedLocations[location.city]) {
      groupedLocations[location.city] = [];
    }
    groupedLocations[location.city].push(location);
  });

  const scaledImages = ["/location/Sutami3.JPG"];

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
      <div className="p-6 md:p-20 flex flex-col gap-20">
        {Object.keys(groupedLocations).map((city) => {
          const cityLocations = groupedLocations[city];

          return (
            <div className="" key={city}>
              <h1 className="mb-4 font-heavitas text-text-themed text-2xl md:text-4xl text-center md:text-left">
                {city}
              </h1>
              <div
                className={`grid md:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-6 ${
                  Object.keys(groupedLocations).filter((rows) => rows === city)
                    .length > 3
                    ? "md:grid-cols-1"
                    : "md:grid-cols-"
                }`}
              >
                {cityLocations.map((rows, index) => (
                  <div
                    className="flex flex-col items-center"
                    key={`outlet-${index}`}
                  >
                    {/* <p className="mb-4 font-heavitas text-text-themed text-2xl md:text-4xl">
                      {rows.city}
                    </p> */}
                    <Link
                      href={convertEmbeddedToDirectMapURL(rows.embedUrl)}
                      target="_blank"
                      key={`location-${index}`}
                      className={`flex flex-col overflow-hidden flex-grow h-full bg-white rounded-sm md:rounded-3xl shadow-xl hover:shadow-primaryOrange/10 transition-all duration-300 hover:cursor-pointer `}
                    >
                      <div className="h-72 w-full overflow-hidden object-cover object-center">
                        <Image
                          className={`md:h-72 object-cover  object-center rounded-sm md:rounded-t-3xl ${
                            scaledImages.some(
                              (images) => images === rows.locationImage
                            ) && "object-[25%_65%]"
                          }`}
                          alt={``}
                          src={
                            rows.locationImage ||
                            `/images/partnership/partnership-1.jpeg`
                          }
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div
                        className={`px-2 py-4 md:p-6 text-center text-text-themed flex-grow  flex flex-col justify-between items-center`}
                      >
                        <h1
                          className={`text-base md:text-2xl font-heavitas text-primaryOrange align-middle `}
                        >
                          {rows.title}
                        </h1>
                        <div className="mt-4">
                          <p
                            className={`text-sm md:text-base font-barlow font-medium`}
                          >
                            {rows.address}
                          </p>
                          <p
                            className={`text-sm md:text-base font-barlow font-medium`}
                          >
                            {rows.phone}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div
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
      </div> */}
    </>
  );
}
