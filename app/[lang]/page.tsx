import LandingPage from "@/components/Layouts/LandingPage";
import ProductPage from "@/components/Layouts/ProductPage";
import ServeGuidancePage from "@/components/Layouts/ServeGuidancePage";
import VideoPage from "@/components/Layouts/VideoPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <LandingPage className="px-8 md:px-16 py-28" />
      <VideoPage className="px-8 md:px-16 " />
      <ProductPage className="px-8 md:px-16 " />
      <ServeGuidancePage className="px-8 md:px-16 " />
    </main>
  );
}
