import React, { useEffect, useState } from "react";
import { getPosts } from "../services";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import Categories from "../components/Categories";

export default function Blogs({ posts }) {
  return (
    <>
    <div className="h-[100px]"></div>
    <div className="px-1 mb-8">
      <div className="custom_grid">
        <div className="custom_grid_2">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="">
          <div className="lg:sticky relative top-20">
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
