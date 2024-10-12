"use client";
import Input from "@/components/Atoms/input";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useState } from "react";

interface FormProps {
  nama: string;
  sender_email: string;
  message: string;
  whatsapp_number: string;
  subject: string;
}
export default function Partnership() {
  const [form, setForm] = useState<FormProps>({
    nama: "",
    sender_email: "",
    whatsapp_number: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const sendEmail = (e: any) => {
    setLoading(true);
    e.persist();
    e.preventDefault();

    emailjs
      .send(
        "service_8sgiadf",
        `template_tazrxal`,
        form as any,
        `8Zur_O2qSdVjdbiYO`
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          setForm({
            nama: "",
            sender_email: "",
            whatsapp_number: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <main className={`flex flex-col relative`}>
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
          className={`  flex flex-col items-center justify-start tracking-wider z-30 absolute top-0`}
        >
          <div
            className={`text-4xl md:text-5xl font-barlow font-black text-text-themedOrange mb-4`}
          >
            JOIN OUR
          </div>
          <div
            className={`text-4xl md:text-8xl font-barlow font-black text-[#715B3C] `}
          >
            PARTNERSHIP
          </div>
        </div>
      </div>
      <div className={`px-4 md:px-16 mt-16`}>
        <div
          className={`font-barlow font-black  text-3xl md:text-[64px] text-[#715B3C] mb-5 md:mb-20`}
        >
          Were Shaking Business Up!{" "}
        </div>
        <div className={`flex flex-col-reverse  md:flex-row gap-5`}>
          <div className={`flex flex-col gap-5 md:gap-16 md:w-[50%]`}>
            <div
              className={`font-barlow font-extrabold text-text-themedOrange text-3xl md:text-5xl`}
            >
              Join as our <span className={`text-text-themed`}>PARTNER</span>{" "}
              now!
            </div>
            <div
              className={`flex flex-col gap-5 md:gap-8 font-barlow font-medium md:text-3xl text-text-themed`}
            >
              <div>
                Dengan perolehan keuntungan hingga belasan juta tiap bulan,
                membuka gerai baru di Kota Anda!
              </div>
              <div>
                Mengutamakan brand sustainability adalah visi dari Bagoplek yang
                terus di kejar untuk mencapai tujuan besar kami. Kami juga
                mendukung operasional seluruh gerai dengan system support yang
                mengutamakan teknologi untuk memudahkan seluruh outlet
                menjalankan bisnis.
              </div>
            </div>
            <div className={`flex items-center justify-between`}>
              <div>
                <div
                  className={`text-text-themedOrange font-heavitas text-3xl md:text-5xl`}
                >
                  5+
                </div>
                <div
                  className={`text-text-themed font-barlow font-light md:text-2xl`}
                >
                  Years Exp
                </div>
              </div>
              <div>
                <div
                  className={`text-text-themedOrange font-heavitas text-3xl md:text-5xl`}
                >
                  20+
                </div>
                <div
                  className={`text-text-themed font-barlow font-light md:text-2xl`}
                >
                  Reseller
                </div>
              </div>
              <div>
                <div
                  className={`text-text-themedOrange font-heavitas text-3xl md:text-5xl`}
                >
                  120+
                </div>
                <div
                  className={`text-text-themed font-barlow font-light md:text-2xl`}
                >
                  Partner
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className={`w-full md:w-[50%]`}>
            <Image
              alt={``}
              className={`h-full rounded-3xl`}
              src={`/images/partnership/partnership-1.jpeg`}
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
      <div
        className={`px-4 md:px-16 mt-16 md:mt-28 flex flex-col w-full items-center justify-center `}
      >
        <div className={`md:w-[946px] text-center`}>
          <div
            className={`font-barlow font-extrabold text-text-themedOrange  text-3xl md:text-5xl tracking-wide mb-5 md:mb-16`}
          >
            Keuntungan menjadi{" "}
            <span className={`text-text-themed`}>PARTNER</span> Bagoplek
          </div>
          <div
            className={`font-barlow font-medium text-text-themed md:text-[30px]`}
          >
            Bergabunglah menjadi keluarga besar Bagoplek! Anda berkesempatan
            menjadi bagian dalam pertumbuhan industri F&B dengan keuntungan
            banyak keuntungan.
          </div>
        </div>
        <div
          className={`grid grid-cols-2 md:flex items-center justify-around w-full mt-8 md:mt-16`}
        >
          <div
            className={`w-[150px] flex flex-col items-center justify-center`}
          >
            <div>
              <Image
                alt={``}
                className={`w-16 md:w-32`}
                src={`/icons/carbon_delivery-truck.png`}
                width={120}
                height={120}
              />
            </div>
            <div
              className={`text-text-themed text-center font-barlow  font-medium md:text-2xl`}
            >
              Pengiriman <br />
              Tiap Minggu
            </div>
          </div>
          <div
            className={`w-[150px] flex flex-col items-center justify-center`}
          >
            <div>
              <Image
                alt={``}
                className={`w-16 md:w-32`}
                src={`/icons/vaadin_handshake.png`}
                width={120}
                height={120}
              />
            </div>
            <div
              className={`text-text-themed text-center font-barlow  font-medium md:text-2xl`}
            >
              Kontrak <br />
              Mudah
            </div>
          </div>
          <div
            className={`w-[150px] flex flex-col items-center justify-center`}
          >
            <div>
              <Image
                alt={``}
                className={`w-16 md:w-32`}
                src={`/icons/gis_timer.png`}
                width={120}
                height={120}
              />
            </div>
            <div
              className={`text-text-themed text-center font-barlow  font-medium md:text-2xl`}
            >
              Persiapan <br />2 Minggu
            </div>
          </div>
          <div
            className={`w-[150px] flex flex-col items-center justify-center`}
          >
            <div>
              <Image
                alt={``}
                className={`w-16 md:w-32`}
                src={`/icons/si-glyph_pin-location-map.png`}
                width={120}
                height={120}
              />
            </div>
            <div
              className={`text-text-themed text-center font-barlow  font-medium md:text-2xl`}
            >
              Lokasi Sesuai <br />
              Partner
            </div>
          </div>
          <div
            className={`w-[150px] flex flex-col items-center justify-center`}
          >
            <div>
              <Image
                alt={``}
                className={`w-16 md:w-32`}
                src={`/icons/dashicons_money-alt.png`}
                width={120}
                height={120}
              />
            </div>
            <div
              className={`text-text-themed text-center font-barlow  font-medium md:text-2xl`}
            >
              Keuntungan <br />
              Menjanjikan
            </div>
          </div>
        </div>
      </div>
      <div className={`px-4 md:px-16 w-full mt-16 md:mt-24`}>
        <div
          className={`bg-[#FBD449]  rounded-[20px] px-10 md:px-20 pt-12 md:pt-24 pb-8 flex flex-col gap-8 md:gap-0 md:flex-row items-start justify-between`}
        >
          <div className={`font-barlow text-text-themed`}>
            <div className={`font-extrabold text-4xl mb-4`}>Hubungi Kami</div>
            <div className={`font-medium text-2xl`}>
              Segera hubungi kami, kami siap membantu!
            </div>
            <div className={`mt-10 font-barlow font-extrabold text-2xl`}>
              Kontak Kami
            </div>
            <div className={`mt-8 flex flex-col gap-4`}>
              <div
                className={`flex gap-3 font-barlow font-medium md:text-lg bg-white bg-opacity-50 items-center px-3 py-2 w-fit rounded-md`}
              >
                <Image
                  src={`/icons/dashicons_email-alt.png`}
                  alt={``}
                  className={`w-5 md:w-10`}
                  width={40}
                  height={40}
                />
                info@bagoplek.com
              </div>
              <div
                className={`flex gap-3 font-barlow font-medium md:text-lg bg-white bg-opacity-50 items-center px-3 py-2 w-fit rounded-md`}
              >
                <Image
                  src={`/icons/ci_location.png`}
                  alt={``}
                  className={`w-5 md:w-10`}
                  width={40}
                  height={40}
                />
                Jl. Guntur No.20, Kota Malang
              </div>
            </div>
          </div>
          <form
            className={` text-text-themed w-full md:w-[50%]`}
            onSubmit={sendEmail}
          >
            <div className={`flex flex-col gap-2`}>
              <Input
                value={form.nama}
                id={`nama`}
                label={`Nama`}
                placeholder={`Masukkan Nama Anda`}
                required
                name={`nama`}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, nama: e.target.value }));
                }}
              />
              <div
                className={`flex flex-col lg:flex-row gap-2 lg:gap-9 w-full`}
              >
                <Input
                  value={form.sender_email}
                  type={`email`}
                  id={`email`}
                  label={`Email`}
                  placeholder={`Masukkan Email Anda`}
                  required
                  name={`sender_email`}
                  onChange={(e) => {
                    setForm((prev) => ({
                      ...prev,
                      sender_email: e.target.value,
                    }));
                  }}
                />
                <Input
                  value={form.whatsapp_number}
                  type={`tel`}
                  id={`nama`}
                  label={`No. HP`}
                  placeholder={`Masukkan No.HP Anda`}
                  name={`whatsapp_number`}
                  required
                  onChange={(e) => {
                    setForm((prev) => ({
                      ...prev,
                      whatsapp_number: e.target.value,
                    }));
                  }}
                />
              </div>
              <Input
                value={form.subject}
                id={`subject`}
                label={`Subjek`}
                placeholder={`Masukkan Subjek`}
                required
                name={`subject`}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, subject: e.target.value }));
                }}
              />
              <label htmlFor={`pesan`} className={`mb-2 font-barlow font-bold`}>
                Pesan
              </label>
              <textarea
                value={form.message}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, message: e.target.value }));
                }}
                name={`message`}
                placeholder={`Masukkan Pesan Anda`}
                id={`pesan`}
                className={`rounded-md px-5 py-4 resize-none h-[120px] focus:outline-none`}
              />
            </div>
            <div className={`text-end mt-10`}>
              <button
                disabled={loading}
                className={`bg-primary flex items-center justify-center text-white px-5 py-3 rounded-full w-full md:w-fit disabled:bg-[#969696] disabled:text-[#969696]`}
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-500 fill-gray-400"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  "Kirim Pesan"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
