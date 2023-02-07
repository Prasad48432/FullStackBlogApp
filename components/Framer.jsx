import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Framer = () => {


  const [isOpen , setIsOpen] = useState(false);
  return (
    <>
    <div className="wrapper">
    <motion.div transition={{layout: {duration: 1,type: 'spring'}}} layout onClick={() => setIsOpen(!isOpen)} className="card" style={{borderRadius: '1rem',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <motion.h2 className="text-xl font-semibold" layout="position" >OUR MOTTO 🚀</motion.h2>
      {isOpen && (
      <motion.div className="expand">
        <div className="relative w-1/4 left-[5rem]">
        <Image src="https://www.stutalk.in/images/logo.png" alt="logo" layout='responsive' width={40} height={40}/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Fugiat reiciendis atque tempora odio perferendis consectetur officia aliquid fuga culpa. Rem?</p>
        <p>Lorem
           ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis.</p>
      </motion.div>
      )}
    </motion.div>
    </div>
    </>
  );
};

export default Framer;
