import React from 'react'
import Image from 'next/image'

const CryptoCard = ({image,name,price}) => {
  return (
  <div className="flex justify-center ">
  <div className="rounded-lg border-[1px] border-black bg-white max-w-sm w-[240px]">
    <div className='text-center justify-center p-3'>
      <Image className="w-[300px] p-4" src={image} alt="" width={150} height={150} layout='fixed'/>
    </div>
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