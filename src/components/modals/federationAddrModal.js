import React from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import InAppReview from 'react-native-in-app-review';
import Reviews from "../reviews";
import Star from "../star";
const EditFedrationModal = ({ ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Heading style={tw.style("mt-2 text-[#000]/59 ")} fontSize={19} fontWeight={400}>Edit Federation Address</Heading>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-[#000]/59")}>Federation Address</Text>
                    <Input p={2} mt={2}
                        placeholder="Short alias or 56 character string"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        placeholderTextColor="#aaa"
                    />
                </Box>
                <Flex direction="row" style={tw.style("")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" grow mr-3 border border-gray-200 ")}
                        onPress={() => {
                            props.setShowModal(false);
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="xs" style={tw.style("text-black")}>Close</Text>
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
export default EditFedrationModal;