import React from "react";
import { useWeather } from "../context/weatherContext";

const ForeCast = () => {
  const { weatherData } = useWeather();

  const parsedDate = (dateString) => {
    if (dateString == undefined) return new Date().toUTCString();

    const date = new Date(dateString);

    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  };
  return (
    <div className="w-[35vw] max-lg:w-[80vw] mx-auto max-sm:w-[95vw] mt-2.5 ">
      <div id="wrapper">
        <div
          id="main-container"
          className="px-2.5 py-2.5 border border-stone-800 rounded-lg"
        >
          <div
            id="temp-box"
            className="flex flex-row justify-between py-2.5 px-2.5"
          >
            <div id="right-icon" className="flex flex-col gap-2.5">
              <div id="loc" className="flex flex-col gap-1">
                <p
                  className="font-medium text-xl max-sm:text-lg flex flex-row gap-1"
                  id="city"
                >
                  {weatherData?.city || "Mumbai"},
                  <span>{weatherData?.country || "India"}</span>
                </p>
                <p className="font-medium text-stone-400 text-lg max-sm:text-sm text-wrap">
                  {parsedDate(weatherData?.date)}
                </p>
              </div>
              <div id="temp-icon" className="flex flex-col gap-2.5 mt-1.5">
                <img
                  src={
                    weatherData?.icon_url.replace("64x64", "128x128") ||
                    "not found"
                  }
                  className="w-24 h-24"
                  alt="Weather icon"
                />
                <p className="font-medium text-xl mt-1.5 max-sm:text-lg">
                  {weatherData?.temp_desc || "Cloudy"}
                </p>
              </div>
            </div>
            <div id="left-side" className="w-fit flex flex-row items-start">
              <div
                id="temp"
                className="flex flex-row items-start justify-start"
              >
                <p className="font-semibold text-6xl max-sm:text-4xl">
                  {weatherData?.temp || "32"}
                </p>
                <span className="font-semibold text-xl">°C</span>
              </div>
            </div>
          </div>

          <hr className="border-stone-800 my-1.5" />

          <div id="container-1" className="px-2.5 py-2.5 flex flex-col gap-2.5">
            <div id="head">
              <h2 className="text-xl font-semibold text-stone-500">
                Weather Conditions
              </h2>
            </div>

            <div
              id="wrapper"
              className="flex flex-row max-sm:flex-col gap-1.5 justify-between"
            >
              <div
                id="feel"
                className="flex flex-row gap-1.5 font-medium items-center text-lg"
              >
                <p>Feels like</p>
                <p className="font-semibold">
                  : {weatherData?.feelslike || 12.9}
                  <span>°C</span>
                </p>
              </div>
              <div
                id="humidity"
                className="flex flex-row gap-1.5 font-medium items-center text-lg"
              >
                <p>Humidity</p>:
                <p className="font-semibold">
                  {weatherData?.humidity || "45"}%
                </p>
              </div>
            </div>

            <div
              id="wrapper"
              className="flex flex-row gap-1.5 max-sm:flex-col justify-between"
            >
              <div
                id="wind"
                className="flex flex-row gap-1.5 font-medium items-center text-lg"
              >
                <p>Wind</p>:
                <p className="font-semibold">
                  {weatherData?.wind || "10.2"}
                  <span> Km/h</span>
                </p>
              </div>
              <div
                id="dew-point"
                className="flex flex-row gap-1.5 font-medium items-center text-lg"
              >
                <p>Dew Point</p>:
                <p className="font-semibold">
                  {weatherData?.dew_point || "8.9"}
                  <span>°C</span>
                </p>
              </div>
            </div>

            <div
              id="wrapper"
              className="flex flex-row max-sm:flex-col gap-1.5 justify-between"
            >
              <div
                id="uv-index"
                className="flex flex-row gap-1.5 font-medium items-center text-lg"
              >
                <p>UV Index</p>:
                <p className="font-semibold">
                  <span>{weatherData?.uv || "0"}</span> out of 10
                </p>
              </div>
              <div
                id="pressure"
                className="flex flex-row gap-1.5 font-medium items-center text-lg"
              >
                <p>Pressure</p>:
                <p className="font-semibold">
                  {weatherData?.pressure || "950"}
                  <span> mb</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeCast;
