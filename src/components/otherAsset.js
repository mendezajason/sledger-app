import React, { useState } from 'react';
import { Flex, Center, Image, Box, Text, Spacer, Checkbox } from 'native-base';
import images from '../utils/constant/images';
import tw from "twrnc";

const OtherAsset = ({ network, imgType, type, price, ...props }) => {
    const [isCheck, setCheck] = useState(false);

    return (
        <Flex direction="row" {...props} p={3} my={2} alignItems="center" {...props} style={tw.style("bg-gray-50 rounded-md")} >
            <Center bg="primary.400" p={3} style={tw.style(`rounded-md bg-white`)}>
                <Image
                    source={
                        !imgType ? images.Assets1 : images.Assets2
                    }
                    alt="Alternate 1"
                    size="xs"
                    width={5}
                    height={5}
                />
            </Center>
            <Box ml={3}>
                <Text fontSize="xs" style={tw.style("dark:text-gray-400")}>{type}</Text>
                <Text fontSize="md" fontWeight={500}> {network}</Text>
            </Box>
            <Spacer />
            <Box style={tw.style("min-w-10")}>
                <Checkbox style={tw.style(`${!isCheck ? "bg-transparent" : "bg-[#add16f]"} p-2 border border-gray-300 rounded-full `)} accessibilityLabel="This is a checkbox" onChange={() => { setCheck(!isCheck) }} />
            </Box>
        </Flex>
    )
}
export default OtherAsset;