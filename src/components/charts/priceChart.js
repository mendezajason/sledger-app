import React, { useState } from "react";
import images from "../../utils/constant/images";
import { Image } from "native-base";
import tw from "twrnc";

const data = [
  { name: 'Dec 1', value: 12 },
  { name: 'Dec 2', value: 12 },
  { name: 'Dec 3', value: 12 },
  { name: 'Dec 4', value: 12 },
  { name: 'Dec 5', value: 12 },
  { name: 'Dec 6', value: 12 },
  { name: 'Dec 7', value: 12 },
  { name: 'Dec 8', value: 12 },
  { name: 'Dec 9', value: 12 },
  { name: 'Dec 10', value: 12 },
]
const PriceChart = () => {
  const [chartData, setChartData] = useState(data);
  return (
    <Image
      source={
        images.PriceChart
      }
      alt="price chart"
      style={tw.style("mt-4 mr-3")}
    />
  )
}
export default PriceChart;