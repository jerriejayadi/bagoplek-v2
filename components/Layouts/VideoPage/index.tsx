import Image from "next/image";

interface VideoPageProps {
  className?: string;
}

const VideoPage = ({ className }: VideoPageProps) => {
  return (
    <div className={`relative w-full shrink-0 `}>
      <div className={`flex items-end justify-center`}>
        <Image
          alt=""
          src={`/Vector.png`}
          className={` w-[50%]   h-full`}
          width={`500`}
          height={"100"}
        />
        <Image
          alt=""
          src={`/Vector-1.png`}
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
      <div
        className={`py-11 ${className}  flex w-full bg-gradient-to-b from-[#FFECA1] to-[#F1D875]  `}
      >
        <div className={`flex flex-col w-full  gap-10 md:gap-20`}>
          <div
            className={`font-heavitas font-normal text-2xl  md:w-[60%] md:text-5xl leading-normal tracking-wider md:leading-[70px] text-text-themed`}
          >
            THERE’S A LITTLE BIT OF{" "}
            <span className={`md:text-[64px] text-4xl text-text-themedOrange`}>
              MAGIC
            </span>{" "}
            IN EVERY BITE
          </div>
          <div className={`bg-inherit flex items-center justify-center`}>
            <iframe
              src="https://www.tiktok.com/embed/7305599694116343045"
              className={`w-fit min-h-[680px] bg-inherit mx-auto rounded-sm`}
              allowFullScreen
              scrolling="no"
              allow="encrypted-media;"
            ></iframe>
          </div>
        </div>
      </div>{" "}
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
    </div>
  );
};

export default VideoPage;
