import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

const ProfileImageModal = ({ modal, setModal,props }) => {
  return (
    <AnimatePresence>
      {modal && (
        <div className="px-5 fixed h-full w-full flex items-center justify-center top-10 left-0 bg-black/50 z-[1000]">
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
            className="absolute z-10 p-5 bg-white dark:bg-[#182a46] h-auto w-[90vw] sm:w-[40vw]  rounded text-white"
          >
            <button
              onClick={() => setModal((modal) => !modal)}
              className="absolute top-0 right-0 -mt-4 -mr-4 bg-white text-black border border-black h-8 w-8 block mb-2 rounded-full font-bold text-lg"
            >
              &times;
            </button>
            <img 
            src={props.data.photo.url}
            alt='/'
            className='sm:h-[70vh]'
            />

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

export default ProfileImageModal