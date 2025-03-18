import Image from "next/image";

interface ServeGuidanceStepProps {
  imageURL: string;
  title: React.ReactNode;
  desc: React.ReactNode;
}

export default function ServeGuidanceStep({
  imageURL,
  title,
  desc,
}: ServeGuidanceStepProps) {
  return (
    <div className={`flex items-center gap-4 md:gap-6`}>
      <div className={`shrink-0`}>
        <Image
          className={`md:w-24 shrink-0`}
          alt=""
          src={imageURL}
          width={90}
          height={90}
        />
      </div>
      <div className={`flex flex-col text-text-themed gap-2 md:gap-4  `}>
        <div className={`text-lg md:text-xl  font-heavitas`}>{title}</div>
        <div className={`text-base  font-medium`}>{desc}</div>
      </div>
    </div>
  );
}
