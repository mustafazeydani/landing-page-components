import React from "react";
import Navbar2 from "../../NavigationBars/Navbar2/Navbar2";

const HeroSection2 = () => {
  return (
    <>
      <Navbar2 />
      <div className="h-screen bg-[#2F1893] pt-24 px-6">
        <div className="h-full flex flex-col justify-around items-center max-w-3xl mx-auto text-center text-white">
          <div>
            <h2 className="text-7xl font-semibold mb-12">
              Let's Make Design Fast and Easy
            </h2>
            <p className="text-xl">
              The most important part of the Startup is the samples. The samples
              form a set of 25 usable pages you can use as is or you can add new
              blocks from UI Kit.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                placeholder="Your email"
                type="text"
                className="w-64 bg-transparent border border-gray-500 rounded-full px-4 py-2 ring-0 outline-none focus:border-gray-200"
              />
              <button className="px-8 py-2 rounded-full bg-[#25DAC5] hover:bg-[#2faa9b] text-lg">
                Send
              </button>
            </div>
            <p className="text-gray-400">
              By signing up, you agree to the Terms of Service
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
