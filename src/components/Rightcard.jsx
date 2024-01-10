import { WeatherCard } from "./WeatherCard";
export const Rightcard = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <WeatherCard
        className="nightCard"
        date=""
        city=""
        degree=""
        condition=""
        dayNight="/moon.png"
        dayNightShadow="/moonShadow.png"
      />
    </div>
  );
};
