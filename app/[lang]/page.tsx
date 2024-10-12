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
        className={`-mt-28`}
        alt={``}
        src={`/images/landing-page.jpeg`}
        width={2000}
        height={2000}
      />
      <div className={`bg-[#FFFDF3]`}>
        <div className={`mt-20 flex flex-col items-center justify-center`}>
          <h1 className={`font-heavitas text-text-themed text-5xl`}>
            FIND OUR{" "}
            <span className={`text-primaryOrange text-[52px] leading-[64px]`}>
              OUTLETS
            </span>
          </h1>
          <p
            className={`text-text-themed mt-2 text-xl tracking-[5%] font-medium`}
          >
            We are Spreading Around East Java
          </p>
        </div>
        <div className={`relative w-full h-screen  `}>
          <div
            className={`w-full absolute top-0 bg-gradient-to-l from-black/50 to-black/0 to-50% h-full overflow-hidden`}
          />
          <iframe
            className={`w-full mt-24 h-screen `}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2128044666783!2d112.6143422!3d-7.9769442999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883539578065f%3A0x3254e7f3f1e4831e!2sBagoplek%20-%20Office%20(Central%20Kitchen)!5e0!3m2!1sen!2sid!4v1728703675911!5m2!1sen!2sid&zoom=20"
            width="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div
            className={`absolute top-0 w-full flex flex-col items-end justify-start pt-28 pr-40 overflow-hidden `}
          >
            <div className={`h-full flex flex-col overflow-hidden`}>
              <p className={`text-white font-heavitas  z-50 text-2xl`}>
                Our <br /> <span className={`text-4xl`}>Location</span>
              </p>
              <Carousel
                opts={{
                  align: "start",
                }}
                orientation="vertical"
                className="w-full max-w-xs "
              >
                <CarouselContent className="-mt-1 h-[500px] ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 md:basis-1/2">
                      <div className="p-1">
                        <div
                          className={`flex flex-col bg-[#F5DD7D] rounded-3xl `}
                        >
                          <Image
                            className={`h-40 object-cover rounded-t-3xl`}
                            alt={``}
                            src={`/images/partnership/partnership-1.jpeg`}
                            width={1000}
                            height={220}
                          />
                          <div className={`p-6 text-center text-text-themed`}>
                            <h1 className={`text-2xl font-heavitas`}>
                              Outlet{" "}
                              <span className={`text-primaryOrange`}>
                                Citraland Surabaya
                              </span>
                            </h1>
                            <p>Jl. Taman Puspa Raya, Surabaya</p>
                            <p>031 - 374918</p>
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
        <h1 className={`m-14 text-[40px] text-text-themed font-heavitas`}>
          SAVOR THE FLAVOUR <br />
          <span className={`text-primaryOrange text-[52px]`}>
            EVERYDAY
          </span>{" "}
          WITH{" "}
          <span className={`text-primaryOrange text-[52px]`}>BAGOPLEK</span>
        </h1>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            <Image
              src="/images/slide-image/image-1.jpeg"
              alt="Image 1"
              className="w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-2.jpeg"
              alt="Image 1"
              className="w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-3.jpeg"
              alt="Image 1"
              className="w-1/3 aspect-square object-cover  "
              width={1000}
              height={1000}
            />

            {/* Repeat the images to ensure continuous sliding */}
            <Image
              src="/images/slide-image/image-1.jpeg"
              alt="Image 1"
              className="w-1/3 aspect-square object-cover "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-2.jpeg"
              alt="Image 1"
              className="w-1/3 aspect-square object-cover   "
              width={1000}
              height={1000}
            />
            <Image
              src="/images/slide-image/image-3.jpeg"
              alt="Image 1"
              className="w-1/3 aspect-square object-cover  "
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
