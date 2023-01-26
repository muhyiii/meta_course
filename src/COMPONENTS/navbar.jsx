import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex px-40 my-2 inter items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-14" />
        <p className="font-extrabold text-3xl">Meta Course</p>
      </div>
      <div className="changa space-x-5 text-xl">
        <NavLink>Home</NavLink>
        <NavLink>Program</NavLink>
        <NavLink>Prices</NavLink>
        <NavLink>About us</NavLink>
      </div>
      <div className="changa space-x-5 ">
        <button className="   px-3 py-1 text-black rounded-full tracking-widest">
          Login
        </button>
        <button className="bg-gradient-to-r from-purple-500 to bg-pink-700   px-3 py-1 text-white rounded-full tracking-widest">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
