import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ modal, setModal }) => {
  return (
    <AnimatePresence>
      {modal && (
        <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 bg-black/50">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -50,
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
            className="absolute z-10 p-5 bg-white dark:bg-[#182a46] h-auto w-[90vw] sm:w-[60vw]  rounded text-white"
          >
            <button
              onClick={() => setModal((modal) => !modal)}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-black border border-black h-8 w-8 block mb-2 rounded-full font-bold text-lg"
            >
              &times;
            </button>
            <h1 className='text-2xl text-center p-3 mt-3 font-semibold text-black dark:text-white' > Our <span className='underline underline-offset-2 dark:text-[#3b8e8a] text-indigo-700 decoration-2 dark:decoration-[#3b8e8a]' >Magazines</span></h1>
            <div className="grid grid-cols-3 gap-3 p-5">
              <img
                alt="Magazine"
                src="https://www.stutalk.in/images/magazines/volume-16-issue-01.jpg"
                className="transition duration-300 ease-in-out hover:scale-105 outline dark:outline-3 outline-1 outline-black dark:outline-[#3b8e8a]"
              />
              <img
                alt="Magazine"
                src="https://www.stutalk.in/images/magazines/volume-15-issue-02.jpg"
                className="transition duration-300 ease-in-out hover:scale-105 outline dark:outline-3 outline-1 outline-black dark:outline-[#3b8e8a]"
              />
              <img
                alt="Magazine"
                src="https://www.stutalk.in/images/magazines/volume-15-issue-01.jpg"
                className="transition duration-300 ease-in-out hover:scale-105 outline dark:outline-3 outline-1 outline-black dark:outline-[#3b8e8a]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => setModal((modal) => !modal)}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </div>
      )}
    </AnimatePresence>
  );
}

export default Modal