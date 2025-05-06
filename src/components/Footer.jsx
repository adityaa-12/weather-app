import React from "react";

const Footer = () => {
  return (
    <div className="w-[35vw] mx-auto bottom-0 absolute right-0 left-0">
      <div id="footer" className="px-2.5 py-2.5">
        <div id="container" className="flex flex-row justify-between items-center">
          <div id="credit" className="font-medium justify-start flex flex-row gap-1">
            <p className="flex flex-row gap-0.5">
              © <p>{new Date().getFullYear()}</p>
            </p>
            <p></p>
            <p>Made by Aditya</p>
          </div>
          <div id="links" className="font-medium">
            <a href="#" className="underline">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
