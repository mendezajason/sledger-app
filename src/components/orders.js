import tw from "twrnc";
import { Box, Flex, Center, ScrollView, Button, Heading } from 'native-base';
import React, { useContext, useState } from 'react';
import { ThemeContext } from "../utils/ThemeProvider";
import { Tab, Text, TabView, } from '@rneui/themed';
import { ScreenHeight } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import PriceOrder from "./priceorder";
import { Dimensions } from 'react-native';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const data = [
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
    { usd: 0.115847, xlm: 119.9283712, total: 13.8115847 },
]

const Orders = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [orderData, setOrderData] = useState(data);
    return (
        <Box height={ScreenHeight-400} >
            <Box px={4}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: isToggle ? '#303030' : "white",
                        height: 0,
                    }}
                >
                    <Tab.Item
                        title="Purchase Orders"
                        titleStyle={(active) => ({ fontSize: 13, paddingVertical: 4, color: active ? (isToggle ? "white" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                        containerStyle={(active) => ({
                            backgroundColor: active ? (isToggle ? "black" : "#7e7492") : ("transparent"),
                            borderWidth: 1,
                            borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            padding: 0
                        })}
                    />
                    <Tab.Item
                        title="Selling Orders"
                        titleStyle={(active) => ({ fontSize: 12, paddingVertical: 4, color: active ? (isToggle ? "white" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                        containerStyle={(active) => ({
                            backgroundColor: active ? (isToggle ? "black" : "#7e7492") : ("transparent"),
                            borderWidth: 1,
                            borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10
                        })}
                    />
                </Tab>
            </Box>
            <TabView value={index} onChange={setIndex} animationType="spring"  >
                <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%', }} >
                    <Box px={5}>
                        <Flex direction="row" justifyContent={"space-between"} alignItems="center" style={tw.style("mt-3")}>
                            <Heading fontSize={16} fontWeight={400}>Purchase Orders</Heading>
                            <TouchableOpacity >
                                <Flex direction="row" alignItems={"center"}>
                                    <Text fontSize="xs" style={tw.style("text-black dark:text-white")}>View All</Text>
                                    <Icon name="chevron-forward" color="white" style={tw.style("text-gray-300 dark:text-white")} size={26} />
                                </Flex>
                            </TouchableOpacity>
                        </Flex>
                        <ScrollView>
                            {
                                orderData &&
                                orderData.map((item, index) => (<TouchableOpacity onPress={() => { navigation.navigate("TradeCoin") }} key={index}><PriceOrder usd={item.usd} xlm={item.xlm} total={item.total} /></TouchableOpacity>))
                            }
                        </ScrollView>
                    </Box>
                </TabView.Item>
                <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>box</TabView.Item>
            </TabView>
        </Box>
    )
}
export default Orders;