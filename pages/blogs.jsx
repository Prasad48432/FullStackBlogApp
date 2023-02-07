import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import CryptoList from "../components/CryptoList";
import Loader from "../components/Loader";

const PAGE_NUMBER = 1;
const Blogs = () => {
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

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Hero heading="My Blogs" message="Check Out my blogs" />
      <CryptoList coinsData={coinsData} />
      {loading && <Loader />}
      <div className="h-[100px]"></div>
    </>
  );
};

export default Blogs;
