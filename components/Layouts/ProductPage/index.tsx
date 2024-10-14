import Image from "next/image";

interface ProductPageProps {
  className?: string;
}

const Products = ({ className }: ProductPageProps) => {
  return (
    <div className={`relative w-full shrink-0`}>
      <Image
        alt=""
        src={`/images/product/thumbnail.jpeg`}
        className={``}
        width={1920}
        height={1080}
      />
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
      <div className={`p-6 md:py-11 md:px-16 ${className}  flex w-full`}>
        <div
          className={`flex flex-col w-full  gap-10 md:gap-20 items-center justify-center`}
        >
          <div
            className={`font-heavitas text-center  text-2xl  md:text-[40px] leading-normal tracking-wider sm:leading-loose text-text-themed`}
          >
            EAT{" "}
            <span className={`text-3xl md:text-[52px] text-primaryOrange`}>
              NOW
            </span>{" "}
            OR{" "}
            <span className={`text-3xl md:text-[52px] text-primaryOrange`}>
              LATER
            </span>
            !
          </div>
          <div
            className={`flex items-center justify-center gap-10 flex-col sm:flex-row `}
          >
            <div
              className={`flex flex-col items-center  bg-white shadow-xl h-full rounded-[20px]`}
            >
              <div className={`flex aspect-square overflow-hidden `}>
                <Image
                  alt=""
                  className={`size-[400px] rounded-t-lg object-cover`}
                  src={`/product/foto2.png`}
                  width={400}
                  height={400}
                />
              </div>
              <div
                className={`text-text-themed p-4 md:p-7 text-center font-semibold flex flex-col items-center`}
              >
                <div className={`text-2xl p-4`}>
                  BAGOPLEK <span className={`font-black`}>PACKAGE</span>
                </div>
                <div className={`text-base mt-6`}>
                  &bull; Isi 10 Pcs + 1 Sambal
                </div>
                <div className={`text-base`}>&bull; Isi 5 Pcs + 1 Sambal</div>
              </div>
            </div>
            <div
              className={`flex flex-col items-center bg-white shadow-xl h-full rounded-[20px]`}
            >
              <div className={`flex aspect-square overflow-hidden `}>
                <Image
                  alt=""
                  className={`size-[400px] rounded-t-lg object-cover`}
                  src={`/product/foto.png`}
                  width={400}
                  height={400}
                />
              </div>
              <div
                className={`text-text-themed text-center font-semibold py-7 flex flex-col items-center`}
              >
                <div className={`text-2xl p-4`}>
                  BAGOPLEK <span className={`font-black`}>FROZEN</span>
                </div>
                <div className={`text-base mt-5`}>
                  &bull; Isi 10 Pcs + 1 Sambal
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col items-center bg-white shadow-xl h-full rounded-[20px]`}
            >
              <div
                className={`flex aspect-square overflow-hidden object-cover `}
              >
                <Image
                  className={`size-[400px] rounded-[20px] `}
                  alt=""
                  src={`/sambal.jpeg`}
                  width={400}
                  height={400}
                />
              </div>
              <div
                className={`text-text-themed text-center font-semibold my-auto p-4`}
              >
                <div className={`text-2xl  `}>
                  SAMBAL <span className={`font-black`}>SERBAGUNA</span>
                </div>
                <div className={`text-base mt-5`}>
                  &bull; 1 botol berisi 300ml
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
