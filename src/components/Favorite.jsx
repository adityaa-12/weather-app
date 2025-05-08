import React, { useEffect, useState } from "react";

const Favorite = ({ set }) => {
  const [fav, setFav] = useState([]);
  const [input, setInput] = useState("");

  const loadData = () => {
    const getData = localStorage.getItem("w-fav");
    if (getData) {
      let parsedData = JSON.parse(getData);
      setFav(parsedData);
    } else {
      return;
    }
  };

  const pushData = (text) => {
    if (!text) {
      alert("Invalid Input!");
      return;
    }
    const userData = localStorage.getItem("w-fav");
    const isExist = userData ? JSON.parse(userData) : [];
    isExist.push(text);
    localStorage.setItem("w-fav", JSON.stringify(isExist));
    setFav(isExist);
    setInput("");
  };

  const deleteLocation = (i) => {
    const updatedFav = fav.filter((_, index) => index !== i);
    setFav(updatedFav);
    localStorage.setItem("w-fav", JSON.stringify(updatedFav));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="w-[35vw] mx-auto mt-3.5 max-lg:w-[80vw] max-sm:w-[95vw]">
      <div id="wrapper">
        <div
          id="fav-container"
          className="flex flex-row font-medium gap-1.5 items-center"
        >
          <div id="input" className="w-full">
            <input
              type="text"
              name="fav-location"
              id="fav-location"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Your Favorite Locations.."
              className="border border-stone-800 px-2.5 py-2 rounded-md w-full outline-none"
            />
          </div>
          <div id="btn">
            <button
              onClick={() => pushData(input)}
              className="border border-stone-800 px-4.5 py-2 rounded-lg cursor-pointer hover:bg-stone-800 transition-all"
            >
              Save
            </button>
          </div>
        </div>
        <div id="fav-list" className="mt-2.5 flex flex-col gap-1.5">
          {fav.length === 0 ? (
            <div className="font-medium text-center">
              No Favorite Locations!
            </div>
          ) : (
            fav.map((loc, i) => (
              <div
                id="f-loc"
                key={i}
                className="flex flex-row font-medium justify-between border border-stone-200 rounded-md px-2.5 py-1.5"
              >
                <p>{loc}</p>
                <div id="wrapper">
                  <button
                    className="flex cursor-pointer hover:opacity-50"
                    onClick={() => deleteLocation(i)}
                  >
                    <span className="flex material-symbols-outlined">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
