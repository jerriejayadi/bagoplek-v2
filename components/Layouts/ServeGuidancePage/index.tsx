import ServeGuidanceStep from "@/components/Organism/ServeGuidanceStep";
import Image from "next/image";

interface ServeGuidancePageProps {
  className?: string;
}

const ServeGuidancePage = ({ className }: ServeGuidancePageProps) => {
  return (
    <div className={`relative w-full shrink-0`}>
      <div className={`flex items-end justify-center`}>
        <Image
          alt=""
          src={`/Vector-3.png`}
          className={` w-[50%]   h-full`}
          width={`500`}
          height={"100"}
        />
        <Image
          alt=""
          src={`/Vector-4.png`}
          className={` w-[50%] h-full mt-4`}
          width={`500`}
          height={"100"}
        />
      </div>
      {/* <Image
        alt=""
        src={`/vector-3.png`}
        className={`absolute -top-20 left-0 w-[50%]   h-full `}
        width={`500`}
        height={"100"}
      />
      <Image
        alt=""
        src={`/Vector-1.png`}
        className={`absolute -top-20 right-0 w-[50%] h-full `}
        width={`500`}
        height={"100"}
      /> */}
      <div className={`py-11 ${className} flex w-full`}>
        <div
          className={`flex flex-col w-full  gap-10 md:gap-20 items-center justify-center md:items-start`}
        >
          <div className={`flex w-full `}>
            <div className={`flex flex-col w-full md:w-[60%] gap-7 md:gap-14`}>
              <div
                className={`text-left font-heavitas text-2xl  md:text-4xl leading-normal tracking-wider sm:leading-loose text-text-themed`}
              >
                SERVING &amp; STORING{" "}
                <span className={`text-3xl md:text-5xl text-primaryOrange`}>
                  GUIDANCE
                </span>
              </div>

              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 `}
              >
                <ServeGuidanceStep
                  imageURL={"/serve-guidance/oven.png"}
                  title={
                    <>
                      MENGGUNAKAN{" "}
                      <span className={`text-primaryOrange`}>OVEN</span>
                    </>
                  }
                  desc={
                    <>
                      Panaskan oven hingga 200 C, lalu panggang Bagoplek selama7
                      menit hingga garing
                    </>
                  }
                />
                <ServeGuidanceStep
                  imageURL={"/serve-guidance/frying-pan (1).png"}
                  title={
                    <>
                      DENGAN CARA{" "}
                      <span className={`text-primaryOrange`}>DIGORENG</span>
                    </>
                  }
                  desc={
                    <>
                      Panaskan minyak, lalu goreng Bagoplek menggunakan api
                      sedang selama 7 menit
                    </>
                  }
                />
                <ServeGuidanceStep
                  imageURL={"/serve-guidance/air-fryer.png"}
                  title={
                    <>
                      MENGGUNAKAN{" "}
                      <span className={`text-primaryOrange `}>AIRFRYER</span>
                    </>
                  }
                  desc={
                    <>
                      Atur air fryer sampai 200 C, lalu masukan Bagoplek selama
                      8-9 menit hingga garing.
                    </>
                  }
                />
                <ServeGuidanceStep
                  imageURL={"/serve-guidance/refrigerator.png"}
                  title={
                    <>
                      CARA{" "}
                      <span className={`text-primaryOrange`}>PENYIMPANAN</span>{" "}
                    </>
                  }
                  desc={
                    <>
                      Simpan di dalam freezer untuk ketahanan yang lebih lama.
                      Bagoplek dapat bertahan 2-3 Minggu
                    </>
                  }
                />
              </div>
            </div>
            <div
              className={`w-[40%]  items-center justify-center relative hidden sm:flex`}
            >
              <div
                className={` relative w-full max-w-[413px] overflow-hidden h-[600px] bg-gradient-to-br from-[#FCD848] to-[#FCE06E] rounded-tl-[233.14px] rounded-tr-[233.14px] rounded-bl-[93.26px] flex-grow-0`}
              >
                <Image
                  className={`absolute right-0 top-2 scale-x-[-1] w-[1000px]`}
                  alt={""}
                  src={`/serve-guidance/DSC02819.png`}
                  width={434}
                  height={434}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ServeGuidancePage;
