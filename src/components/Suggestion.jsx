import React from "react";
import { useWeather } from "../context/weatherContext";
import { getTips } from "../util/suggestAlgo";

const Suggestion = () => {
  const { weatherData } = useWeather();
  return (
    <div className="w-[35vw] mx-auto mt-3.5 max-lg:w-[80vw] max-sm:w-[95vw]">
      <div
        id="suggest-container"
        className="w-full border border-stone-800 rounded-lg flex flex-row gap-2.5 items-center px-1.5 py-2.5 font-medium"
      >
        <span className="flex">
          <span className="flex material-symbols-outlined">lightbulb_2</span>
        </span>
        <p>{getTips(weatherData.temp_desc)}</p>
      </div>
    </div>
  );
};

export default Suggestion;
