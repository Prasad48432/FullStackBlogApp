import React from "react";
import { useRouter } from "next/router";
import { getAuthors, getAuthorPosts,getAuthor} from "../../services";
import PostCard from "../../components/PostCard";
import Loader from "../../components/Loader";

const AuthorPosts = ({ posts,author}) => {

  const author_details =  author[0].node;
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <div className="h-[100px]"></div>
      <div className=" rounded-lg container sm:max-w-lg bbg-white dark:bg-[#182a46] custom_bg_shadow outline outline-2 outline-gray-300 dark:outline-[#182a46] m-12">
        <div className="h-2/4 sm:h-64 overflow-hidden object-cover bg-bottom">
          <img
            className="w-full rounded-t"
            src="https://www.stutalk.in/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="flex justify-start px-5 -mt-12 mb-5">
          <span clspanss="block relative h-32 w-32">
            <img
              alt="Photo by aldi sigun on Unsplash"
              src={author_details.photo.url}
              className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1"
            />
          </span>
        </div>
        <div className="p-5">
          <div className="px-7 mb-8">
            <h2 className="text-3xl font-bold text-black dark:text-[#3b8e8a]">
              {author_details.name}
            </h2>
            <p className="text-gray-400 mt-2 dark:text-gray-400">Blogger</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {author_details.bio}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-2 border-black dark:border-[#3b8e8a]"></div>
        <span className="flex-shrink text-3xl font-semibold mx-4 text-black dark:text-white">Blogs by {author_details.name}</span>
        <div className="flex-grow border-t border-2 border-black dark:border-[#3b8e8a]"></div>
      </div>
      <div className="custom_grid_3">
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
    </>
  );
};

export default AuthorPosts;

export async function getStaticProps({ params }) {
    const posts = await getAuthorPosts(params.username);
    const author = await getAuthor(params.username);
    return {
      props: {posts,author},
    };
  }
  
  // Specify dynamic routes to pre-render pages based on data.
  // The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths() {
    const authors = await getAuthors();
    return {
      paths: authors.map(({ username }) => ({ params: { username } })),
      fallback: false,
    };
  }
