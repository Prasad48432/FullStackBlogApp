import React from "react";
import { getPosts } from "../services";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";

export default function Blogs({ posts }) {
  return (
    <>
    <div className="h-[100px]"></div>
    <h2 className="text-4xl font-bold text-center p-5">All <span className="text-indigo-700 underline decoration-indigo-700" >Blogs</span></h2>
    <div className="px-1 mb-8">
      <div className="custom_grid">
        <div className="custom_grid_2">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="">
          <div className="lg:sticky relative lg:top-20 lg:mt-[2rem]">
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
  return {
    props: { posts },
  };
}
