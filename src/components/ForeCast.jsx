import React from "react";

const ForeCast = () => {
  return (
    <div className="w-[35vw] mx-auto max-sm:w-[90vw] mt-2.5">
      <div
        id="main-container"
        className="px-2.5 py-2.5 border border-stone-300 rounded-lg"
      >
        <div
          id="temp-box"
          className="flex flex-row justify-between py-2.5 px-2.5"
        >
          <div id="right-icon" className="flex flex-col gap-2.5">
            <div id="loc" className="flex flex-col gap-1">
              <p className="font-medium text-xl flex flex-row gap-1" id="city">
                San Francisco,
                <p>India</p>
              </p>
              <p className="font-medium text-stone-600 text-lg">
                25 November 2025
              </p>
            </div>
            <div id="temp-icon" className="flex flex-col gap-2.5 mt-1.5">
              <img src="/src/assets/sun.png" className="w-24 h-24" />
              <p className="font-medium text-xl mt-1.5">Clear Sun</p>
            </div>
          </div>
          <div id="left-side" className="flex flex-col gap-2.5">
            <div id="temp" className="flex flex-row">
              <p className="font-semibold text-7xl">28</p>
              <span className="font-semibold text-3xl">°C</span>
            </div>
          </div>
        </div>

        <hr className="border-stone-200 my-1.5" />
        
        <div id="container-1" className="px-2.5 py-2.5 flex flex-col gap-2.5">
          <div id="head">
            <h2 className="text-xl font-semibold text-stone-500">
              Weather Conditions
            </h2>
          </div>

          <div id="wrapper" className="flex flex-row justify-between">
          <div
            id="feel"
            className="flex flex-row gap-1.5 font-medium items-center text-lg"
          >
            <p>Feels like</p>
            <p className="font-semibold">:
              39.3<span>°C</span>
            </p>
          </div>
          <div
            id="humidity"
            className="flex flex-row gap-1.5 font-medium items-center text-lg"
          >
            <p>Humidity</p>:
            <p className="font-semibold">59%</p>
          </div>
          </div>

          <div id="wrapper" className="flex flex-row justify-between">
          <div
            id="wind"
            className="flex flex-row gap-1.5 font-medium items-center text-lg"
          >
            <p>Wind</p>:
            <p className="font-semibold">10<span>Km/h</span></p>
          </div>
          <div
            id="dew-point"
            className="flex flex-row gap-1.5 font-medium items-center text-lg"
          >
            <p>Dew Point</p>:
            <p className="font-semibold">
              39.3<span>°C</span>
            </p>
          </div>
          </div>

          <div id="wrapper" className="flex flex-row justify-between">
          <div
            id="uv-index"
            className="flex flex-row gap-1.5 font-medium items-center text-lg"
          >
            <p>UV Index</p>:
            <p className="font-semibold">
             <span>9.2</span>
            </p>
          </div>
          <div
            id="pressure"
            className="flex flex-row gap-1.5 font-medium items-center text-lg"
          >
            <p>Pressure</p>:
            <p className="font-semibold">1009<span> mb</span></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeCast;
