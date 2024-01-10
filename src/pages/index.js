import Image from "next/image";
import { WeatherCard } from "@/components/WeatherCard";
import { Leftcard } from "@/components/Leftcard";
import { Search } from "@/components/Search";
import { Rightcard } from "@/components/Rightcard";
export default function Home() {
  return (
    <div className="bg-[#888888] w-screen h-lvh flex items-center justify-center">
      <div className="w-[1200px] h-[800px] flex rounded-3xl  overflow-hidden relative">
        <div className="absolute top-5 left-5">
          <Search />
        </div>
        <div className="w-1/2 h-full bg-[#F3F4F6] ">
          <Leftcard />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E]">
          <Rightcard />
        </div>
      </div>
    </div>
  );
}
