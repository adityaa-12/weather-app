import React, { useState } from "react";
import Header from "./components/Header";
import ForeCast from "./components/ForeCast";
import Suggestion from "./components/Suggestion";
import Favorite from "./components/Favorite";
import Loading from "./components/Loading";
import { WeatherProvider } from "./context/weatherContext";

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <WeatherProvider>
      <div>
        <Header set={setLoading} />
        {!loading && <ForeCast />}
        {!loading && <Suggestion />}
        {!loading && <Favorite set={setLoading} />}
        {loading && <Loading />}
      </div>
    </WeatherProvider>
  );
};

export default App;
