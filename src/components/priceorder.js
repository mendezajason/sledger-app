import React from 'react';
import { Flex, Center, Image, Box, Text, Spacer } from 'native-base';
import images from '../utils/constant/images';
import tw from "twrnc";

const PriceOrder = ({ usd, xlm, total, ...props }) => {
    return (
        <Flex style={tw.style("border-b border-b-gray-200 dark:border-[#fff]/21")} direction="row" {...props} py={3} alignItems="center" {...props} justifyContent={"space-between"}>
            <Box>
                <Text fontSize="sm" style={tw.style("text-[#000]/30 dark:text-[#fff]/30")} >Price USD</Text>
                <Text fontSize="sm" style={tw.style("font-semibold")}>{usd}</Text>
            </Box>
            <Box>
                <Text fontSize="sm" style={tw.style("text-[#000]/30 dark:text-[#fff]/30")} >Amount XLM</Text>
                <Text fontSize="sm" style={tw.style("font-semibold")}>{xlm}</Text>
            </Box>
            <Box>
                <Text fontSize="sm" style={tw.style("text-[#000]/30 dark:text-[#fff]/30")} >Total USD</Text>
                <Text fontSize="sm" style={tw.style("font-semibold")}>{total}</Text>
            </Box>
        </Flex>
    )
}
export default PriceOrder;