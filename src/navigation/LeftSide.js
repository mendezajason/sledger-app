import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Portfolio from '../screens/portfolio/Portfolio';
import { Dimensions, TouchableOpacity } from 'react-native';
// import Icon from "react-native-vector-icons/dist/Ionicons";
import Avatar from '../components/basic/Avatar';
import Dashboard from '../screens/Dashboard';
import CustomDrawerContent from '../components/basic/CustomDrawerContent';
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
import { Box } from 'native-base';
import Icon from "react-native-vector-icons/dist/AntDesign";
import SelectStack from './selStack';
import AddNewContactModal from '../components/modals/addNewContactModal';

const SCREENWIDTH = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const LeftSide = ({ navigation }) => {
    const [isOpen, setOpen] = useState(false);
    const [showNewModal, setShowNewModal] = useState(false);

    return (
        <Drawer.Navigator initialRouteName="Portfolio"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: 'back',
                overlayColor: 'transparent',
                // headerTitleStyle: ,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: "black",
                    width: SCREENWIDTH - 130,
                    textAlign: "center",
                    // ...tw.style(`bg-black`)
                },
                drawerStyle: {
                    backgroundColor: '#3d3d3d',
                    width: 280,
                },
                drawerContentStyle: {
                    marginTop: 300,
                },
                headerRight: (props) => (<Avatar {...props} size={12} />)
            }}>
            <Drawer.Screen name="Portfolio" options={{ title: "PortFolio" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Portfolio />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Transaction" options={{ title: "Transactions" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Transaction />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Trade" options={{ title: "Trade" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Trade {...props} />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="TradeCoin" options={{ headerShown: false }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <TradeCoin {...props} />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="selOption" component={SelectStack} options={{ title: "Setting", headerShown: false }} />
            <Drawer.Screen name="Setting" options={{
                title: "Setting", headerRight: (props) => (<TouchableOpacity style={tw.style("mr-3")}><Box style={tw.style("bg-[#b9cd7a]")} rounded="md">
                    <Icon name="check" style={tw.style("text-white p-2")} size={16} />
                </Box>
                </TouchableOpacity>)
            }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Setting />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Contacts" options={{
                title: "Contacts", headerRight: (props) => (<TouchableOpacity style={tw.style("mr-3")} onPress={() => { setShowNewModal(true) }}><Box style={tw.style("bg-[#7fb4811a] border border-[#c0ddc1]/55")} rounded="md">
                    <Icon name="plus" style={tw.style("text-[#8ad48d] p-2")} size={16} />
                </Box>
                </TouchableOpacity>)
            }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Contacts />
                            <AddNewContactModal showModal={showNewModal} setShowModal={setShowNewModal} />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="AccessHistory" options={{ title: "AccessHistory" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <AccessHistory />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Terms" options={{ title: "Terms & Conditions" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Terms />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="Market" options={{ title: "Market", }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <Market />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="NFTMarket" options={{ title: "NFT Market" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <NFTMarket {...props} />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="ItemDetail" options={{ title: "NFT Market", headerRight: (props) => { } }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <ItemDetail />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
            <Drawer.Screen name="PrivatePolicy" options={{ title: "PrivatePolicy" }} >
                {
                    (props) => (
                        <Dashboard {...props}>
                            <PrivatePolicy />
                        </Dashboard>
                    )
                }
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default LeftSide;