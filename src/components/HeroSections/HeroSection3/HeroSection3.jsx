import React from "react";
import Navbar3 from "../../NavigationBars/Navbar3/Navbar3";

const HeroSection3 = () => {    
  return (
    <>
      <Navbar3 />
      <section className={`h-[calc(100vh-6rem)] mt-24 bg-hero-pattern bg-cover bg-center flex justify-center items-center text-white px-6`}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-medium">LuxeLady Styles</h2>
            <p className="text-5xl font-semibold">Elevate your wardrobe with our top-quality fashion choices</p>
            <button className="px-8 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-800">Start Shopping</button>
        </div>
      </section>
    </>
  );
};

export default HeroSection3;
