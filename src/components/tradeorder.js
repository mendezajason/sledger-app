import React from 'react';
import { Flex, Center, Image, Box, Text, Button } from 'native-base';
import images from '../utils/constant/images';
import tw from "twrnc";

const TradeOrder = ({ isSell, usd, xlm, total, setShowModal, ...props }) => {
    return (
        <Box style={tw.style("mb-4")}>
            <Text fontSize="sm"
                style={tw.style(`text-center p-2 rounded-md 
                ${!isSell ? "bg-[#b9cd7a]/10  text-[#b9cd7a] dark:bg-[#b9cd7a]/20" : "bg-[#f98fab]/7 text-[#ec3868] dark:bg-[#f98fab]/21 "}`)}>
                {isSell ? "Selling" : "Buying"}
            </Text>
            <Flex direction="row" p={3} alignItems="center" justifyContent={"space-between"}>
                <Box>
                    <Text fontSize="xs" style={tw.style("text-gray-400")} >Price USD</Text>
                    <Text fontSize="sm" style={tw.style("font-semibold")}>{usd}</Text>
                </Box>
                <Box>
                    <Text fontSize="xs" style={tw.style("text-gray-400")}>Amount XLM</Text>
                    <Text fontSize="sm" style={tw.style("font-semibold")}>{xlm}</Text>
                </Box>
                <Box>
                    <Text fontSize="xs" style={tw.style("text-gray-400")}>Total USD</Text>
                    <Text fontSize="sm" style={tw.style("font-semibold")}>{total}</Text>
                </Box>
            </Flex>
            <Flex direction="row">
                <Button
                    variant={"outline"}
                    style={tw.style(" grow mr-3  border border-gray-200 ")}
                    onPress={() => {
                        console.log('cancel')
                    }}
                    buttonStyle={tw.style("text-black")}
                >
                    <Text fontSize="xs" style={tw.style("font-semibold")}>Cancel</Text>
                </Button>
                <Box style={tw.style(" grow bg-[#b9cd7a] rounded-md")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" grow text-white")}
                        onPress={() => {
                            setShowModal(true);
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="xs" style={tw.style("text-white font-semibold")}>Edit</Text>
                    </Button>
                </Box>
            </Flex>
        </Box>
    )
}
export default TradeOrder;