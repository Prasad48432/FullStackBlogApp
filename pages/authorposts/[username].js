import React from "react";
import { useRouter } from "next/router";
import {
  getAuthors,
  getAuthorPosts,
  getAuthor,
  getAllAuthors,
} from "../../services";
import PostCard from "../../components/PostCard";
import Loader from "../../components/Loader";
import { motion } from "framer-motion";
import PostWidget from "../../components/PostWidget";
import ProfileCard from "../../components/ProfileCard";
import Link from "next/link";

const AuthorPosts = ({ posts, author, authors }) => {
  const author_details = author[0].node;
  const router = useRouter();
  const count = posts.length;
  console.log(authors);

  for (var i = 0; i < authors.length; i++) {
    if (authors[i].name === author_details.name) {
      authors.splice(i, 1);
    }
  }
  console.log(authors);

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <>
      <div className="h-[100px]"></div>
      <ProfileCard count={count} data={author_details} />
      <div className="px-1 mb-8 ">
        <div className="custom_grid">
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
            <fieldset className="hidden sm:block border-t-2 border-gray-300 dark:border-gray-700 mt-5">
              <legend className="mx-auto px-4 text-black dark:text-white text-2xl">
              Blogs by {author_details.name}
              </legend>
            </fieldset>
            <div className="custom_grid_2">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
          </motion.div>
          <div className="">
            <div className="lg:sticky relative lg:top-20 lg:mt-[1.99rem]">
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
                <div className="bg-white dark:bg-[#182a46] shadow-lg rounded-lg p-5 pb-8 mb-6 outline outline-2 outline-gray-300 dark:outline-[#0f1c32]">
                  <h3 className="text-lg mb-8 font-semibold border-b pb-4 border-black dark:border-[#3b8e8a]">
                    Browse More Authors
                  </h3>
                  {authors.map((author, index) => (
                    <div key={index} className="flex items-center w-full mb-4">
                      <Link href={`/authorposts/${author.username}`}>
                        <img
                          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-[#0f1c32] object-cover  cursor-pointer"
                          src={author.photo.url}
                          alt="/"
                        />
                      </Link>
                      <div className="flex-grow ml-4 ">
                        <Link href={`/authorposts/${author.username}`}>
                          <p className="text-gray-500 dark:text-[#3b8e8a] text-sm cursor-pointer">
                            {author.name}
                          </p>
                        </Link>
                        <h2 className="text-[15px]">{author.bio}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <PostWidget />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorPosts;

export async function getStaticProps({ params }) {
  const posts = await getAuthorPosts(params.username);
  const author = await getAuthor(params.username);
  const authors = await getAllAuthors();
  return {
    props: { posts, author, authors },
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
