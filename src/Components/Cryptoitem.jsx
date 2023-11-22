import React, { useEffect } from "react";
import Chart2 from "../Charts/Chart2";
import { useDispatch } from "react-redux";
import { oneCoinData, searchCoin } from "../service/allCoindata";
import { setOneCoin, setsearchCoin } from "../redux/cryptoSlice";

const Item = ({ obj }) => {
  // console.log(obj)
  const dispatch = useDispatch();
  // const [apiData, setApiData] = useState();

  const setRoute = async (obj) => {
    const data = await oneCoinData(obj.id);
    const data2 = await searchCoin(obj.id);
    dispatch(setOneCoin(data));
    dispatch(setsearchCoin(data2));
  };

  // useEffect(() => {
  //   const data = oneCoinData(obj.id);
  //   console.log(data);
  // }, []);

  return (
    <li
      className="w-full flex items-center px-3 mt-3 border-2 border-cyan-700 bg-gray-950 "
      onClick={() => setRoute(obj)}
    >
      <div className="flex w-[5%]">
        <h3 className="font-bold items-end">{obj.market_cap_rank}</h3>
      </div>
      <div className="flex w-[19%]">
        <img className="w-12 " src={obj.image} alt="logo" />
      </div>
      <div className="flex w-[19%]">
        <h3 className="font-bold items-end">{obj.name}</h3>
      </div>
      <div className="flex w-[19%] items-center">
        <h3 className="font-bold items-end">₹{obj.current_price}</h3>
      </div>

      <div className="flex w-[19%] items-center">
        <h3 className="font-bold items-end">₹{obj.high_24h}</h3>
      </div>
      <div className="flex w-[19%] items-center">
        <h3 className="font-bold items-end">₹{obj.low_24h}</h3>
      </div>
      {/* <div className="w-[20%]">
        <Chart2 />
      </div> */}
    </li>
  );
};

export default Item;
