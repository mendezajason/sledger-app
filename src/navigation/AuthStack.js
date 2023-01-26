import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreens';
import LandScreen from '../screens/LandScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AccountCreate from '../screens/AccountCreate';
import ForgotPass from '../screens/ForgotPass';
import Verification from '../screens/Verification';
import SignUpVerification from '../screens/SignUpVerification';
import ResetPass from '../screens/ResetPass';
import PassChange from '../screens/PassChange';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Land" component={LandScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="AccountCreate" component={AccountCreate} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="SignUpVerification" component={SignUpVerification} />
            <Stack.Screen name="ResetPass" component={ResetPass} />
            <Stack.Screen name="PassChange" component={PassChange} />
        </Stack.Navigator>
    )
};
export default AuthStack;