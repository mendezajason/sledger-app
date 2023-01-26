import React, { useRef, useState } from 'react';
import { Dimensions, ImageBackground, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Text, Center, Heading, Spacer, FormControl, Box, HStack, Image, ScrollView } from 'native-base';
import { Button } from "@rneui/base";
import images from '../utils/constant/images';
import { Input } from "@rneui/base";

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SignUpVerification = () => {
    // const [key1, setKey1] = useState("");
    // const [key2, setKey2] = useState("");
    // const [key3, setKey3] = useState("");
    // const [key4, setKey4] = useState("");
    const navigation = useNavigation();
    let ref_input2 = useRef(null);
    let ref_input3 = useRef(null);
    let ref_input4 = useRef(null);

    return (
        <ScrollView>
            <Flex direction="column" style={tw.style("bg-white dark:bg-[#2B1867]")} alignContent={"space-between"} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8} pt={16}>
                <Flex alignContent={"space-between"} minH="40%">
                    <Center  >
                        <Image source={images.VerificationImg} alt="" width={24} height={32} />
                    </Center>
                    <Box rounded="lg" px={3}>
                        <Heading style={tw.style("dark:text-white text-center")} mt={5}>Verification</Heading>
                        <Text fontSize="md" style={tw.style("text-gray-400 mt-3  text-center")} >Enter the 4 digits code sent to the your registered email address to verify</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <FormControl isInvalid width={"100%"} >
                            <Flex direction="row" space={5} alignContent="space-between" width="100%" >
                                <Box size="20" >
                                    <Input p={1}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        // placeholder="0"
                                        onChange={() => ref_input2.current.focus()}
                                        inputContainerStyle={tw.style(`text-white px-0 w-16 `)}
                                        inputStyle={tw.style(`text-gray-400 text-6xl pl-4 min-h-20 font-medium`)}
                                        autoFocus={true}
                                    // returnKeyType="next"
                                    // onSubmitEditing={() => ref_input2.current.focus()}
                                    />
                                </Box>
                                <Spacer />
                                <Box size="20">
                                    <Input p={1}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        // placeholder="0"
                                        onChange={(ev) => ref_input3.current.focus()}
                                        inputContainerStyle={tw.style(`text-white px-0 w-16 `)}
                                        inputStyle={tw.style(`text-gray-400 text-6xl pl-4 min-h-20 font-medium`)}
                                        ref={ref_input2}
                                    // returnKeyType="next"
                                    // onSubmitEditing={() => ref_input3.current.focus()}
                                    />
                                </Box>
                                <Spacer />
                                <Box size="20">
                                    <Input p={1}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        // placeholder="0"
                                        onChange={(ev) => ref_input4.current.focus()}
                                        inputContainerStyle={tw.style(` text-white px-0 w-16 `)}
                                        inputStyle={tw.style(`text-gray-400 text-6xl pl-4 min-h-20 font-medium`)}
                                        ref={ref_input3}
                                    // returnKeyType="next"
                                    // onSubmitEditing={() => ref_input4.current.focus()}
                                    />
                                </Box>
                                <Spacer />
                                <Box size="20">
                                    <Input p={1}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        // placeholder="0"
                                        // onKeyPress={(ev) => handleKeyDown(ev, 3)}
                                        inputContainerStyle={tw.style(` text-white px-0 w-16 `)}
                                        inputStyle={tw.style(`text-gray-400 text-6xl pl-4 min-h-20 font-medium`)}
                                        ref={ref_input4}
                                    />
                                </Box>
                            </Flex>
                        </FormControl>
                    </Box>
                </Flex>
                <Spacer />
                <Center width={"100%"} >
                    <HStack alignItems="center">
                        <Text fontSize="md" style={tw.style("dark:text-white text-gray-300")}>Didn't receive any code?</Text>
                        <Button
                            type='clear'
                            buttonStyle={{ background: "transparent" }}
                            titleStyle={tw.style("dark:text-gray-300  text-gray-600 font-bold")}
                            onPress={() => {
                                console.log('hello')
                            }}
                        >
                            Send Again
                        </Button>
                    </HStack>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                        <Button
                            buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                            containerStyle={{ width: "100%", margin: 5 }}
                            icon={<images.verifyIcon style={tw.style("absolute left-5")} />}
                            onPress={() => {
                                navigation.navigate("AccountCreate")
                            }}
                            title="Verify OTP"
                            titleProps={{}}
                            titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                        />
                    </ImageBackground>
                </Center>
            </Flex>
        </ScrollView>
    )
}
export default SignUpVerification
