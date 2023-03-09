import React from 'react';
import Link from 'next/link';

const Author = ({ author }) => (
  <>
  <h2 className='text-center text-xl font-semibold '> Author Info </h2>
  <div className="text-center mt-20 mb-8 p-12 relative shadow-lg rounded-lg bg-white  dark:bg-onbg-color-dk outline outline-2 outline-gray-300 dark:outline-onbg-color-dk">
    <div className="absolute left-0 right-0 -top-14">
    <Link href={`/authorposts/${author.username}`}>
      <img
        className="block ml-auto mr-auto rounded-full w-[100px] height-[100px] cursor-pointer"
        src={author.photo.url}
        alt="author"
      />
      </Link>
    </div>
    <h3 className="text-black dark:text-variant-color-dk mt-4 mb-1 text-xl font-bold">{author.name}</h3>
    <Link href={`/authorposts/${author.username}`}>
    <h3 className="text-black dark:text-variant-color-dk hover:text-gray-700 mt-4 mb-2 text-xl font-normal cursor-pointer">@{author.username}</h3>
    </Link>
    <p className="text-black dark:text-white text-ls mb-2">{author.bio}</p>
    <p className="text-black dark:text-white text-lg">{author.class}</p>
  </div>
  </>
);

export default Author;