import React from "react";
import Header from "./components/Header";
import Temperature from "./components/Temperature";

const App = () => {
  
  return (
    <>
      <div className="w-screen h-screen bg-stone-900 text-white">
        <Header />
        <Temperature />
      </div>
    </>
  );
};

export default App;
