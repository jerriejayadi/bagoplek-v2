"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`flex items-center justify-between fixed  top-0 px-14 py-5 bg-transparent w-full z-50 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Hamburger Toggle */}
      <div className={`md:hidden`}></div>

      {/* Bagoplek Logo */}
      <div className={``}>
        <Image src={`/logo-bagoplek.png`} alt="" width={100} height={70} />
      </div>

      {/* Menu */}
      <div
        className={` flex-col md:flex-row gap-10 font-bold hidden md:flex text-primary`}
      >
        <Link href="#">Beranda</Link>
        <Link href="#">Produk</Link>
        <Link href="#">Lokasi</Link>
        <Link href="#">Partnership</Link>
        <Link href="#">FAQ</Link>
      </div>

      {/* Empty Column */}
      <div></div>
    </div>
  );
};
export default Navbar;
