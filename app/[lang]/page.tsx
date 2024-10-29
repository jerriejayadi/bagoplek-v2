"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

export const LOCATION_LIST = [
  {
    title: "Bagoplek Office",
    address: "Jl. Mojo No.11b, Bareng, Malang",
    phone: "+62-895-1539-9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/gCkSrh58QtXe5JgL9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2128044666783!2d112.6143422!3d-7.9769442999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883539578065f%3A0x3254e7f3f1e4831e!2sBagoplek%20-%20Office%20(Central%20Kitchen)!5e0!3m2!1sen!2sid!4v1728703675911!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Pasar Oro Oro Dowo Malang",
    address: "Jl. Guntur No.20, Oro-oro Dowo, Malang",
    phone: "+62-895-1539-9007",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/FNsMmEA8oZf18TUb7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.174545231725!2d112.6280407!3d-7.9685754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629752adc2215%3A0x3da67ad2720f10f5!2sBagoplek%20-%20pasar%20oro%20oro%20dowo!5e0!3m2!1sen!2sid!4v1730083351915!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Superindo Bendungan Sutami Malang",
    address: "Jl. Bendungan Sutami, Gading Kasri, Malang",
    phone: "+62-895-1539-9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/7GmBFNU3JNvGBizL8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3444649982657!2d112.61117370876815!3d-7.963308392028366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78832847b508af%3A0x795aa2530d95767d!2sSuperindo%20Bendungan%20Sutami%20Malang!5e0!3m2!1sen!2sid!4v1730083453129!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Superindo Langsep Malang",
    address: "Jl. Raya Langsep No.5, Bareng, Malang",
    phone: "+62-895-1539-9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/yLSD7J6GSZm85EGh8",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15804.941466952812!2d112.6130895!3d-7.9746092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883754b4ec469%3A0xcc34a51f527fc8bd!2sBagoplek%20-%20Superindo%20Langsep!5e0!3m2!1sen!2sid!4v1730085966418!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Lai-Lai Express",
    address: "Jl. Puncak Mandala no. 19 Malang",
    phone: "+62-895-1539-9006",
    city: "Malang",
    googleMapsURL: "https://maps.app.goo.gl/9PoUcpp1tUD8fkHL7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3259198495343!2d112.60190820876824!3d-7.965230492026447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788352d754fd11%3A0x36471d5010ee3e6b!2sBagoplek%20-%20Lai%20Lai%20Express!5e0!3m2!1sen!2sid!4v1730086007844!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Citraland Fresh Market",
    address: "Jl. Mojo no.11B",
    phone: "+62-852-9878-2570",
    city: "Surabaya",
    googleMapsURL: "https://maps.app.goo.gl/AeKfjcKNzSH2zgvW9",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.693872285857!2d112.64301600875821!3d-7.275632192701154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdbf66b10c83%3A0xa1f01db494e731b2!2sBagoplek%20-%20Citraland!5e0!3m2!1sen!2sid!4v1730086047860!5m2!1sen!2sid&zoom=20",
  },
  {
    title: "Indomaret Ahmad Yani",
    address: "Jl. Ahmad Yani, Ngaglik, Batu",
    phone: "+62-895-1539-9006",
    city: "Batu",
    googleMapsURL: "https://maps.app.goo.gl/gBvLsWQRa2LmLNf97",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.217015689267!2d112.52041230876674!3d-7.872346392117084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788708e4eeb85b%3A0xd1cbd82041e960a2!2sBagoplek%20-%20Batu!5e0!3m2!1sen!2sid!4v1730086084120!5m2!1sen!2sid&zoom=20",
  },
];

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
                            src={`/images/partnership/partnership-1.jpeg`}
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
