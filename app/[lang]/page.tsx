"use client";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import { AutoSlideCarousel } from "@/components/Organism/AutoSlideCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HERO_BANNER_LIST, LOCATION_LIST } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <main className="flex min-h-screen flex-col justify-between ">
      {/* <Image
        className={`md:-mt-28`}
        alt={``}
        src={`/images/landing-page-2.jpg`}
        width={2000}
        height={2000}
      /> */}
      {/* <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            playOnInit: true,
            active: true,
            stopOnLastSnap: false,
            stopOnInteraction: false,
          }),
        ]}
        className="md:-mt-28 md:h-screen"
      >
        <CarouselContent className="md:h-screen md:object-contain">
          {HERO_BANNER_LIST.map((rows, index) => (
            <CarouselItem key={`hero-banner-${index}`} className="md:h-screen">
              <Image
                className={`h-full`}
                alt={``}
                src={rows}
                width={2000}
                height={2000}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="bottom-0 absolute w-fit right-0 left-0 mx-auto flex">
          {HERO_BANNER_LIST.map((rows, index) => (
            <div
              key={`banner-count-${index}`}
              className="size-10 bg-white rounded-[100%]"
            />
          ))}
        </div>
      </Carousel> */}
      <AutoSlideCarousel />
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
                className=" md:w-full max-w-xs overflow-hidden"
              >
                <CarouselContent className="-mt-1 md:h-[500px] h-[284px] md:overflow-y-scroll md:overflow-smooth">
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
          className={`m-7 text-base md:m-14 md:text-[40px] text-text-themed font-heavitas md:leading-[96px] text-center`}
        >
          SAVOR THE FLAVOUR <br />
          IN{" "}
          <span className={`text-primaryOrange text-xl md:text-[52px]`}>
            EVERY BITE
          </span>{" "}
          {/* WITH{" "}
          <span className={`text-primaryOrange text-xl md:text-[52px]`}>
            BAGOPLEK
          </span> */}
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
      <div className="my-20">
        <Newsletter />
      </div>
      {/* <LandingPage className="px-8 md:px-16 py-7" /> */}
      {/* <VideoPage className="px-8 md:px-16 " />
      <ProductPage className="px-8 md:px-16 " />
      
      <ServeGuidancePage className="px-8 md:px-16 " /> */}
      <div className={`w-full relative -mt-2`}>
        <Image
          className={`w-full h-[600px] md:h-[800px] shrink-0 object-cover md:object-fill `}
          alt=""
          src="/footer/Bagoplek.png"
          width={1920}
          height={1080}
        />
        <div
          className={`flex w-full flex-col items-start justify-between absolute top-0 px-10 py-16 md:px-40 md:py-44  md:flex-row`}
        >
          <div className="w-full ">
            <p
              className={`text-base md:text-2xl font-heavitas text-text-themed leading-4 md:leading-8`}
            >
              Let&apos;s Be
              <br />
              <span className={`text-xl md:text-5xl leading-6 md:leading-10`}>
                Partner!
              </span>
            </p>

            <div
              onClick={() => {
                console.log("hello");
              }}
              className={`mt-4 bg-primaryOrange hover:bg-opacity-80 text-white w-full md:max-w-[450px]  hover:cursor-pointer flex items-center gap-2 justify-between transition-all duration-150 rounded-[10px] md:rounded-[20px] `}
            >
              <div
                className={`flex text-center w-full justify-center items-center text-sm md:text-xl gap-5 `}
              >
                Resellers are welcome
              </div>

              <div
                className={`h-full bg-white p-3 text-primary rounded-r-[10px] md:rounded-r-[20px]`}
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

          <div
            className={`mt-20 md:mt-0 w-full flex items-center justify-center`}
          >
            <Image
              className={`w-[200px] md:w-[500px]`}
              alt=""
              src="/footer/Bakso.png"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
