"use client";
import Image from "next/image";
import router from "next/navigation";
export default function Footer() {
  return (
    <footer className={`w-full py-5 px-4 `}>
      <div
        className={`grid grid-cols-2 sm:flex sm:flex-row flex-col md:items-center justify-around`}
      >
        <div>
          <Image
            className={`w-28`}
            alt={``}
            src={`/logo-bagoplek.png`}
            width={4096}
            height={2920}
          />
        </div>
        <div className={`flex flex-col md:flex-row md:items-center gap-4`}>
          <Image
            className={`w-28`}
            alt={``}
            src={`/go-food.png`}
            width={4096}
            height={2920}
          />
          <Image
            className={`w-28`}
            alt={``}
            src={`/grab-food.png`}
            width={4096}
            height={2920}
          />
          <Image
            className={`w-28`}
            alt={``}
            src={`/shopee.png`}
            width={4096}
            height={2920}
          />
        </div>
        <div className={`text-black font-sans font-normal text-center`}>
          &copy; 2024 Bagoplek
        </div>
      </div>
    </footer>
  );
}
