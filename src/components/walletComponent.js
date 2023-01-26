
import React, { useState } from 'react';
import { Text, Center } from 'native-base';
import tw from "twrnc";
// import images from '../utils/constant/images';

const WalletComponent = ({ icon, title, content, ...props }) => {
    return (
        <Center {...props} width={"100%"} p={4} style={tw.style("rounded-2xl bg-[#eaeaea] dark:bg-[#3e2b63]")}>
            {icon}
            <Text fontSize="lg" style={tw.style("font-bold dark:text-white")}> {title}</Text>
            <Text fontSize="md" style={tw.style("text-gray-500 text-center mt-2 dark:text-[#9383b1]")}>{content}</Text>
        </Center>
    )
}
export default WalletComponent;