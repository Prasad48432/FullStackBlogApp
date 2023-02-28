import Link from 'next/link';
import React, { useState } from 'react';
import {RiMenu3Fill , RiCloseLine} from 'react-icons/ri'
import {useRouter} from 'next/router';
import Image from 'next/image';
import ThemeToggler from "../pages/ThemeToggler";

const Navbar = () => {


  const [nav, setNav] = useState(false);
  const router = useRouter();



  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-xl bg-white dark:bg-[#0b192f]">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-black">
        <Link href="/">
          <div className="flex">
            <Image
              src="https://www.stutalk.in/images/logo.png"
              alt=""
              className="top-0 cursor-pointer"
              width={40}
              height={40}
              layout="fixed"
            />
            <h1 className="sm:font-bold font-semibold text-3xl ml-[10px] hide-small text-black dark:text-[#3b8e8a] cursor-pointer">
              STU TALK®
            </h1>
          </div>
        </Link>
        <ul className="hidden sm:flex gap-3 dark:text-[#3b8e8a]">
          <li
            style={{ padding: "0.65rem" }}
            className={router.pathname == "/" ? "active_nav" : " "}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{ padding: "0.65rem" }}
            className={router.pathname == "/blogs" ? "active_nav" : " "}
          >
            <Link href="/blogs">Blogs</Link>
          </li>
          <li style={{ padding: "0.65rem" }}
            className={router.pathname == "/#gallery" ? "active_nav" : " "}
          >
            <Link href='/#gallery'>Gallery</Link>
          </li>
          <li
            style={{ padding: "0.65rem" }}
            className={router.pathname == "/aboutus" ? "active_nav" : " "}
          >
            <Link href="/aboutus">About us</Link>
          </li>
          <li
            style={{ padding: "0.65rem" }}
            className={router.pathname == "/contact" ? "active_nav" : " "}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li style={{ padding: "0.65rem" }}>
          </li>
          <ThemeToggler/>
        </ul>
        <div className='sm:hidden'>
        <ThemeToggler/>
        </div>

        

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <div className= 'text-black dark:text-white' >
            <RiCloseLine size={30} />
            </div>
          ) : (
            <div className='text-black dark:text-white' >
            <RiMenu3Fill size={30}  />
            </div>
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-[15vw] left-[-5%] right-0 bottom-0 flex justify-center items-center w-[110%] h-[105vh] text-center bg-white dark:bg-[#182a46] ease-in duration-300"
              : "sm:hidden absolute top-[15vw] left-[-130%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-white dark:bg-[#182a46] ease-in duration-300"
          }
        >
          <ul className="text-black dark:text-white">
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/blogs">Blogs</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/aboutus">About us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
