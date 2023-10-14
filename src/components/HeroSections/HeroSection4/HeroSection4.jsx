import React from "react";
import Navbar1 from "../../NavigationBars/Navbar1/Navbar1";
import img1 from "./assets/Mask.png";
import img2 from "./assets/PlayIcon.png";

const HeroSection4 = () => {
  return (
    <>
      <Navbar1 />
      <section className="flex items-center min-h-[100vh] p-6 pt-24">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-16 md:gap-0">
          <div className="flex flex-col gap-16 md:w-9/12">
            <p className="text-[#1E0E62] font-medium text-4xl">
              A high-quality solution for those who want a beautiful startup
              website quickly
            </p>
            <form className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Your email"
                className="px-4 py-2 rounded-full ring-0 outline-none border border-gray-400 focus:border-gray-700 "
              />
              <input
                type="text"
                placeholder="Your password"
                className="px-4 py-2 rounded-full ring-0 outline-none border border-gray-400 focus:border-gray-700 "
              />
              <button className="bg-[#25DAC5] hover:bg-[#4ad0c1] inline-block py-2 rounded-full text-white">
                Sign In
              </button>
              <p className="text-center text-gray-400 text-sm">
                By signing up, you agree to the Terms of Service
              </p>
            </form>
          </div>

          <div className="flex flex-col gap-4 md:w-9/12 md:mx-auto">
            <div className="relative">
              <img src={img1} alt="img" width={"100%"} />
              <img
                src={img2}
                alt="play"
                width={50}
                className="absolute inset-0 m-auto"
              />
            </div>
            <p className="text-gray-400 md:w-2/3">
              We made it so beautiful and simple. It combines landings, pages,
              blogs and shop screens. It is definitely the tool you need in your
              collection!{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection4;
