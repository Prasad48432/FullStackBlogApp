import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';


import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 pb-8 mb-8 outline outline-2 outline-gray-300">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4 border-black">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
            <img className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 object-cover" src={post.featuredImage.url} alt="/"/>
          <div className="flex-grow ml-4 ">
            <p className="text-gray-500 text-sm cursor-auto">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={index}><h2 className='text-[15px] cursor-pointer' >{post.title}</h2></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;