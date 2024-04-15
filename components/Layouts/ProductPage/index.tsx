import Image from "next/image";

interface ProductPageProps {
  className?: string;
}

const ProductPage = ({ className }: ProductPageProps) => {
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
      <div className={`py-11 ${className}  flex w-full`}>
        <div
          className={`flex flex-col w-full  gap-10 md:gap-20 items-center justify-center`}
        >
          <div
            className={`text-center font-extrabold text-2xl  md:text-5xl leading-normal tracking-wider sm:leading-loose text-primary`}
          >
            EAT{" "}
            <span className={`text-3xl md:text-7xl text-primaryOrange`}>
              NOW
            </span>{" "}
            OR{" "}
            <span className={`text-3xl md:text-7xl text-primaryOrange`}>
              LATER
            </span>
            !
          </div>
          <div
            className={`flex items-center justify-center gap-16 md:gap-32 flex-col sm:flex-row`}
          >
            <div className={`flex flex-col items-center justify-center`}>
              <div>
                <Image
                  alt=""
                  src={`/product/foto2.png`}
                  width={500}
                  height={500}
                />
              </div>
              <div className={`text-primary mt-8 text-center font-semibold`}>
                <div className={`text-2xl md:text-4xl `}>
                  BAGOPLEK <span className={`font-black`}>PACKAGE</span>
                </div>
                <div className={`text-lg md:text-2xl mt-6`}>
                  &bull; Isi 10 Pcs + 1 Sambal
                </div>
                <div className={`text-lg md:text-2xl`}>
                  &bull; Isi 10 Pcs + 1 Sambal
                </div>
              </div>
            </div>
            <div className={`flex flex-col items-center justify-center`}>
              <div>
                <Image
                  alt=""
                  src={`/product/foto.png`}
                  width={500}
                  height={500}
                />
              </div>
              <div className={`text-primary mt-8 text-center font-semibold`}>
                <div className={`text-2xl md:text-4xl  `}>
                  BAGOPLEK <span className={`font-black`}>FROZEN</span>
                </div>
                <div className={`text-lg md:text-2xl mt-6`}>
                  &bull; Isi 10 Pcs + 1 Sambal
                </div>
                <div className={`text-lg md:text-2xl`}>
                  &bull; Isi 10 Pcs + 1 Sambal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductPage;
