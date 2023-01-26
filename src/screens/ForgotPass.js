import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Text, Center, Heading, Spacer, FormControl, Box, Image, ScrollView } from 'native-base';
import { Button } from "@rneui/base";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
import { Input } from "@rneui/base";
const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;
const ForgotPass = () => {
    const navigation = useNavigation();
    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => {
                return (
                    <ScrollView>
                        <Flex direction="column" style={tw.style("bg-white dark:bg-[#2B1867]")} alignContent={"space-between"} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8} pt={16}>
                            <Flex alignContent={"space-between"} minH="40%">
                                <Box rounded="lg" px={3}>
                                    <Heading style={tw.style("dark:text-white")}>Forgot Password</Heading>
                                    <Text fontSize="md" style={tw.style("text-gray-400 mt-3")}>Enter your registered email to receive a reset link for your password</Text>
                                </Box>
                                <Spacer />
                                <Box>
                                    <FormControl isInvalid width={"100%"} >
                                        <FormControl.Label style={tw.style("text-white px-3")}>
                                            <Flex direction="row" alignItems={"center"} >
                                                {isToggle ? (<Image source={images.mailIcon1} alt="" />) : (<images.mailIcon height={12} width={20} />)}
                                                <Text ml={2} fontSize="sm" style={tw.style("dark:text-white")}>Email</Text>
                                            </Flex>
                                        </FormControl.Label>
                                        <Input p={1}
                                            placeholder="mist4227s@gmail.com"
                                            // value='mist4227s@gmail.com'
                                            inputContainerStyle={tw.style(`border rounded-md bg-transparent text-white px-0 `)}
                                            inputStyle={tw.style(`text-gray-600 dark:text-gray-300 text-xs px-5 max-h-8 `)}
                                        />
                                    </FormControl>
                                </Box>
                            </Flex>
                            <Spacer />
                            <Center width={"100%"} >
                                <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                                    <Button
                                        buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                                        containerStyle={{ width: "100%", margin: 5 }}
                                        icon={<images.keyIcon style={tw.style("absolute left-5")} />}
                                        onPress={() => {
                                            navigation.navigate("Verification")
                                        }}
                                        title="Reset Password"
                                        titleProps={{}}
                                        titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                                    />
                                </ImageBackground>
                            </Center>
                        </Flex>
                    </ScrollView>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default ForgotPass
