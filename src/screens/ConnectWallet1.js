import React, { useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import tw from "twrnc";
import { Flex, Box, Text, Center, Heading, Spacer, Image, ScrollView } from 'native-base';
import { Button, Tab, TabView } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/basic/backButton';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const ConnectWallet1 = () => {
    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);

    return (
        <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={10} px={6} style={tw.style("dark:bg-[#2B1867] bg-white ")}  >
            <Flex direction="row">
                <BackButton />
                <Spacer />
                <Center >
                    <Button
                        buttonStyle={tw.style(" bg-[#4a4a4a] dark:bg-[#583f87] px-4")}
                        containerStyle={tw.style("rounded-lg ")}
                        onPress={() => {
                            navigation.navigate("activateWallet");
                        }}
                    >
                        Skip
                        <Icon name="chevron-forward" color="white" style={tw.style("text-white dark:text-white")} size={26} />
                    </Button>
                </Center>
            </Flex>

            <Box height={"25%"} py={10}>
                <Heading style={tw.style("text-gray-600 dark:text-gray-300")}>Connect Wallet</Heading>
                <Text fontSize="md" style={tw.style("text-gray-400 dark:text-[#7c68a3]")}>Create a new Steller wallet or connect the wallet you already have</Text>
            </Box>

            <Box rounded="lg">
                <Text fontSize="md" style={tw.style("text-gray-300 dark:text-gray-400")}>Second Step</Text>
                <Text fontSize="md">Wallet Terms & Rules</Text>
                <Flex direction="row" pt={4} >
                    <Center bg="primary.100" pt={1} width="45%" style={tw.style("bg-[#b9cd7a]")}></Center>
                    <Spacer />
                    <Center bg="primary.200" pt={1} width="45%" style={tw.style("bg-[#b9cd7a]")}></Center>
                </Flex>
                <Box p={4} style={tw.style("bg-gray-100/30 rounded-md")} mt={5}>
                    <Text fontSize="md" style={tw.style("text-gray-600 dark:text-gray-300")}>
                        I accept the terms and use, understand the
                        risks associated with crypto currencies, and
                        know that Steller Term does not issue or
                        endorse any asset on the Steller network
                    </Text>
                </Box>
            </Box>
            <Spacer />
            <Center   >
                <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                    <Button
                        buttonStyle={tw.style("items-center bg-transparent rounded-md")}
                        containerStyle={{ width: "100%", margin: 5 }}
                        icon={<Image source={images.ConnectWalletIcon} alt="" style={tw.style("absolute left-5")} />}
                        onPress={() => navigation.navigate("activateWallet")}
                        title="Agree & Connect"
                        titleProps={{}}
                        titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                    />
                </ImageBackground>
            </Center>
        </Flex>
    )
}
export default ConnectWallet1;