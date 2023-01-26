
import {Flex, Text,Center,Heading,Spacer} from 'native-base';
import React,{useState} from 'react';
import { Dimensions } from 'react-native';
import  tw from "twrnc";

const AnotherWalletComponent = ({icon,content})=>{
    return(
        <Flex  direction="column" p={3} style={tw.style("bg-[#fcfcfc] rounded-md my-3 dark:bg-[#7e7492]")}>
            <Center >
                {icon}
            </Center>
            <Center width="100%">
            <Text style={tw.style("text-center text-gray-600 dark:text-gray-300 font-semibold")} fontSize="sm">{content}</Text>
            </Center>
        </Flex>
    )
}
export default  AnotherWalletComponent;