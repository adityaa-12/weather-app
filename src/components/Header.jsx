import React, { useEffect, useState } from "react";
import { getByName } from "../service/weatherService";
import { useWeather } from "../context/weatherContext";

const Header = ({ set }) => {
  useEffect(() => {
    getByName("Mumbai", setWeatherData);
    setTimeout(() => {
      set(false);
    }, 3500);
  }, []);

  const [localLoad, setLocalLoad] = useState(false);
  const [searchinput, setSearchInput] = useState("");
  const [location, setLocation] = useState({
    longitude: "",
    latitude: "",
  });

  const { setWeatherData } = useWeather();

  useEffect(() => {
    if (localLoad) {
      const timer = setTimeout(() => {
        set(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [localLoad]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleKeyDown = async (e) => {
    const value = e.target.value;
    if (e.key === "Enter" && value) {
      setSearchInput(value);
      set(true);
      setLocalLoad(true);
      await getByName(searchinput, setWeatherData);
      setTimeout(() => {
        set(false);
        setLocalLoad(false);
      }, 1500);
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          const combinedString = `${latitude},${longitude}`;
          set(true);
          setLocalLoad(true);
          await getByName(combinedString, setWeatherData);
          setTimeout(() => {
            set(false);
            setLocalLoad(false);
          }, 1500);
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
    <div className="w-[35vw] mx-auto max-lg:w-[80vw] max-sm:w-[95vw]">
      <div id="header" className="flex py-3.5 w-full font-medium">
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
            className="w-full border border-stone-800 py-1.5 px-1.5 rounded-lg outline-none"
          />
          <button className="flex border border-stone-800 rounded-lg p-1.5 cursor-pointer hover:bg-stone-800">
            <span
              className="flex material-symbols-outlined"
              onClick={getUserLocation}
            >
              my_location
            </span>
          </button>
          <a href="https://github.com/adityaa-12/weather-app" target="_blank" className="flex border border-stone-800 rounded-lg p-1.5 cursor-pointer hover:bg-stone-800">
            <span>
              <img src="https://img.icons8.com/ios11/512/FFFFFF/github.png" className="w-8" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
