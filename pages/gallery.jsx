import React from 'react';
import Image from 'next/image';

const gallery = () => {

  const array = ["https://images.unsplash.com/photo-1678382998507-8e8f2bee31d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1678465952856-4b87cd6e04bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60", 
   "https://images.unsplash.com/photo-1678418607665-045f20eb867a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1678327429479-626fc43740f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1678327461067-ee8fe27163c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1678449077046-3ad10de62471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
   "https://images.unsplash.com/photo-1678379975630-bd7f527317d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"];
  return (
    <>
      <div className="h-[80px] sm:h-[20px]"></div>
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
            quality={80}
            className="rounded-[0.5rem]"
          />
        </div>
      ))}
      </div>
    </>
  );
}

export default gallery