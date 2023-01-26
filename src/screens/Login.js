import React, { useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Checkbox, Text, Center, Box, VStack, Heading, Spacer, FormControl, HStack, Image, ScrollView } from 'native-base';
import { ImageBackground } from 'react-native';
import { Input } from "@rneui/base";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
import { AuthContext } from '../auth/AuthProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Login = () => {
    const navigation = useNavigation();
    const [isCorrect, setCorrect] = useState(true);
    const { login } = useContext(AuthContext);
    const [visible_pass, setVisible] = useState(true);

    return (
        <ThemeContext.Consumer>
            {({ isToggle, toggleTheme }) => {
                return (
                    <ScrollView>
                        <Flex direction="column" alignContent={"space-between"} style={tw.style("dark:bg-[#2B1867] bg-white ")} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8}>
                            <VStack space="1">
                                <Center size="12">
                                    <Button
                                        buttonStyle={tw.style(" bg-[#fdfdfd] dark:bg-[#583f87] ")}
                                        containerStyle={tw.style("rounded-full bg-gray-300")}
                                        onPress={() => {
                                            navigation.goBack();
                                        }}
                                    >
                                        <Icon name="chevron-back-sharp" color="white" style={tw.style("text-black dark:text-white")} size={26} />
                                    </Button>
                                </Center>
                                <Box px={3}>
                                    <Heading color={'white'} style={tw.style("text-lg  text-black dark:text-white ")}  >Login</Heading>
                                    <Text fontSize="sm" py={2} color={'gray.400'}>
                                        Login to start managing your assets and start monitoring updates.
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
                                        <Text fontSize="md" style={tw.style("text-black dark:text-white ")}>Login with Google</Text>
                                    </Button>
                                </Center>
                                <Box rounded="lg" width={"100%"}>
                                    <FormControl isInvalid width={"100%"} >
                                        <FormControl.Label style={tw.style("text-white px-3")}>
                                            <Flex direction="row" alignItems={"center"} >
                                                {isToggle ? (<Image source={images.mailIcon1} alt="" />) : (<images.mailIcon height={12} width={20} />)}
                                                <Text ml={2} fontSize="sm" style={tw.style("dark:text-white text-black")}>Email</Text>
                                            </Flex>
                                        </FormControl.Label>
                                        <Input p={2}
                                            placeholder="mist4227s@gmail.com"
                                            // value='mist4227s@gmail.com'
                                            inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0`)}
                                            inputStyle={tw.style(`${isCorrect ? "text-gray-500" : "text-[#D73468]"} text-xs px-5`)}
                                        />
                                        <FormControl.Label style={tw.style("text-white px-3")}>
                                            <Flex direction="row" alignItems={"center"} >
                                                {isToggle ? (<Image source={images.keyIcon1} alt="" />) : (<images.keyIcon height={16} width={20} />)}
                                                <Text ml={2} fontSize="sm" style={tw.style("dark:text-white text-black")}>Password</Text>
                                            </Flex>
                                        </FormControl.Label>
                                        <Input
                                            isInvalid
                                            inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0`)}
                                            inputStyle={tw.style(`${isCorrect ? "text-gray-400" : "text-[#D73468]"} px-5 text-xs`)}
                                            rightIcon={
                                                <Button icon={<Icon name="eye" size={20} style={tw.style("dark:text-white text-gray-600 pr-4")} />}
                                                    onPress={() => setVisible(!visible_pass)}
                                                    buttonStyle={tw.style("bg-transparent p-0")}
                                                />}   //text-[#722432]
                                            // value="11111"
                                            placeholder='****'
                                            secureTextEntry={visible_pass}
                                        />
                                        {!isCorrect ? <FormControl.ErrorMessage px={3} style={tw.style("relative bottom-6")} >Incorrect Password or Email.</FormControl.ErrorMessage> : <></>}
                                        <Flex direction="row" alignContent={'space-between'} px={3}>
                                            <Center px={2} >
                                                <Checkbox style={tw.style("text-white")}
                                                    bg="#4F3F81"
                                                    borderWidth={0}
                                                    inputStyle={tw.style("bg-[#f9f9f9]")}
                                                >
                                                    <Text fontSize="sm" style={tw.style("dark:text-white text-gray-400")}>Remember me</Text>
                                                </Checkbox>
                                            </Center>
                                            <Spacer />
                                            <Button
                                                type='clear'
                                                buttonStyle={{ background: "transparent" }}
                                                titleStyle={tw.style("dark:text-gray-300 font-bold text-gray-600")}
                                                onPress={() => {
                                                    navigation.navigate("ForgotPass")
                                                }}
                                            >
                                                Forgot Password
                                            </Button>
                                        </Flex>
                                    </FormControl>
                                </Box>
                            </VStack>
                            <Spacer />
                            <VStack space="5" width={"100%"}>
                                <Center direction='row' width={"100%"} alignContent="center" alignItems={'center'} >
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
                                </Center>
                                <Center px={3}>
                                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                                        <Button
                                            buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                                            containerStyle={{ width: "100%", margin: 5 }}
                                            icon={<images.loginIcon style={tw.style("absolute left-5")} />}
                                            onPress={() => {
                                                login()
                                            }}
                                            title="Login"
                                            titleProps={{}}
                                            titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                                        />
                                    </ImageBackground>
                                </Center>
                            </VStack>
                        </Flex>
                    </ScrollView>
                )
            }}
        </ThemeContext.Consumer>
    )
}
export default Login
