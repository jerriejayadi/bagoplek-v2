"use client";
import Accordion from "@/components/Atoms/accordion";
import Newsletter from "@/components/Layouts/NewsLetter/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type FAQ = {
  id: string;
  question: string;
  category: string;
  answer: string;
};

type GroupedFAQ = {
  [key: string]: FAQ[];
};

const FAQ_LIST = [
  {
    id: "1",
    question: "Apa itu Bagoplek?",
    category: "Umum",
    answer:
      "Bagoplek adalah brand bakso goreng yang menawarkan rasa gurih dan renyah, yang cocok untuk dinikmati langsung atau menjadi menu tambahan di berbagai restoran.",
  },
  {
    id: "2",
    question: "Di mana saya bisa membeli bakso goreng Bagoplek?",
    category: "Umum",
    answer:
      "Anda dapat menemukan booth Bagoplek di pasar-pasar dan di depan beberapa minimarket terdekat. Untuk mengetahui lokasi booth kami, silakan cek di bagian lokasi pada website kami.",
  },
  {
    id: "3",
    question: "Apakah Bagoplek tersedia untuk pemesanan dalam jumlah besar?",
    category: "Umum",
    answer:
      "Ya, Bagoplek menyediakan pemesanan dalam jumlah besar untuk acara, pesta, atau kebutuhan lainnya. Silakan hubungi kami untuk informasi lebih lanjut.",
  },

  {
    id: "5",
    question: "Apakah Bagoplek menerima pesanan untuk restoran?",
    category: "Reseller",
    answer:
      "Ya, kami menyediakan bakso goreng dalam jumlah besar khusus untuk restoran yang ingin menjual menu bakso goreng Bagoplek di tempat mereka.",
  },
  {
    id: "6",
    question:
      "Bagaimana cara restoran dapat memesan bakso goreng dari Bagoplek?",
    category: "Reseller",
    answer:
      "Reseller dapat menghubungi tim sales kami melalui kontak di website untuk mendiskusikan kebutuhan dan jumlah pesanan sesuai dengan kebutuhan bisnis Anda.",
  },
  {
    id: "7",
    question: "Apakah ada minimum order untuk restoran?",
    category: "Reseller",
    answer:
      "Ya, untuk memenuhi kebutuhan suplai, kami menetapkan minimum order khusus bagi pemesanan restoran. Hubungi kami untuk detail lebih lanjut.",
  },
  {
    id: "8",
    question:
      "Apakah Bagoplek memberikan diskon untuk pemesanan dalam jumlah besar bagi restoran?",
    category: "Reseller",
    answer:
      "Kami memberikan penawaran khusus dan diskon berdasarkan jumlah pesanan bulanan. Untuk informasi harga khusus, silakan hubungi tim kami.",
  },
  {
    id: "0",
    question: "Apakah Bagoplek Halal?",
    category: "Produk",
    answer: "Ya, Bagoplek Halal dengan menggunakan bahan dasar daging Ayam",
  },
  {
    id: "9",
    question: "Apakah Bagoplek menggunakan bahan pengawet?",
    category: "Produk",
    answer:
      "Tidak, bakso goreng Bagoplek dibuat tanpa bahan pengawet sehingga aman dikonsumsi dan tetap mempertahankan rasa asli.",
  },
  {
    id: "10",
    question:
      "Bagaimana cara menyimpan bakso goreng Bagoplek agar tetap renyah?",
    category: "Produk",
    answer:
      "Bakso goreng sebaiknya disimpan dalam wadah tertutup dan diletakkan di tempat yang sejuk untuk menjaga tekstur dan kesegarannya.",
  },
  {
    id: "11",
    question: "Apakah Bagoplek tersedia dalam berbagai varian rasa?",
    category: "Produk",
    answer:
      "Saat ini, Bagoplek menawarkan rasa original yang sudah disukai banyak orang, namun kami sedang mengembangkan varian rasa baru. Nantikan informasi terbaru di website kami.",
  },
  {
    id: "12",
    question: "Metode pembayaran apa saja yang diterima Bagoplek?",
    category: "Pembayaran & Pengiriman",
    answer:
      "Kami menerima pembayaran tunai di booth dan juga melalui transfer bank atau dompet digital.",
  },
  {
    id: "13",
    question: "Apakah ada biaya tambahan untuk pengiriman?",
    category: "Pembayaran & Pengiriman",
    answer:
      "Ya, biaya pengiriman mengikuti tarif layanan pihak ketiga atau ojek online yang digunakan untuk mengirimkan produk ke lokasi Anda.",
  },
  {
    id: "4",
    question: "Apakah Bagoplek memiliki layanan pengiriman?",
    category: "Pembayaran & Pengiriman",
    answer:
      "Saat ini, pengiriman Bagoplek tersedia melalui platform ojek online dan beberapa layanan pengiriman lokal. Silakan cek area yang mencakup layanan kami.",
  },
];

const groupedFAQs = Object.entries(
  FAQ_LIST.reduce<GroupedFAQ>((acc, faq) => {
    // Kelompokkan berdasarkan kategori
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {})
);

const faqWithTitles = groupedFAQs.map(([category, faqs]) => ({
  title: category,
  faqs,
}));

console.log(groupedFAQs);

export default function FAQ() {
  useEffect(() => {
    const groupedFAQs = Object.entries(
      FAQ_LIST.reduce<GroupedFAQ>((acc, faq) => {
        // Kelompokkan berdasarkan kategori
        if (!acc[faq.category]) {
          acc[faq.category] = [];
        }
        acc[faq.category].push(faq);
        return acc;
      }, {})
    );

    console.log(groupedFAQs[0]);
  }, [FAQ_LIST]);
  return (
    <main className={`flex flex-col items-center w-full`}>
      <div
        className={`relative  flex flex-col  items-center justify-center  md:-mt-64 h-fit md:rounded-b-[120px] overflow-hidden`}
      >
        <Image
          alt={``}
          className={`top-0 md:-top-64 w-full md:w-[1440px] h-fit md:h-[850px]  rounded-2xl md:rounded-b-[120px] object-cover  shrink-0`}
          // src={`/images/hero-new/halaman bawah.jpg`}
          src={`/FAQ.jpg`}
          width={1920}
          height={1080}
        />
        <Image
          alt=""
          className="absolute w-8 bottom-4 left-4 md:w-20 md:bottom-10 md:left-10"
          src={"/halal.png"}
          width={1000}
          height={1000}
        />
        <div
          className={` px-4 flex flex-col items-center justify-start tracking-wider z-30 absolute md:top-64 py-8`}
        >
          <div
            style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}
            className={`font-heavitas  font-black text-text-themed mb-4`}
          >
            FAQ
          </div>
          <div
            // style={{ fontSize: "clamp(2rem, 5vw, 6rem)" }}
            className={`font-barlow text-4xl  text-[#715B3C] text-center hidden sm:flex`}
          >
            Frequently Asked Questions
          </div>
        </div>
      </div>
      <div
        className={`w-full max-w-[1080px] px-4 flex flex-col items-start justify-center gap-6 mt-20 md:mt-16 mb-40`}
      >
        {/* {FAQ_LIST.map((rows) => (
          <Accordion key={`faq-${rows.id}`} title={rows.question}>
            {rows.answer}
          </Accordion>
        ))} */}
        {faqWithTitles.map((rows) => (
          <>
            <p className="text-2xl font-semibold text-text-themed ">
              {rows.title}
            </p>
            <div className="flex flex-col w-full gap-6 mb-6">
              {rows.faqs.map((faqs) => (
                <Accordion key={`faq-${faqs.id}`} title={faqs.question}>
                  {faqs.answer}
                </Accordion>
              ))}
            </div>
          </>
        ))}

        {/* <Accordion title={"Apakah Bagoplek Halal?"}>
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
        </Accordion> */}
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
      {/* <Newsletter /> */}
    </main>
  );
}
