import React, { useState, useContext } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import tw from "twrnc";
import { Flex, Box, Center, Heading, Spacer, ScrollView, Image } from 'native-base';
import { Button } from "@rneui/base";
import { Tab, Text, TabView } from '@rneui/themed';
import Icon from "react-native-vector-icons/dist/Ionicons";
import Icon1 from "react-native-vector-icons/dist/Feather";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/basic/backButton';
import QRCode from 'react-native-qrcode-generator';
import AnotherWalletComponent from '../components/anWalletComponent';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const ActivateWallet = () => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState("");
    const { isToggle, toggleTheme } = useContext(ThemeContext);

    return (
        <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} py={10} style={tw.style("dark:bg-[#2B1867] bg-white")}  >
            <Flex direction="row" px={6} >
                <BackButton />
                <Spacer />
                <Center >
                    <Button
                        buttonStyle={tw.style(" bg-[#4a4a4a] dark:bg-[#583f87] px-4")}
                        containerStyle={tw.style("rounded-lg ")}
                        onPress={() => {
                            console.log("skip1");
                            navigation.navigate("portfolio");
                        }}
                    >
                        Skip
                        <Icon name="chevron-forward" color="white" style={tw.style("text-white dark:text-white")} size={26} />
                    </Button>
                </Center>
            </Flex>

            <Box height={"27%"} py={10} px={6} >
                <Heading >Activate Wallet</Heading>
                <Text fontSize="md" style={tw.style("text-gray-500 dark:text-[#7c68a3] pt-2")}>To use your steller account, you must activate it by
                    sending at least 5 lumens XLM to your account you
                    can buy lumens from an exchange and send them
                    to your address
                </Text>
            </Box>
            <Box px={6}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: `${isToggle ? "black" : "white"}`,
                        height: 2
                    }}
                >
                    <Tab.Item
                        title={"Your Wallet"}
                        titleStyle={(active) => {
                            return tw.style(`text-sm ${active ? "text-black" : "text-gray-400"} dark:${active ? "text-white" : "text-gray-400"}`)
                        }}
                        buttonStyle={tw.style("px-0")}
                        containerStyle={(active) => {
                            return tw.style(`px-0 bg-white dark:bg-transparent`)
                        }}
                    />

                    <Tab.Item
                        title={"Another Wallet"}
                        titleStyle={(active) => {
                            return tw.style(`text-sm  ${active ? "text-black" : "text-gray-400"} dark:${active ? "text-white" : "text-gray-400"}`)
                        }}
                        containerStyle={(active) => {
                            return tw.style(`bg-white dark:bg-transparent`)
                        }}
                    />
                </Tab>
            </Box>
            <TabView width={"100%"} style={tw.style("bg-black")} value={index} onChange={setIndex} animationType="spring">
                <ScrollView px={6}>
                    <TabView.Item style={{ width: '100%', position: "relative" }}>
                        <Center style={tw.style("flex  pt-10")} >
                            <Box style={tw.style("p-4 bg-white rounded-xl")}>
                                <QRCode
                                    value={address}
                                    size={130}
                                    bgColor='black'
                                    fgColor='white'
                                />
                            </Box>
                            <Text fontSize="lg" style={tw.style("font-medium my-4 dark:text-gray-200")}>Your Wallet Account ID</Text>
                            <Text fontSize="sm" style={tw.style("text-gray-300 bg-gray-800 p-4 rounded-md my-4 dark:bg-gray-500 w-[100%] text-center")}>GDNAJRWQKRYHH..CHSADGFHSDHAS</Text>
                            <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                                <Button
                                    buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                                    containerStyle={{ width: "100%", margin: 5 }}
                                    icon={<Icon1 name="copy" size={20} style={tw.style("absolute left-5 text-white")} />}
                                    onPress={() => navigation.navigate("activateWallet")}
                                    title="Copy Address"
                                    titleProps={{}}
                                    titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                                />
                            </ImageBackground>
                        </Center>
                    </TabView.Item>
                </ScrollView>
                <ScrollView>
                    <TabView.Item style={{ padding: 4, width: '100%', marginRight: 10 }}  >
                        <Flex direction="column" space={3} px={6}>
                            <AnotherWalletComponent icon={<Image source={images.ACW1} alt="" width={50} height={50} />} content={"Lumens reach your account in 10 ~ 30 minutes on average"} />
                            <AnotherWalletComponent icon={<Image source={images.ACW2} alt="" width={50} height={50} />} content={"Payment processor complies with PCISAQ at all times"} />
                            <AnotherWalletComponent icon={<Image source={images.ACW3} alt="" width={50} height={50} />} content={"Deposit XLM to your account using Visa or MasterCard credit card"} />
                            <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                                <Button
                                    buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                                    containerStyle={{ width: "100%", margin: 5 }}
                                    icon={<Image source={images.AcBtn} alt="" width={5} height={4} style={tw.style("absolute left-5")} />}
                                    onPress={() => navigation.navigate("activateWallet")}
                                    title="Buy Lumens Now"
                                    titleProps={{}}
                                    titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                                />
                            </ImageBackground>
                        </Flex>
                    </TabView.Item>
                </ScrollView>
            </TabView>
        </Flex>
    )
}
export default ActivateWallet;

/* 
<Tab 
                     value={index}
                     onChange={(e) => setIndex(e)}
                    
                    indicatorStyle={{
                        backgroundColor:"#b9cd7a",
                        height:3
                    ,...tw.style("bg-green-100")}}
                 >
                    <Tab.Item
                        title={"Wallet Information"}
                        titleStyle={(active)=>{
                            return tw.style(`text-xl  absolute left-0 p-0 ${active?"text-black":"text-white"}  `)
                        }}            
                        buttonStyle={tw.style("px-0 py-3")}          
                        containerStyle={(active)=>{
                            return tw.style(`px-0 pb-4 ${active?"bg-white ":"bg-white "}`)
                        }}
                     />
                    
                    <Tab.Item
                    title={"Wallet Terms&Rules"}
                    titleStyle={(active)=>{
                        return tw.style(`text-lg absolute left-[4] ${active?"text-black":"text-white"}`)
                    }}   
                    containerStyle={(active)=>{
                        return tw.style(`${active?"bg-white":"bg-white"}`)
                    }}
                     />
                </Tab>
                <TabView  value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
                        <Text h1>Recent</Text>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                        <Text h1>Favorite</Text>
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                        <Text h1>Cart</Text>
                    </TabView.Item>
                </TabView>
 */