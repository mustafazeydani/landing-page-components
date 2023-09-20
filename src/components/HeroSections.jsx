import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeroSections = ({ setSelectedSection }) => {
  const [heroSections, setHeroSections] = useState([
    {
      name: "Hero Section 1",
      link: "/hero1",
    },
    {
      name: "Hero Section 2",
      link: "/hero2",
    },
  ]);
  return (
    <>
      <div className="flex flex-wrap gap-4 mt-4 justify-center">
        {heroSections.map(({ name, link }, index) => (
          <Link to={link} key={index} className="btn">
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
};

export default HeroSections;
