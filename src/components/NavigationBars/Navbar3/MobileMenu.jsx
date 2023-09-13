import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { listItems } from "./data";

const MobileMenu = () => {
  const [openHeading, setOpenHeading] = useState("");
  const [openSubHeading, setOpenSubHeading] = useState("");

  const handleOpenHeading = (name) => {
    if (name === openHeading) setOpenHeading("");
    else setOpenHeading(name);
  };

  const handleOpenSubHeading = (subHeading) => {
    if (subHeading === openSubHeading) setOpenSubHeading("");
    else setOpenSubHeading(subHeading);
  };

  return (
    <ul>
      <a href="#">Home</a>
      {listItems.map(({ name, subMenu }, index) => (
        <li className="my-8" key={index}>
          <div
            className="flex pr-4 justify-between hover:text-pink-700 hover:cursor-pointer"
            onClick={() => handleOpenHeading(name)}
          >
            <span>{name}</span>
            {openHeading !== name ? (
              <ChevronDownIcon className={`h-4 w-4`} />
            ) : (
              <ChevronUpIcon className={`h-4 w-4`} />
            )}
          </div>

          {openHeading === name && (
            <ul className="flex flex-col gap-8 mt-8">
              {subMenu.map(({ header, subMenu2 }, index) => (
                <li key={index}>
                  <div
                    className="flex justify-between pl-4 hover:text-pink-700 hover:cursor-pointer"
                    onClick={() => handleOpenSubHeading(header)}
                  >
                    <span>{header}</span>
                    {openSubHeading !== header ? (
                      <ChevronDownIcon className={`h-4 w-4`} />
                    ) : (
                      <ChevronUpIcon className={`h-4 w-4`} />
                    )}
                  </div>

                  {openSubHeading === header && (
                    <ul
                      className={`${
                        openSubHeading === header ? "flex" : "hidden"
                      } flex-col gap-8 mt-8`}
                    >
                      {subMenu2.map(({ name, link }, index) => (
                        <li className="pl-8 hover:text-pink-700" key={index}>
                          <a href={link}>{name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
