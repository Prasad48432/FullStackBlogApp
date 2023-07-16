import React from 'react';
import Image from 'next/image';

const gallery = () => {


  const array = ["https://www.stutalk.in/images/large/10.jpg",
   "https://www.stutalk.in/images/large/11.jpg", 
   "https://www.stutalk.in/images/large/1.jpg",
   "https://www.stutalk.in/images/large/20.jpg",
   "https://www.stutalk.in/images/large/21.jpg",
   "https://www.stutalk.in/images/large/22.jpg",
   "https://www.stutalk.in/images/large/7.jpg",
   "https://www.stutalk.in/images/large/17.jpg",
   "https://www.stutalk.in/images/large/18.jpeg",
   "https://www.stutalk.in/images/large/19.jpeg",
   "https://www.stutalk.in/images/large/14.jpg",
   "https://www.stutalk.in/images/large/15.jpg",
   "https://www.stutalk.in/images/large/13.jpg",
   "https://www.stutalk.in/images/large/16.jpg",
   "https://www.stutalk.in/images/large/6.jpg",
  ];
  return (
    <>
<div className="h-[100px]"></div>
    <h2 className="text-4xl font-bold text-center p-5">Our <span className="text-indigo-700 underline decoration-indigo-700 dark:text-variant-color-dk dark:decoration-variant-color-dk" >Gallery</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-5 sm:p-[5rem] relative ">
        
      {array.map((x) => (
        <div key={String(x)}>
          <Image
            src={x}
            alt="/"
            width={300}
            height={400}
            layout="responsive"
            objectFit="cover"
            quality={50}
            loading="lazy"
            className="rounded-[0.5rem]"
          />
        </div>
      ))}
      </div>
    </>
  );
}

export default gallery