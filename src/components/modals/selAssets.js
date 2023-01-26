import React, { useContext, useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, Select, Box, ScrollView, Spacer } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { Tab, TabView, } from '@rneui/themed';
import { ScreenHeight } from "@rneui/base";
import { ThemeContext } from "../../utils/ThemeProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import Asset from "../asset";
import OtherAsset from "../otherAsset";

const SelectAssets = ({ ...props }) => {
    const [index, setIndex] = useState(0)
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [assetsData, setAsetsData] = useState([2.45, 2.45, 2.45])
    const [otherAssetsData, setOtherAssetsData] = useState([
        { type: "yXLM", value: 2.45, network: "ultrastellar.com" },
        { type: "AQUA", value: 2.45, network: "aqua.network" },
        { type: "yUSDC", value: 2.45, network: "ultrastellar.com" },
    ])

    return (
        <BasicModal {...props}>
            <VStack space="1" height={ScreenHeight * 62 / 100}>
                <Heading fontSize={16} fontWeight={400} style={tw.style("text-gray-600")} pl={5} pt={4}>Select Assets</Heading>
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
                            title="My Assets"
                            titleStyle={(active) => ({ fontSize: 13, paddingVertical: 4, color: active ? (isToggle ? "white" : "white") : (isToggle ? "black" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "black" : "transparent",
                                borderWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10
                            })}
                        />
                        <Tab.Item
                            title="All Assets"
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
                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={{ width: '100%', }} >
                        <Box style={tw.style("px-4")} >
                            <Input placeholder="Search Assets"
                                inputContainerStyle={tw.style(`rounded-2xl bg-transparent border border-gray-300 text-white`)}
                                inputStyle={tw.style(`text-gray-300 text-xs grow text-center `)}
                                // style={tw.style("text-center")}
                                leftElement={<Icon name="search" size={20} style={tw.style(`text-black ml-2`)} />}
                            />
                            <Box style={tw.style("py-2")}>
                                {
                                    assetsData && assetsData.map((item, index) => <Asset price={item} key={index} />)
                                }
                            </Box>
                        </Box>
                    </TabView.Item>
                    <TabView.Item style={{ width: '100%', }} >
                        <Box style={tw.style("px-4")} >
                            <Input placeholder="Search Assets"
                                inputContainerStyle={tw.style(`rounded-2xl bg-transparent border border-gray-300 text-white`)}
                                inputStyle={tw.style(`text-gray-300 text-xs grow text-center `)}
                                // style={tw.style("text-center")}
                                leftElement={<Icon name="search" size={20} style={tw.style(`text-black ml-2`)} />}
                            />
                            <Box style={tw.style("py-2")}>
                                {
                                    otherAssetsData && otherAssetsData.map((item, index) => <OtherAsset imgType={index % 2} type={item.type} price={item.value} network={item.network} key={index} />)
                                }
                            </Box>
                        </Box>
                    </TabView.Item>
                </TabView>
            </VStack>
        </BasicModal>
    )
}
export default SelectAssets;