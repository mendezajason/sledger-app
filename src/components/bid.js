import React from "react";
import { Flex, Text, Heading, Center, Image, Box } from "native-base";
import images from "../utils/constant/images";
import tw from "twrnc";
const Bid = ({ ...props }) => {
    return (
        <Flex {...props} direction="row" justifyContent={"space-between"} style={tw.style("pb-3 border-b border-gray-200")} alignItems="center">
            <Flex direction="row">
                <Image
                    source={images.NFTAvatar}
                    alt="Alternate Text"
                    width={10}
                    height={10}
                    mr={3}
                    ml={1}
                />
                <Box ml={3} >
                    <Text fontSize="sm" style={tw.style("text-gray-800 font-bold")}>KHALID SAIED</Text>
                    <Text fontSize="xs">29 MARCH 13:08:57</Text>
                </Box>
            </Flex>
            <Flex direction="row" alignItems="center">
                <Box p="2" mr={2} rounded="lg" style={tw.style("bg-[#739bee]")}>
                    <Image
                        source={images.ETHIcon}
                        alt="Alternate Text"
                        width={2}
                        height={3}
                    />
                </Box>
                <Text fontSize="xs" style={tw.style("text-gray-500")}>50,000 USD</Text>
            </Flex>
        </Flex>
    )
}
export default Bid;