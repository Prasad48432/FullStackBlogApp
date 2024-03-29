import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => (
  <>
  <Link href={`/post/${post.slug}`}>
  <div className="bg-white interactable dark:bg-onbg-color-dk custom_bg_shadow dark:shadow-none rounded-lg p-3 lg:p-5 pb-8 lg:pb-12 mb-2 outline outline-2 dark:outline-0 outline-gray-300 minimal_border cursor-pointer">
    <div className="relative overflow-hidden pb-[12rem] lg:pb-[10rem] mb-6">
      <img
        src={post.featuredImage.url}
        alt="/"
        className="object-top absolute h-50 lg:h-40 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg dark:opacity-80"
      />
    </div>

    <h1 className="text-center mb-8 cursor-pointer  text-[1rem] font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="flex text-center items-center justify-center mb-0 lg:mb-8 w-full ">
      <div className="flex gap-[2rem] items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <div className="flex items-center justify-center">
        <Link href={`/authorposts/${post.author.username}`}>
          <img
            alt={post.author.name}
            src={post.author.photo.url}
            className="w-[30px] cursor-pointer"
          />
          </Link>
          <Link href={`/authorposts/${post.author.username}`}>
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-xs dark:text-gray-400 cursor-pointer">
            {post.author.name}
          </p>
          </Link>
        </div>
        <div className="font-medium text-gray-700">
          <span className="align-middle text-xs dark:text-gray-400">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
    <p className=" text-xs text-gray-700 dark:text-white font-normal  mb-8 p-2">
      {post.excerpt}
    </p>
    <div className="text-center relative bottom-0 cursor-pointer">
      <Link href={`/post/${post.slug}`}>
      <span className="text-blue-400 dark:text-blue-200 hover:underline">Read more ⟶</span> 
      </Link>
    </div>
  </div>
  </Link>
  </>
);

export default PostCard;