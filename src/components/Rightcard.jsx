import { WeatherCard } from "./WeatherCard";
export const Rightcard = (props) => {
  const { date, city, degree, condition } = props;
  return (
    <div className="flex items-center justify-center w-full h-full">
      <WeatherCard
        color="w-[250px] h-[500px]  bg-gradient-to-b from-[#111827] to-transparent rounded-2xl flex flex-col justify-between p-4 gap-4"
        textcolordate="text-white"
        textcolorcity="text-white text-2xl"
        date={date}
        city={city}
        degree={degree}
        condition={condition}
        dayNight="/moon.png"
        dayNightShadow="/moonShadow.png"
      />
    </div>
  );
};
