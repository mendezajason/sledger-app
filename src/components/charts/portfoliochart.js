

import React, { Children, useState } from "react";
import { Flex, Box } from "native-base"
import { Dimensions } from "react-native";
import { BarChart, Grid, XAxis, YAxis, LineChart } from 'react-native-svg-charts'
import styled from 'styled-components/native';
import { Defs, LinearGradient, Stop } from 'react-native-svg'

const SCREENWIDTH = Dimensions.get('window').width;

export const ChartContainer = ({ children }) => {
  return (
    <Flex direction="row" style={{ position: 'relative' }}>
      {children}
    </Flex>
  )
}

export const data6 = [
  {
    value: 50,
    svg: {
      fill: 'rgba(221,221,221,0.35294117647058826 )',
    },
  },
  {
    value: 70,
    svg: {
      fill: 'url(#gradient)',
    },
  },
  {
    value: 95,
    svg: {
      fill: 'rgba(221,221,221,0.35294117647058826 )',
    },
  },
  {
    value: 40,
    svg: {
      fill: 'rgba(221,221,221,0.35294117647058826 )',
    },
  },
  {
    value: 85,
    svg: {
      fill: 'rgba(221,221,221,0.35294117647058826 )',
    },
  },
  {
    value: 85,
    svg: {
      fill: 'rgba(221,221,221,0.35294117647058826 )',
    },
  },
  {
    value: 85,
    svg: {
      fill: 'rgba(221,221,221,0.35294117647058826 )',
    },
  },
]
const data2 = [1, 2, 3, 4, 5, 6, 7]

export const Gradient = () => (
  <Defs>
    <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
      <Stop offset={'0%'} stopColor={'#4676c8'} />
      <Stop offset={'100%'} stopColor={'#8522cc'} /* stopOpacity={0.2} */ />
    </LinearGradient>
  </Defs>
)
const PortfolioChart = ({ width, height }) => {
  const [xValue, setXValue] = useState(data2);
  const [chartData, setChartData] = useState(data6);
  const data3 = [80, 10, 95, 48, 24, 67, 51]

  return (
    <Box >
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
          spacingInner={0.6}
          spacingOuter={0.2}
          gridMin={0}
          innerRadius={40}
          gridMax={80}
          data={chartData}
          yAccessor={({ item }) => item.value}
          // svg={{ fill: "url(#gradient)" }}
          contentInset={{ top: 10, bottom: 10 }}>
          <Gradient />
        </BarChart>
        {/* <LineChart
        style={{ height: 300 ,position:"absolute" ,top:-30 ,width:360}}
        gridMin={-50}
        gridMax={150}
        data={data3}
        svg={{
            stroke: 'rgb(134,14,34)',
        }}
        contentInset={{ top: 20, bottom: 20,left:50 }}>
        </LineChart> */}
      </ChartContainer>
      <XAxis
        style={{ marginHorizontal: 0, width: SCREENWIDTH - 30 }}
        data={xValue}
        contentInset={{ left: 50, right: 20 }}
        svg={{ fontSize: 15, fill: 'grey' }}
        formatLabel={(value, index) => "Dec" + index}
      />
    </Box>
  )
}
export default PortfolioChart;