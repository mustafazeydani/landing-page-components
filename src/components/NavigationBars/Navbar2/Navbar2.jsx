import React, { useState } from "react";
import Startup from "../assets/startup-white.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar2 = () => {
  const listItems = ["Subscribe", "Register", "Sign In"];
  const [isClicked, setIsClicked] = useState(false);

  const SearchInput = () => (
    <div>
      <input
        className="w-48 py-1 px-4 rounded-full bg-transparent border border-gray-500 hover:border-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0"
        placeholder="Search"
        type="text"
      />
    </div>
  );

  const Menu = () => (
    <ul className="flex flex-col items-center md:flex-row gap-8">
      {listItems.map((item) => (
        <li>
          <a
            className="border-b-2 border-transparent hover:border-pink-700"
            href="#"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="bg-[#2F1893] text-white fixed inset-0 z-50 h-24">
      {/* NavBar */}
      <div className="h-full flex justify-between items-center max-w-7xl mx-auto px-6">
        {/* Search Input */}
        <div className="hidden md:block">
          <SearchInput />
        </div>

        {/* Logo */}
        <div>
          <a href="#">
            <img src={Startup} alt="logo" />
          </a>
        </div>

        {/* Menu */}
        <div className="hidden md:block">
          <Menu />
        </div>

        {!isClicked ? (
          <Bars3Icon
            onClick={() => {
              setIsClicked((prev) => !prev);
            }}
            className="hover:text-pink-700 hover:cursor-pointer h-6 w-6 md:hidden"
          />
        ) : (
          <XMarkIcon
            onClick={() => {
              setIsClicked((prev) => !prev);
            }}
            className="hover:text-pink-700 hover:cursor-pointer h-6 w-6 md:hidden"
          />
        )}
      </div>

      {/* Mobile NavBar */}
      <div
        className={`absolute top-24 ${
          isClicked ? "left-0" : "-left-full"
        } transition-full duration-200 ease-out flex flex-col items-center gap-4 md:hidden w-full bg-[#2F1893] pb-6`}
      >
        <SearchInput />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar2;
