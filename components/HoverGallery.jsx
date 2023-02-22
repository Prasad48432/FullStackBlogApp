import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai';

const HoverGallery = () => {
  return (
    <>
      <div className="swiper-container">
        <div className="card-swiper">
            <img src="./handarrow.jpg" alt="arrow" className='w-[45px] h-[45px] relative bottom-5 left-5'/>
        <h1 className='text-3xl text-black text-right relative bottom-20' >Hover me</h1>
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