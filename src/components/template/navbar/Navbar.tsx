import * as React from "react";

const Navbar = () => {
  return (
    <div className="bg-dark_blue text-cream flex justify-between px-16 h-20	items-center	">
      <div className="flex items-center">
        <p className="text-5xl mr-2.5">🐺</p>
        <p className="font-title">Jan-Kasper Jakubowski</p>
      </div>
      <div className="flex">
        <p className="mr-2.5">About me</p>
        <p>Articles</p>
      </div>
    </div>
  );
};

export default Navbar;
