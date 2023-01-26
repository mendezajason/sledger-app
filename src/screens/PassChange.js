import React, { useContext } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Text, Center, Heading, Spacer, VStack, HStack, Image } from 'native-base';
import { Button } from "@rneui/base";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;
const PassChange = () => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <Flex direction="column" style={tw.style("dark:bg-[#2B1867]")} alignContent={"space-between"} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8} pt={20} pb={12}>
            <Center width={"100%"} >
                {/* {isToggle?<ImageBackground source={images.PassChangedLogo} >
                        <Image source={images.Passchange} alt="" height={16} m={20} width={10}/>
                    </ImageBackground>:<images.passChangeImg width={250} height={250} />} */}
                <ImageBackground source={images.PassChangedLogo} >
                    <Image source={images.Passchange} alt="" height={16} m={20} width={10} />
                </ImageBackground>
                <Heading style={tw.style("text-2xl dark:text-gray-300 text-gray-600 pt-3 mt-5")}>Password Changed!</Heading>
                <Text style={tw.style("text-base text-white text-gray-400 text-center mt-3")}>Your old password has been changed</Text>
                <Text style={tw.style("text-base text-white text-gray-400 text-center")}>successfuly!</Text>
            </Center>
            <Spacer />
            <VStack space="5" width={"100%"}>
                {/* <Center direction='row' width={"100%"} alignContent="center" alignItems={'center'} >
                    <HStack alignItems="center">
                        <Text fontSize="sm" style={tw.style("text-gray-600 dark:text-gray-300")}>Dont't have account?</Text>
                        <Button
                            type='clear'
                            buttonStyle={{ background: "transparent" }}
                            titleStyle={tw.style("dark:text-gray-300 font-bold text-gray-600")}
                            onPress={() => {
                                navigation.navigate("Signup")
                            }}
                        >
                            Sign Up
                        </Button>
                    </HStack>
                </Center> */}
                <Center px={3}>
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
                    {/* <Button
                    buttonStyle={tw.style("items-center bg-transparent border border-white rounded-md")}
                    containerStyle={{width: "100%", margin: 5 }}
                    icon={<images.userAddIcon  style={tw.style("absolute left-5")}/>}
                    onPress={() => alert("click")}
                    title="SignUp"
                    titleProps={{}}
                    titleStyle={{ marginHorizontal: 5}}
                    /> */}
                </Center>
            </VStack>
        </Flex>
    )
}
export default PassChange
