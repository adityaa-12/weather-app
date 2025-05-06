import React from "react";
import Header from "./components/Header";
import ForeCast from "./components/ForeCast";
import Suggestion from "./components/Suggestion";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <ForeCast />
        <Suggestion />
        <Favorite />
        <Footer />
      </div>
    </>
  );
};

export default App;
