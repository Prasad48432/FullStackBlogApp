import React from "react";
import Typewriter from "typewriter-effect";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img-home">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <div className="flex">
        <p className="pt-5 text-2xl">Voice of ‎ ‎</p>
        <h2 className="pt-5 text-2xl"><Typewriter
            options={{
              strings: ["VBITIANS!!", "STUDENTS"],
              autoStart: true,
              loop: true,
            }}
          />
          </h2>
        </div>
        <button className="px-8 py-2 mt-5 ml-5 border hover:bg-white hover:text-black hover:rounded-md ease-in duration-200">Explore STUTALKS</button>
        </div>
      </div>
  );
};

export default Hero;
