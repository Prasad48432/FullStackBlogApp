import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const CryptoCard = ({image,name,price}) => {
  return (
  <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image className="w-[300px] p-4" src={image} alt="" width={100} height={100} layout='fixed'/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">{name}</h5>
      <p className="text-gray-700 font-semibold text-xl mb-4 text-center">${price}
      </p>
    </div>
  </div>
</div>
  )
}

export default CryptoCard