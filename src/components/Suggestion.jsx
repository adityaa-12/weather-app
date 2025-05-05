import React from "react";

const Suggestion = () => {
  return (
    <div className="w-[50vw] mx-auto mt-3.5">
      <div
        id="suggest-container"
        className="w-full border border-stone-700 rounded-lg flex flex-row gap-2.5 items-center px-1.5 py-2.5 italic font-medium"
      >
        <span>
          <img src="/src/assets/idea.png" className="w-7 h-7" />
        </span>
        <p>Here is the suggestioon for the user based on availabale data...</p>
      </div>
    </div>
  );
};

export default Suggestion;
