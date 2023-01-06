import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>ALL</Link>
      <Link to={"/HTML"}>HTML</Link>
      <Link to={"/CSS"}>CSS</Link>
      <Link to={"/JAVASCRIPTS"}>JAVASCRIPTS</Link>
    </div>
  );
};

export default Navbar;
     