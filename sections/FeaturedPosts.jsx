import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  FeaturedPostCard  from '../components/FeaturedPostCard';
import { getFeaturedPosts } from '../services';
import { FiChevronRight,FiChevronLeft } from "react-icons/fi";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center p-3 cursor-pointer custom_arrow_bg text-white rounded-full">
      <FiChevronLeft size={30}/>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center p-3 cursor-pointer custom_arrow_bg text-white rounded-full">
      <FiChevronRight size={30}/>
    </div>
  );

  return (
    <>
      <h2 className="text-2xl text-center text-black dark:text-white font-semibold p-5">
        Featured Posts
      </h2>
      <div className="mb-8">
        <Carousel
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          itemClass="px-4"
        >
          {dataLoaded &&
            featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
        </Carousel>
      </div>
    </>
  );
};

export default FeaturedPosts;