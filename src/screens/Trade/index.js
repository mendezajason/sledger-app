import tw from "twrnc";
import { Box, Flex, Center, Heading, Button, ScrollView } from 'native-base';
import React, { useContext, useState } from 'react';
import images from "../../utils/constant/images";
import { ThemeContext } from "../../utils/ThemeProvider";
import { Tab, Text, TabView, } from '@rneui/themed';
import { Dimensions, ImageBackground } from 'react-native';
import { ScreenHeight } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import Icon1 from "react-native-vector-icons/dist/Entypo";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Balance from "../../components/balance";
import MarketStatus from "../../components/marketStatus";
import Orders from "../../components/orders";
import LastTrade from "../../components/lastTrade";
import SpotTradeModal from "../../components/modals/sportTradeModal";
import SelectAssets from "../../components/modals/selAssets";
import EditSellOfferModal from "../../components/modals/editSellOffer";
import MarketChart from "../../components/charts/marketChart";
import { useNavigation, useRoute } from "@react-navigation/native";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Trade = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const [tabIndex, setTabIndex] = useState(0);
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [showSpotModal, setShowSpotTradeModal] = useState(false);
    const [showAssestModal, setShowAssetsModal] = useState(false);
    const [showEditSellOfferModal, setShowEditSellOfferModal] = useState(false);
    const navigation1 = useNavigation();

    const handleIndexChange = index => {
        setTabIndex(index);
    };

    return (
        <Flex style={tw.style("dark:bg-[#200A4c] bg-white")}>
            <Flex direction='row' style={tw.style("justify-between pt-3")}>
                <Button style={tw.style("ml-2 bg-transparent")} onPress={() => { navigation1.toggleDrawer() }}>
                    <Icon name="menu" size={20} style={tw.style("dark:text-gray-200 text-black")} />
                </Button>
                <Text style={tw.style("text-black dark:text-gray-200 text-xl font-semibold pt-1")}>Trade</Text>
                <Icon name="menu" size={20} style={tw.style("dark:text-[#200A4c] text-white pr-5")} />
            </Flex>
            <Center px={5} pt={2}>
                <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("w-full rounded-lg")}>
                    <Button
                        variant={"outline"}
                        style={tw.style("rounded-md")}
                        onPress={() => {
                            setShowSpotTradeModal(true)
                        }}
                    >
                        <Text fontSize="xs" style={tw.style("text-white")}>New Spot Trade</Text>
                    </Button>
                </ImageBackground>
            </Center>
            <Flex direction="row" px="5" style={tw.style("justify-between pt-4 pb-2")}>
                <Balance isUSD={false} price={2.45} setShowModal={setShowAssetsModal} />
                <Balance isUSD={true} price={"1,928"} setShowModal={setShowAssetsModal} />
            </Flex>
            <Box px={2} height={ScreenHeight - 290}>
                <Box style={tw.style("px-4")}>
                    <Tab
                        value={index}
                        onChange={(e) => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: isToggle ? '#303030' : "white",
                            height: 2,
                        }}
                    >
                        <Tab.Item
                            title="Overview"
                            titleStyle={(active) => ({ fontSize: 12, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                        />
                        <Tab.Item
                            title="Order Book"
                            titleStyle={(active) => ({ fontSize: 12, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                            indicatorStyle={(active) => ({
                                backgroundColor: active ? "white" : "black",
                                height: 3,
                            })}
                        />
                        <Tab.Item
                            title="Last Trades"
                            titleStyle={(active) => ({ fontSize: 12, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                        />
                    </Tab>
                </Box>
                <TabView value={index} onChange={setIndex} animationType="spring" >
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <ScrollView>
                            <Box style={tw.style("bg-white dark:bg-[#200A4c] px-4")} >
                                <MarketStatus py={6} price={0.155847} rating={1.45} />
                                <SegmentedControlTab
                                    values={["Day", "Week", "Month", "Year", "All"]}
                                    selectedIndex={tabIndex}
                                    onTabPress={handleIndexChange}
                                    borderRadius={30}
                                    tabsContainerStyle={{ height: 40, backgroundColor: isToggle ? 'white' : "#200A4C" }}
                                    tabStyle={{
                                        paddingHorizontal: 10,
                                        backgroundColor: 'transparent',
                                        borderWidth: 0,
                                        borderColor: 'transparent',
                                    }}
                                    activeTabStyle={{ backgroundColor: isToggle ? '#8522cc' : "#8522CC", marginTop: 2, borderRadius: 30, color: "white" }}
                                    tabTextStyle={{ color: isToggle ? '#444444' : "#786D8D" }}
                                    activeTabTextStyle={{ color: 'white' }}
                                />
                                <Flex direction="row" justifyContent={"space-between"} mb={2} alignItems="center" mt={2}>
                                    <Heading fontWeight={600} style={tw.style('text-[#000]/89 dark:text-white text-base')}>0.115847 USD Coin</Heading>
                                    <Icon1 name="dots-three-vertical" size={20} style={tw.style("text-black dark:text-white")} />
                                </Flex>
                                <MarketChart></MarketChart>
                            </Box>
                        </ScrollView>
                    </TabView.Item>
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] py-4")}>
                            <Orders navigation={navigation} />
                        </Box>
                    </TabView.Item>
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] py-4")}>
                            <LastTrade setShowModal={setShowEditSellOfferModal} />
                        </Box>
                    </TabView.Item>
                </TabView>
            </Box>
            <SpotTradeModal showModal={showSpotModal} setShowModal={setShowSpotTradeModal} />
            <SelectAssets showModal={showAssestModal} setShowModal={setShowAssetsModal} />
            <EditSellOfferModal showModal={showEditSellOfferModal} setShowModal={setShowEditSellOfferModal} navigation={navigation} />
            {/* <PendingModal showModal={showPendingModal} price={1384} setShowModal={setShowPendingModal} />
            <SentModal showModal={showSentModal} price={1384} setShowModal={setShowSentModal} /> */}
        </Flex>
    )
}
export default Trade;