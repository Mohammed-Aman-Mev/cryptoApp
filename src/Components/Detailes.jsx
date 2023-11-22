import { useSelector } from "react-redux";
import Chart2 from "../Charts/Chart2";

const Detailes = () => {
  const allCoin = useSelector((state) => state.cryptoSlice.allCoin);
  const searchCoin = useSelector((state) => state.cryptoSlice.searchCoin);
  const route = useSelector((state) => state.cryptoSlice.route);
  const item = allCoin.filter((i) => i.id === route);
  console.log(item[0]);
  return (
    <div className="bg-sky-100 p-4">
      <div className="w-full gap-3 md:flex ">
        <div className="w-full text-cyan-900 md:w-[30%] p-2">
          <div className="w-full flex items-center justify-center p-3">
            <img src={item[0].image} alt="" className="w-[50%]" />
          </div>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            {item[0].name}
          </h1>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            symbol:{item[0].symbol}
          </h1>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            current:₹{item[0].current_price}
          </h1>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            lowest:₹{item[0].low_24h}
          </h1>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            highest:₹{item[0].high_24h}
          </h1>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            all time high:₹{item[0].ath}
          </h1>
          <h1 className="w-full mx-auto my-[2px] bg-white px-1 rounded-md font-mono">
            all time low:₹{item[0].atl}
          </h1>
        </div>
        <div className="w-full text-red-300 h-auto">
          <Chart2 />
        </div>
      </div>
      {/* <div className="w-full text-gray-600 ">{searchCoin.description.en}</div> */}
    </div>
  );
};

export default Detailes;
