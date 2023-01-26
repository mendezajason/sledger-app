import React from 'react';
import { Flex, Center, Image, Box, Text, Spacer, Checkbox, Button } from 'native-base';
import { useState } from 'react';
import images from '../utils/constant/images';
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";

const Asset = ({ price, ...props }) => {
    const [isCheck, setCheck] = useState(false);

    return (
        <Flex direction="row" {...props} p={3} my={2} alignItems="center" {...props} style={tw.style("bg-gray-50 rounded-md")} >
            <Center bg="primary.400" p={3} style={tw.style(`rounded-md bg-white`)}>
                <Image
                    source={
                        images.Assets1
                    }
                    alt="Alternate 1"
                    size="xs"
                    width={5}
                    height={5}
                />
            </Center>
            <Box ml={3}>
                    <Text fontSize="xs" style={tw.style("text-[#000]/80")}>Lumen Steller.org</Text>
                    <Text fontSize="md" fontWeight={500}> {price}</Text>
            </Box>
            <Spacer />
            <Box style={tw.style("min-w-10")}>
                <Checkbox style={tw.style(`${!isCheck ? "bg-transparent" : "bg-[#add16f]"} p-2 border border-gray-300 rounded-full `)} accessibilityLabel="This is a checkbox" onChange={() => { setCheck(!isCheck) }} />
            </Box>
        </Flex>
    )
}
export default Asset;