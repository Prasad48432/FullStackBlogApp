import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div>
        <section>
          <div className="w-full relative pb-10 px-6 xl:px-0 ">
            <img
              className="absolute w-full inset-0 h-full object-cover object-center"
              src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png"
              alt="we care family"
            />

            <div className="pt-32 lg:flex items-center relative z-1 container mx-auto">
              <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                <img
                  tabIndex="0"
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto"
                  src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"
                  alt="people smiling"
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <p
                  tabIndex="0"
                  className="text-black  font-normal text-3xl mb-4"
                >
                  VBIT® StuTalk{" "}
                </p>
                <h1
                  tabIndex="0"
                  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-2"
                >
                  Voice of
                </h1>
                <h1
                  tabIndex="0"
                  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8"
                >
                  <Typewriter
                    className="font-bold"
                    options={{
                      strings: ["VBITIANS!!", "STUDENTS!!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p tabIndex="0" className="text-gray-800 font-regular mb-8">
                  StuTalk is a student- run forum that serves as the official
                  campus magazine of VBIT, since 2007. We design and release two
                  editons comprising a Volume in an academic year namely: The
                  Freshmen Edition and The Republic Edition.
                </p>
                <div className="bg-white lg:mt-16 py-4 px-4 flex flex-col sm:flex-row justify-center sm:justify-center items-start sm:items-center shadow-lg rounded-lg  ">
                  <div className="sm:flex items-center py-2 justify-between ">
                    <div className="flex items-center ">
                      <h2 className="text-2xl underline">Imagine !</h2>
                    </div>
                    <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                      <h2 className="text-2xl underline">Believe !</h2>
                    </div>
                    <div className="flex items-center">
                      <h2 className="text-2xl underline">Achieve !</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
