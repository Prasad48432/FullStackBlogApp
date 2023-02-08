import React, { useEffect, useState } from 'react'
import axios from "axios";
import CryptoList from "../components/CryptoList";
import Loader from "../components/Loader";
import {BsArrowClockwise} from 'react-icons/bs'

const PAGE_NUMBER = 1;

const Cryptoprices = () => {

    const [coinsData, setCoinsData] = useState([]);
    const [page, setPage] = useState(PAGE_NUMBER);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setTimeout(async () => {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
        );
  
        setCoinsData((prev) => {
          return [...prev, ...response.data];
        });
        setLoading(false);
      }, 1500);
    }, [page]);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showAlert = () => {
      setLoading(true);
      setPage((prev) => prev + 1);
    }

  
    const handleScroll = async () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      
      }
    };
  return (
    <>
      <div>
        <h2 className="p-1 text-center sm:text-3xl text-xl font-semibold text-black mt-[100px]">
          ALL CURRENT CRYPTO PRICES
        </h2>
        <CryptoList coinsData={coinsData} />
        {loading && <Loader />}

        <div className="items-center justify-center flex mt-[50px]">
          <button
            className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md"
            onClick={showAlert}
          >
            Load More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.312 5.595l1.296-1.527c.727.698 1.354 1.495 1.869 2.369l-1.776.931c-.39-.648-.853-1.246-1.389-1.773zm3.844 2.179l-1.787.937c.255.647.435 1.33.533 2.039h2.021c-.117-1.043-.378-2.042-.767-2.976zm-14.81-3.46c1.358-.83 2.948-1.314 4.654-1.314 1.919 0 3.695.608 5.157 1.636l1.298-1.529c-1.814-1.319-4.04-2.107-6.455-2.107-2.131 0-4.106.624-5.789 1.673l-1.85-2.673-2.152 7h6.994l-1.857-2.686zm13.642 7.936c-.027.962-.206 1.885-.514 2.75h2.101c.249-.878.401-1.798.425-2.75h-2.012zm-15.3 6.155l-1.295 1.527c-.727-.698-1.355-1.495-1.869-2.369l1.775-.931c.39.648.853 1.246 1.389 1.773zm-3.844-2.179l1.787-.937c-.254-.647-.434-1.33-.533-2.039h-2.022c.119 1.043.379 2.042.768 2.976zm14.81 3.46c-1.357.83-2.947 1.314-4.654 1.314-1.918 0-3.695-.608-5.156-1.636l-1.299 1.529c1.814 1.319 4.041 2.107 6.455 2.107 2.131 0 4.107-.624 5.789-1.673l1.85 2.673 2.152-7h-6.994l1.857 2.686zm-13.642-7.936c.027-.962.207-1.885.513-2.75h-2.1c-.249.878-.402 1.798-.425 2.75h2.012z" />
            </svg>
          </button>
        </div>

        <div className="h-[100px]"></div>
      </div>
    </>
  );
}

export default Cryptoprices