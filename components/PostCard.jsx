import React from 'react';
import moment from 'moment';
import Link from 'next/link';


const PostCard = ({ post }) => (
  
  <div className="bg-white shadow-lg rounded-lg p-3 lg:p-5 pb-12 mb-8 outline outline-2 outline-black">
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
    <div className="relative overflow-hidden shadow-md pb-[10rem] mb-6">
      <img src={post.featuredImage.url} alt="" className="object-top absolute h-40 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>

    <h1 className="text-center mb-8 cursor-pointer  text-[1rem] font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className="flex text-center items-center justify-center mb-8 w-full ">
      <div className="flex gap-[2rem] items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <div className='flex items-center justify-center'>
        <img alt={post.author.name} src={post.author.photo.url} className="w-[30px]"/>
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-xs">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
        <span className="align-middle text-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
      </div>
      
    </div>
    <p className=" text-xs text-gray-700 font-normal  mb-8">
      {post.excerpt}
    </p>
    <div className="text-center relative bottom-0 cursor-pointer">
      <Link href={`/post/${post.slug}`}>
        <span>Continue Reading</span>
      </Link>
    </div>
  </div>
);

export default PostCard;