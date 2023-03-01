import { FiImage,FiFileText,FiHome ,FiMessageCircle} from "react-icons/fi";
import Link from 'next/link';
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-[#182a46] py-[7rem]">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="">
                <img src='https://miro.medium.com/v2/resize:fit:828/1*qdFdhbR00beEaIKDI_WDCw.gif' className="W-[300px] h-[200px] object-cover" alt='404' />
            </div>

            <div className="font-bold text-2xl xl:text-4xl lg:text-6xl md:text-5xl mt-10">
              This page does not exist
            </div>

            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              The page you are looking for could not be found.
            </div>
          </div>

          <div className="flex flex-col mt-2">
            <div className="text-gray-400 font-bold uppercase">Continue With</div>

            <div className="flex flex-row items-stretch mt-5">
            <Link href="/">
              <div
                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 p-2 md:py-4">
                  <span className="text-black" ><FiHome size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    Home 
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                  >
                    Everything starts here
                  </div>
                </div>
              </div>
              </Link>
              <Link href="/blogs">
              <div
                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 p-2 md:py-4">
                  <span className="text-black" ><FiFileText size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    Blogs
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                  >
                    Read our awesome articles
                  </div>
                </div>
              </div>
              </Link>
              <Link href='/#gallery'>
              <div
                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 p-2 md:py-4">
                  <span className="text-black"><FiImage size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    Gallery
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                  >
                    Take a look at our feed
                  </div>
                </div>
              </div>
              </Link>
            <Link href="/contact">
              <div
                className="flex flex-row group px-4 py-8
                    border-t hover:cursor-pointer
                    transition-all duration-200 delay-100"
              >
                <div className="rounded-xl bg-blue-100 p-2 md:py-4">
                  <span className="text-black" ><FiMessageCircle size={30}/></span>
                </div>

                <div className="grow flex flex-col pl-5 pt-2">
                  <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                    Contact
                  </div>

                  <div
                    className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100"
                  >
                    Contact us for your questions
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;