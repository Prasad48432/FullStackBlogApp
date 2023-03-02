import React from "react";
import { useRouter } from "next/router";
import { getAuthors, getAuthorPosts,getAuthor} from "../../services";
import PostCard from "../../components/PostCard";
import Loader from "../../components/Loader";

const AuthorPosts = ({ posts,author}) => {

  const author_details =  author[0].node;
  const router = useRouter();
  console.log(author_details);

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <div className="h-[100px]"></div>
      
      <div className="w-[70vw] sm:w-1/4 rounded-lg custom_bg_shadow  bg-white dark:bg-[#182a46] sm:p-10 ml-[14vw] sm:ml-[37vw]" >
        <img
          src={author_details.photo.url}
          alt=""
          className="rounded-full p-4 h-40 mx-auto"
        />
        <header className=" text-2xl font-extrabold py-2 px-4 text-center text-black dark:text-[#3b8e8a]">
          {author_details.name}
        </header>
        <div>
          <ul className="text-gray-500 dark:text-white text-center font-semibold">
            <li className="text-gray-700 hover:text-gray-600 dark:text-blue-200 dark:hover:text-blue-300 cursor-pointer" >@{author_details.username}</li>
            <li>Bio: {author_details.bio}</li>
          </ul>
        </div>
      </div>

      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-2 border-black dark:border-[#3b8e8a]"></div>
        <span className="flex-shrink  text-xl sm:text-3xl font-semibold mx-4 text-black dark:text-white">
          Blogs by {author_details.name}
        </span>
        <div className="flex-grow border-t border-2 border-black dark:border-[#3b8e8a]"></div>
      </div>
      <div className="custom_grid_3 p-8 mb-7">
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
