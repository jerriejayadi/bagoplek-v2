import Image from "next/image";

interface LandingPageProps {
  className?: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
  return (
    <main
      className={`sm:px-14 sm:py-11 ${className}  flex w-full text-primary gap-4`}
    >
      <div className={`flex flex-col w-full sm:w-[60%] `}>
        <div className={`font-extrabold text-lg sm:text-5xl`}>
          <span className={`text-4xl sm:text-6xl text-primaryOrange`}>
            BAGOPLEK
          </span>
          {` `}ARE MADE TO BRING{` `}
          <span className={`text-4xl sm:text-5xl text-primaryOrange`}>
            HAPPINESS
          </span>
        </div>
        <div className={`mt-6 text-lg sm:text-2xl`}>
          Lorem ipsum dolor sit amet consectetur. Mauris viverra erat mauris
          porta lacus mauris sed.
        </div>
        <div className={`mt-10`}>
          <button
            className={`bg-primaryOrange rounded-3xl px-11 py-3 text-white text-sm sm:text-lg hover:bg-opacity-50`}
          >
            Order Now
          </button>
        </div>
        <div className={`mt-40 flex items-center gap-10`}>
          <Image
            alt=""
            src={"/ic-twotone-facebook.svg"}
            width={40}
            height={40}
          />
          <Image
            alt=""
            src={"/icons/ic-ri_instagram-fill.svg"}
            width={40}
            height={40}
          />
        </div>
      </div>

      <div
        className={`w-[40%] h-[780px] bg-gradient-to-br from-[#FCD848] to-[#FCD848] relative -mt-40 rounded-bl-[120px] -z-30 sm:block hidden`}
      >
        <Image
          className={`absolute bottom-0 -left-32`}
          src={`/bagoplek-1.png`}
          alt=""
          width={409}
          height={409}
        />
        <Image
          className={`absolute top-24 left-[263px]`}
          src={`/bagoplek-2.png`}
          alt=""
          width={235}
          height={235}
        />
        <Image
          className={`absolute top-96 left-[312px] rotate-[132deg]`}
          src={`/bagoplek-2.png`}
          alt=""
          width={165}
          height={165}
        />
        <div
          className={`absolute bottom-[250px] -rotate-90 left-[435px] text-6xl opacity-20 font-extrabold`}
        >
          BAGOPLEK
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
