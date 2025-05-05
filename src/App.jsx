import React from "react";
import Header from "./components/Header";
import Temperature from "./components/Temperature";
import ForeCast from "./components/ForeCast";
import Suggestion from "./components/Suggestion";
import Favorite from "./components/Favorite";

const App = () => {
  
  return (
    <>
      <div>
        <Header />  
        <div className="flex w-[55vw] max-sm:w-[90vw] max-md:flex-col mx-auto flex-row items-start gap-2.5">
        <Temperature />
        <ForeCast />
        </div>
        <Suggestion />
        <Favorite />
      </div>
    </>
  );
};

export default App;
