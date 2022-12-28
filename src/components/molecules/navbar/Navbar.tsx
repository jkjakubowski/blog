import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="bg-dark_blue text-cream flex justify-between px-16 h-20	items-center	">
      <div className="flex items-center">
        <p className="text-5xl mr-2.5">🐺</p>
        <p className="text-xl font-title">Jan-Kasper Jakubowski</p>
      </div>
      <div className="flex">
        <Link to="/" className="mr-2.5">
          About me
        </Link>
        <Link to="/articles">Articles</Link>
      </div>
    </div>
  );
};

export default Navbar;
