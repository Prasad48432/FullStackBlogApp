import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai';

const HoverGallery = () => {
  return (
    <>
      <div className="swiper-container">
        <div className="card-swiper">
            <img src="./handarrow.jpg" alt="arrow" className='w-[45px] h-[45px] relative sm:bottom-5 sm:left-5 right-12 rotate-[-12deg] bottom-3'/>
        <h1 className='text-right relative bottom-20 hidden sm:block awesome_gradient text-3xl' >Hover me</h1>
        <h1 className='text-3xl text-black text-right relative bottom-20 block sm:hidden awesome_gradient' >Press me</h1>
          <div className="card-groups">
            <div className="card-group" data-index="0" data-status="active">
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
            </div>
            <div className="card-group" data-index="1" data-status="unknown">
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
            </div>
            <div className="card-group" data-index="2" data-status="unknown">
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
              <div className="little-card card"></div>
              <div className="big-card card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HoverGallery