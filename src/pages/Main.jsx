import React, { useState } from "react";
import NavigationBars from "../components/NavigationBars";

function Main() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="h-screen max-w-4xl w-11/12 mx-auto">
      <h1 className="text-center text-4xl mt-3 font-bold">
        Landing Page Components
      </h1>
      <p className="text-center text-2xl mt-2 font-semibold">
        These are some of the designs that I implemented using React + Tailwind
        CSS from the figma page linked{" "}
        <a
          className="text-green-300 hover:underline"
          href="https://www.figma.com/community/file/778961842657921355/Landing-Page---Startup-App"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      {!selectedSection ? (
        <div className="flex flex-wrap gap-4 mt-4 justify-center">
          <button
            className="btn"
            onClick={() => setSelectedSection("navigationBars")}
          >
            Navbars
          </button>
        </div>
      ) : (
        selectedSection === "navigationBars" && (
          <NavigationBars setSelectedSection={setSelectedSection} />
        )
      )}
    </div>
  );
}

export default Main;
