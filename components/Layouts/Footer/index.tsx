"use client";
import Image from "next/image";
import Link from "next/link";
import router from "next/navigation";
export default function Footer() {
  return (
    <footer className={`w-full`}>
      {/* <div className={`w-full relative`}>
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
          <div className="w-full">
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
      </div> */}
      <div
        className={`bg-white flex flex-col gap-6 p-8 md:p-16 text-text-themed md:flex-row -mt-2`}
      >
        <div className={`flex flex-col md:w-96`}>
          <Image
            className={`w-28`}
            alt={``}
            src={`/logo-bagoplek.png`}
            width={4096}
            height={2920}
          />
          <div className="flex items-center gap-4">
            <p className={`text-text-themed font-barlow mt-4`}>
              Bagoplek: Plekin aja!
              <br />
              BAKSO GORENG AYAM
            </p>
            <Image
              alt=""
              className="w-8"
              src="/halal.png"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className={`md:ml-28 `}>
          <div className={`flex flex-col gap-8 md:gap-20 md:flex-row`}>
            {/* <div className={`flex flex-col `}>
              <div className={`font-bold`}>{`Menu`.toUpperCase()}</div>
              <div className={`mt-6 flex flex-col gap-4`}>
                <Link
                  className="hover:text-primaryOrange transition-all duration-150"
                  href={`/products`}
                >
                  Produk
                </Link>
                <Link
                  className="hover:text-primaryOrange transition-all duration-150"
                  href={`/location`}
                >
                  Lokasi
                </Link>
                <Link
                  className="hover:text-primaryOrange transition-all duration-150"
                  href={`/faq`}
                >
                  FAQ
                </Link>
              </div>
            </div> */}
            <div className={`flex flex-col `}>
              <div className={`font-bold`}>GET IN TOUCH</div>
              <div className={`mt-6 flex flex-col gap-4`}>
                <div className={`flex items-center gap-3`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`text-text-themedOrange size-5`}
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path>
                  </svg>
                  <Link
                    className="hover:text-primaryOrange"
                    href="https://wa.me/+6289515399006"
                  >
                    +62 895 1539 9006
                  </Link>
                </div>
                <div className={`flex items-center gap-3`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`text-text-themed size-5`}
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path>
                  </svg>
                  <Link
                    className="hover:text-primaryOrange"
                    href="mailto:bagoplekindo@gmail.com"
                  >
                    bagoplekindo@gmail.com
                  </Link>
                </div>
                <div className={`flex items-center gap-3`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-5`}
                  >
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  <Link
                    className="hover:text-primaryOrange"
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2128044666783!2d112.6143422!3d-7.9769442999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883539578065f%3A0x3254e7f3f1e4831e!2sBagoplek%20-%20Office%20(Central%20Kitchen)!5e0!3m2!1sen!2sid!4v1728703675911!5m2!1sen!2sid&zoom=20"
                  >
                    Jl. Mojo No.11b Malang
                  </Link>
                </div>
              </div>
            </div>
            <div className={`flex flex-col `}>
              <div className="font-bold">{`Follow Us`.toUpperCase()}</div>
              <div
                className={`mt-6 flex flex-row md:flex-col items-center md:items-start gap-6`}
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`text-blue-500 size-7`}
                >
                  <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
                </svg> */}
                <Link
                  href="https://www.instagram.com/bagoplek_id"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Image
                    className={`size-6`}
                    alt=""
                    src="/icons/instagram-new-2016-seeklogo.com.png"
                    width={1000}
                    height={1000}
                  />
                  <p>@bagoplek_id</p>
                </Link>
              </div>
            </div>
            <div>
              <h1 className={`font-bold`}>{`Online Stores`.toUpperCase()}</h1>
              <div className={`flex flex-wrap items-center mt- gap-4`}>
                <Link href="https://tokopedia.link/svaZXbIQGNb" target="_blank">
                  <Image
                    className={`w-36 object-contain `}
                    alt=""
                    src="/shopee.png"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <Link href="https://id.shp.ee/MxiAsFn" target="_blank">
                  <Image
                    className={`w-36 object-contain shrink-0  h-auto ml-4`}
                    alt=""
                    src="/tokopedia.png"
                    width={1000}
                    height={1000}
                  />
                </Link>
                <Link
                  href="https://r.grab.com/g/6-20241102_101705_7cb015135ee5a451_MEXMPS-6-C4CTBFLAAVJZL6"
                  target="_blank"
                >
                  <Image
                    className={`w-32 shrink-0  h-auto ml-4`}
                    alt=""
                    src="/grab-food.png"
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </footer>
  );
}
