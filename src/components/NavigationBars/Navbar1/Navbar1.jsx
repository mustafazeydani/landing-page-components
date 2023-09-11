import React from "react";
import Startup from "./assets/startup.svg";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

function Navbar1() {
  // add underline animation
  const menuItemStyle =
    "border-b-2 border-transparent hover:border-b-2 hover:border-[#1E0E62] cursor-pointer";

  return (
    <nav className="flex justify-between items-center h-24 px-6 max-w-7xl mx-auto text-[#1E0E62]">
      {/* Left */}
      <div>
        <a href="">
          <img src={Startup} alt="logo" />
        </a>
      </div>

      {/* Middle */}
      <ul className="md:flex gap-8 hidden">
        <li className={menuItemStyle}>
          <a href="">Home</a>
        </li>
        <li className={menuItemStyle}>
          <a href="">Features</a>
        </li>
        <li className={menuItemStyle}>
          <a href="">Blog</a>
        </li>
        <li className={menuItemStyle}>
          <a href="/">Shop</a>
        </li>
        <li>
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
        </li>
      </ul>

      {/* Right */}
      <Bars3Icon className="inline h-6 w-6 md:hidden"/>
      <ul className="md:flex items-center gap-8 hidden">
        <li>
          <a href="">Sign In</a>
        </li>
        <li className="inline-block px-6 py-2 bg-[#482BE7] hover:bg-[#432fb9] text-white rounded-full cursor-pointer">
          <a href="">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar1;
