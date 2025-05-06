  import React from "react";

  const ForeCast = () => {
    return (
      <div className="w-full max-md:w-full text-nowrap">
        <div
          id="forecast-location"
          className="border flex flex-col gap-2.5 border-stone-700 px-2.5 py-2.5 rounded-lg w-full"
        >
          <div id="head">
            <h2 className="font-semibold text-xl">Today's Highlights</h2>
          </div>

          {/* First row container */}
          <div id="container-1" className="flex flex-wrap gap-2 w-full">
            <div id="sun" className="flex flex-wrap gap-2">
              <div
                id="sunrise"
                className="flex flex-row items-center w-full justify-between rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Sunrise</p>
                  <p className="text-lg">6:15 AM</p>
                </div>
                <span>
                  <img src="/src/assets/sunrise.png" className="w-7 h-7" />
                </span>
              </div>
              <div
                id="sunset"
                className="flex flex-row items-center gap-6 rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Sunset</p>
                  <p className="text-lg">7:15 PM</p>
                </div>
                <span>
                  <img src="/src/assets/sunset.png" className="w-7 h-7" />
                </span>
              </div>
            </div>

            <div id="rain">
              <div
                id="chance-of-rain"
                className="flex flex-row items-center gap-6 rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Chance of Rain</p>
                  <p className="text-lg">20%</p>
                </div>
                <span>
                  <img src="/src/assets/humidity.png" className="w-7 h-7" />
                </span>
              </div>
            </div>

            <div id="pressure">
              <div
                id="pressure"
                className="flex flex-row items-center gap-6 rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Pressure</p>
                  <p className="text-lg">1012 mb</p>
                </div>
                <span>
                  <img src="/src/assets/pressure.png" className="w-7 h-7" />
                </span>
              </div>
            </div>
          </div>

          {/* Second row container */}
          <div id="container-2" className="flex flex-wrap gap-2">
            <div id="temperature" className="rounded-lg">
              <div
                id="temp"
                className="flex flex-row items-center gap-12 rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Avg Temperature</p>
                  <p className="text-lg">
                    48 <span>°C</span>
                  </p>
                </div>
                <span>
                  <img src="/src/assets/temp.png" className="w-7 h-7" />
                </span>
              </div>
            </div>

            <div id="visibilty" className="rounded-lg">
              <div
                id="visible"
                className="flex flex-row items-center justify-between gap-10 rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Visibility</p>
                  <p className="text-lg"> 
                    10 <span>Km</span>
                  </p>
                </div>
                <span className="opacity-70">
                  <img src="/src/assets/view.png" className="w-7 h-7" />
                </span>
              </div>
            </div>

            <div id="gust-speed" className="rounded-lg">
              <div
                id="gust-speed"
                className="flex flex-row items-center justify-between gap-12 rounded-lg border border-stone-700 px-2.5 py-1.5"
              >
                <div className="font-medium">
                  <p className="text-stone-400">Gust Speed</p>
                  <p className="text-lg">
                    30 <span>Km/h</span>
                  </p>
                </div>
                <span className="opacity-70">
                  <img src="/src/assets/hurricane.png" className="w-7 h-7" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ForeCast;
