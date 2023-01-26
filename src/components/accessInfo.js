import React from 'react';
import { Box, IconButton, Flex, Text, Button, Spacer, Image } from 'native-base';
import Icon from "react-native-vector-icons/dist/Feather";
import Icon1 from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { ImageBackground } from "react-native";
import images from '../utils/constant/images';
import tw from "twrnc";
const AccessInfo = ({ type, price, ...props }) => {
    return (
        <Box {...props} m={3} p={3} style={tw.style("bg-gray-50 dark:bg-[#4f3f6f] rounded-md")}  >
            <Flex direction="row" my={1} alignItems="center"   >
                <Flex direction="row" p={1} style={tw.style(`rounded-md`)} alignItems="center">
                    <Image
                        source={
                            images.Chrome
                        }
                        alt="Alternate 1"
                        size="xs"
                        width={8}
                        height={8}
                    />
                    <Text ml={3} fontSize="xs">Gooogle Chrome</Text>
                </Flex>
                <Spacer />
                <Text fontSize="sm" style={tw.style("text-[#b9cd7a]")}>Success</Text>
            </Flex>
            <Box mb={3} style={tw.style("bg-white p-3 rounded-md mb-3")} >
                <Text fontSize="xs" style={tw.style("text-gray-800")}>IP Address</Text>
                <Text fontSize="sm" style={tw.style("text-gray-800")}>Cluj Napoca, RO  82 . 7968 . 20</Text>
            </Box>
            <Box mb={3} style={tw.style("bg-white p-3 rounded-md mb-3")} >
                <Text fontSize="xs" style={tw.style("text-gray-800")}>Date</Text>
                <Text fontSize="sm" style={tw.style("text-gray-800")}>19th Aug 2021</Text>
            </Box>
        </Box>
    )
}
export default AccessInfo;