import React from "react";
import Typewriter from "typewriter-effect";
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div>
        <section className="">
          <div className="w-full relative pb-10 px-6 xl:px-0 ">

            <div className="pt-32 lg:flex items-center relative z-1 container mx-auto">
              <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                
                <img
                  tabIndex="0"
                  role="img"
                  aria-label="people smiling"
                  className="mx-auto lg:w-[500px] lg:h-[500px] object-cover"
                  src="https://i.ibb.co/7Q3nfWD/mainhomephoto.png"
                  alt="main home image"
                />
              </div>
              <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0.5,
                      x: -90,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                >
                  <p
                    tabIndex="0"
                    className="text-black  dark:text-white font-normal text-3xl mb-4"
                  >
                    VBIT® StuTalk{" "}
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 90,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  }}
                >
                  <h1
                    tabIndex="0"
                    className="text-indigo-700 dark:text-[#3b8e8a] text-4xl lg:text-6xl font-black mb-2"
                  >
                    Voice of
                  </h1>
                </motion.div>
                <h1
                  tabIndex="0"
                  className="text-indigo-700 dark:text-[#3b8e8a] text-4xl lg:text-6xl font-black mb-8"
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
                <p
                  tabIndex="0"
                  className="text-gray-800 dark:text-white font-regular text-lg mb-8"
                >
                  StuTalk is a{" "}
                  <span className="underline underline-offset-2 decoration-2 font-semibold decoration-indigo-700 dark:decoration-[#3b8e8a]">
                    student-run
                  </span>{" "}
                  forum that serves as the official campus
                  <span className="underline underline-offset-2 decoration-2 font-semibold decoration-indigo-700 dark:decoration-[#3b8e8a]">
                    {" "}
                    magazine of VBIT{" "}
                  </span>
                  , since 2007. We design and release two editons comprising a
                  Volume in an academic year namely:{" "}
                  <span className="underline underline-offset-2 font-semibold decoration-2 decoration-indigo-700 dark:decoration-[#3b8e8a]">
                    The Freshmen Edition
                  </span>{" "}
                  and{" "}
                  <span className="underline underline-offset-2 font-semibold decoration-2 decoration-indigo-700 dark:decoration-[#3b8e8a]">
                    The Republic Edition.
                  </span>
                </p>
                <div className="bg-blue-100 dark:bg-[#182a46] lg:mt-16 mt-10 py-4 px-4 flex flex-col sm:flex-row justify-center sm:justify-center items-center sm:items-center custom_bg_shadow rounded-lg  ">
                  <div className="sm:flex items-center py-2 justify-center ">
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
