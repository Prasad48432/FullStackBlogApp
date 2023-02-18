import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Switch , ConfigProvider } from 'antd';

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [textColor, setTextColor] = useState('black');
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 40) {
        setTextColor('#000000');
      } else {
        setTextColor('black');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-xl custom_bg_class">
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
            <h1 className="sm:font-bold font-semibold text-3xl ml-[10px] hide-small text-black cursor-pointer">
              STU TALK®
            </h1>
          </div>
        </Link>
        <div className="sm:hidden p-2">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#4338CA",
                  },
                }}
              >
                <Switch
                  checkedChildren="😈"
                  unCheckedChildren="😊"
                  onClick={props.data}
                />
              </ConfigProvider>
            </div>

        <ul className="hidden sm:flex gap-3">
          <li
            style={{ padding: "0.75rem" }}
            className={router.pathname == "/" ? "active_nav" : " "}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{ padding: "0.75rem" }}
            className={router.pathname == "/blogs" ? "active_nav" : " "}
          >
            <Link href="/blogs">Blogs</Link>
          </li>
          <li
            style={{ padding: "0.75rem" }}
            className={router.pathname == "/aboutus" ? "active_nav" : " "}
          >
            <Link href="/aboutus">About us</Link>
          </li>
          <li
            style={{ padding: "0.75rem" }}
            className={router.pathname == "/contact" ? "active_nav" : " "}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li style={{ padding: "0.35rem" }}>
            <div
              className="lg:bg-red-200 p-2 lg:rounded-lg"
              data-bs-toggle="tooltip"
              title="Demon Mode"
            >
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#5c53ba",
                  },
                }}
              >
                <Switch
                  checkedChildren="😈"
                  unCheckedChildren="😊"
                  onClick={props.data}
                />
              </ConfigProvider>
            </div>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `black` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-[-5%] left-[-5%] right-0 bottom-0 flex justify-center items-center w-[110%] h-[105vh] text-center bg-black ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-130%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center bg-black ease-in duration-300"
          }
        >
          <ul className="text-white">
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
