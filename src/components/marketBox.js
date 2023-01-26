import React, { useEffect, useState } from 'react';
import { Box, IconButton, Flex, Text, Button, Spacer, Image } from 'native-base';
import Icon from "react-native-vector-icons/dist/Feather";
import Icon1 from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { ImageBackground } from "react-native";
import images from '../utils/constant/images';
import tw from "twrnc";

const MarketBox = ({ img, type, rprice, usPrice, rating, vol, mcap, bType, ...props }) => {
    const [bgType, setBgType] = useState("bg-[#f7921a]");

    useEffect(() => {
        if (bType == 1) setBgType("bg-[#f7921a]");
        else if (bType == 2) setBgType("bg-[#739bee]")
        else if (bType == 3) setBgType("bg-[#71a59d]")
    }, [])

    return (
        <Box {...props} m={3} p={3} style={tw.style("bg-gray-50 rounded-md dark:bg-[#4f3f6f]")}  >
            <Flex direction="row" my={1} alignItems="center">
                <Flex direction="row" p={1} style={tw.style(`rounded-md`)} alignItems="center">
                    <Box style={tw.style(`rounded-md p-2 ${bgType}`)}>
                        <Image
                            source={
                                img
                            }
                            alt="Alternate 1"
                            size="xs"
                            width={3}
                            height={4}
                        />
                    </Box>
                    <Text ml={3} fontSize="13px" style={tw.style("font-semibold")}>{type}</Text>
                </Flex>
                <Spacer />
                <Text fontSize="14px"
                    style={tw.style("text-[#4676c8] bg-[#4676c8]/2 dark:bg-[#4676c8]/43 p-2 rounded-md px-5 dark:text-[#8db1ef] font-semibold")}>
                    $ {rprice}
                </Text>
            </Flex>
            <Flex direction="row">
                <Box mb={3} style={tw.style(" grow bg-white p-3 rounded-md mr-3")} >
                    <Text fontSize="xs" style={tw.style("text-gray-400")}>Price</Text>
                    <Text fontSize="sm" style={tw.style("text-gray-700 font-semibold")}>{usPrice} USD</Text>
                </Box>
                <Box mb={3} style={tw.style("grow bg-white p-3 rounded-md")} >
                    <Text fontSize="xs" style={tw.style("text-gray-400")}>24H Change</Text>
                    <Text fontSize="sm" style={tw.style("text-gray-700 font-semibold")}>{rating} %</Text>
                </Box>
            </Flex>
            <Flex direction="row">
                <Box mb={3} style={tw.style("grow bg-white p-3 rounded-md mr-3")} >
                    <Text fontSize="xs" style={tw.style(" text-gray-400")}>24H Volume</Text>
                    <Text fontSize="sm" style={tw.style("text-gray-700 font-semibold")}>$ {vol} M</Text>
                </Box>
                <Box mb={3} style={tw.style("grow bg-white p-3 rounded-md")} >
                    <Text fontSize="xs" style={tw.style("text-gray-400")}>Market Cap</Text>
                    <Text fontSize="sm" style={tw.style("text-gray-700 font-semibold")}>$ {mcap} B</Text>
                </Box>
            </Flex>
            <Flex direction="row" style={tw.style("")}>
                <Box style={tw.style("grow mr-3 bg-[#888888] dark:bg-[#030106] rounded-md")} >
                    <Button
                        variant={"outline"}
                        style={tw.style("border-0")}
                        onPress={() => {
                            console.log('hello')
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="14px" style={tw.style("text-white")}>Details</Text>
                    </Button>
                </Box>
                <Box style={tw.style("grow mr-3 bg-[#b9cd7a] rounded-md")} >
                    <Button
                        variant={"outline"}
                        style={tw.style("border-0")}
                        onPress={() => {
                            console.log('hello')
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="14px" style={tw.style("text-white")}>Add</Text>
                    </Button>
                </Box>
                <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" rounded-md")}
                        onPress={() => {
                            console.log('hello')
                        }}
                    >
                        <Text fontSize="14px" style={tw.style("text-white")}>Trade</Text>
                    </Button>
                </ImageBackground>
            </Flex>
        </Box>
    )
}
export default MarketBox;