import React, { useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import InAppReview from 'react-native-in-app-review';
import Reviews from "../reviews";
import Star from "../star";
const EditContactModal = ({ ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Text fontSize="sm" style={tw.style("text-gray-600")}>Edit Contact</Text>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>Amount</Text>
                    <Input p={2} mt={2}
                        placeholder="Enter Public Key or Federation Address"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                    />
                </Box>
                <Box style={tw.style("mb-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>Contact Name</Text>
                    <Input p={2} mt={2}
                        placeholder="Enter User Name"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        rightElement={<Text fontSize={"xs"} mr={3} style={tw.style("text-gray-600")}>XLM Available</Text>}
                    />
                </Box>
                <Flex direction="row" style={tw.style("")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" grow mr-3  border border-gray-200  ")}
                        onPress={() => {
                            props.setShowModal(false);
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="xs" style={tw.style("text-black")}>Cancel</Text>
                    </Button>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" rounded-md")}
                            onPress={() => {
                                props.setShowModal(false);
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Save Changes</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default EditContactModal;