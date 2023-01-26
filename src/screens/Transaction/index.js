import tw from "twrnc";
import { Box, Flex, Center, ScrollView, Button } from 'native-base';
import React, { useContext, useState } from 'react';
import { Dimensions, TextInput } from 'react-native';
import { ThemeContext } from "../../utils/ThemeProvider";
import { Tab, Text, TabView, } from '@rneui/themed';
// import { Input } from "@rneui/base";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { ScreenHeight } from "@rneui/base";
import TransferHistory from "../../components/TranHIs";
import { TranData } from "./data";
import SentModal from "../../components/modals/SentModal";
import PendingModal from "../../components/modals/pendingModal";
import Avatar from '../../components/basic/Avatar';
import { useNavigation, useRoute } from "@react-navigation/native";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Transaction = ({ navigation }) => {
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [index, setIndex] = useState(0)
    const [transData, setTransData] = useState(TranData);
    // const [price,setPrice] = useState(3000);
    const [showSentModal, setShowSentModal] = useState(false);
    const [showPendingModal, setShowPendingModal] = useState(false);
    const navigation1 = useNavigation();

    const handleShowModal = (type) => {
        switch (type) {
            case "sent": setShowSentModal(true); break;
            case "receive": setShowSentModal(true); break;
            case "pending": setShowPendingModal(true); break;
        }
    }

    return (
        <Flex style={tw.style("dark:bg-[#200A4c] bg-white")}>
            <Flex direction='row' w="100%" style={tw.style("justify-between pt-3")}>
                <Button style={tw.style("ml-2 bg-transparent")} onPress={() => { navigation1.toggleDrawer() }}>
                    <Icon name="menu" size={20} style={tw.style("dark:text-gray-200 text-black")} />
                </Button>
                <Text style={tw.style("text-black dark:text-gray-200 font-semibold text-xl pt-1")}>Transactions</Text>
                <Avatar size={9} mr={2} />
            </Flex>
            <Flex direction="row" style={tw.style("p-2 px-6")}>
                <Center p="2" style={tw.style("border border-gray-200 rounded-l-md border-r-0")}>
                    <Icon name="search" size={20} style={tw.style(`${isToggle ? "text-[#606060]" : "text-white"} `)} />
                </Center>
                <TextInput placeholder="Who are you searching for .." placeholderTextColor={isToggle ? "#c8c8c8" : "#fff"} style={tw.style("dark:text-gray-200 text-gray-700 border border-gray-200 rounded-r-md border-l-0 grow")} />
            </Flex>
            <Box height={ScreenHeight - 205} >
                <Box style={tw.style("px-6")}>
                    <Tab
                        value={index}
                        onChange={(e) => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: isToggle ? '#303030' : "white",
                            height: 2,
                        }}
                    >
                        <Tab.Item
                            title="All Trans"
                            titleStyle={(active) => ({ fontSize: 12, paddingHorizontal: 0, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                        />
                        <Tab.Item
                            title="Sent"
                            titleStyle={(active) => ({ fontSize: 12, paddingHorizontal: 0, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
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
                            title="Received"
                            titleStyle={(active) => ({ fontSize: 12, paddingHorizontal: 0, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                        />
                        <Tab.Item
                            title="Pending"
                            titleStyle={(active) => ({ fontSize: 12, paddingHorizontal: 0, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
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
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] px-6")}>
                            <ScrollView>
                                {transData && transData.map((item, index) => (<TouchableOpacity key={index} onPress={() => handleShowModal(item.type)} ><TransferHistory titleBottom={item.price} isWithdraw={item.isWidraw} contentBottom={item.date} /></TouchableOpacity>))}
                            </ScrollView>
                        </Box>
                    </TabView.Item>
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] px-6")}>
                            <ScrollView>
                                {transData && transData.map((item, index) => { if (item.type == "sent") return (<TouchableOpacity key={index} onPress={() => handleShowModal(item.type)} ><TransferHistory titleBottom={item.price} isWithdraw={item.isWidraw} contentBottom={item.date} /></TouchableOpacity>) })}
                            </ScrollView>
                        </Box>
                    </TabView.Item>
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] px-6")}>
                            <ScrollView>
                                {transData && transData.map((item, index) => { if (item.type == "receive") return (<TouchableOpacity key={index} onPress={() => handleShowModal(item.type)} ><TransferHistory titleBottom={item.price} isWithdraw={item.isWidraw} contentBottom={item.date} /></TouchableOpacity>) })}
                            </ScrollView>
                        </Box>
                    </TabView.Item>
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] px-6")}>
                            <ScrollView>
                                {transData && transData.map((item, index) => { if (item.type == "pending") return (<TouchableOpacity key={index} onPress={() => handleShowModal(item.type)} ><TransferHistory titleBottom={item.price} isWithdraw={item.isWidraw} contentBottom={item.date} /></TouchableOpacity>) })}
                            </ScrollView>
                        </Box>
                    </TabView.Item>
                </TabView>
            </Box>
            <PendingModal showModal={showPendingModal} price={"1,384"} setShowModal={setShowPendingModal} />
            <SentModal showModal={showSentModal} price={"1,384"} setShowModal={setShowSentModal} />
        </Flex>
    )
}
export default Transaction;