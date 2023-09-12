import React, { useState } from "react";
import Startup from "../assets/startup.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";

function Navbar2() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="h-screen bg-gray-200">
      <nav className="bg-white">
        <div className="flex justify-between items-center px-6 h-24 max-w-7xl mx-auto">
          {/* Left */}
          <div>
            <a href="">
              <img src={Startup} alt="logo" />
            </a>
          </div>

          {/* Middle */}
          <ul
            className={`md:flex md:static w-full md:w-auto absolute p-6 left-0 gap-8 top-24 transition-all duration-350 ease-out ${
              !isClicked && "-left-full"
            } bg-white`}
          >
            <NavLinks />
          </ul>

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
    </div>
  );
}

export default Navbar2;
