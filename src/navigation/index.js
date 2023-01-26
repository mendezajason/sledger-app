
import { NativeBaseProvider, extendTheme, useColorMode } from 'native-base';
import React from 'react';
import { AuthProvider } from '../auth/AuthProvider';
import { ThemeProvider } from '../utils/ThemeProvider';
import Routes from './Routes';

export default function Providers() {
  const theme = extendTheme({
    components: {
      checkbox: {
        baseStyle: ({ coloMode }) => {
          return {
            color: "white"
          }
        }
      }
    },
    colors: {
      // Add new color
      pink: {
        100: "#8522cc"
      }
    },
    config: {
      //Changing initialColorMode to dark
      initialColorMode: 'light'
    }
  });
  return (
    <NativeBaseProvider theme={theme}>
      <ThemeProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}