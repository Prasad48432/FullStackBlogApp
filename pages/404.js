import { FiImage,FiFileText,FiHome ,FiMessageCircle} from "react-icons/fi";
import Link from 'next/link';
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-bg-color-dk py-[7rem]">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="">
                <img src='https://miro.medium.com/v2/resize:fit:828/1*qdFdhbR00beEaIKDI_WDCw.gif' className="W-[300px] h-[200px] object-cover" alt='404' />
            </div>

            <div className="font-bold text-2xl xl:text-4xl lg:text-6xl md:text-5xl mt-10 text-black dark:text-variant-color-dk">
              This page does not exist man!
            </div>

            <div className="text-gray-600 dark:text-gray-300 font-medium text-sm md:text-xl lg:text-2xl sm:mt-8 mt-2">
              The page you are looking for could not be found.
            </div>
          </div>

          <div className="sm:flex flex-row sm:flex-col mt-2 hidden ">
            <div className="text-gray-600 dark:text-gray-300 font-bold uppercase">Continue With</div>

            <div className="flex flex-row items-stretch mt-5">
            <Link href="/">
              <div
                className="flex flex-row group px-4 py-8
                    border-t border-black dark:border-variant-color-dk hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 dark:bg-onbg-color-dk p-2 md:py-4">
                  <span className="text-black dark:text-white" ><FiHome size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-black dark:text-white">
                    Home 
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-300 group-hover:text-gray-500"
                  >
                    Everything starts here
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/blogs">
              <div
                className="flex flex-row group px-4 py-8
                    border-t border-black dark:border-variant-color-dk hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 dark:bg-onbg-color-dk p-2 md:py-4">
                  <span className="text-black dark:text-white" ><FiFileText size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-black dark:text-white">
                    Blogs
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-300 group-hover:text-gray-500"
                  >
                    Read our awesome articles
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/#gallery'>
              <div
                className="flex flex-row group px-4 py-8
                    border-t border-black dark:border-variant-color-dk hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 dark:bg-onbg-color-dk p-2 md:py-4">
                  <span className="text-black dark:text-white"><FiImage size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-black dark:text-white">
                    Gallery
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-300 group-hover:text-gray-500"
                  >
                    Take a look at our feed
                  </div>
                </div>
              </div>
              </Link>
            <Link href="/contact">
              <div
                className="flex flex-row group px-4 py-8
                    border-t border-black dark:border-variant-color-dk hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 dark:bg-onbg-color-dk p-2 md:py-4">
                  <span className="text-black dark:text-white" ><FiMessageCircle size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline text-black dark:text-white">
                    Contact
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-600 dark:text-gray-300 group-hover:text-gray-500"
                  >
                    Contact us for your questions
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <Link href="/">
          <div className="sm:hidden block mt-8">
            <h2 className="text-xl text-center text-black dark:text-white" >← Back to Home</h2>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;