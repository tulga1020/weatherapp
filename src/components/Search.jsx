import { IoMdSearch } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

export const Search = (props) => {
  const [city, setCity] = useState("");
  const cityNameHandler = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex rounded-2xl py-2 px-4 w-[320px]  bg-white gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="flex shrink-0"
          onClick={city}
        >
          <g opacity="0.2">
            <path
              d="M31.5098 28.51H29.9298L29.3698 27.97C31.3298 25.69 32.5098 22.73 32.5098 19.51C32.5098 12.33 26.6898 6.51001 19.5098 6.51001C12.3298 6.51001 6.50977 12.33 6.50977 19.51C6.50977 26.69 12.3298 32.51 19.5098 32.51C22.7298 32.51 25.6898 31.33 27.9698 29.37L28.5098 29.93V31.51L38.5098 41.49L41.4898 38.51L31.5098 28.51ZM19.5098 28.51C14.5298 28.51 10.5098 24.49 10.5098 19.51C10.5098 14.53 14.5298 10.51 19.5098 10.51C24.4898 10.51 28.5098 14.53 28.5098 19.51C28.5098 24.49 24.4898 28.51 19.5098 28.51Z"
              fill="black"
            />
          </g>
        </svg>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={city}
          onChange={(event) => cityNameHandler(event)}
          className="bg-white w-[300px] h-10 size-48 hover:border-0"
        />
      </div>
      {/* <div className="flex rounded-2xl w-[320px] bg-white flex-col">
        <div className="cache">
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
          <div>{city}</div>
        </div>
        <div className="cache">
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
          <div>{city}</div>
        </div>
        <div className="cache">
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
          <div>{city}</div>
        </div>
      </div> */}
    </div>
  );
};
