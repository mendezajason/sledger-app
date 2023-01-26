import React from "react";
import { Button, Text, Heading, VStack, Center, Image, Flex } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";

const ReviewDone = ({ ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="2">
                <Center style={tw.style("py-4")}>
                    <Image
                        source={
                            images.BigStar
                        }
                        alt="Alternate Text"
                        size="md"
                    />
                </Center>
                <Center  >
                    <Heading style={tw.style("mt-2 text-[#000]/89 ")} fontSize={19} fontWeight={600}>Review Done!</Heading>
                </Center>
                <Text fontSize="sm" textAlign={"center"} px={30} style={tw.style("text-[#9a9a9a] pb-5")}>Thanks for letting us know how you think about us so we can imporve!</Text>
                <Flex style={tw.style("px-3")}>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" rounded-md")}
                            onPress={() => {
                                props.setShowModal(false);
                            }}
                        >
                            <Text fontSize="15px" style={tw.style("text-white font-semibold")}>Done</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default ReviewDone;