import React from "react";
import { Flex, TextArea, Text, Heading, VStack, Center, Button, Box } from "native-base";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import Reviews from "../reviews";
import images from "../../utils/constant/images";

const RateUsModal = ({ continueModal, ...props }) => {
    const onHandleRateUs = () => {
        continueModal(true);
        props.setShowModal(false);
    }

    return (
        <BasicModal  {...props}>
            <VStack space="3" style={tw.style("w-full")}>
                <Center >
                    <Heading style={tw.style("text-[#000]/89 ")} fontSize={19} fontWeight={400}>Rate Us</Heading>
                </Center>
                <Center>
                    <Text fontSize="sm" textAlign={"center"} px={30}
                        style={tw.style("text-[#6d6d6d]")}>We will be pleased to know your valuable opinion about our app
                    </Text>
                </Center>
                <Center>
                    <Box style={tw.style("py-3")}>
                        <Reviews />
                    </Box>
                </Center>
                <TextArea placeholder="Tell us more about your experience"
                    style={tw.style("text-gray-500 text-center")} fontSize={13} />
                <Flex direction="row" style={tw.style("pt-3")}>
                    <Button
                        variant={"outline"}
                        style={tw.style("grow mr-3 border border-gray-200 ")}
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
                                onHandleRateUs()
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Rate Us</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default RateUsModal;