import React, { useState } from "react";
import Startup from "../assets/startup.svg";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function Navbar1() {
  const [isClicked, setIsClicked] = useState(false);
  const listItems = ["Home", "Features", "Blog", "Shop"];

  const menuItemStyle =
    "border-b-2 border-transparent hover:border-b-2 hover:border-[#1E0E62]";

  return (
    <nav className="w-full flex justify-between items-center h-24 px-4 max-w-7xl mx-auto text-[#1E0E62] fixed inset-0 z-50 bg-white">
      {/* Left */}
      <div>
        <a href="">
          <img src={Startup} alt="logo" />
        </a>
      </div>

      {/* Middle */}
      <ul
        className={`md:flex md:static gap-8 absolute top-24 
      ${!isClicked ? "-left-full" : "left-0"} 
      md:p-0 p-4 md:w-auto w-full md:shadow-none shadow-md transition-all duration-500 ease-out bg-white`}
      >
        {listItems.map((item) => (
          <li className="mb-4 md:mb-0">
            <a href="" className={menuItemStyle}>
              {item}
            </a>
          </li>
        ))}
        <li>
          <MagnifyingGlassIcon
            className={`h-6 w-6 cursor-pointer ${menuItemStyle}`}
          />
        </li>
      </ul>

      {/* Right */}
      <div className="flex items-center gap-4 text-xs md:text-base">
        <ul className="flex items-center gap-4">
          <li>
            <a href="" className={menuItemStyle}>
              Sign In
            </a>
          </li>
          <li>
            <a
              href=""
              className="inline-block px-6 py-2 bg-[#482BE7] hover:bg-[#432fb9] text-white rounded-full"
            >
              Sign Up
            </a>
          </li>
        </ul>
        {!isClicked ? (
          <Bars3Icon
            className="h-6 w-6 md:hidden hover:cursor-pointer hover:text-[#482BE7]"
            onClick={() => setIsClicked((prev) => !prev)}
          />
        ) : (
          <XMarkIcon
            className="h-6 w-6 md:hidden hover:cursor-pointer hover:text-[#482BE7]"
            onClick={() => setIsClicked((prev) => !prev)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar1;
