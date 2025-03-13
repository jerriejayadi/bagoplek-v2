"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  onClick?: () => any;
  name: string;
  image_src: string;
  className?: string;
}
export default function ProductCard({
  name,
  image_src,
  onClick,
  className,
}: ProductCardProps) {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center  bg-white shadow-xl h-full rounded-[20px] overflow-hidden ${className}`}
    >
      <div className={`flex aspect-square overflow-hidden  relative`}>
        <Image
          alt=""
          className={`md:size-[400px] rounded-t-[20px] object-cover`}
          src={image_src}
          width={400}
          height={400}
        />
        <div className="absolute font-heavitas bottom-0 w-full flex items-center justify-center text-white bg-black/30 p-4 md:text-2xl text-base font-normal text-center  transition-all duration-150">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}
