import { useState } from "react";
import { Leftcard } from "@/components/Leftcard";
import { Search } from "@/components/Search";
import { Rightcard } from "@/components/Rightcard";
export default function Home() {
  const [weather, setWeather] = useState([]);

  return (
    <div className="bg-[#888888] w-screen h-lvh flex items-center justify-center">
      <div className="w-[1200px] h-[800px] flex rounded-3xl  overflow-hidden relative">
        <div className="absolute top-5 left-5">
          <Search setWeather={setWeather} />
        </div>
        <div className="w-1/2 h-full bg-[#F3F4F6]">
          <Leftcard
            city={weather.data?.city_name}
            degree={weather.data?.data[39].temp}
            date={weather.data?.data[39].datetime}
            condition={weather.data?.data[39].weather.description}
          />
        </div>
        <div className="w-1/2 h-full bg-[#0F141E]">
          <Rightcard
            city={weather.data?.city_name}
            degree={weather.data?.data[39].dewpt}
            date={weather.data?.data[39].datetime}
            condition={weather.data?.data[39].weather.description}
          />
        </div>
        <div className="h-100px w-100px rounded-full"></div>
        <div className="bg-[#F3F4F6] rounded-full h-[120px] w-[120x] p-2 gap-4 flex items-center justify-center absolute top-[44%] left-[45%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="86"
            viewBox="0 0 43 86"
            fill="none"
          >
            <path
              d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
              fill="#111111"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="86"
            viewBox="0 0 43 86"
            fill="none"
          >
            <path
              d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
              fill="#111111"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
