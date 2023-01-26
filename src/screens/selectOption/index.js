
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import tw from "twrnc";
import { Flex, Text, Center, Heading, Spacer } from 'native-base';
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../../utils/constant/images';
import WalletComponent from '../../components/walletComponent';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SelectOption = ({ navigation }) => {

    React.useEffect(() => {
        navigation.getParent().setOptions({
            tabBarStyle: {
                display: "flex",
                backgroundColor: "#3d3d3d",
                height: 85,
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 10
            }
        });
    }, [])

    return (
        <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={10} style={tw.style("dark:bg-[#2B1867] bg-white ")}  >
            <Center height={"25%"} py={10}>
                <Heading fontWeight={400} style={tw.style("dark:text-white")}>Select Option</Heading>
                <Text fontSize="md" style={tw.style("text-gray-300 text-center dark:text-[#ffffff]/59")}>Select whether you will be sending or receiving tokens</Text>
            </Center>

            <Center  >
                <Flex direction="column" width={"100%"}>
                    <TouchableOpacity onPress={() => { navigation.navigate("sendToken") }} style={tw.style("mb-4")}>
                        <WalletComponent icon={<images.SendMailIcon height={40} width={40} style={tw.style("mb-7")} />} title={"Send Tokens"} content={"Sending tokens to any wallet became super fast and easy"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("requestToken") }}>
                        <WalletComponent icon={<images.SalaryIcon height={40} width={40} style={tw.style("mb-7")} />} title={"Receive Tokens"} content={"Receiving tokens to your wallet became super fast and easy"} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={()=>{console.log(1); navigation.navigate("sendToken")}}><WalletComponent icon={<images.SendMailIcon height={40} width={40} style={tw.style("mb-7")} />}  title={"Send Tokens"} content={"Sending tokens to any wallet became super fast and easy"}  /></TouchableOpacity> */}

                    {/* <WalletComponent icon={<images.SalaryIcon height={40} width={40} style={tw.style("mb-7")}/>} title={"Receive Tokens"} content={"Receiving tokens to your wallet became super fast and easy"} handleClick={()=>{navigation.navigate("activateWallet")}} /> */}

                </Flex>
            </Center>
            <Spacer />
        </Flex>

    )
}
export default SelectOption;
