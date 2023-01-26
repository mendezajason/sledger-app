import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Pressable, Text, Center, Heading, Spacer } from 'native-base';
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';
import WalletComponent from '../components/walletComponent';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SelWallet = () => {
    const navigation = useNavigation();

    return (
        <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={10} style={tw.style("dark:bg-[#2B1867] bg-white ")}  >
            <Center height={"25%"} py={10}>
                <Heading >Select Wallet</Heading>
                <Text fontSize="md" style={tw.style("text-gray-300 dark:text-[#7c68a3] text-center")}>Create a new Steller wallet or connect the wallet you already have</Text>
            </Center>
            <Center  >
                <Flex direction="column" space={10} width={"100%"}>
                    <TouchableOpacity onPress={() => navigation.navigate("conWallet")}>
                        <WalletComponent icon={<images.WalletIcon1 height={60} width={60} />} title={"Connect Steller Wallet"} content={"Check if you have a wallet already in order to connect"} handleClick={() => { navigation.navigate("conWallet") }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("conWallet")}>
                        <WalletComponent icon={<images.WalletIcon2 height={60} width={60} />} title={"Create Steller Wallet"} content={"Click if you don't have a wallet and want to create one"} handleClick={() => { navigation.navigate("activateWallet") }} mt={4} />
                    </TouchableOpacity>
                </Flex>
            </Center>
            <Spacer />
        </Flex>
    )
}
export default SelWallet;