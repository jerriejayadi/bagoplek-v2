"use client";
import Navbar from "@/components/Organism/Navbar";
import Footer from "../Footer";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const router = useRouter();

  if (path === "/en/coming-soon") {
    return children;
  }

  return (
    <>
      <Navbar />
      <main className={`py-0 md:pt-28 `}>
        {children}
        <Footer />
      </main>
    </>
  );
}
