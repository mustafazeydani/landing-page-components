import React, { useState } from "react";
import Startup from "../assets/startup.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";

function Navbar2() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="bg-white h-24 fixed inset-0 z-50">
      <div className="h-full flex justify-between items-center px-6 max-w-7xl mx-auto">
        {/* Left */}
        <div>
          <a href="">
            <img src={Startup} alt="logo" />
          </a>
        </div>

        {/* Middle */}
        <ul className="hidden md:flex gap-8">
          <Menu />
        </ul>

        {/* MobileNav */}
        <div
          className={`md:hidden w-full absolute p-6 top-24 transition-all duration-350 ease-out ${
            !isClicked ? "-left-full" : "left-0"
          } bg-white`}
        >
          <MobileMenu />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href=""
            className="inline-block px-6 py-2 bg-blue-700 hover:bg-blue-800 hover:cursor-pointer text-white rounded-full"
          >
            Get Started
          </a>
          {!isClicked ? (
            <Bars3Icon
              className="h-6 w-6 hover:text-blue-900 hover:cursor-pointer md:hidden"
              onClick={() => setIsClicked((prev) => !prev)}
            />
          ) : (
            <XMarkIcon
              className="h-6 w-6 hover:text-blue-900 hover:cursor-pointer md:hidden"
              onClick={() => setIsClicked((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
