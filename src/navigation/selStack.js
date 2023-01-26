import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SelectOption from '../screens/selectOption';
import SendToken from '../screens/selectOption/sendToken';
import RequestToken from '../screens/selectOption/request';

const Stack = createStackNavigator();

const SelectStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="selOps"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="selOps" component={SelectOption} />
            <Stack.Screen name="sendToken" component={SendToken} />
            <Stack.Screen name="requestToken" component={RequestToken} />
        </Stack.Navigator>
    )
};
export default SelectStack;