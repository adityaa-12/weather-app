import React from "react";

const Temperature = () => {
  return (
    <div className="w-xl max-md:w-fit text-nowrap">
      <div
        id="temp-card-main"
        className="border-stone-700 border px-2.5 py-2.5 rounded-lg"
      >
        <div id="temp-info" className="flex flex-row gap-12 justify-between py-1.5 px-0.5">
          <div id="left-info-temp" className="flex flex-col gap-3.5">
            <div id="temp" className="flex flex-row items-start font-medium px-1.5">
              <p className="text-5xl">28</p>
              <p className="text-2xl">°C</p>
            </div>
            <div id="loc-date" className="flex flex-col gap-1.5">
              <div id="location" className="font-medium w-fit px-1.5 rounded-lg py-0.5">Mumbai</div>
              <div id="date" className="px-1.5 flex flex-col text-stone-400 font-medium">
                <p className="text-lg">Sunday</p>
                <p>25 Dec, 2025</p>
              </div>
            </div>
            <div id="desc" className="flex flex-row items-center gap-1.5 font-medium">
              <span><img src="/src/assets/sun.png" className="w-5 h-5" /></span>
              <p>Cloud Sunny</p>
            </div>
          </div>
          <div id="right-icon">
            <div id="icon" className="p-1">
              <img src="/src/assets/sun.png" width={80} height={80} />
            </div>
          </div>
        </div>
        <hr className="border-stone-700 my-1.5" />
        <div id="temp-other-info" className="mt-3.5 px-0.5 py-0.5 flex flex-col gap-2.5">
          <div id="wrapper" className="flex flex-row justify-between">
            <div id="wind" className="flex flex-row items-center gap-2.5 text-md font-medium">
              <span><img src="/src/assets/wind.png" className="w-5 h-5" /></span>
              <p>9 Km/h</p>
            </div>
            <div id="humidity" className="flex flex-row items-center gap-2.5 text-md font-medium">
              <span><img src="/src/assets/humidity.png" className="w-5 h-5" /></span>
              <p>80%</p>
            </div>
          </div>
          <div id="wrapper" className="flex flex-row justify-between">
            <div id="wind" className="flex flex-row items-center gap-2.5 text-md font-medium">
              <span><img src="/src/assets/uv.png" className="w-5 h-5" /></span>
              <p className="flex flex-row items-center gap-1">5 <span>(Moderate)</span></p>
            </div>
          </div>
        </div>
        <div id="last-updated" className="flex flex-row gap-1.5 text-stone-500 font-medium text-sm mt-1.5">
          <p>Last Updated at :</p>
          <p>{new Date().toUTCString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
