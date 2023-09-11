import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavigationBars({ setSelectedSection }) {
  const [navigationBars] = useState([
    {
      name: "Navigation Bar 1",
      link: "/navbar1",
    }
  ]);
  return (
    <>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {navigationBars.map(({ name, link }) => (
          <Link to={link} className="btn">
            {name}
          </Link>
        ))}
      </div>
      <button
        className="btn btn-primary block mt-4 mx-auto"
        onClick={() => setSelectedSection(null)}
      >
        Back
      </button>
    </>
  );
}

export default NavigationBars;