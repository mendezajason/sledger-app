import React from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";

const RequestModal = ({ ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Heading style={tw.style("mt-2 text-gray-500")} fontSize={16} fontWeight={400}>Request Money</Heading>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-500")}>Steller Address</Text>
                    <Input p={2} mt={2}
                        placeholder="Short alias or 56 character string"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200 bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        rounded={"md"}
                        placeholderTextColor={"#8d93a5"}
                    />
                </Box>
                <Box style={tw.style("mb-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-500")}>Amount</Text>
                    <Input p={2} mt={2}
                        placeholder="Enter Amount"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200 bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        rounded={"md"}
                        rightElement={
                            <Text fontSize={"xs"} mr={3} style={tw.style("text-gray-500")}>XLM Available</Text>}
                    />
                </Box>
                <Flex direction="row" style={tw.style("")}>
                    <Button
                        colorScheme="primary"
                        style={tw.style(" grow mr-3 bg-transparent border border-gray-200 ")}
                        onPress={() => {
                            props.setShowModal(false);
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="xs" style={tw.style("text-gray-600")}>Cancel</Text>
                    </Button>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("grow rounded-lg")}>
                        <Button
                            style={tw.style(" bg-transparent rounded-md")}
                            onPress={() => {
                                props.setShowModal(false);
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Request Money</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default RequestModal;