import Input from "@/components/Atoms/input";
import Image from "next/image";

export default function Partnership() {
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
            className={`text-4xl md:text-5xl font-barlow font-black text-primaryOrange mb-4`}
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
              className={`font-barlow font-extrabold text-primaryOrange text-3xl md:text-5xl`}
            >
              Join as our <span className={`text-primary`}>PARTNER</span> now!
            </div>
            <div
              className={`flex flex-col gap-5 md:gap-8 font-barlow font-medium md:text-3xl text-primary`}
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
                  className={`text-primaryOrange font-heavitas text-3xl md:text-5xl`}
                >
                  5+
                </div>
                <div
                  className={`text-primary font-barlow font-light md:text-2xl`}
                >
                  Years Exp
                </div>
              </div>
              <div>
                <div
                  className={`text-primaryOrange font-heavitas text-3xl md:text-5xl`}
                >
                  20+
                </div>
                <div
                  className={`text-primary font-barlow font-light md:text-2xl`}
                >
                  Reseller
                </div>
              </div>
              <div>
                <div
                  className={`text-primaryOrange font-heavitas text-3xl md:text-5xl`}
                >
                  120+
                </div>
                <div
                  className={`text-primary font-barlow font-light md:text-2xl`}
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
            className={`font-barlow font-extrabold text-primaryOrange  text-3xl md:text-5xl tracking-wide mb-5 md:mb-16`}
          >
            Keuntungan menjadi <span className={`text-primary`}>PARTNER</span>{" "}
            Bagoplek
          </div>
          <div
            className={`font-barlow font-medium text-primary md:text-[30px]`}
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
              className={`text-primary text-center font-barlow  font-medium md:text-2xl`}
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
              className={`text-primary text-center font-barlow  font-medium md:text-2xl`}
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
              className={`text-primary text-center font-barlow  font-medium md:text-2xl`}
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
              className={`text-primary text-center font-barlow  font-medium md:text-2xl`}
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
              className={`text-primary text-center font-barlow  font-medium md:text-2xl`}
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
          <div className={`font-barlow text-primary`}>
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
          <div className={` text-primary w-full md:w-[50%]`}>
            <div className={`flex flex-col gap-2`}>
              <Input
                id={`nama`}
                label={`Nama`}
                placeholder={`Masukkan Nama Anda`}
              />
              <div
                className={`flex flex-col lg:flex-row gap-2 lg:gap-9 w-full`}
              >
                <Input
                  type={`email`}
                  id={`email`}
                  label={`Email`}
                  placeholder={`Masukkan Email Anda`}
                />
                <Input
                  type={`tel`}
                  id={`nama`}
                  label={`No. HP`}
                  placeholder={`Masukkan No.HP Anda`}
                />
              </div>
              <Input
                id={`subject`}
                label={`Subjek`}
                placeholder={`Masukkan Subjek`}
              />
              <label htmlFor={`pesan`} className={`mb-2 font-barlow font-bold`}>
                Pesan
              </label>
              <textarea
                placeholder={`Masukkan Pesan Anda`}
                id={`pesan`}
                className={`rounded-md px-5 py-4 resize-none h-[120px] focus:outline-none`}
              />
            </div>
            <div className={`text-end mt-10`}>
              <button
                className={`bg-primary text-white px-5 py-3 rounded-full w-full md:w-fit`}
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
