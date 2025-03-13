import ProductCard from "@/components/Organism/ProductCard";
import Image from "next/image";

interface ProductPageProps {
  className?: string;
}

const Products = ({ className }: ProductPageProps) => {
  return (
    <div className={`relative w-full shrink-0`}>
      <Image
        alt=""
        src={`/images/product/thumbnail-2.jpg`}
        className={`mt-28 md:mt-0`}
        width={1920}
        height={1080}
      />
      {/* <div className={`flex items-end justify-center`}>
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
      </div> */}
      <div className={`px-6 py-10 md:py-20 md:px-16 ${className}  flex w-full`}>
        <div
          className={`flex flex-col w-full  gap-10 md:gap-20 items-center justify-center`}
        >
          <div
            className={`font-heavitas text-center  text-base  md:text-[40px] leading-normal tracking-wider sm:leading-loose text-text-themed`}
          >
            EAT{" "}
            <span className={`text-xl md:text-[52px] text-primaryOrange`}>
              NOW
            </span>{" "}
            OR{" "}
            <span className={`text-xl md:text-[52px] text-primaryOrange`}>
              LATER
            </span>
            !
          </div>
          <div
            className={`flex items-center justify-center gap-10 flex-col sm:flex-row `}
          >
            <ProductCard
              name="Bagoplek Ready To Eat"
              image_src="/product/ready-to-eat.jpg"
            />
            <ProductCard
              name="Bagoplek Frozen"
              image_src="/product/frozen.jpg"
            />
            <ProductCard
              name="Sambal Serbaguna"
              image_src="/product/sambal-serbaguna.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
