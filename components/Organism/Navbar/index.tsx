"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState<boolean>(true);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const controlNavbar = () => {
    // if (window.scrollY > lastScrollY) {
    //   // if scroll down hide the navbar
    //   setShow(false);
    // } else {
    //   // if scroll up show the navbar
    //   setShow(true);
    // }

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
        className={`flex items-center justify-center md:justify-between fixed  top-0 px-7 md:px-14 py-5 bg-transparent w-full max-w-[1920px] z-50 transition-all duration-300 ${
          // show ? "translate-y-0" : "-translate-y-full"
          ""
        } ${
          navbarBackground
            ? "bg-[#FBD440] bg-opacity-80 backdrop-blur-sm "
            : "bg-transparent"
        } z-50`}
      >
        {/* Hamburger Toggle */}
        <button
          onClick={() => {
            setShow(true);
          }}
          className={`absolute left-7 md:hidden`}
        >
          <Image
            className={``}
            alt=""
            src={"/icons/ci_hamburger-md.svg"}
            width={40}
            height={40}
          />
        </button>

        {/* Bagoplek Logo */}
        <div className={``}>
          <Image src={`/logo-bagoplek.png`} alt="" width={100} height={70} />
        </div>

        {/* Menu */}
        <div
          className={` flex-col md:flex-row gap-10 font-bold hidden md:flex text-primary`}
        >
          <Link href="/">Beranda</Link>
          <Link href="#">Produk</Link>
          <Link href="#">Lokasi</Link>
          <Link href="/partnership">Partnership</Link>
          <Link href="/faq">FAQ</Link>
        </div>

        {/* Empty Column */}
        <div></div>
      </div>
      <div
        ref={sideBarRef}
        className={`md:hidden w-[90%] fixed left-0 h-screen bg-white top-0 z-50 ${
          show ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-500 px-4 pt-10`}
      >
        <div className={``}>
          <button
            onClick={() => {
              setShow(false);
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
        <div className={`flex flex-col mt-4 gap-10 font-bold  text-primary`}>
          <Link href="/">Beranda</Link>
          <Link href="#">Produk</Link>
          <Link href="#">Lokasi</Link>
          <Link href="/partnership">Partnership</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
