import React from 'react';

const Author = ({ author }) => (
  <>
  <h2 className='text-center text-xl font-semibold '> Author Info </h2>
  <div className="text-center mt-20 mb-8 p-12 relative shadow-lg rounded-lg bg-white dark:bg-[#182a46]">
    <div className="absolute left-0 right-0 -top-14">
      <img
        className="block ml-auto mr-auto rounded-full w-[100px] height-[100px]"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
  </>
);

export default Author;