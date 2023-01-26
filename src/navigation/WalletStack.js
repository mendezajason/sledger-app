import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelWallet from '../screens/SelWallet';
import ConnectWallet from '../screens/ConnectWallet';
import ActivateWallet from '../screens/ActivateWallet';
import ConnectWallet1 from '../screens/ConnectWallet1';
import LeftSide from './LeftSide';
import LeftSide1 from './LeftSide1';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const WalletStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="selWallet"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="selWallet" component={SelWallet} />
            <Stack.Screen name="conWallet" component={ConnectWallet} />
            <Stack.Screen name="conWallet1" component={ConnectWallet1} />
            <Stack.Screen name="activateWallet" component={ActivateWallet} />
            <Stack.Screen name="portfolio" component={LeftSide1} />
        </Stack.Navigator>
    )
};
export default WalletStack;