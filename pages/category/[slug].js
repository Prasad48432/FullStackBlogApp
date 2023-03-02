import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import PostCard from '../../components/PostCard';
import Categories from '../../components/Categories';
import Loader  from '../../components/Loader';
import {motion} from 'framer-motion';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
    <div className="h-[100px]"></div>
    <h2 className="text-4xl font-bold text-center p-5">All <span className="text-indigo-700 underline decoration-indigo-700" >Blogs</span></h2>
    <div className="px-1 mb-8">
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
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        </motion.div>
        <div className="">
          <div className="relative lg:sticky lg:top-20 lg:mt-[2rem] lg:w-[320px]">
            <Categories />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts},
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}