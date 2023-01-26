import React, { useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import tw from "twrnc";
import { Flex, ScrollView, Text, Center, VStack, Heading, Spacer, Button } from 'native-base';
import Icon from "react-native-vector-icons/dist/Entypo";
import { ThemeContext } from '../../utils/ThemeProvider';
import { AuthContext } from '../../auth/AuthProvider';
import SegmentedControlTab from "react-native-segmented-control-tab";
import PortfolioChart from '../../components/charts/portfoliochart';
import TransactionPrice from '../../components/tranPrice';
import { PriceData } from './data';
import DatePicker from 'react-native-date-picker'

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Portfolio = ({ navigation }) => {
    // const [isCor20t,setCorrect] = useState(true);
    // const {login} = useContext(AuthContext);
    const [tabIndex, setTabIndex] = useState(0);
    const [weekData, setWeekData] = useState(PriceData[0]);
    const [monthData, setMonthData] = useState(PriceData[1]);
    const [XLMData, setXLMData] = useState(PriceData[2]);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const handleIndexChange = index => {
        setTabIndex(index);
    };

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => {
                return (
                    <ScrollView bg="white" style={tw.style("dark:bg-[#200A4c]")}>
                        <VStack space="1" padding={3}>
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Text fontSize="sm" style={tw.style("text-[#c7c7c7]")}>Balance</Text>
                                <Spacer />
                                <Text fontSize="sm" style={tw.style("text-[#c7c7c7]")}>XLM</Text>
                            </Flex>
                            <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                                <Heading fontSize={"4xl"} fontWeight={900} >42.3312</Heading>
                                <Spacer />
                                <Heading fontSize={"2xl"} >USDC</Heading>
                            </Flex>
                            <Flex direction="row" justifyContent={"space-between"} mb={2}>
                                <Text fontSize="sm" style={tw.style("dark:text-[#c7c7c7]")}>Aug 19,2019</Text>
                                <Spacer />
                                <Text fontSize="sm" style={tw.style("text-[#c7c7c7]")}>USD</Text>
                            </Flex>
                            <Center>
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
                            </Center>
                            <Center>
                                <PortfolioChart width={SCREENWIDTH - 24} height={270} />
                            </Center>
                            <Flex direction="row" justifyContent={"space-between"} mb={2} alignItems="center">
                                <Heading fontWeight={400} style={tw.style('text-[#000]/89 dark:text-white')} fontSize={"lg"} >Account Summary</Heading>
                                <Button style={tw.style("bg-transparent")} onPress={() => setOpen(true)}>
                                    <Icon name="dots-three-vertical" size={17} style={tw.style("text-black dark:text-white")} />
                                </Button>
                                <DatePicker
                                    modal
                                    open={open}
                                    date={date}
                                    mode={"date"}
                                    onConfirm={(date) => {
                                        setOpen(false)
                                        setDate(date)
                                    }}
                                    onCancel={() => {
                                        setOpen(false)
                                    }}
                                />
                            </Flex>
                            <VStack space="2">
                                {
                                    weekData &&
                                    <TransactionPrice style={tw.style("bg-[#f9f9f9] dark:bg-[#4F3F6F] rounded-md")} IconBg="bg-[#f7921a]" titleTop={weekData.Toptitle} titleBottom={weekData.rangeDate} contentTop={weekData.price} isRaise={weekData.isRating} contentBottom={weekData.rating} />
                                }
                                {
                                    monthData &&
                                    <TransactionPrice style={tw.style(" rounded-md")} IconBg="bg-[#739bee]" titleTop={monthData.Toptitle} titleBottom={monthData.rangeDate} contentTop={monthData.price} isRaise={monthData.isRating} contentBottom={monthData.rating} />
                                }
                                {
                                    XLMData &&
                                    <TransactionPrice style={tw.style("bg-[#f9f9f9] dark:bg-[#4F3F6F] rounded-md")} IconBg="bg-[#71a59d]" titleTop={XLMData.Toptitle} titleBottom={XLMData.rangeDate} contentTop={XLMData.price} isRaise={XLMData.isRating} contentBottom={XLMData.rating} />
                                }
                            </VStack>
                        </VStack>
                    </ScrollView>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default Portfolio
