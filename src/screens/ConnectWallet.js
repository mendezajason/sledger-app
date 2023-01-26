import React, { useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import tw from "twrnc";
import { Flex, Box, Text, Center, Heading, Spacer, FormControl, Input, ScrollView } from 'native-base';
import { Button, Tab, TabView } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
import WalletComponent from '../components/walletComponent';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/basic/backButton';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const ConnectWallet = () => {
    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);

    return (
        <ScrollView>
            <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={10} px={6} style={tw.style("dark:bg-[#2B1867] bg-white ")}  >
                <Flex direction="row">
                    <BackButton />
                    <Spacer />
                    <Center >
                        <Button
                            buttonStyle={tw.style(" bg-[#4a4a4a] dark:bg-[#583f87] px-4")}
                            containerStyle={tw.style("rounded-lg ")}
                            onPress={() => {
                                navigation.navigate("conWallet1");
                            }}
                        >
                            Skip
                            <Icon name="chevron-forward" color="white" style={tw.style("text-white dark:text-white")} size={26} />
                        </Button>
                    </Center>
                </Flex>

                <Box height={"25%"} py={10}>
                    <Heading >Connect Wallet</Heading>
                    <Text fontSize="md" style={tw.style("text-gray-300 dark:text-[#7c68a3]")}>Create a new Steller wallet or connect the wallet you already have</Text>
                </Box>

                <Box rounded="lg">
                    <Text fontSize="md" style={tw.style("text-gray-600 dark:text-gray-400")}>First Step</Text>
                    <Text fontSize="lg">Wallet Information</Text>
                    <Flex direction="row" pt={4} >
                        <Center bg="primary.100" pt={1} width="45%" style={tw.style("bg-[#b9cd7a]")}></Center>
                        <Spacer />
                        <Center bg="primary.200" pt={1} width="45%" style={tw.style("bg-gray-100")}></Center>
                    </Flex>
                    <Box pt={4}>
                        <FormControl width={"100%"} >
                            <FormControl.Label style={tw.style("text-white")}>
                                <Text ml={2} fontSize="md" style={tw.style("dark:text-white text-black font-bold")}>Steller Address</Text>
                            </FormControl.Label>
                            <Input pt={2} mt={2}
                                placeholder="Enter Steller Address"
                                inputContainerStyle={tw.style(`border rounded-md border-gray-200 bg-transparent text-white px-0`)}
                                inputStyle={tw.style(`text-gray-300 text-base px-5`)}
                            />
                            <FormControl.Label style={tw.style("text-white")} mt={3}>
                                <Text ml={2} fontSize="md" style={tw.style("dark:text-white text-black font-bold")}>Secret Key</Text>
                            </FormControl.Label>
                            <Input pt={2} mt={2}
                                placeholder="Enter Secret key"
                                inputContainerStyle={tw.style(`border rounded-md border-gray-200 bg-transparent text-white px-0`)}
                                inputStyle={tw.style(`text-gray-300 text-base px-5`)}
                            />
                        </FormControl>
                    </Box>
                </Box>
                <Spacer />
                <Center   >
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                        <Button
                            buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                            containerStyle={{ width: "100%", margin: 5 }}
                            onPress={() => navigation.navigate("conWallet1")}
                            title="Proceed To Terms"
                            titleProps={{}}
                            titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                        />
                    </ImageBackground>
                </Center>
            </Flex>
        </ScrollView>
    )
}
export default ConnectWallet;