"use client";
import { useState } from "react";

interface AccordionProps {
  className?: string;
  title: string;
  children: React.ReactNode;
}

export default function Accordion({
  className,
  title,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className={`${className} px-4 md:px-10 pt-3 ${
        open ? "pb-4 md:pb-8" : "pb-3"
      } w-full bg-white border border-[#E5E5F0] flex flex-col gap-2 md:gap-6 items-start rounded-md hover:cursor-pointer`}
    >
      {/* header */}
      <div className={`flex items-center gap-4 md:gap-6`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6 md:size-8 text-primary font-bold shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <div className={`font-jakartaSans font-bold md:text-xl text-primary`}>
          {title}
        </div>
      </div>
      {/* body */}
      {open && (
        <div className={`font-jakartaSans text-primary ml-10 md:ml-14`}>{children}</div>
      )}
    </div>
  );
}
