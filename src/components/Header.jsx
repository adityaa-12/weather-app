import React, { useState } from "react";

const Header = () => {
  const [searchinput, setSearchInput] = useState("");
  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
  });

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleKeyDown = (e) => {
    const value = e.target.value;
    if (e.key === "Enter") {
      setSearchInput(value);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          alert("Error while getting user location", err);
        }
      );
    } else {
      alert("GeoLocation is not supported by this browser");
    }
  };

  return (
    <div className="w-[50vw] mx-auto max-sm:w-[90vw]">
      <div id="header" className="flex py-3.5 w-full">
        <div
          id="search-bar"
          className="w-full flex flex-row items-center gap-2.5"
        >
          <input
            type="text"
            placeholder="Search Here..."
            name="search"
            id="search"
            value={searchinput}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            className="w-full border border-stone-700 py-1.5 px-1.5 rounded-lg outline-none"
          />
          <button className="flex border border-stone-700 rounded-lg p-1.5 cursor-pointer hover:bg-stone-800">
            <span
              className="flex material-symbols-outlined"
              onClick={getUserLocation}
            >
              my_location
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
