import LandingPage from "@/components/Layouts/LandingPage";
import ProductPage from "@/components/Layouts/ProductPage";
import ServeGuidancePage from "@/components/Layouts/ServeGuidancePage";
import VideoPage from "@/components/Layouts/VideoPage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
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
        <div className={`relative w-full h-[284px] md:h-screen  `}>
          <div
            className={`w-full absolute top-0 bg-gradient-to-l from-black/50 to-black/0 to-100% md:to-50% h-full overflow-hidden`}
          />
          <iframe
            className={`w-full mt-7 md:mt-24 h-[284px] md:h-screen `}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2128044666783!2d112.6143422!3d-7.9769442999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883539578065f%3A0x3254e7f3f1e4831e!2sBagoplek%20-%20Office%20(Central%20Kitchen)!5e0!3m2!1sen!2sid!4v1728703675911!5m2!1sen!2sid&zoom=20"
            width="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div
            className={`absolute top-0 w-full flex flex-col items-end justify-start p-4 md:pt-28 md:pr-40 overflow-hidden h-full `}
          >
            <div className={` flex flex-col overflow-hidden `}>
              <p
                className={`text-white font-heavitas  z-40 text-xs md:text-2xl`}
              >
                Our <br />{" "}
                <span className={`text-base md:text-4xl`}>Location</span>
              </p>
              <Carousel
                opts={{
                  align: "center",
                }}
                orientation="vertical"
                className="w-[150px] md:w-full max-w-xs   "
              >
                <CarouselContent className="-mt-1 md:h-[500px] h-[284px] ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pt-1 basis-1 md:basis-1/2"
                    >
                      <div className="p-1">
                        <div
                          className={`flex flex-col bg-[#F5DD7D] rounded-sm md:rounded-3xl `}
                        >
                          <Image
                            className={`h-20 md:h-40 object-cover rounded-sm md:rounded-t-3xl`}
                            alt={``}
                            src={`/images/partnership/partnership-1.jpeg`}
                            width={1000}
                            height={220}
                          />
                          <div
                            className={`p-2 md:p-6 text-center text-text-themed`}
                          >
                            <h1
                              className={`text-[9px] md:text-2xl font-heavitas`}
                            >
                              Outlet{" "}
                              <span className={`text-primaryOrange`}>
                                Citraland Surabaya
                              </span>
                            </h1>
                            <p
                              className={`text-[6px] md:text-base font-barlow font-medium`}
                            >
                              Jl. Taman Puspa Raya, Surabaya
                            </p>
                            <p
                              className={`text-[6px] md:text-base font-barlow font-medium`}
                            >
                              031 - 374918
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
          className={`m-7 text-base md:m-14 md:text-[40px] text-text-themed font-heavitas`}
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
