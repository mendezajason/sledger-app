import tw from "twrnc";
import { Box, Flex, ScrollView, Image, Text, Button, Spacer, Heading } from 'native-base';
import React, { useContext, useState } from 'react';
import images from "../../utils/constant/images";
import { ThemeContext } from "../../utils/ThemeProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/dist/Octicons";
import HeaderBar from "../../components/basic/Header";
import MarketState from "../../components/marketState";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Icon1 from "react-native-vector-icons/dist/Entypo";
import MarketChart from "../../components/charts/marketChart";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const TradeCoin = ({ navigation }) => {
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [tabIndex, setTabIndex] = useState(0);

    const handleIndexChange = index => {
        setTabIndex(index);
    };

    return (
        <ScrollView>
            <Flex minH={SCREENHEIGHT}>
                <ImageBackground source={images.CoinBack} resizeMode="cover" style={tw.style("rounded-lg")}>
                    <HeaderBar title={"Trade"} handle={navigation.toggleDrawer} />
                    <Box>
                        <Flex direction="row" style={tw.style("mt-3")} justifyContent="space-around" alignItems={"center"}>
                            <Spacer />
                            <Spacer />
                            <Button
                                colorScheme="primary"
                                style={tw.style("  mr-3 bg-[#ac5ce3] rounded-md ")}
                                onPress={() => {
                                    console.log('hello')
                                }}
                                buttonStyle={tw.style("text-black")}
                            >
                                <Icon name="eye" color="white" style={tw.style("text-white dark:text-white")} size={20} />
                            </Button>
                            <Spacer />
                            <Box style={tw.style("p-5 bg-white/17 rounded-md")} >
                                <Image
                                    source={
                                        images.DollarTrade
                                    }
                                    alt="Alternate Text"
                                    size="xs"
                                />
                            </Box>
                            <Spacer />
                            <Button
                                colorScheme="primary"
                                style={tw.style("  mr-3 bg-[#b9cd7a] rounded-md ")}
                                onPress={() => {
                                    console.log('hello')
                                }}
                                buttonStyle={tw.style("text-black")}
                            >
                                <Icon name="plus" color="white" style={tw.style("text-white dark:text-white")} size={20} />
                            </Button>
                            <Spacer />
                            <Spacer />
                        </Flex>
                        <Text fontSize="xs" style={tw.style("  text-center text-white/60 mt-3 ")}>center.io</Text>
                        <Text fontSize="lg" style={tw.style("text-center text-white mt-3 ")}>USDC</Text>
                        <Text fontSize="sm" fontWeight={500} style={tw.style(" text-justify text-center text-white/80 mt-3  px-6")}>
                            Sed ut perspiciatis unde omnis iste natus errorsit volrptar
                            tem accusantium doloremque laudantium, totamemaiis
                            Sed ut perspiciatis unde omnis iste natus errorsit volrptar
                            tem accusantium doloremque laudantium, totamemaiis
                            eriam, eaque ipsa quae abillo
                        </Text>
                        <Flex direction="row" style={tw.style("py-7 px-4")}>
                            <Button
                                colorScheme="primary"
                                style={tw.style("grow mr-3 bg-transparent border border-gray-200 ")}
                                onPress={() => {
                                    console.log('hello')
                                }}
                                buttonStyle={tw.style("text-white")}
                            >
                                <Text fontSize="sm" style={tw.style("text-white")}>Deposit</Text>
                            </Button>
                            <Button
                                colorScheme="primary"
                                style={tw.style("grow mr-3 bg-transparent border border-gray-200 ")}
                                onPress={() => {
                                    console.log('hello')
                                }}
                                buttonStyle={tw.style("text-white")}
                            >
                                <Text fontSize="sm" style={tw.style("text-white")}>Withdraw</Text>
                            </Button>
                            <Button
                                colorScheme="primary"
                                style={tw.style("grow bg-transparent border border-gray-200 ")}
                                onPress={() => {
                                    console.log('hello')
                                }}
                                buttonStyle={tw.style("text-white")}
                            >
                                <Text fontSize="sm" style={tw.style("text-white")}>Transfer</Text>
                            </Button>
                        </Flex>
                    </Box>
                </ImageBackground>
                <Box px={4} mt={5}>
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
                    <MarketChart />
                    <MarketState />
                </Box>
                <Box px={3} style={tw.style("py-7border-b border-b-gray-200")}>
                    <Text fontSize="sm" mb={1} style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Conditions</Text>
                    <Heading fontSize={18} fontWeight={400} style={tw.style("text-gray-700 dark:text-gray-300")}>Not set by the issuer</Heading>
                    <Text mt={5} mb={2} fontSize="sm" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Authorization Flag</Text>
                    <Text fontSize="md" fontWeight={400} style={tw.style("text-justify text-gray-700  dark:text-gray-300")}>
                        Sed ut perspiciatis unde omnis iste natwr
                        us error sivoluptatem accusantium doliw
                        oremque laudantiumtotam rem aperiaer
                        m, eaque ipsa quae ab illo inveintore viiq
                        ta tis et quexplicabo. Nemo enim ipsaowi
                        ptatem quia voluptas sit
                    </Text>
                </Box>
                <Box px={3}>
                    <Text fontSize={"lg"} style={tw.style("mb-3 dark:text-gray-300")} >Market Status</Text>
                    <Flex direction="row" justifyContent={"space-between"}>
                        <Box >
                            <Text fontSize="sm" mb={1} style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Market Cap</Text>
                            <Text fontSize="md" style={tw.style("text-gray-700 dark:text-gray-300")}>$ 175.2 M</Text>
                        </Box>
                        <Box >
                            <Text fontSize="sm" mb={1} style={tw.style("text-[#000]/45 dark:text-[#fff]/45")} >Supply Status</Text>
                            <Text fontSize="md" fontWeight={500} style={tw.style("text-gray-700 dark:text-gray-300")}>Unlocked</Text>
                        </Box>
                    </Flex>
                    <Flex mt={3} direction="row" justifyContent={"space-between"}>
                        <Box >
                            <Text mb={1} style={tw.style("text-[#000]/45 dark:text-[#fff]/45")} fontSize="sm">Supply</Text>
                            <Text fontSize="md" style={tw.style("text-gray-700 dark:text-gray-300")}>172.38 M USDC</Text>
                        </Box>
                        <Box >
                            <Text mb={1} style={tw.style("text-[#000]/45 dark:text-[#fff]/45")} fontSize="sm" >Volume 24H</Text>
                            <Text fontSize="md" fontWeight={500} style={tw.style("text-gray-700 dark:text-gray-300")}>$ 2.02 M</Text>
                        </Box>
                    </Flex>
                    <Box mt={3} >
                        <Text fontSize="sm" mb={2} style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Price</Text>
                        <Text fontSize="md" fontWeight={500} style={tw.style("text-gray-700 dark:text-gray-300")}>$ 1.000239778</Text>
                    </Box>
                </Box>
                <Box mx={3} mt={5} mb={3} style={tw.style("bg-[#6b6b6b]/79 rounded-md p-4")}>
                    <Text fontSize="sm" style={tw.style("text-white/72 dark:text-gray-300")}>
                        Sed ut perspiciatis unde omnis iste natus error siv
                        oluptatem accusantium doloremque laudantium
                        totam rem aperiam, eaque ipsa quae ab illo invei
                        ntore verita tis et quexplicabo. Nemo enim ipsa vr
                        ptatem quia voluptas sit aspernatur aut odit aut f
                        ugit, sed
                    </Text>
                </Box>
            </Flex>
        </ScrollView>
    )
}
export default TradeCoin;