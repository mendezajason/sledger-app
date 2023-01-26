import React, { useContext, useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, Select, Box, ScrollView } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { Tab, TabView, } from '@rneui/themed';
import { ScreenHeight } from "@rneui/base";
import { ThemeContext } from "../../utils/ThemeProvider";
const SpotTradeModal = ({ ...props }) => {
    const [index, setIndex] = useState(0)
    const { isToggle, toggleThme } = useContext(ThemeContext);
    return (
        <BasicModal {...props}>
            <VStack space="1" height={ScreenHeight * 83 / 100}>
                <Heading fontSize={16} fontWeight={400} style={tw.style("text-gray-600")}>New Spot Trade</Heading>
                <Box p={4} >
                    <Tab
                        value={index}
                        onChange={(e) => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: isToggle ? '#303030' : "white",
                            height: 0,
                        }}
                    >
                        <Tab.Item
                            title="Buy"
                            titleStyle={(active) => ({ fontSize: 12, paddingVertical: 4, color: active ? (isToggle ? "white" : "white") : (isToggle ? "black" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "black" : "transparent",
                                borderWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10
                            })}
                        />
                        <Tab.Item
                            title="Sell"
                            titleStyle={(active) => ({ fontSize: 12, paddingVertical: 4, color: active ? (isToggle ? "white" : "white") : (isToggle ? "black" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "black" : "transparent",
                                borderWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10
                            })}
                        />
                    </Tab>
                </Box>
                <TabView value={index} onChange={setIndex}  >
                    <TabView.Item style={{ width: '100%', }} >
                        <Box style={tw.style("px-4")} >
                            <Text fontSize="sm" style={tw.style("mb-2 text-gray-600")}>Type</Text>
                            <Select
                                placeholder="Limit"
                                minWidth="64"
                                rounded={"md"}
                            >
                                <Select.Item label="JavaScript" value="JavaScript" />
                                <Select.Item label="TypeScript" value="TypeScript" />
                                <Select.Item label="C" value="c" />
                                <Select.Item label="Python" value="Python" />
                                <Select.Item label="Java" value="Java" />
                            </Select>
                            <Text fontSize="sm" style={tw.style("mb-2 mt-2 text-gray-600")}>Amount</Text>
                            <Input
                                placeholder="Enter Amount"
                                inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                                inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                                rounded={"md"}
                                rightElement={<Text style={tw.style("mr-4 text-gray-400")}>USD</Text>}
                            />
                            <Text fontSize="sm" style={tw.style("mb-2 mt-3 text-gray-600")}>Price</Text>
                            <Flex direction="row">
                                <Button
                                    colorScheme="primary"
                                    style={tw.style("grow mr-3 bg-[#59dbb5]  border border-gray-200 ")}
                                    onPress={() => {
                                        console.log('hello')
                                    }}
                                    buttonStyle={tw.style("text-black")}
                                >
                                    <Text fontSize="xs" style={tw.style('text-white')}>Ask</Text>
                                </Button>
                                <Button
                                    colorScheme="primary"
                                    style={tw.style("grow mr-3 bg-gray-100")}
                                    onPress={() => {
                                        console.log('hello')
                                    }}
                                    buttonStyle={tw.style("text-black")}
                                >
                                    <Text fontSize="xs" style={tw.style("text-gray-600")}>Bid</Text>
                                </Button>
                                <Button
                                    colorScheme="primary"
                                    style={tw.style("grow bg-gray-100")}
                                    onPress={() => {
                                        console.log('hello')
                                    }}
                                    buttonStyle={tw.style("text-black")}
                                >
                                    <Text fontSize="xs" style={tw.style("text-gray-600")}>Last</Text>
                                </Button>
                            </Flex>
                            <Input
                                mt={3}
                                rounded={"md"}
                                placeholder="Enter Price of 1 XLM"
                                inputContainerStyle={tw.style(`border border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                                inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                                style={tw.style("text-gray-300")}
                                rightElement={<Text style={tw.style("mr-4 text-gray-400")}>USD</Text>}
                            />
                            <Text fontSize="sm" style={tw.style("mb-2 mt-2 text-gray-600")}>Total</Text>
                            <Input
                                placeholder="Total Amount"
                                inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                                inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                                rounded="md"
                                rightElement={<Text style={tw.style("mr-4 text-gray-400")}>USD</Text>}
                            />
                            <Flex mb={5} direction="row" justifyContent={"space-between"} mt={2}>
                                <Text fontSize="xs" color={"#8d93a5"}>USD to Sell</Text>
                                <Flex direction="row">
                                    <Text fontSize="xs" color={"#8d93a5"}>Available:</Text>
                                    <Text fontSize="xs" fontWeight={600} ml={3} style={tw.style("text-gray-600")}>USD 1,500</Text>
                                </Flex>
                            </Flex>
                            <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                                <Button
                                    variant={"outline"}
                                    style={tw.style("  rounded-md")}
                                    onPress={() => {
                                        console.log('hello')
                                    }}
                                >
                                    <Text fontSize="sm" style={tw.style("text-white")}>Buy XLM</Text>
                                </Button>
                            </ImageBackground>
                        </Box>
                    </TabView.Item>
                    <TabView.Item style={{ width: '100%' }}>box</TabView.Item>
                </TabView>
            </VStack>
        </BasicModal>
    )
}
export default SpotTradeModal;