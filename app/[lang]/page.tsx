"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LOCATION_LIST } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      <Image
        className={`md:-mt-28`}
        alt={``}
        src={`/images/landing-page.jpeg`}
        width={2000}
        height={2000}
      />
      <div className={`bg-[#FFFDF3]`}>
        <div
          className={`mt-6 md:mt-20 flex flex-col items-center justify-center`}
        >
          <h1
            className={`font-heavitas text-text-themed text-base md:text-5xl`}
          >
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
            We are Spreading Around East Java
          </p>
        </div>
        <div
          className={`relative w-full h-full md:h-screen flex gap-4 md:block p-4`}
        >
          <div
            className={`w-full mt-3 hidden md:flex absolute top-0 bg-gradient-to-l from-black/50 to-black/0 to-100% md:to-50% h-full overflow-hidden pointer-events-none z-10`}
          />
          <iframe
            className={`w-[50%] md:w-full h-[284px] md:h-screen  z-0`}
            src={LOCATION_LIST[selectedIndex].embedUrl}
            width="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div
            className={` md:absolute md:top-20 flex flex-col items-end justify-start  overflow-hidden right-40 z-10 cursor-pointer`}
          >
            <div className={` flex flex-col overflow-hidden `}>
              <p
                className={`text-white font-heavitas  z-40 text-xs md:text-2xl hidden md:block`}
              >
                Our <br />{" "}
                <span className={`text-base md:text-4xl`}>Location</span>
              </p>
              <Carousel
                opts={{
                  align: "center",
                }}
                orientation="vertical"
                className=" md:w-full max-w-xs"
              >
                <CarouselContent className="-mt-1 md:h-[500px] h-[284px] ">
                  {LOCATION_LIST.map((rows, index) => (
                    <CarouselItem
                      onClick={() => {}}
                      key={index}
                      className="pt-1 basis-1 md:basis-1/2"
                    >
                      <div className="p-1">
                        <div
                          onClick={() => {
                            setSelectedIndex(index);
                          }}
                          className={`flex flex-col bg-[#F5DD7D] rounded-sm md:rounded-3xl ${
                            selectedIndex === index &&
                            "border-2 border-yellow-300 shadow-yellow-500 shadow-md"
                          }  transition-all duration-300 `}
                        >
                          <Image
                            className={`h-20 md:h-40 object-cover rounded-sm md:rounded-t-3xl`}
                            alt={``}
                            src={
                              rows.locationImage ||
                              `/images/partnership/partnership-1.jpeg`
                            }
                            width={1000}
                            height={220}
                          />
                          <div
                            className={`p-1 md:p-6 text-center text-text-themed`}
                          >
                            <h1
                              className={`text-xs md:text-2xl font-heavitas text-primaryOrange`}
                            >
                              {rows.title}
                              {/* <span className={`text-primaryOrange`}>
                                Citraland Surabaya
                              </span> */}
                            </h1>
                            <p
                              className={`text-[10px] md:text-base font-barlow font-medium`}
                            >
                              {rows.address}
                            </p>
                            <p
                              className={`text-[10px] md:text-base font-barlow font-medium`}
                            >
                              {rows.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className={``}>
        <h1
          className={`m-7 text-base md:m-14 md:text-[40px] text-text-themed font-heavitas md:leading-[60px]`}
        >
          SAVOR THE FLAVOUR <br />
          <span className={`text-primaryOrange text-xl md:text-[52px]`}>
            EVERYDAY
          </span>{" "}
          WITH{" "}
          <span className={`text-primaryOrange text-xl md:text-[52px]`}>
            BAGOPLEK
          </span>
        </h1>
        <div className="overflow-hidden whitespace-nowrap ">
          <div className="flex animate-marquee min-h-[200px]">
            <Image
              src="/images/slide-image/image-1.jpeg"
              alt="Image 1"
              className="md:w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-2.jpeg"
              alt="Image 1"
              className="md:w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-3.jpeg"
              alt="Image 1"
              className="md:w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />

            {/* Repeat the images to ensure continuous sliding */}
            <Image
              src="/images/slide-image/image-1.jpeg"
              alt="Image 1"
              className="md:w-1/3 aspect-square object-cover "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-2.jpeg"
              alt="Image 1"
              className="md:w-1/3 aspect-square object-cover   "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-3.jpeg"
              alt="Image 1"
              className="md:w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div></div>
      {/* <LandingPage className="px-8 md:px-16 py-7" /> */}
      {/* <VideoPage className="px-8 md:px-16 " />
      <ProductPage className="px-8 md:px-16 " />
      <ServeGuidancePage className="px-8 md:px-16 " /> */}
    </main>
  );
}
