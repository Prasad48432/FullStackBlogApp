import React,{ useEffect } from 'react';
import Link from 'next/link';
import {motion , useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonals = () => {
  const {ref,inView} = useInView();
  const animation = useAnimation();
  useEffect(()=>{
    if(inView){
      animation.start({
        y: 0,
        opacity: 1,
        transition:{
          ease: [0.6,0.01,0.05,0.95],
          duration: 1,
        }
      });
    }
    if(!inView){
      animation.start({
        y: 100,
        opacity: 0,
      });
    }
  },[inView]);
  return (
    <>
    <motion.div animate={animation}>

      <div ref={ref} className="testimonals">
        <div className="block p-6 rounded-lg w-full bg-white custom_bg_shadow">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 p-3">
            Upcoming Event
          </h5>
          <div className=" lg:flex">
            <img
              className=" w-[276px] h-[230px] object-cover mb-10"
              src="https://www.stutalk.in/images/events/temp-1.jpeg"
              alt="/"
            />
            <p className="text-gray-700 text-base mb-4 ml-7 p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit est autem minima nobis! Assumenda totam mollitia rem
              qui at ducimus harum enim illo fugiat nisi iste, obcaecati, in
              itaque dolorem.
            </p>
          </div>
        </div>
        <div className="block p-6 rounded-lg w-full bg-white custom_bg_shadow">
          <h5 className="text-gray-900 text-lg leading-tight font-medium mb-2 text-center">
            Writer Of the Month 🏆
          </h5>
          <div className="flex justify-center flex-col items-center p-3">
            <img
              className="w-[180px] h-[180px] mb-5"
              src="https://www.stutalk.in/images/wom/december22.png"
              alt="/"
            />
            <h5 className="text-gray-900 text-lg leading-tight font-medium mb-2 text-center">
              Bohini Atharva
            </h5>
            <p className="text-gray-700 text-base mb-4 text-center">
              Congratulations to our winner! Talent will always be appreciated
              here at StuTalk.
            </p>
            <Link href={`/post/nbamtasport`}>
              <span className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                Read winner&#39;s Blog ⟶
              </span>
            </Link>
          </div>
        </div>
        <div className="block p-6 rounded-lg custom_bg_shadow  w-full bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Upcoming Event
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the cards content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="block p-6 rounded-lg custom_bg_shadow  w-full bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 p-3">
            Upcoming Event
          </h5>
          <div className="lg:flex">
            <img
              className="w-[200px] h-[170px]"
              src="https://www.stutalk.in/images/events/temp-3.jpeg"
              alt="/"
            />
            <p className="text-gray-700 text-base mb-4 lg:ml-7 p-2">
              Some quick example text to build on the card title and make up the
              bulk of the cards content. Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        <div  className="block p-6 rounded-lg custom_bg_shadow  w-full bg-white">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 p-3">
            Upcoming Event
          </h5>
          <div className="p-3">
            <img
              className=" w-[276px] h-[230px] object-cover mb-8"
              src="https://www.stutalk.in/images/events/temp-2.png"
              alt="/"
            />
            <p className="text-gray-700 text-base mb-4 p-3">
              Some quick example text to build on the card title and make up the
              bulk of the cards content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium expedita ut corporis magnam
              voluptates bulk of the cards content. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Praesentium expedita ut corporis
              magnam voluptates
            </p>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default Testimonals