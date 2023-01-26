import React from "react"
import { Flex, Text, Heading, Box, Center, Image } from "native-base";
import images from "../utils/constant/images";
import tw from "twrnc";
import PriceChart from "./charts/priceChart";

const MarketStatus = ({ isRaise, price, rating, styleAdd, ...props }) => {
    return (
        <Box rounded="lg" {...props}>
            <Text fontSize="md" style={tw.style("mb-4 font-semibold")}>MarketStatus</Text>
            <Flex direction="row" justifyContent={"space-between"}>
                <Box>
                    <Text fontSize="xs" style={tw.style("font-semibold")} >XLM Price</Text>
                    <Heading style={tw.style("text-xl mb-3")} >{price}</Heading>
                    <Flex direction="row">
                        <Image
                            source={
                                isRaise ? images.trHisWidraw : images.PriceRaiseIcon
                            }
                            alt="Alternate 1"
                            // size="xs"
                            width={6}
                            height={4}
                        />
                        <Text style={tw.style("text-[#b9cd7a] pl-2 text-base font-semibold")}>{rating}%</Text>
                    </Flex>
                </Box>
                <Box>
                    <Text fontSize="xs" style={tw.style("font-bold")}>24H Vol</Text>
                    <Text fontSize="md" style={tw.style("mb-2 font-semibold")}>200,243</Text>
                    <Text fontSize="xs" style={tw.style("font-bold")}>24H Vol</Text>
                    <Text fontSize="md" style={tw.style("font-semibold")}>200,243</Text>
                </Box>
                <Box>
                    <PriceChart />
                </Box>
            </Flex>
        </Box>
    )
}
export default MarketStatus;