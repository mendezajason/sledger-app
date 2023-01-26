import React from "react"
import { Flex, Text, Heading, Box, Image, Button } from "native-base";
import images from "../utils/constant/images";
import tw from "twrnc";
import Clipboard from "@react-native-clipboard/clipboard";

const MarketState = ({ isRaise, price, rating, styleAdd, ...props }) => {
    const copyToClipboard = () => {
        Clipboard.setString("GDNAJRWQEJFHKIUIEWHHHAS")
    }

    return (
        <Box rounded="lg" {...props} style={tw.style("border-b border-t border-gray-200 py-7")}>
            <Flex direction="row" justifyContent={"space-between"}>
                <Box mb={5}>
                    <Text fontSize="sm" style={tw.style("text-[#000]/45 dark:text-[#fff]/45 ")} >Asset Holders</Text>
                    <Text fontSize="md">1552839</Text>
                </Box>
                <Box >
                    <Text fontSize="sm" style={tw.style("text-[#000]/45  dark:text-[#fff]/45")}>Deposit | Withdraw</Text>
                    <Text fontSize="md" style={tw.style("font-semibold text-gray-700 dark:text-gray-300")}>Available</Text>
                </Box>
            </Flex>
            <Box >
                <Text fontSize="sm" style={tw.style("text-[#000]/45  dark:text-[#fff]/45")} >Asset Issuer</Text>
                <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                    <Text fontSize="sm" style={tw.style("text-gray-700  dark:text-gray-300")}>GDNAJRWQEJFHSAGDADGFHSDHAS</Text>
                    <Button
                        style={tw.style(" bg-[#6b5377] rounded-full")}
                        onPress={() => {
                            copyToClipboard();
                        }}
                        buttonStyle={tw.style("text-white")}
                    >
                        <Image
                            source={
                                images.CopyIcon
                            }
                            alt="Alternate Text"
                            size={4}
                        />
                    </Button>
                </Flex>
                <Flex mt={3} direction="row" justifyContent={"space-between"}>
                    <Box >
                        <Text fontSize="sm" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Type</Text>
                        <Text fontSize="md" fontWeight={500} style={tw.style("text-gray-700 dark:text-gray-300")}>Flat Mrgin</Text>
                    </Box>
                    <Box >
                        <Text fontSize="sm" style={tw.style("text-[#000]/45  dark:text-[#fff]/45")}>Anchared Asset</Text>
                        <Text fontSize="md" fontWeight={500} style={tw.style("text-gray-700 dark:text-gray-300")}>USD</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default MarketState;