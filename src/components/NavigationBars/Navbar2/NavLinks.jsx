import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { listItems } from "./data";

const NavLinks = () => {
  return (
    <>
      {listItems.map(({ name, subMenu }, index) => (
        <li className="group hover:cursor-pointer mb-4 md:mb-0" key={index}>
          <span>{name}</span>

          {subMenu && (
            <>
              <ChevronUpIcon className="hidden h-4 w-4 group-hover:inline ml-1" />
              <ChevronDownIcon className="inline h-4 w-4 group-hover:hidden ml-1" />

              {/* > Large devices Submenu */}
              <div className="hidden md:hover:block md:group-hover:block absolute top-15 pt-14 cursor-auto">
                <div className="relative grid grid-cols-3 gap-10 bg-white p-6">
                  <div className="h-4 w-4 absolute left-2 -top-2 bg-white rotate-45"></div>
                  {subMenu.map(({ header, subMenu2 }, index) => (
                    <div key={index}>
                      <h2 className="font-bold text-xl">{header}</h2>
                      <ul>
                        {subMenu2.map(({ name, link }, index) => (
                          <li>
                            <a
                              href={link}
                              className="hover:text-pink-700"
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

              {/* Mobile Devices Submenu */}
              <ul className="md:group-hover:hidden md:hover:hidden hidden group-hover:flex hover:flex flex-col gap-4 mt-4">
                {subMenu.map(({ header, subMenu2 }, index) => (
                  <li className="group/submenu" key={index}>
                    <span className="pl-4">{header}</span>
                    <ChevronUpIcon className="hidden h-4 w-4 group-hover/submenu:inline ml-1" />
                    <ChevronDownIcon className="inline h-4 w-4 group-hover/submenu:hidden ml-1" />

                    <ul className="hidden group-hover/submenu:flex flex-col gap-4 mt-4">
                      {subMenu2.map(({ name, link }, index) => (
                        <li className="pl-8 hover:text-pink-700" key={index}>
                          <a href={link}>{name}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
