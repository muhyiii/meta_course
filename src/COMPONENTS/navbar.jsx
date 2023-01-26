import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex px-20 py-5 inter items-center justify-between">
      <div className="flex items-center gap-x-3 justify-center">
        <img src={logo} alt="logo" className="w-14" />
        <p className="font-extrabold text-3xl">Meta Course</p>
      </div>
      <div className="changa space-x-5 text-xl">
        <NavLink>Home</NavLink>
        <NavLink>Program</NavLink>
        <NavLink>Prices</NavLink>
        <NavLink>About us</NavLink>
      </div>
      <div className=" space-x-5 ">
        <button className="   px-3 py-1 text-black rounded-full ">
          Login
        </button>
        <button className=" from-[#AD278F] bg-gradient-to-r to-[#8827AD]  px-5 py-1 text-white rounded-full ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
