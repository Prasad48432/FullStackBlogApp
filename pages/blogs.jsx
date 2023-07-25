import React from "react";
import { getPosts } from "../services";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";
import {motion} from 'framer-motion';

export default function Blogs({ posts,final_result }) {
  return (
    <>
    <div className="h-[100px]"></div>
    <h2 className="text-4xl font-bold text-center p-5">All <span className="text-variant-color-lt underline decoration-variant-color-lt dark:text-variant-color-dk dark:decoration-variant-color-dk" >Blogs</span></h2>
    <div className="px-1 mb-8 ">
      <div className="custom_grid">
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
        <div className="custom_grid_2">
          {final_result.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
          
        </div>
        </motion.div>
        <div className="">
          <div className="lg:sticky relative lg:top-20 lg:mt-[1.99rem]">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const final_result = posts.reverse();
  return {
    props: { posts,final_result },
  };
}
