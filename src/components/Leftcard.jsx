import Image from "next/image";
import { WeatherCard } from "./WeatherCard";
export const Leftcard = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <WeatherCard
        className="dayCard"
        date=""
        city=""
        degree=""
        condition=""
        dayNight="/icon.png"
        dayNightShadow="/shadow.png"
      />
    </div>
  );
};
