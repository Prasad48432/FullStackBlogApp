import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => (
  
  <div className="bg-white shadow-lg rounded-lg p-5 lg:p-5 pb-12 mb-8 outline outline-2 outline-black">
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
    <div className="relative overflow-hidden shadow-md pb-60 mb-6">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-60 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>

    <h1 className="text-center mb-8 cursor-pointer  text-lg font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <img alt={post.author.name} src={post.author.photo.url} className="w-[40px]"/>
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-sm">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className=" text-sm text-gray-700 font-normal  mb-8">
      {post.excerpt}
    </p>
    <div className="text-center relative bottom-0">
      <Link href={`/post/${post.slug}`}>
        <span>Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;