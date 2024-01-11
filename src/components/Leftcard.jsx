import Image from "next/image";
import { WeatherCard } from "./WeatherCard";
import { Search } from "./Search";
import { useState } from "react";
export const Leftcard = (props) => {
  // const [weather, setWeather] = useState([]);
  const { date, city, degree, condition } = props;
  return (
    <div className="flex items-center justify-center w-full h-full">
      <WeatherCard
        color="w-[250px] h-[500px] bg-white rounded-2xl flex flex-col justify-between p-4 gap-4"
        textcolordate="text-black"
        textcolorcity="text-black text-3xl"
        date={date}
        city={city}
        degree={degree}
        condition={condition}
        dayNight="/icon.png"
        dayNightShadow="/shadow.png"
      />
    </div>
  );
};
