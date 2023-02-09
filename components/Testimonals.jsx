import React from 'react'

const Testimonals = () => {
  return (
    <>
      <div className="testimonals">
        <div className="block p-6 rounded-lg shadow-lg  w-full bg-white outline outline-2 outline-black">
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
        <div className="block p-6 rounded-lg shadow-lg  w-full bg-white outline outline-4 outline-indigo-700">
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
          </div>
        </div>
        <div className="block p-6 rounded-lg shadow-lg  w-full bg-white outline outline-2 outline-black">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Upcoming Event
          </h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the cards content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="block p-6 rounded-lg shadow-lg  w-full bg-white outline outline-2 outline-black">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 p-3">
            Upcoming Event
          </h5>
          <div className="lg:flex">
          <img className="w-[200px] h-[170px]" src="https://www.stutalk.in/images/events/temp-3.jpeg" alt="/"/>
          <p className="text-gray-700 text-base mb-4 lg:ml-7 p-2">
            Some quick example text to build on the card title and make up the
            bulk of the cards content. Lorem ipsum dolor sit amet consectetur
          </p>
          </div>
        </div>
        <div className="block p-6 rounded-lg shadow-lg  w-full bg-white outline outline-2 outline-black">
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
              voluptates

              bulk of the cards content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Praesentium expedita ut corporis magnam
              voluptates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonals