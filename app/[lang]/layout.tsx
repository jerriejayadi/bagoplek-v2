import type { Metadata } from "next";
import { Barlow, Inter, Plus_Jakarta_Sans, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Organism/Navbar";
import LocalFont from "next/font/local";
import Footer from "@/components/Layouts/Footer";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
});
const heavitas = LocalFont({
  src: "../../public/fonts/Heavitas.ttf",
  display: "swap",
  variable: "--font-heavitas",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang}>
      <body
        className={`${inter.className} ${heavitas.variable} ${barlow.variable} ${lato.className}   max-w-[1920px] mx-auto bg-[#FFFDF3]`}
      >
        <Navbar />
        <main className={`py-0 md:py-28  `}>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
