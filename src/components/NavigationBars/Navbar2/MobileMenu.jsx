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
            className="hover:text-pink-700 hover:cursor-pointer"
            onClick={() => handleOpenHeading(name)}
          >
            <span>{name}</span>
            {openHeading !== name ? (
              <ChevronDownIcon className={`inline h-4 w-4 ml-1`} />
            ) : (
              <ChevronUpIcon className={`inline h-4 w-4 ml-1`} />
            )}
          </div>

          {openHeading === name && (
            <ul className="flex flex-col gap-6 mt-6">
              {subMenu.map(({ header, subMenu2 }, index) => (
                <li key={index}>
                  <div
                    className="hover:text-pink-700 hover:cursor-pointer"
                    onClick={() => handleOpenSubHeading(header)}
                  >
                    <span className="pl-4">{header}</span>
                    {openSubHeading !== header ? (
                      <ChevronDownIcon className={`inline h-4 w-4 ml-1`} />
                    ) : (
                      <ChevronUpIcon className={`inline h-4 w-4 ml-1`} />
                    )}
                  </div>

                  {openSubHeading === header && (
                    <ul
                      className={`${
                        openSubHeading === header ? "flex" : "hidden"
                      } flex-col gap-6 mt-6`}
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
