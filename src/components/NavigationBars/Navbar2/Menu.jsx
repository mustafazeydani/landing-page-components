import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { listItems } from "./data";

const Menu = () => {
  return (
    <ul>
      <a href="#">Home</a>
      {listItems.map(({ name, subMenu }, index) => (
        <li className="group hover:cursor-pointer" key={index}>
          <span>{name}</span>
          {subMenu && (
            <>
              <ChevronUpIcon className="hidden h-4 w-4 group-hover:inline ml-1" />
              <ChevronDownIcon className="inline h-4 w-4 group-hover:hidden ml-1" />

              <div className="hidden hover:block group-hover:block absolute top-15 pt-14 cursor-auto">
                <div className="relative grid grid-cols-3 gap-10 bg-white p-6">
                  <div className="h-4 w-4 absolute left-2 -top-2 bg-white rotate-45"></div>
                  {subMenu.map(({ header, subMenu2 }, index) => (
                    <div key={index}>
                      <h2 className="font-bold text-xl mb-2">{header}</h2>
                      <ul>
                        {subMenu2.map(({ name, link }, index) => (
                          <li>
                            <a
                              href={link}
                              className="inline-block mb-1 hover:text-pink-700"
                              key={index}
                            >
                              {name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
