import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const Chart2 = () => {
  const apiData = useSelector((state) => state.cryptoSlice.oneCoin);
  const route = useSelector((state) => state.cryptoSlice.route);

  // useEffect(() => {
  //   apiData = apiData;
  // }, [apiData]);

  const date = (i) => {
    let unix_timestamp = i;

    var date = new Date(unix_timestamp * 1000);

    var hours = date.getHours();

    var minutes = "0" + date.getMinutes();

    var seconds = "0" + date.getSeconds();

    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    // console.log(formattedTime);
    return formattedTime;
  };

  const data = {
    labels: apiData
      ? apiData.prices.map((item) => date(item[0]))
      : [2, 3, 4, 5, 6, 7, 8],
    datasets: [
      {
        // fill: true,
        label: route,
        data: apiData
          ? apiData.prices.map((item) => item[1])
          : [2, 3, 4.5, , 5, 67],
        backgroundColor: "rgba(206, 240, 245,1)",
        borderColor: "rgba(252, 3, 165,1)",
        pointBorderColor: "none",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: true,
      scales: {
        y: {},
      },
    },
  };

  return (
    <div className="w-[100%] h-[100%]">
      {apiData ? (
        <Line data={data} options={options}></Line>
      ) : (
        <h1 className="text-center text-mono text-5xl">Loading...</h1>
      )}
    </div>
  );
};

export default Chart2;
// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1
