import { useState } from "react";
export const Suggestion = (props, { setWeather }) => {
  const { city, setCity, country_code, time_zone } = props;

  const [showsuggestion, setShowsuggestion] = useState("none");
  const cityNameHandler = (event) => {
    setCity(event.target.value);
  };
  const fetchCordinate = async (queryName) => {
    if (!queryName) {
      return;
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryName}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;
    const res = await axios(url);
    return res.data;
  };

  const fetchWeather = async () => {
    const res = await fetchCordinate(city);
    const coordinates = res.features[0].geometry.coordinates;
    const data = await axios(
      `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${coordinates[1]}&lon=${coordinates[0]}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
          "x-rapidapi-key":
            "be4af8700emsh02325ebe33a668ap1cdd50jsn94ec61e20286",
        },
      }
    );
    setWeather(data);
  };

  return (
    <div className="flex rounded-2xl w-[320px] bg-white flex-col absolute top-[12%] left-5">
      {/* <div className="cache" onChange={(event) => cityNameHandler(event)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          className="flex shrink-0"
        >
          <g opacity="0.2">
            <path
              d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
              fill="black"
            />
            <path
              d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
              fill="black"
            />
          </g>
        </svg>
        <div value={city}>{city.city_name}</div>
      </div>
      <div className="cache" onChange={(event) => cityNameHandler(event)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          className="flex shrink-0"
        >
          <g opacity="0.2">
            <path
              d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
              fill="black"
            />
            <path
              d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
              fill="black"
            />
          </g>
        </svg>
        <div value={city}>
          {city}
          {country_code}
        </div>
      </div> */}
      <div className="cache" onChange={() => fetchWeather()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          className="flex shrink-0"
        >
          <g opacity="0.2">
            <path
              d="M20 3.33334C13.55 3.33334 8.33331 8.55001 8.33331 15C8.33331 23.75 20 36.6667 20 36.6667C20 36.6667 31.6666 23.75 31.6666 15C31.6666 8.55001 26.45 3.33334 20 3.33334ZM11.6666 15C11.6666 10.4 15.4 6.66668 20 6.66668C24.6 6.66668 28.3333 10.4 28.3333 15C28.3333 19.8 23.5333 26.9833 20 31.4667C16.5333 27.0167 11.6666 19.75 11.6666 15Z"
              fill="black"
            />
            <path
              d="M20 19.1667C22.3012 19.1667 24.1666 17.3012 24.1666 15C24.1666 12.6988 22.3012 10.8333 20 10.8333C17.6988 10.8333 15.8333 12.6988 15.8333 15C15.8333 17.3012 17.6988 19.1667 20 19.1667Z"
              fill="black"
            />
          </g>
        </svg>
        <div onChange={city} className="flex gap-2">
          <div>{city},</div>
          <div>{country_code},</div>
          <div>{time_zone}</div>
        </div>
      </div>
    </div>
  );
};
