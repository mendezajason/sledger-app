import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { ThemeContext } from '../utils/ThemeProvider';
import { useColorMode, Center, Box, VStack, Image, Text, Flex, Spacer } from 'native-base';
import images from '../utils/constant/images';
const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const WelcomeScreen = () => {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Land')
    },1500);

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => {
                { console.log(isToggle) }

                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('Land') }}>
                        <VStack space={4} alignItems="center" minH={SCREENHEIGHT} minW={SCREENWIDTH} bg="#1b1b1b">
                            <Center height={"60%"}  >
                                <Image source={images.Logo1} alt="" style={{ aspectRatio: 0.74 }} resizeMode={'contain'} />
                            </Center>
                            <Center p="2" width="100%" height={"30%"}>
                                <Flex direction="column" alignContent={"space-between"} height="100%" width={"100%"} >
                                    <Center >
                                        <Text style={{ color: "white", letterSpacing: 4 }} fontSize="4xl" fontWeight="bold" >
                                            SLEDGER
                                        </Text>
                                        <Text fontSize="sm" style={{ color: "grey", letterSpacing: 2 }}>
                                            Payment Network
                                        </Text>
                                    </Center>
                                    <Spacer />
                                    <Center>
                                        <Text fontSize="sm" style={tw.style("text-gray-500")}>
                                            Version 83.273
                                        </Text>
                                    </Center>
                                </Flex>
                            </Center>
                        </VStack>
                    </TouchableOpacity>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default WelcomeScreen
