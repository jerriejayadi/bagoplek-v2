"use client";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Products from "@/components/Layouts/ProductPage";
import ServeGuidancePage from "@/components/Layouts/ServeGuidancePage";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <Products />
      <div className={`p-6 md:p-0 md:pl-16`}>
        <ServeGuidancePage />
      </div>
      {/* <div>
        <Newsletter/>
      </div> */}
    </>
  );
}
