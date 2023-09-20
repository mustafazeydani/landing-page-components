import React from "react";
import Navbar3 from "../../NavigationBars/Navbar3/Navbar3";
const HeroSection1 = () => {
  return (
    <>
      <Navbar3 />
      <section className="h-screen flex flex-col justify-center items-center gap-32 max-w-3xl mx-auto text-center px-6 pt-24">
        <div className="flex flex-col gap-12">
          <h2 className="text-7xl text-[#1E0E62] font-semibold">
            Startup Framework
          </h2>
          <p className="text-[#15143966] text-xl font-semibold">
            We made it so beutiful and simple. It combines landings, pages,
            blogs and shop screens. It is definitely the tool you need in your
            collection!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button className="px-8 py-3 bg-[#25DAC5] rounded-full text-white hover:cursor-pointer hover:bg-[#2faa9b]">
            Purchase Now for $245
          </button>
          <a className="text-[#25DAC5] hover:underline" href="#">
            Learn More
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection1;
