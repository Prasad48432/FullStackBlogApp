import React from 'react';
import moment from 'moment';
import {motion} from'framer-motion';
import Link from 'next/link';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index} className="underline decoration-2 decoration-black dark:decoration-variant-color-dk" >{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 0.7,
            },
          },
        }}
      >
        <div className="bg-white dark:bg-bg-color-dk  rounded-lg lg:p-[3rem] pb-12 mb-8">
          <div className="relative overflow-hidden lg:custom_bg_shadow mb-6">
            <img
              src={post.featuredImage.url}
              alt=""
              className="object-top h-full w-full object-cover dark:opacity-[0.85] shadow-lg rounded-t-lg lg:rounded-lg"
            />
          </div>
          <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
              <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8">
                <Link href={`/authorposts/${post.author.username}`}>
                  <img
                    alt={post.author.name}
                    height="30px"
                    width="30px"
                    className="align-middle rounded-full cursor-pointer"
                    src={post.author.photo.url}
                  />
                </Link>
                <Link href={`/authorposts/${post.author.username}`}>
                  <p className="inline align-middle text-gray-700 dark:text-variant-color-dk ml-2 font-medium text-lg cursor-pointer">
                    {post.author.name}
                  </p>
                </Link>
              </div>
              <div className="font-medium text-gray-700 dark:text-variant-color-dk">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="align-middle">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </span>
              </div>
              <div className="text-xs ml-5 px-3 py-[0.1rem] bg-indigo-200 text-indigo-800 rounded-full">
                {post.author.class}
              </div>
            </div>
            <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
            <span className='dark:text-excerpt-color-dk' >
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) =>
                getContentFragment(itemindex, item.text, item)
              );

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PostDetail;