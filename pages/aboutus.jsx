import React from 'react'
import Image from 'next/image'



const aboutus = () => {
  return (
    <>
    <div className="h-[100px]"></div>
    <div>
      <h2 className="text-4xl font-bold text-center p-5">
        Our{" "}
        <span className="text-indigo-700 underline decoration-indigo-700">
          Story
        </span>
      </h2>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://www.stutalk.in/images/large/4.JPG'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
            quality={40}
            style={{
              borderRadius: "10px"
            }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://www.stutalk.in/images/large/29.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            quality={40}
            style={{
              borderRadius: "10px"
            }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://www.stutalk.in/images/large/9.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            quality={40}
            style={{
              borderRadius: "10px"
            }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://www.stutalk.in/images/large/3.JPG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            quality={40}
            style={{
              borderRadius: "10px"
            }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://www.stutalk.in/images/large/42.JPG'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
            quality={40}
            style={{
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
    </div>
    <div className="h-[100px]"></div>
    </>
  );
}

export default aboutus