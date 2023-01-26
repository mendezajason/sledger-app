

import React, { useEffect, useState, useContext } from "react";
import { Flex, Box } from "native-base"
import { Dimensions } from "react-native";
import { BarChart, Grid, XAxis, YAxis, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { Circle } from 'react-native-svg'
import { ThemeContext } from "../../utils/ThemeProvider";

const SCREENWIDTH = Dimensions.get('window').width;

export const Dots = ({ x, y, data, curdata }) => {
  return (
    <>
      {data?.map((value, index) => {
        // console.log("x",x(index));
        if (value != curdata) return;
        return (
          <Circle
            key={index}
            cx={x(index)}
            cy={y(value)}
            r={4}
            fill={'#147ad6'}
          />
        )
      })}
    </>
  )
}

export const ChartContainer = ({ children }) => {
  return (
    <Flex direction="row" style={{ position: 'relative' }}>
      {children}
    </Flex>

  )
}
export const data6 = [
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 100,
    svg: {
      fill: 'url(#gradient)',
    },
  },
]

const data2 = [1, 2, 3, 4, 5, 6, 7]

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'50%'} y1={'0%'} x2={'50%'} y2={'99%'}>
      <Stop offset={'0%'} stopColor={'#f5f6fa'} stopOpacity={0.55} />
      <Stop offset={'100%'} stopColor={'#f5f6fa'} stopOpacity={0.55} />
    </LinearGradient>
  </Defs>
)

const MarketChart = ({ width, height }) => {
  const [xValue, setXValue] = useState(data2);
  const [chartData, setChartData] = useState(data6);
  const [curIndex, setCurIndex] = useState(3);
  const data3 = [80, 10, 95, 48, 24, 67, 51];
  const { isToggle, toggleThme } = useContext(ThemeContext);

  useEffect(() => {
    chartData[curIndex].svg.fill = "#cfd3f18c"
  }, [curIndex]);

  return (
    <Box pb={4}>
      <ChartContainer>
        <YAxis
          data={data2}
          contentInset={{ top: 10, bottom: 10 }}
          min={0}
          max={80}
          svg={{
            fill: 'grey',
            fontSize: 12,
          }}
          style={{ marginRight: 5 }}
          formatLabel={(value) => `${value} k`}
        />

        <BarChart
          style={{ height: 200, width: SCREENWIDTH - 60 }}
          spacingInner={0.1}
          spacingOuter={0.2}
          gridMin={0}
          innerRadius={40}
          gridMax={80}
          data={chartData}
          yAccessor={({ item }) => item.value}
          svg={{ fill: "url(#gradient)" }}
          contentInset={{ top: 10, bottom: 10 }}>
          <Gradient />

        </BarChart>
        <LineChart
          style={{ height: 300, position: "absolute", top: -30, width: 360 }}
          gridMin={-50}
          gridMax={150}
          data={data3}
          curve={shape.curveNatural}
          svg={{
            stroke: '#147ad6',
          }}
          contentInset={{ top: 20, bottom: 20, left: 50 }}>
          <Dots curdata={data3[curIndex]} />
        </LineChart>
      </ChartContainer>
      <XAxis
        style={{ marginHorizontal: 0, width: SCREENWIDTH - 40 }}
        data={xValue}
        contentInset={{ left: 50, right: 20 }}
        svg={{ fontSize: 12, fill: isToggle?'black':'white' }}
        formatLabel={(value, index) => "Dec" + index}
      />
    </Box>


  )
}
export default MarketChart;