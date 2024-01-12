import Image from "next/image";
import { Icons } from "@/components/Icons";
export const WeatherCard = (props) => {
  const {
    textcolordate,
    textcolorcity,
    color,
    date,
    city,
    degree,
    condition,
    dayNight,
    dayNightShadow,
  } = props;
  return (
    <div
      className={color}
      // className=" //"w-[250px] h-[500px] bg-white rounded-2xl flex flex-col justify-between p-4 g-4
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className={textcolordate}>{date}</div>
          <div className={textcolorcity}>{city}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M18.4768 25.5772L23.1596 17.2151C26.2226 11.7453 22.2691 5 16 5C9.73095 5 5.77737 11.7453 8.84045 17.2151L13.5232 25.5772C14.6072 27.5128 17.3928 27.5128 18.4768 25.5772Z"
            stroke="#4B5563"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="16"
            cy="13"
            r="2"
            stroke="#4B5563"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="relative w-[200px] h-[200px]">
        <div className="w-[120px] h-[120px] absolute top-[30%] left-[40%]">
          <Image src={dayNightShadow} layout="fill" />
        </div>
        <div className="w-[150px] h-[150px] absolute top-[20%] left-[20%]">
          <Image src={dayNight} layout="fill" />
        </div>
      </div>
      <div className="flex justify-center  text-8xl bold text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500">
        {degree}&deg;
      </div>
      <div className="mx-12 text-[#FF8E27]">{condition}</div>
      <div className=" flex justify-center items-center ">
        <Icons />
      </div>
    </div>
  );
};
