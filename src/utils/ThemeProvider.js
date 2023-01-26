
import React, { createContext, useState } from 'react';
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import { useColorMode } from 'native-base';
import { color } from 'react-native-reanimated';


export const ThemeContext = createContext({});
export const ThemeProvider = ({ children }) => {
    const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
    const { colorMode, toggleColorMode } = useColorMode();
    useDeviceContext(tw, { withDeviceColorScheme: false });
    const [theme, setTheme] = useState(true);
    const [hambugerMenu, setHambugerMenu] = useState(false);
    const themeParam = {
        toggleTheme: () => { toggleColorMode(colorMode == "light" ? "dark" : "light"); toggleColorScheme(!theme); setTheme(!theme) },
        isToggle: theme,
        toggleHambugerMenu: () => setHambugerMenu(!hambugerMenu),
        isToggleMenu: hambugerMenu
    }

    console.log("colorMode", colorMode);
    return (
        <ThemeContext.Provider value={themeParam}>
            {children}
        </ThemeContext.Provider>
    );
};