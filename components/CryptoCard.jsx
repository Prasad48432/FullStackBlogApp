import React from 'react'
import {motion} from 'framer-motion'

const CryptoCard = ({image,name,price}) => {
  return (
  <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img class="w-[300px] p-4" src={image} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2 text-center">{name}</h5>
      <p class="text-gray-700 font-semibold text-xl mb-4 text-center">${price}
      </p>
    </div>
  </div>
</div>
  )
}

export default CryptoCard