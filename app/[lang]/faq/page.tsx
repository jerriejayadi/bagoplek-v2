import Accordion from "@/components/Atoms/accordion";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  return (
    <main className={`flex flex-col relative items-center w-full`}>
      <div
        className={` flex flex-col  items-center justify-center h-[780px] -mt-64 `}
      >
        <Image
          alt={``}
          className={`absolute -top-64 w-[1369px] h-[780px] rounded-2xl md:rounded-b-[120px] object-cover shrink-0`}
          src={`/thumbnail.jpeg`}
          width={1920}
          height={780}
        />
        <div
          className={` px-4 flex flex-col items-center justify-start tracking-wider z-30 absolute top-0`}
        >
          <div
            className={`font-heavitas text-4xl md:text-8xl  font-black text-text-themed mb-4`}
          >
            FAQ
          </div>
          <div className={`text-4xl font-barlow  text-[#715B3C] text-center `}>
            Frequently Asked Question
          </div>
        </div>
      </div>
      <div
        className={`max-w-[1080px] px-4 flex flex-col items-center justify-center gap-6 mt-16 mb-40`}
      >
        <Accordion title={"Apakah Bagoplek Halal?"}>
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
        <Accordion title={"Berapa lama kadaluarsa produk Bagoplek?"}>
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
        <Accordion
          title={"Berapa lama ketahanan Bagoplek Frozen di dalam kulkas?"}
        >
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
        <Accordion title={"Bagaimana menyimpan Bagoplek dengan baik?"}>
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
        <Accordion title={"Apakah Bagoplek dapat dikirim ke luar kota?"}>
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
        <Accordion title={"Dimana lokasi gerai Bagoplek?"}>
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
        <Accordion
          title={
            "Apakah saya dapat menjadi reseller atau membuka gerai Bagoplek?"
          }
        >
          Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam
        </Accordion>
      </div>
      {/* <div
        className={`mt-16 w-full py-20 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-400 to to-yellow-200 min-h-screen`}
      >
        <div
          className={`font-barlow font-extrabold text-3xl md:text-6xl text-text-themed`}
        >
          Join Partnership
        </div>

        <Link
          className={`bg-white rounded-full text-black mt-7 md:mt-14 md:text-2xl px-4 py-2 md:px-7 md:py-3 hover:md:bg-gray-100 active:bg-gray-100`}
          href={`/partnership`}
        >
          Join Now
        </Link>
      </div> */}
      <Newsletter />
    </main>
  );
}
