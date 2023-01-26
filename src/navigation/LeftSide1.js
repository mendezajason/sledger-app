import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from '../screens/portfolio/Portfolio';
import Portfolio1 from '../screens/portfolio/Portfolio1';
import { Dimensions, TouchableOpacity } from 'react-native';
// import Icon from "react-native-vector-icons/dist/Ionicons";
import Avatar from '../components/basic/Avatar';
import Dashboard from '../screens/Dashboard';
import Dashboard1 from '../screens/Dashboard1';
import CustomDrawerContent from '../components/basic/CustomDrawerContent';
import CustomDrawerContent1 from '../components/basic/CustomDrawerContent1';
import Transaction from '../screens/Transaction';
import Trade from '../screens/Trade';
import Setting from '../screens/Settings';
import Contacts from '../screens/Contacts';
import AccessHistory from '../screens/AccessHistory';
import tw from "twrnc";
import Market from '../screens/Market';
import NFTMarket from '../screens/NFTMarket';
import ItemDetail from '../screens/ItemDetail';
import Terms from '../screens/Terms';
import PrivatePolicy from '../screens/PrivatePolicy';
import TradeCoin from '../screens/Trade/tradeCoin';
import { Box, Image, Flex, Text } from 'native-base';
import Icon from "react-native-vector-icons/dist/AntDesign";
import SelectStack from './selStack';
import AddNewContactModal from '../components/modals/addNewContactModal';
import images from '../utils/constant/images';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import SelectOption1 from '../screens/selectOption1';
import RequestToken from '../screens/selectOption1/request';
import SendToken from '../screens/selectOption1/sendToken';

const SCREENWIDTH = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

const AnimateBottomTabs = AnimatedTabBarNavigator();

const LeftSide2 = ({ navigation }) => {
    const [isOpen, setOpen] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);

    return (
        <Drawer.Navigator initialRouteName="Portfolio"
            drawerContent={(props) => <CustomDrawerContent1 {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#3d3d3d',
                    width: 280,
                },
                headerRight: (props) => (<Avatar {...props} size={9} mr={2} />)
            }}
        >
            <Drawer.Screen name="Portfolio" options={{ headerShown: false }} >
                {
                    (props) => (
                        <HomeScreen1 />
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="sendToken" options={{ headerShown: false }} >
                {
                    (props) => (
                        <SendToken {...props} />
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="requestToken" options={{ headerShown: false }} >
                {
                    (props) => (
                        <RequestToken {...props} />
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="TradeCoin" options={{ headerShown: false }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <TradeCoin {...props} />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Contacts" options={{
                title: "Contacts", headerRight: (props) => (
                    <TouchableOpacity style={tw.style("mr-3")} onPress={() => { setShowNewModal(true) }}>
                        <Box style={tw.style("bg-[#7fb4811a] border border-[#c0ddc1]/55")} rounded="md">
                            <Icon name="plus" style={tw.style("text-[#8ad48d] p-2")} size={16} />
                        </Box>
                    </TouchableOpacity>)
            }}
            >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <Contacts />
                            <AddNewContactModal showModal={showNewModal} setShowModal={setShowNewModal} />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="AccessHistory" options={{ title: "Access History" }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <AccessHistory />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Terms" options={{ title: "Terms & Conditions" }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <Terms />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Market" options={{ title: "Market", }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <Market />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="NFTMarket" options={{ title: "NFT Market" }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <NFTMarket {...props} />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="ItemDetail" options={{ title: "NFT Market", headerRight: (props) => { } }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <ItemDetail />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="PrivatePolicy" options={{ title: "Private Policy" }} >
                {
                    (props) => (
                        <Dashboard1 {...props}>
                            <PrivatePolicy />
                        </Dashboard1>
                    )
                }
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const HomeScreen1 = () => {
    return (
        <AnimateBottomTabs.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "#fff",
                inactiveTintColor: "#ccc",
                activeBackgroundColor: "#7c7c7c",
            }}
            appearance={{
                // topPadding: 10,
                tabBarBackground: "#3c3c3c"
            }}
        >
            <AnimateBottomTabs.Screen
                name="Home"
                options={{
                    title: "Portfolio",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="home"
                            size={size ? size : 24}
                            color={focused ? color : "#bbb"}
                            focused={focused}
                        />
                    )
                }}
            >
                {
                    (props) => (
                        <Portfolio1 />
                    )
                }
            </AnimateBottomTabs.Screen>
            <AnimateBottomTabs.Screen
                name="Trans"
                options={{
                    title: "Transactions",
                    tabBarLabel: "Transaction",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="cloudo"
                            size={size ? size : 24}
                            color={focused ? color : "#bbb"}
                            focused={focused}
                        />
                    )
                }}
            >
                {
                    (props) => (
                        <Transaction />
                    )
                }
            </AnimateBottomTabs.Screen>
            <AnimateBottomTabs.Screen
                name="New"
                options={{
                    title: "Select Option",
                    tabBarLabel: "New",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="plus"
                            size={size ? size : 24}
                            color={focused ? color : "#bbb"}
                            focused={focused}
                        />
                    )
                }}
            >
                {
                    (props) => (
                        <SelectOption1 {...props} />
                    )
                }
            </AnimateBottomTabs.Screen>
            <AnimateBottomTabs.Screen
                name="Trade"
                options={{
                    title: "Trade",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="swap"
                            size={size ? size : 24}
                            color={focused ? color : "#bbb"}
                            focused={focused}
                        />
                    )
                }}
            >
                {
                    (props) => (
                        <Trade {...props} />
                    )
                }
            </AnimateBottomTabs.Screen>
            <AnimateBottomTabs.Screen
                name="Settings"
                options={{
                    title: "Setting",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="setting"
                            size={size ? size : 24}
                            color={focused ? color : "#bbb"}
                            focused={focused}
                        />
                    )
                }}
            >
                {
                    (props) => (
                        <Setting />
                    )
                }
            </AnimateBottomTabs.Screen>
        </AnimateBottomTabs.Navigator >
    )
}

export default LeftSide2;