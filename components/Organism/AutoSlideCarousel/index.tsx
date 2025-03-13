import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HERO_BANNER_LIST } from "@/lib/utils";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function AutoSlideCarousel() {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);
//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);
  return (
    <Carousel
        plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
    //   setApi={setApi}
      className="md:h-screen md:-mt-28"
    >
      <CarouselContent className="md:h-screen md:object-contain p-0">
        {HERO_BANNER_LIST.map((rows, index) => (
          <CarouselItem key={`hero-banner-${index}`} className="md:h-screen p-0">
            <Image
              className={`h-full w-full md:object-contain xl:object-cover`}
              alt={``}
              src={rows}
              width={2000}
              height={2000}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <div className="absolute bottom-10  w-fit right-0 left-0 mx-auto flex items-center gap-2">
        {HERO_BANNER_LIST.map((row, index) => (
          <div
            key={`hero-banner-${index}`}
            className={`size-5 rounded-[100%] ${
              current === index ? "bg-white" : "bg-neutral-300"
            }`}
          />
        ))}
      </div> */}
    </Carousel>
  );
}
