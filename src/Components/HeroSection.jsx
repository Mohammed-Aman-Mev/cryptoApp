import React from "react";
import Cryptoitem from "./Cryptoitem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allCoindata, oneCoinData } from "../service/allCoindata";
import { addCoin, nameRoute } from "../redux/cryptoSlice";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const dispatch = useDispatch();
  const allCoin = useSelector((state) => state.cryptoSlice.allCoin);
  const route = useSelector((state) => state.cryptoSlice.route);

  const getdata = async () => {
    const data = await allCoindata();
    // console.log(data);
    dispatch(addCoin(data));
  };

  const setRoute = (obj) => {
    dispatch(nameRoute(obj.id));
  };

  useEffect(() => {
    if (allCoin === null) getdata();
    // if (allCoin.length === 0) {
    // }
  }, []);
  return (
    <div id="hero" className="text-white bg-slate-800 px-5 py-16">
      <h1 className="text-5xl text-center text-gray-50 font-semibold">
        Top tranding CRYPTO coin <br />
        market price ,caps and many more about crypto
      </h1>
      <ul className="flex items-center flex-col gap-2 py-10">
        <li className="w-full flex items-center px-1 justify-between">
          <div className="flex w-[5%]">
            <h3 className="font-bold items-end">#Rank</h3>
          </div>
          <div className="flex w-[19%]">
            <h3 className="font-bold items-end">#logo</h3>
          </div>

          <div className="flex w-[19%]">
            <h3 className="font-bold items-end">#Name</h3>
          </div>
          <div className="flex w-[19%]">
            <h3 className="font-bold items-end">₹Price</h3>
          </div>
          <div className="flex w-[19%]">
            <h3 className="font-bold items-end">highest ⇧</h3>
          </div>
          <div className="flex w-[19%]">
            <h3 className="font-bold items-end">lowest 🠛</h3>
          </div>
          {/* <div className="flex w-[14%]">
            <h3 className="font-bold items-end">Graph</h3>
          </div> */}
        </li>
        {allCoin ? (
          allCoin.map((obj) => (
            <Link
              to={`/detailes/id:${route}`}
              key={obj.id}
              className="w-full"
              onMouseOver={() => setRoute(obj)}
            >
              <Cryptoitem obj={obj} />
            </Link>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
      {/* <Linebar /> */}
    </div>
  );
};

export default HeroSection;
