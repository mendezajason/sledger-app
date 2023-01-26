import React, { useContext, useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Checkbox, Text, Center, Box, VStack, Heading, Spacer, FormControl, HStack, ScrollView, Image } from 'native-base';
import { Input } from "@rneui/base";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SignUp = () => {
    const [isCorrect, setCorrect] = useState(true);
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    const [visible_pass, setVisible] = useState(true);
    const [visible_pass1, setVisible1] = useState(true);
    const navigation = useNavigation();

    return (
        <ScrollView>
            <Flex direction="column" alignContent={"space-between"} style={tw.style("dark:bg-[#2B1867] bg-white")} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8}>
                <VStack space="2">
                    <Center size="12">
                        <Button
                            buttonStyle={tw.style(" bg-[#fdfdfd] dark:bg-[#583f87] ")}
                            containerStyle={tw.style("rounded-full bg-gray-300")}
                            onPress={() => {
                                console.log('hello')
                                navigation.goBack();
                            }}
                        >
                            <Icon name="chevron-back-sharp" color="white" style={tw.style("text-black dark:text-white")} size={26} />
                        </Button>
                    </Center>
                    <Box px={3}>
                        <Heading color={'white'} style={tw.style("text-lg text-black dark:text-white")} >Create New Account</Heading>
                        <Text fontSize="sm" py={2} color={'gray.400'}>
                            Create a new account to start managing and increase your assets today.
                        </Text>
                    </Box>
                    <Center width={"100%"} px={3}>
                        <Button
                            buttonStyle={tw.style("dark:bg-[#4F3F81] rounded-md py-3 bg-[#fdfdfd] ")}
                            containerStyle={{ width: "100%", margin: 5 }}
                            rounded={'md'}
                            icon={<Image
                                source={images.googleIcon1}
                                alt="Alternate Text"
                                style={tw.style("absolute left-4")}
                                size={4}
                            />
                            }
                            color={"black"}
                            onPress={() => {
                                console.log('hello')
                                toggleTheme();
                            }}
                            iconPosition="left"
                        >
                            <Text fontSize="md" style={tw.style("text-black dark:text-white ")}>Sign up using Google</Text>
                        </Button>
                    </Center>
                    <Box rounded="lg" width={"100%"} pt={3}>
                        <FormControl isInvalid width={"100%"} >
                            <FormControl.Label style={tw.style("text-white px-3")}>
                                <Flex direction="row" alignItems={"center"} >
                                    {isToggle ? (<Image source={images.userIcon} alt="" />) : (<Image source={images.userIconDark} alt="" />)}
                                    <Text ml={2} fontSize="sm" style={tw.style("dark:text-white text-black text-xs")}>Full Name</Text>
                                </Flex>
                            </FormControl.Label>
                            <Input p={1}
                                placeholder="mist4227s@gmail.com"
                                // value='mist4227s@gmail.com'
                                inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0 `)}
                                inputStyle={tw.style(`${isCorrect ? "text-gray-500" : "text-[#D73468]"} dark:text-gray-300 text-xs px-5 max-h-8 `)}
                            />
                            <FormControl.Label style={tw.style("text-white px-3")}>
                                <Flex direction="row" alignItems={"center"} >
                                    {isToggle ? (<Image source={images.mailIcon1} alt="" />) : (<images.mailIcon height={12} width={20} />)}
                                    <Text ml={2} fontSize="sm" style={tw.style("text-xs dark:text-white text-black")}>Email Address</Text>
                                </Flex>
                            </FormControl.Label>
                            <Input p={1}
                                placeholder="mist4227s@gmail.com"
                                // value='mist4227s@gmail.com'
                                inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0 `)}
                                inputStyle={tw.style(`${isCorrect ? "text-gray-500" : "text-[#D73468]"} dark:text-gray-300 text-xs px-5 max-h-8 `)}
                            />
                            <FormControl.Label style={tw.style("text-white px-3")}>
                                <Flex direction="row" alignItems={"center"} >
                                    {isToggle ? (<Image source={images.keyIcon1} alt="" />) : (<images.keyIcon height={16} width={20} />)}
                                    <Text ml={2} fontSize="sm" style={tw.style("dark:text-white text-black text-xs")}>Password</Text>
                                </Flex>
                            </FormControl.Label>
                            <Input p={1}
                                // placeholder="mist4227s@gmail.com"
                                // value='mist4227s@gmail.com'
                                rightIcon={
                                    <Button icon={<Icon name="eye" size={20} style={tw.style("dark:text-white text-gray-600 pr-4")} />}
                                        onPress={() => setVisible(!visible_pass)}
                                        buttonStyle={tw.style("bg-transparent p-0")}
                                    />}
                                inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0 `)}
                                inputStyle={tw.style(`${isCorrect ? "text-gray-500" : "text-[#D73468]"} dark:text-gray-300 text-xs px-5 max-h-8 `)}
                                secureTextEntry={visible_pass}
                            />
                            {/* <FormControl.ErrorMessage px={3} style={tw.style("relative bottom-6 ")} >Incorrect Password or Email.</FormControl.ErrorMessage> */}
                            <Box py="1" rounded="lg">
                                <Text fontSize="sm" style={tw.style("dark:text-white text-gray-500 px-3")}>At least 12 characters</Text>
                                <Text fontSize="sm" style={tw.style("dark:text-white text-gray-500 px-3 pt-1")}>A mixture of both uppercase and lowercase letters</Text>
                                <Text fontSize="sm" style={tw.style("dark:text-white text-gray-500 px-3 pt-1")}>A mixture of letters and numbers</Text>
                                <Text fontSize="sm" style={tw.style("dark:text-white text-gray-500 px-3 pt-1 pb-3")}>Inclusion of at least once special character,e.g., !@</Text>
                            </Box>
                            <FormControl.Label style={tw.style("text-white px-3 pt-2")}>
                                <Flex direction="row" alignItems={"center"} >
                                    {isToggle ? (<Image source={images.keyIcon1} alt="" />) : (<images.keyIcon height={16} width={20} />)}
                                    <Text ml={2} fontSize="sm" style={tw.style("dark:text-white text-black text-xs")}>Confirm Password</Text>
                                </Flex>
                            </FormControl.Label>
                            <Input p={1}
                                // placeholder="mist4227s@gmail.com"
                                // value='mist4227s@gmail.com'
                                rightIcon={
                                    <Button icon={<Icon name="eye" size={20} style={tw.style("dark:text-white text-gray-600 pr-4")} />}
                                        onPress={() => setVisible1(!visible_pass1)}
                                        buttonStyle={tw.style("bg-transparent p-0")}
                                    />}
                                inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0 `)}
                                inputStyle={tw.style(`${isCorrect ? "text-gray-500" : "text-[#D73468]"} text-xs px-5 max-h-8 `)}
                                secureTextEntry={visible_pass1}
                            />
                        </FormControl>
                    </Box>
                </VStack>
                <Spacer />
                <VStack space="5" width={"100%"}>
                    <Center direction='row' width={"100%"} alignContent="center" alignItems={'center'} >
                        <HStack alignItems="center">
                            <Text fontSize="sm" style={tw.style("dark:text-gray-300 text-gray-600")}>Already have an account?</Text>
                            <Button
                                type='clear'
                                buttonStyle={{ background: "transparent" }}
                                titleStyle={tw.style("text-white font-bold dark:text-gray-300 text-gray-600")}
                                onPress={() => {
                                    navigation.navigate("Login")
                                }}
                            >
                                Login
                            </Button>
                        </HStack>
                    </Center>
                    <Center px={3}>
                        <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                            <Button
                                buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                                containerStyle={{ width: "100%", margin: 5 }}
                                icon={<images.userAddIcon style={tw.style("absolute left-5")} />}
                                onPress={() => {
                                    navigation.navigate("SignUpVerification")
                                }}
                                title="Sign Up"
                                titleProps={{}}
                                titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                            />
                        </ImageBackground>
                    </Center>
                </VStack>
            </Flex>
        </ScrollView>
    )
}
export default SignUp
