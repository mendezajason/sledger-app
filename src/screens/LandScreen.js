import React from 'react';
import { Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { useColorMode, Center, Box, VStack, Image, Text, Flex, Spacer } from 'native-base';
import { Button } from "@rneui/base";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
// import {Icon} from 'react-native-vector-icons';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const LandScreen = () => {
    const navigation = useNavigation();

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => {
                { console.log(isToggle) }

                return (
                    <VStack space={4} alignItems="center" minH={SCREENHEIGHT} minW={SCREENWIDTH} bg="#1b1b1b">
                        <Flex height={"40%"} direction="column" >
                            <Center rounded={"full"} >
                                <Image source={images.LogoBack1} alt="" />
                            </Center>
                        </Flex>
                        <Center p="2" width="100%" height={"50%"}>
                            <Flex direction="column" alignContent={"space-between"} height="100%" width={"100%"} >
                                <Spacer />
                                <Center >
                                    <Text fontSize="4xl" style={{ color: "white", letterSpacing: 4 }} fontWeight="bold" >
                                        SLEDGER
                                    </Text>
                                    <Text fontSize="sm" style={{ color: "grey", letterSpacing: 3 }}   >
                                        Payment Network
                                    </Text>
                                </Center>
                                <Spacer />
                                <VStack space="5" alignItems={"center"} width="100%" p="2" px="4" >
                                    <Center width={"100%"}>
                                        <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                                            <Button
                                                buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                                                containerStyle={{ width: "100%", margin: 5 }}
                                                icon={<images.loginIcon style={tw.style("absolute left-5")} />}
                                                onPress={() => {
                                                    navigation.navigate("Login")
                                                }}
                                                title="Login"
                                                titleProps={{}}
                                                titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                                            />
                                        </ImageBackground>
                                    </Center>
                                    <Center width={"100%"} >
                                        <Button
                                            buttonStyle={tw.style("items-center bg-transparent border border-gray-400 rounded-md")}
                                            containerStyle={{ width: "100%", margin: 5 }}
                                            icon={<images.userAddIcon style={tw.style("absolute left-5")} />}
                                            onPress={() => {
                                                navigation.navigate("Signup")
                                            }}
                                            title="Sign Up"
                                            titleProps={{}}
                                            titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                                        />
                                    </Center>
                                </VStack>
                            </Flex>
                        </Center>
                    </VStack>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default LandScreen
