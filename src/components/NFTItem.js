import tw from "twrnc";
import { Box, Flex, Center, Image, Text } from 'native-base';
import React, { useContext, useState } from 'react';
import { Dimensions, ImageBackground, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/dist/Ionicons";
import { ThemeContext } from "../utils/ThemeProvider";
import images from "../utils/constant/images";
import { TouchableOpacity } from "react-native-gesture-handler";

const NFTItem = ({ id, navigation }) => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);

    return (
        <Box pt={3} mb={5} >
            <Box style={tw.style("bg-[#FCFCFC] dark:bg-[#4f3f6f]")} px={3} pb={3} rounded="lg">
                <Box px="4" >
                    <ImageBackground
                        style={{ opacity: 0.4 }}
                        source={id % 2 ? (isToggle ? images.NFTtop2 : images.ItemDarkTop2) : (isToggle ? images.NFTtop1 : images.ItemDarkTop1)}
                    >
                        <Box p="2" rounded="lg"></Box>
                    </ImageBackground>
                </Box>
                <Center rounded="lg">
                    <Image
                        source={images.NFTItem1}
                        alt="Alternate Text"
                        style={tw.style("w-full rounded-lg")}
                    />
                </Center>
                <Box px={5} >
                    <Flex mt={5} direction="row" justifyContent={"space-between"} alignItems={"center"}
                        style={tw.style("border-b border-gray-200 py-3 ")}>
                        <Text fontSize="17px" style={tw.style("font-semibold text-[#6d6d6d] dark:text-white")}>Secret Hat</Text>
                        <Flex direction="row" alignItems={"center"}>
                            <Box px={2.5} py={2} mr={2} style={tw.style("bg-[#739bee]")} rounded="lg">
                                <Image
                                    source={images.ETHIcon}
                                    alt="Alternate Text"
                                    width={2.5}
                                    height={3.5}
                                />
                            </Box>
                            <Text fontSize="xs" style={tw.style("dark:text-white text-[#004842]")}>Ethereum</Text>
                        </Flex>
                    </Flex>
                    <Flex direction="row" py={4} justifyContent={"space-between"}>
                        <Box >
                            <Text fontSize="xs" style={tw.style("text-[#6d6d6d]")}>Artist</Text>
                            <Text fontSize="sm" style={tw.style("dark:text-white text-[#6d6d6d] font-semibold")}>Muhammed Alaa</Text>
                        </Box>
                        <Box >
                            <Text fontSize="xs" style={tw.style("text-[#6d6d6d]")}>Highest Bid</Text>
                            <Text fontSize="sm" style={tw.style("dark:text-white text-[#6d6d6d] font-semibold")}>Ismal Ebrahim Andy</Text>
                        </Box>
                    </Flex>
                    <TouchableOpacity onPress={() => navigation.navigate("ItemDetail")}>
                        <Box rounded="sm" >
                            <ImageBackground resizeMode="stretch" source={images.BtnBack1}>
                                <Box p="2">
                                    <Text fontSize="sm" style={tw.style("text-center text-white p-1")}>View Listing</Text>
                                </Box>
                            </ImageBackground>
                        </Box>
                    </TouchableOpacity>
                </Box>
                <Image
                    source={id % 2 ? images.NFTIcon2 : images.NFTIcon1}
                    alt="Alternate Text"
                    style={{ transform: [{ translateX: -10 }], ...tw.style("-top-5 left-1/2 absolute z-10 ") }}
                />
            </Box>
        </Box>
    )
}
export default NFTItem;