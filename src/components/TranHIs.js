import React from 'react';
import { Flex, Center, Image, Box, Text, Spacer } from 'native-base';
import images from '../utils/constant/images';
import tw from "twrnc";

const TransferHistory = ({ titleTop, titleBottom, contentTop, contentBottom, isWithdraw, ...props }) => {
    return (
        <Flex direction="row" {...props} py={3} alignItems="center" {...props} style={tw.style("border-b dark:border-b-gray-400 border-b-gray-100 border-b-2")} >
            <Center p={3} style={tw.style(`rounded-md ${isWithdraw ? "bg-[#e7397e]/2" : "bg-[#b9cd7a]/7"}`)}>
                <Image
                    source={
                        isWithdraw ? images.trHisWidraw : images.trHisDeposit
                    }
                    alt="Alternate 1"
                    size="xs"
                    width={5}
                    height={5}
                />
            </Center>
            <Box ml={3}>
                <Text fontSize="xs" style={tw.style("dark:text-[#ffffff]/59 text-[#000]/89 ")} fontWeight="400">Transfer to Charmeine</Text>
                <Text fontSize="sm" fontWeight={"700"}>$ {titleBottom} XLM</Text>
            </Box>
            <Spacer />
            <Box style={tw.style("min-w-10")}>
                <Text fontSize="xs" textAlign={"right"} style={tw.style(`${isWithdraw ? "text-[#e7397e] dark:text-[#e7397e]/39" : "dark:text-[#b9cd7a]/29 text-[#b9cd7a]"}`)}>{isWithdraw ? "Withdraw" : "Deposit"}</Text>
                <Text fontSize="xs" style={"dark:text-white "}>{contentBottom}</Text>
            </Box>
        </Flex>
    )
}
export default TransferHistory;