import React from "react"
import { Flex, Text, Heading, Box, Center, Image, Button } from "native-base";
import images from "../utils/constant/images";
import tw from "twrnc";
import Star from "./star";
import UnfildStar from "./unfildStar";

const Balance = ({ isUSD, price, styleAdd, setShowModal, ...props }) => {
    return (
        <Button
            variant={"outline"}
            style={tw.style("rounded-md border-0 w-[48%] bg-[#fdfdfd] dark:bg-[#49396b]")}
            onPress={() => {
                setShowModal(true)
            }}
        >
            <Flex direction="row" {...props} style={{ ...tw.style("py-1"),}}>
                <Center style={tw.style("pr-4")} >
                    <Box
                        style={tw.style("bg-[#484d6d] dark:bg-[#1e223d] p-3")}
                    >
                        <Image
                            source={
                                !isUSD ? images.LumesIcon : images.DollarIcon
                            }
                            alt="Alternate Text"
                            size={5}
                        />
                    </Box>
                </Center>
                <Box>
                    <Text fontSize="xs">Balance</Text>
                    <Heading fontSize={"xl"}>{price}</Heading>
                    <Text style={tw.style("text-gray-400")} fontSize="9px">{isUSD ? "USDCoin center.io" : "Lumen Steller.org"}</Text>
                </Box>
            </Flex>
        </Button>
    )
}
export default Balance;