import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services/index';
import {motion} from 'framer-motion';
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <motion.div initial="hidden" animate="visible"
        variants={{
          hidden:{
            y: 100,
            opacity: 0,
          },
          visible:{
            y: 0,
            opacity: 1,
            transition:{
              ease: [0.6,0.01,0.05,0.95],
              duration: 0.7,
            }
          }
        }}>
    <div className="bg-white dark:bg-onbg-color-dk shadow-lg rounded-lg p-5 pb-8 mb-4 outline outline-2 outline-gray-300 dark:outline-border-color-dk">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 border-black dark:border-variant-color-dk">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3`}>{category.name}</span>
        </Link>
      ))}
    </div>
    </motion.div>
  );
};

export default Categories;