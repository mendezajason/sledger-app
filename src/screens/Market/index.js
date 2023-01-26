import tw from "twrnc";
import { Box, ScrollView, Flex, Center } from 'native-base';
import React, { useContext, useState } from 'react';
import { Dimensions, TextInput } from 'react-native';
import MarketBox from "../../components/marketBox";
import images from "../../utils/constant/images";
import { ThemeContext } from '../../utils/ThemeProvider';
import Icon from "react-native-vector-icons/dist/Ionicons";

const data = [
    { img: images.BTCIcon, type: "Bitcoin | BTC", rPrice: "8,384", usPrice: "21,843", rating: "0.11", vol: "206.83", marketCap: "400.83", t: 1 },
    { img: images.ETHIcon, type: "Ethereum | ETH", rPrice: "8,384", usPrice: "21,843", rating: "0.11", vol: "206.83", marketCap: "400.83", t: 2 },
    { img: images.LiteCoinIcon, type: "Litecoin | LTC", rPrice: "8,384", usPrice: "21,843", rating: "0.11", vol: "206.83", marketCap: "400.83", t: 3 },
]

const Market = ({ navigation }) => {
    const [marketData, setMarketData] = useState(data);
    const { isToggle, toggleThme } = useContext(ThemeContext);

    return (
        <ScrollView>
            <Flex direction="row" style={tw.style("p-2 px-4")}>
                <Center p="2" style={tw.style("border border-gray-200 rounded-l-md border-r-0")}>
                    <Icon name="search" size={20} style={tw.style(`${isToggle ? "text-black" : "text-white"} `)} />
                </Center>
                <TextInput placeholder="Who are you searching for .."
                    placeholderTextColor={isToggle ? "#000" : "#fff"}
                    style={tw.style("dark:text-white border border-gray-200 rounded-r-md border-l-0 grow")} />
            </Flex>
            <Box >
                {
                    marketData.length > 0 && marketData.map((item, index) => (<MarketBox img={item.img} type={item.type} rprice={item.rPrice} bType={item.t} usPrice={item.usPrice} rating={item.rating} vol={item.vol} mcap={item.marketCap} key={index} />))
                }
                <Box style={tw.style("py-10")}></Box>
            </Box>
        </ScrollView>
    )
}
export default Market;