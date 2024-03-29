import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import {motion} from 'framer-motion';


import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

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
    <div className="bg-white dark:bg-onbg-color-dk shadow-lg dark:shadow-none rounded-lg p-5 pb-8 mb-6 outline outline-2 dark:outline-1 outline-gray-300 minimal_border" >
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 border-black dark:border-white"  >{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <Link href={`/post/${post.slug}`} key={index}>
            <img className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-[#a4a3a3] object-cover cursor-pointer" src={post.featuredImage.url} alt="/"/>
            </Link>
          <div className="flex-grow ml-4 ">
            <p className="text-gray-500 dark:text-gray-400 text-sm cursor-auto">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}><h2 className='text-[15px] cursor-pointer' >{post.title}</h2></Link>
          </div>
        </div>
      ))}
    </div>
    </motion.div>
  );
};

export default PostWidget;