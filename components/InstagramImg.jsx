import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg }) => {
  return (
    <div className='relative'>
      <Image
        src={socialImg}
        alt='/'
        className='w-full h-full'
        layout='responsive'
      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/30 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        <a href='https://www.instagram.com/vbit.stutalk/' target="_blank" rel="noreferrer"><FaInstagram size={30} className='z-10' /></a>
      </p>
      </div>
    </div>
  );
};

export default InstagramImg;
