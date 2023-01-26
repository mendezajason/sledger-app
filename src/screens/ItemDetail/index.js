import tw from "twrnc";
import { Box, ScrollView, Image, Flex, Text, Heading, Button, Input, Select } from 'native-base';
import React, { useContext, useState } from 'react';
import images from "../../utils/constant/images";
import { Dimensions } from 'react-native';
import Bid from "../../components/bid";
import { isObject } from "twrnc/dist/esm/types";
import { ThemeContext } from "../../utils/ThemeProvider";

const ItemDetail = ({ navigation }) => {
    const { isToggle, toggleTheme } = useContext(ThemeContext)

    return (
        <ScrollView>
            <Box p={5} pb={100}>
                <Image
                    source={images.NFTDetailImg}
                    alt="Alternate Text"
                    style={tw.style("w-full rounded-3xl")}
                />
                <Flex mt={5} direction="row" justifyContent={"space-between"} alignItems={"center"} style={tw.style("border-b border-gray-200 py-3 ")}>
                    <Box >
                        <Text fontSize="lg" style={tw.style("font-semibold")}>Secret Hat</Text>
                        <Text fontSize="xs" style={tw.style("font-semibold text-gray-800 dark:text-white")}>photography</Text>
                    </Box>
                    <Flex direction="row" alignItems={"center"}>
                        <Box p={2} mr={2} style={tw.style("bg-[#739bee]")} rounded="lg">
                            <Image
                                source={images.ETHIcon}
                                alt="Alternate Text"
                                width={3}
                                height={4}
                            />
                        </Box>
                        <Text fontSize="xs" >Ethereum</Text>
                    </Flex>
                </Flex>
                <Text fontSize="sm" mt={4} style={tw.style("text-gray-400")}>Artist</Text>
                <Flex p={2} px={4} mt={2} direction="row" alignItems={"center"} style={tw.style("bg-[#f7f8fc] rounded-md")}>
                    <Image
                        source={images.NFTAvatar}
                        alt="Alternate Text"
                        width={10}
                        height={10}
                        mr={3}
                        ml={1}
                    />
                    <Text fontSize="md" style={tw.style("text-gray-400")}>Chris</Text>
                </Flex>
                <Text fontSize="sm" mt={4} style={tw.style("text-gray-400")}>Owner</Text>
                <Flex p={2} px={4} mt={2} direction="row" alignItems={"center"} style={tw.style("bg-[#f7f8fc] rounded-md")}>
                    <Image
                        source={images.NFTAvatar}
                        alt="Alternate Text"
                        width={10}
                        height={10}
                        mr={3}
                        ml={1}
                    />
                    <Text fontSize="md" style={tw.style("text-gray-400")}>Chris</Text>
                </Flex>
                <Box style={tw.style("pb-5 border-b border-gray-200")}>
                    <Text fontSize="md" mt={4} style={tw.style("text-gray-400")}>Description</Text>
                    <Text fontSize="sm" mt={4} style={tw.style("text-gray-400 dark:text-white")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniram, quil
                    </Text>
                </Box>
                <Flex mt={4} direction="row" style={tw.style("pb-4 border-b border-gray-200")}>
                    <Box style={tw.style("grow")}>
                        <Flex direction="row" justifyContent={"space-around"} alignItems="center">
                            <Box >
                                <Heading fontSize={50} >06</Heading>
                                <Text fontSize="md" style={tw.style("text-center text-gray-400")}>Day</Text>
                            </Box>
                            <Heading fontSize={50} style={tw.style("text-gray-400  pb-6")} >:</Heading>
                        </Flex>
                    </Box>
                    <Box style={tw.style("grow")}>
                        <Flex direction="row" justifyContent={"space-around"} alignItems="center">
                            <Box >
                                <Heading fontSize={50} >30</Heading>
                                <Text fontSize="md" style={tw.style("text-center text-gray-400")}>Hours</Text>
                            </Box>
                            <Heading fontSize={50} style={tw.style("text-gray-400  pb-6")} >:</Heading>
                        </Flex>
                    </Box>
                    <Box style={tw.style("grow")}>
                        <Flex direction="row" justifyContent={"space-around"} alignItems="center">
                            <Box >
                                <Heading fontSize={50} >53</Heading>
                                <Text fontSize="md" style={tw.style("text-center text-gray-400")}>Min</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex direction="row" mt={3} justifyContent="space-between" style={tw.style("pb-7 border-b border-gray-300")}>
                    <Box >
                        <Flex direction="row" alignItems={"center"}>
                            <Image
                                source={images.detail1}
                                alt="Alternate Text"
                                width={7}
                                height={5}
                                mr={3}
                                ml={1}
                            />
                            <Box >
                                <Text fontSize="sm" style={tw.style("text-gray-600 mb-1")}>Owned By</Text>
                                <Flex direction="row" alignItems={"center"}>
                                    <Box size={3} style={tw.style("rounded-full bg-[#96cb3b]")}>
                                    </Box>
                                    <Text fontSize="sm" ml={3}>Khalid S.</Text>
                                </Flex>
                            </Box>
                        </Flex>
                        <Flex direction="row" alignItems={"center"}>
                            <Image
                                source={images.detail3}
                                alt="Alternate Text"
                                width={7}
                                height={7}
                                mr={3}
                                ml={1}
                            />
                            <Box >
                                <Text fontSize="sm" style={tw.style("text-gray-600 mb-1")}>Artist</Text>
                                <Flex direction="row" alignItems={"center"}>
                                    <Box size={3} style={tw.style("rounded-full bg-gray-400")}>
                                    </Box>
                                    <Text fontSize="sm" ml={3}>MUHAMED A.</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    <Box >
                        <Flex direction="row" alignItems={"center"}>
                            <Image
                                source={images.detail2}
                                alt="Alternate Text"
                                width={6}
                                height={10}
                                mr={3}
                                ml={1}
                            />
                            <Box >
                                <Text fontSize="sm" style={tw.style("text-gray-600 mb-1")}>Number of Bids</Text>
                                <Text fontSize="sm" >172</Text>
                            </Box>
                        </Flex>
                        <Flex direction="row" alignItems={"center"}>
                            <Image
                                source={images.detail4}
                                alt="Alternate Text"
                                width={7}
                                height={7}
                                mr={3}
                                ml={1}
                            />
                            <Box >
                                <Text fontSize="sm" style={tw.style("text-gray-600 mb-1")}>Highest Bid</Text>
                                <Text fontSize="sm" >DAVID S.</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                {/* bid part start */}
                <Box mt={5}>
                    <Flex direction="row" justifyContent={"space-between"}>
                        <Box >
                            <Heading >Bids</Heading>
                            <Text fontSize="xs" style={tw.style("text-gray-800 font-semibold")}>400 Bid</Text>
                        </Box>
                        <Button
                            style={tw.style("px-5 bg-transparent border border-gray-200 rounded-xl ")}
                            onPress={() => {
                                console.log('hello')
                            }}
                            buttonStyle={tw.style("text-black")}
                        >
                            <Text fontSize="xs" style={tw.style("text-gray-800 font-semibold")}>View All Bids</Text>
                        </Button>
                    </Flex>
                    <Flex direction="row" justifyContent={"space-between"} mt={7} mb={5}>
                        <Text fontSize="xs">Username</Text>
                        <Text fontSize="xs">Bid</Text>
                    </Flex>
                    <Bid mb={3} />
                    <Bid mb={3} />
                    <Bid mb={3} />
                    <Bid mb={3} />
                </Box>
                {/* bid part end */}
                <Box>
                    <Heading style={tw.style("text-gray-800 dark:text-gray-200")}>Place Bid</Heading>
                    <Text fontSize="sm" style={tw.style("dark:text-[#7e7492] text-gray-800")} mb={5}>Fill the form below to place bid</Text>
                    <Text fontSize="sm" style={tw.style("mb-2 mt-2 text-gray-800 dark:text-gray-200")}>Bid Value</Text>
                    <Input
                        placeholder="Enter Amount"
                        inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                        inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                        style={tw.style("dark:text-white")}
                        placeholderTextColor={isToggle ? "#ddd" : "white"}
                        rightElement={<Text style={tw.style("mr-4 text-gray-400 dark:text-white")}>XLM</Text>}
                    />
                    <Text fontSize="sm" style={tw.style("my-2 text-gray-800 dark:text-gray-200")}>Currency</Text>
                    <Select
                        placeholder="Select Currency"
                        minWidth="64"
                        placeholderTextColor={isToggle ? "#ddd" : "white"}
                    >
                        <Select.Item label="JavaScript" value="JavaScript" />
                        <Select.Item label="TypeScript" value="TypeScript" />
                        <Select.Item label="C" value="c" />
                        <Select.Item label="Python" value="Python" />
                        <Select.Item label="Java" value="Java" />
                    </Select>
                    <Box style={tw.style(" grow  bg-[#8522cc]  rounded-md")} mt={4} >
                        <Button
                            style={tw.style(" border-0")}
                            variant={"outline"}
                            onPress={() => {
                                console.log('hello')
                            }}
                            buttonStyle={tw.style("text-black")}
                        >
                            <Text fontSize="sm" style={tw.style("text-white")}>Add New Bid</Text>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ScrollView>
    )
}
export default ItemDetail;