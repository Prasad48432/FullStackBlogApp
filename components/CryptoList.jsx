import React from 'react';
import CryptoCard from './CryptoCard';


const CryptoList = ({coinsData}) => {
  return (
    <div className='coins_list'>
        {coinsData.map((coin,index)=>{
            return(
                <CryptoCard
                key={index}
                image={coin.image}
                name={coin.name}
                price={coin.current_price}
                />
            );
        })}
    </div>
  );
};

export default CryptoList