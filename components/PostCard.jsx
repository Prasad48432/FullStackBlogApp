import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => (
  <div className="bg-white custom_bg_shadow rounded-lg p-3 lg:p-5 pb-8 lg:pb-12 mb-8 outline outline-2 outline-gray-300">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="relative overflow-hidden pb-[12rem] lg:pb-[10rem] mb-6">
      <img
        src={post.featuredImage.url}
        alt=""
        className="object-top absolute h-50 lg:h-40 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>

    <h1 className="text-center mb-8 cursor-pointer  text-[1rem] font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="flex text-center items-center justify-center mb-0 lg:mb-8 w-full ">
      <div className="flex gap-[2rem] items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <div className="flex items-center justify-center">
        <Link href={`/post/${post.slug}`}>
          <img
            alt={post.author.name}
            src={post.author.photo.url}
            className="w-[30px]"
          />
          </Link>
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-xs">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <span className="align-middle text-xs">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
      </div>
    </div>
    <p className=" text-xs text-gray-700 font-normal  mb-8 p-2">
      {post.excerpt}
    </p>
    <div className="text-center relative bottom-0 cursor-pointer">
      <Link href={`/post/${post.slug}`}>
      <span className="text-blue-600 dark:text-blue-400 hover:underline">Read more ⟶</span> 
      </Link>
    </div>
  </div>
);

export default PostCard;