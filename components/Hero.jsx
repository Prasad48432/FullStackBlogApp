import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";

const Hero = ({ heading, message }) => {
  return (
    <>
    <div className="mt-20">
    </div>
    <section className="mb-20">

    <div className="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid lg:grid-cols-2 gap-12 flex items-center">
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#e54029] to-[#eb5b13]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e54029] to-[#eb5b13]">Voice of 📢<Typewriter
            options={{
              strings: ["VBITIANS!!", "STUDENTS!!"],
              autoStart: true,
              loop: true,
            }}
          /></span></h1>
          </div>
          <div className="mb-12 lg:mb-0">
            <Image
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
              className="w-5/6 rounded-lg shadow-lg"
              alt=""
              width={600}
              height={660}
              layout='responsive'
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default Hero;
