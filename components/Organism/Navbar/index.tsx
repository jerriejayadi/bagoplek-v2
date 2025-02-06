"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [show, setShow] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState<boolean>(true);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    });

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        // Close the side drawer or dialog box
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideBarRef]);

  return (
    <>
      <div
        className={`flex items-center justify-center md:justify-between sticky md:fixed  top-0 px-7 md:px-14 py-5  w-full max-w-[1920px] z-50 transition-all duration-500 ${
          show ? "translate-y-0" : "-translate-y-full md:translate-y-0"
        } ${navbarBackground ? "bg-[#FEFCF1]" : "bg-transparent"} z-50`}
      >
        {/* Hamburger Toggle */}
        <button
          onClick={() => {
            setShowSidebar(true);
          }}
          className={`absolute left-7 md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-6`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 17h18M3 12h18M3 7h18"
            ></path>
          </svg>
        </button>

        {/* Bagoplek Logo */}
        <Link href="/" className={``}>
          <Image
            className={`h-16 w-auto`}
            src={`/logo-bagoplek.png`}
            alt=""
            width={1000}
            height={100}
          />
        </Link>

        {/* Menu */}
        <div
          className={`mt-4 flex-col md:flex-row gap-10 font-bold hidden md:flex text-text-themed`}
        >
          <Link
            onClick={() => {
              setShow(false);
            }}
            className="flex flex-col items-center"
            href="/"
          >
            Beranda
            {path === "/en" && <p className="text-[10px]">&#x2022;</p>}
          </Link>
          <Link
            onClick={() => {
              setShow(false);
            }}
            className="flex flex-col items-center"
            href="/en/products"
          >
            Produk
            {path === "/en/products" && <p className="text-[10px]">&#x2022;</p>}
          </Link>
          <Link
            onClick={() => {
              setShow(false);
            }}
            className="flex flex-col items-center"
            href="/location"
          >
            Lokasi
            {path === "/en/location" && <p className="text-[10px]">&#x2022;</p>}
          </Link>
          {/* <Link
            onClick={() => {
              setShow(false);
            }}
            href="/partnership"
          >
            Partnership
          </Link> */}
          <Link
            onClick={() => {
              setShow(false);
            }}
            className="flex flex-col items-center"
            href="/faq"
          >
            FAQ
            {path === "/en/faq" && <p className="text-[10px]">&#x2022;</p>}
          </Link>
        </div>

        {/* Empty Column */}
        <div></div>
      </div>
      <div
        ref={sideBarRef}
        className={`md:hidden w-[90%] fixed left-0 h-screen bg-white top-0 z-50 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 px-8 pt-10`}
      >
        <div className={``}>
          <button
            onClick={() => {
              setShowSidebar(false);
              setShow(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
        <div
          className={`flex flex-col mt-8  gap-10 font-bold  text-text-themed`}
        >
          <Link
            onClick={() => {
              setShowSidebar(false);
              setShow(true);
            }}
            href="/"
          >
            Beranda
          </Link>
          <Link
            onClick={() => {
              setShowSidebar(false);
              setShow(true);
            }}
            href="/products"
          >
            Produk
          </Link>
          <Link
            onClick={() => {
              setShowSidebar(false);
              setShow(true);
            }}
            href="/location"
          >
            Lokasi
          </Link>
          {/* <Link
            onClick={() => {
              setShow(false);
            }}
            href="/partnership"
          >
            Partnership
          </Link> */}
          <Link
            onClick={() => {
              setShowSidebar(false);
              setShow(true);
            }}
            href="/faq"
          >
            FAQ
          </Link>
        </div>
      </div>
      <div
        onClick={() => {
          window.open(`https://wa.me/+6281234567890`, "_blank");
        }}
        className={`fixed bottom-6  md:bottom-10 right-4 md:right-10 rounded-[100%] z-40 p-3 md:py-3 md:px-4 bg-[#60D669] hover:cursor-pointer flex  items-center justify-center gap-2 text-center text-base text-white hover:bg-[#4EBF55] active:bg-[#3EA846]`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 67 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`size-7 md:size-10 text-black shrink-0`}
        >
          <g clipPath="url(#clip0_2986_1852)">
            <path
              d="M17.9344 58.1884L19.0141 58.7284C23.5132 61.4276 28.5518 62.6873 33.5906 62.6873C49.4267 62.6873 62.3834 49.7306 62.3834 33.8946C62.3834 26.3365 59.324 18.9584 53.9255 13.5596C48.5268 8.16092 41.3284 5.10181 33.5906 5.10181C17.7546 5.10181 4.79762 18.0585 4.97768 34.0746C4.97768 39.4731 6.59728 44.692 9.29651 49.1906L10.0163 50.2705L7.13722 60.8879L17.9344 58.1884Z"
              fill="#00E676"
            />
            <path
              d="M56.9846 10.6802C50.8661 4.3819 42.4083 0.962646 33.7704 0.962646C15.4152 0.962646 0.658829 15.8988 0.83864 34.0742C0.83864 39.8328 2.45823 45.4116 5.15772 50.4502L0.47876 67.5459L17.9344 63.047C22.7931 65.7465 28.1916 67.0062 33.5906 67.0062C51.766 67.0062 66.5223 52.0698 66.5223 33.8947C66.5223 25.0767 63.1031 16.7987 56.9849 10.6802H56.9846ZM33.7704 61.4277C28.9116 61.4277 24.0529 60.1682 19.9138 57.6488L18.8342 57.1089L8.3969 59.8081L11.0961 49.5509L10.3764 48.471C2.45823 35.6943 6.23736 18.7781 19.1941 10.86C32.1508 2.94212 48.8867 6.72125 56.8048 19.678C64.7227 32.6347 60.9436 49.3705 47.9871 57.2887C43.8478 59.9879 38.8092 61.4274 33.7704 61.4274V61.4277ZM49.6064 41.4529L47.627 40.5531C47.627 40.5531 44.7479 39.2934 42.9482 38.3936C42.7682 38.3936 42.5884 38.2135 42.4083 38.2135C41.8684 38.2135 41.5085 38.3936 41.1486 38.5736C41.1486 38.5736 40.9688 38.7534 38.4494 41.6327C38.2693 41.9926 37.9094 42.1727 37.5495 42.1727H37.3695C37.1896 42.1727 36.8298 41.9926 36.6497 41.8128L35.7499 41.4529C33.7704 40.5531 31.971 39.4732 30.5312 38.0337C30.1713 37.6738 29.6314 37.3139 29.2715 36.954C28.0118 35.6943 26.7521 34.2545 25.8525 32.635L25.6724 32.2751C25.4926 32.095 25.4926 31.9152 25.3126 31.5553C25.3126 31.1954 25.3126 30.8355 25.4926 30.6555C25.4926 30.6555 26.2124 29.7556 26.7521 29.216C27.1122 28.8558 27.292 28.3161 27.6519 27.9562C28.0118 27.4163 28.1919 26.6965 28.0118 26.1566C27.832 25.2568 25.6724 20.398 25.1328 19.3183C24.7726 18.7784 24.413 18.5986 23.873 18.4185H21.8936C21.5334 18.4185 21.1738 18.5986 20.8137 18.5986L20.6336 18.7784C20.2737 18.9585 19.9138 19.3183 19.554 19.4982C19.1941 19.8583 19.014 20.2179 18.6541 20.5781C17.3944 22.1976 16.6747 24.1771 16.6747 26.1566C16.6747 27.5961 17.0345 29.0359 17.5745 30.2956L17.7546 30.8355C19.3742 34.2545 21.5334 37.3139 24.413 40.0131L25.1328 40.7329C25.6724 41.2729 26.2124 41.6327 26.5723 42.1724C30.3514 45.4119 34.6702 47.7512 39.529 49.0109C40.069 49.1907 40.7887 49.1907 41.3287 49.3708H43.1281C44.0279 49.3708 45.1075 49.0109 45.8276 48.651C46.3672 48.2912 46.7271 48.2912 47.087 47.9313L47.4471 47.5711C47.807 47.2113 48.1669 47.0315 48.5268 46.6716C48.8867 46.3117 49.2465 45.9518 49.4266 45.5917C49.7865 44.8719 49.9663 43.9721 50.1464 43.0725V41.8128C50.1464 41.8128 49.9663 41.6327 49.6064 41.4529Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2986_1852">
              <rect
                width="66.0426"
                height="66.8165"
                fill="white"
                transform="translate(0.47876 0.962646)"
              />
            </clipPath>
          </defs>
        </svg>
        {/* <p className="font-bold ">Hubungi Kami</p> */}
      </div>
    </>
  );
};
export default Navbar;
