import Image from "next/image";

interface LandingPageProps {
  className?: string;
}

const LandingPage = ({ className }: LandingPageProps) => {
  return (
    <div
      className={`sm:py-11 ${className}  flex w-full text-text-themed gap-4`}
    >
      {/* <div className={`flex flex-col w-full md:w-[60%] `}>
        <div
          className={`font-heavitas font-normal text-2xl md:text-5xl md:leading-[80px] tracking-wider sm:leading-loose `}
        >
          <span className={`text-4xl md:text-6xl text-text-themedOrange`}>
            BAGOPLEK
          </span>
          {` `}ARE MADE TO BRING{` `}
          <span className={`text-4xl md:text-5xl text-text-themedOrange`}>
            HAPPINESS
          </span>
        </div>
        <div className={`mt-6 text-lg sm:text-2xl font-sans`}>
          Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor commodo leo
          sapien quis praesent. Diam leo in aliquet consequat sollicitudin
          dignissim. Lectus augue diam id nisl amet urna. Duis neque lorem
          egestas neque cras molestie fames.
        </div>
        <div className={`mt-10`}>
          <button
            className={`bg-primaryOrange rounded-3xl px-11 py-3 text-white text-sm sm:text-lg hover:bg-opacity-50`}
          >
            Order Now
          </button>
        </div>
        <div className={`flex items-end justify-end mt-10 md:hidden`}>
          <Image
            className={``}
            src={`/bagoplek-1.png`}
            alt=""
            width={250}
            height={250}
          />
        </div>
        <div className={`mt-10 flex items-center gap-10 md:mt-40`}>
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
      </div> */}

      {/* <div
        className={`md:w-[40%] h-[780px] bg-gradient-to-br from-[#FCD848] to-[#FCD848] relative -mt-40 rounded-bl-[120px] z-30 md:block hidden min-w-96`}
      >
        <Image
          className={`absolute bottom-0 -left-32`}
          src={`/bagoplek-1.png`}
          alt=""
          width={409}
          height={409}
        />
        <Image
          className={`absolute top-24 right-44`}
          src={`/bagoplek-2.png`}
          alt=""
          width={235}
          height={235}
        />
        <Image
          className={`absolute top-96 right-36 rotate-[132deg] -z-10`}
          src={`/bagoplek-2.png`}
          alt=""
          width={165}
          height={165}
        />
        <div
          className={`absolute bottom-[200px] -rotate-90 -right-28 text-6xl opacity-20 font-extrabold hidden md:block`}
        >
          BAGOPLEK
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
