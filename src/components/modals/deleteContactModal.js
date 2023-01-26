import React, { useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import InAppReview from 'react-native-in-app-review';
import Reviews from "../reviews";
import Star from "../star";

const DeleteContactModal = ({ ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Text fontSize="sm" style={tw.style("text-black text-center")}>Delete Contact</Text>
                <Text fontSize="sm" px={9} style={tw.style("mt-2 text-gray-300 text-center")}>
                    Are you sure you want to delete this contact
                    permanently saved data will be removed &
                    can't be restored
                </Text>
                <Flex direction="row" style={tw.style("mt-3")}>
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
                    <Box style={tw.style(" grow mr-3 bg-[#ec3868] rounded-md")} >
                        <Button
                            variant={"outline"}
                            style={tw.style("border-0")}
                            onPress={() => {
                                props.deleteItem();
                                props.setShowModal(false);
                            }}
                            buttonStyle={tw.style("text-black")}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Yes, Please</Text>
                        </Button>
                    </Box>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default DeleteContactModal;