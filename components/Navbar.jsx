import Link from 'next/link';
import React, { useState } from 'react';
import {RiMenu3Fill , RiCloseLine} from 'react-icons/ri'
import {useRouter} from 'next/router';
import Image from 'next/image';
import ThemeToggler from "../pages/ThemeToggler";
import Modal from './Modal';

import { FiImage,FiFileText,FiHome ,FiMessageCircle} from "react-icons/fi";

const Navbar = () => {

  if (typeof window !== "undefined") {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.querySelector("h1").onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };
  }
  


  const [modal, setModal] = React.useState(false);
  // const location = useGeoLocation();

  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <>
      <div className="fixed left-0 sm:top-0 w-full z-10 shadow-xl dark:shadow-none bg-white dark:bg-bg-color-dk">
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
              <h1 data-value="STU TALK®" className="sm:font-bold font-semibold text-3xl ml-[10px]  text-black dark:text-white cursor-pointer">
                STU TALK®
              </h1>
            </div>
          </Link>
          <ul className="hidden sm:flex gap-3 dark:text-white">
            <li></li>
            <li
              style={{ padding: "0.65rem" }}
              className={router.pathname == "/" ? "active_nav" : " "}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              style={{ padding: "0.65rem" }}
              className={router.pathname == "/blogs" ? "active_nav" : " "}
            >
              <Link href="/blogs">BLOGS</Link>
            </li>
            <li
              style={{ padding: "0.65rem" }}
              className={router.pathname == "/gallery" ? "active_nav" : " "}
            >
              <Link href="/gallery">GALLERY</Link>
            </li>
            <li
              style={{ padding: "0.65rem" }}
              className={router.pathname == "/aboutus" ? "active_nav" : " "}
            >
              <Link href="/aboutus">ABOUTUS</Link>
            </li>
            <li
              style={{ padding: "0.65rem" }}
              className={router.pathname == "/contact" ? "active_nav" : " "}
            >
              <Link href="/contact">CONTACT</Link>
            </li>
            <li style={{ padding: "0.65rem" }}>
              <button
                className="text-black dark:text-white"
                onClick={() => setModal((modal) => !modal)}
              >
                MAGAZINES
              </button>
            </li>
            <ThemeToggler />
          </ul>
          <div className="sm:hidden">
            <ThemeToggler />
          </div>

          <Modal {...{ modal, setModal }} />

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <div className="text-black dark:text-white">
                <RiCloseLine size={30} />
              </div>
            ) : (
              <div className="text-black dark:text-white">
                <RiMenu3Fill size={30} />
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-[15vw] left-[-5%] right-0 bottom-0 flex justify-center items-center w-[110%] h-[105vh] text-center bg-white dark:bg-onbg-color-dk ease-in duration-300"
                : "sm:hidden absolute top-[15vw] left-[-130%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-white dark:bg-onbg-color-dk ease-in duration-300"
            }
          >
            <ul className="text-black dark:text-white top-[25vh] absolute">
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
                <button
                  className=""
                  onClick={() => setModal((modal) => !modal)}
                >
                  Magazines
                </button>
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
        <div className="inner hidden sm:block"></div>
      </div>
      <section className="block sm:hidden fixed inset-x-0 bottom-0 z-[20] bg-white dark:bg-bg-color-dk shadow">
        <div className="flex justify-between bottom-bar-shadow">
          <Link href="/">
            <a className="w-full justify-center inline-block text-center pt-2 pb-1">
              <FiHome
                size={30}
                className={
                  router.pathname == "/"
                    ? "active_nav inline-block mb-1"
                    : "inline-block mb-1"
                }
              />
              <span
                className={
                  router.pathname == "/"
                    ? "active_nav block text-xs"
                    : "block text-xs"
                }
              >
                Home
              </span>
            </a>
          </Link>
          <Link href="/blogs">
            <a className="w-full justify-center inline-block text-center pt-2 pb-1">
              <FiFileText
                size={30}
                className={
                  router.pathname == "/blogs"
                    ? "active_nav inline-block mb-1"
                    : "inline-block mb-1"
                }
              />
              <span
                className={
                  router.pathname == "/blogs"
                    ? "active_nav block text-xs"
                    : "block text-xs"
                }
              >
                Blogs
              </span>
            </a>
          </Link>
          <Link href="/gallery">
            <a className="w-full justify-center inline-block text-center pt-2 pb-1">
              <FiImage
                size={30}
                className={
                  router.pathname == "/gallery"
                    ? "active_nav inline-block mb-1"
                    : "inline-block mb-1"
                }
              />
              <span
                className={
                  router.pathname == "/gallery"
                    ? "active_nav block text-xs"
                    : "block text-xs"
                }
              >
                Gallery
              </span>
            </a>
          </Link>
          <Link href="/contact">
            <a className="w-full justify-center inline-block text-center pt-2 pb-1">
              <FiMessageCircle
                size={30}
                className={
                  router.pathname == "/contact"
                    ? "active_nav inline-block mb-1"
                    : "inline-block mb-1"
                }
              />
              <span
                className={
                  router.pathname == "/contact"
                    ? "active_nav block text-xs"
                    : "block text-xs"
                }
              >
                Contact
              </span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Navbar;
