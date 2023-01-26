import React, { useContext, useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Text, Center, Heading, Spacer, FormControl, Box, Image, ScrollView } from 'native-base';
import { Button } from "@rneui/base";
import images from '../utils/constant/images';
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { ThemeContext } from '../utils/ThemeProvider';
const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;
const ResetPass = () => {
    const [visible_pass, setVisible] = useState(true);
    const [visible_pass1, setVisible1] = useState(true);
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <Flex direction="column" style={tw.style("dark:bg-[#2B1867] bg-white")} alignContent={"space-between"} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8} pt={16} pb={12}>
                <Flex alignContent={"space-between"} minH="50%">
                    <Box rounded="lg" px={3}>
                        <Heading style={tw.style("dark:text-gray-300 text-gray-600")}>Reset Password</Heading>
                        <Text fontSize="md" style={tw.style("text-gray-400 mt-3")}>Create a new password for your account to be able to access your account</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <FormControl isInvalid width={"100%"} >
                            <FormControl.Label style={tw.style("text-white px-3")}>
                                <Flex direction="row" alignItems={"center"} >
                                    {isToggle ? (<Image source={images.keyIcon1} alt="" />) : (<images.keyIcon height={16} width={20} />)}
                                    <Text ml={2} fontSize="sm" style={tw.style("dark:text-gray-300 text-gray-600")}>Password</Text>
                                </Flex>
                            </FormControl.Label>
                            <Input
                                isInvali
                                inputContainerStyle={tw.style(`border rounded-md bg-transparent text-white px-0`)}
                                inputStyle={tw.style(`dark:text-gray-300 text-gray-600 px-5`)}
                                rightIcon={<Button icon={<Icon name="eye" size={20} style={tw.style("dark:text-white text-gray-600 pr-4")} />}
                                    onPress={() => setVisible(!visible_pass)}
                                    buttonStyle={tw.style("bg-transparent p-0")}
                                />}    //text-[#722432]
                                // value="11111"
                                secureTextEntry={visible_pass}
                            />
                            <FormControl.Label style={tw.style("text-white px-3")}>
                                <Flex direction="row" alignItems={"center"} >
                                    {isToggle ? (<Image source={images.keyIcon1} alt="" />) : (<images.keyIcon height={16} width={20} />)}
                                    <Text ml={2} fontSize="sm" style={tw.style("dark:text-gray-300 text-gray-600")}>Confirm New Password</Text>
                                </Flex>
                            </FormControl.Label>
                            <Input
                                isInvalid
                                inputContainerStyle={tw.style(`border rounded-md bg-transparent text-white px-0`)}
                                inputStyle={tw.style(`dark:text-gray-300 text-gray-600 px-5`)}
                                rightIcon={<Button icon={<Icon name="eye" size={20} style={tw.style("dark:text-white text-gray-600 pr-4")} />}
                                    onPress={() => setVisible1(!visible_pass1)}
                                    buttonStyle={tw.style("bg-transparent p-0")}
                                />}
                                // value="11111"
                                secureTextEntry={visible_pass1}
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
                            icon={<images.checkIcon style={tw.style("absolute left-5")} />}
                            onPress={() => {
                                navigation.navigate("PassChange")
                            }}
                            title="Confirm Password"
                            titleProps={{}}
                            titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                        />
                    </ImageBackground>
                </Center>
            </Flex>
        </ScrollView>
    )
}
export default ResetPass
