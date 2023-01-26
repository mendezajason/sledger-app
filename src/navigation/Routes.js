import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../auth/AuthProvider';
import WalletStack from './WalletStack';
import AuthStack from './AuthStack';
import { ThemeContext } from '../utils/ThemeProvider';

export default function Routes() {
    const { user, setUser } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };
    
    return (
        <NavigationContainer theme={theme}>
            {
                user ? <WalletStack /> : <AuthStack />
                // <WalletStack />
                // <AuthStack />
            }
        </NavigationContainer>
    );

}