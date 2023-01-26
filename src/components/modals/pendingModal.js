import React from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import InAppReview from 'react-native-in-app-review';
import Reviews from "../reviews";
import Star from "../star";

const PendingModal = ({ price, ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Center
                    mt={2}
                >
                    <Image
                        source={
                            images.SentMark
                        }
                        alt="Alternate Text"
                        size="sm"
                    />
                    <Text fontSize="xs" style={tw.style("absolute right-0 p-2 px-4 bg-[#e2d627]/2 rounded-md text-[#e2d627]")}>Pending</Text>
                </Center>
                <Heading style={tw.style("text-center mt-2 text-gray-900")} fontSize="3xl" fontWeight={700}>{price}</Heading>
                <Text fontSize="md" style={tw.style("text-[#cfcfcf] text-center mb-2")}>XLM</Text>
                <HStack space="3" alignItems="center" style={tw.style("mb-2")}>
                    <Box style={tw.style("w-[48%]")} rounded="lg">
                        <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Receive From</Text>
                        <Input p={2} mt={2}
                            InputLeftElement={<Image
                                source={
                                    images.Avarta
                                }
                                alt="Alternate Text"
                                size={7}
                                style={tw.style("ml-2")}
                            />}
                            placeholder="Enter Steller Address"
                            inputContainerStyle={tw.style(`border rounded-md border-gray-200 bg-transparent text-white px-0`)}
                            inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                            value="Rania Ahmed"
                            style={tw.style("text-gray-800 bg-gray-100")}
                            backgroundColor={'#f3f4f6'}
                            borderColor={'#f3f4f6'}
                        />
                    </Box>
                    <Box style={tw.style("w-[48%]")} rounded="lg">
                        <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Date</Text>
                        <Input p={2} mt={2}
                            placeholder="Enter Steller Address"
                            inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                            inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                            value=" 22th, April 2021"
                            style={tw.style("text-gray-800 bg-gray-100")}
                            borderColor={'#f3f4f6'}
                        />
                    </Box>
                </HStack>
                <HStack space="3" alignItems="center" style={tw.style("mb-2")}>
                    <Box style={tw.style("w-[48%]")} rounded="lg">
                        <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Est,Value USD</Text>
                        <Input p={2} mt={2}
                            placeholder="Enter Steller Address"
                            inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                            inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                            value="$ 1029"
                            style={tw.style("text-gray-800 bg-gray-100")}
                            borderColor={'#f3f4f6'}
                        />
                    </Box>
                    <Box style={tw.style("w-[48%]")} rounded="lg">
                        <Text fontSize="sm" style={tw.style("text-[#474461] font-semibold")} >Available until</Text>
                        <Input p={2} mt={2}
                            placeholder="Enter Steller Address"
                            inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                            inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                            value=" 4th, June 2021"
                            style={tw.style("text-gray-800 bg-gray-100")}
                            borderColor={'#f3f4f6'}
                        />
                    </Box>
                </HStack>
                <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Claim Conditions</Text>
                <Text fontSize="xs" style={tw.style("bg-[#6b6b6b] p-4 rounded-md text-white text-sm mb-2 text-justify")}>You can claim this payment within a time span set by the sender Once claimed, the tokens will be credited to your balance</Text>
                <Flex direction="row">
                    <Button
                        variant={"outline"}
                        style={tw.style(" grow mr-3  border border-gray-200 ")}
                        onPress={() => {
                            props.setShowModal(false);
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="xs" style={tw.style("text-gray-800 font-semibold")}>Hide</Text>
                    </Button>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg mr-3")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" rounded-md")}
                            onPress={() => {
                                console.log('hello')
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Network Explorer</Text>
                        </Button>
                    </ImageBackground>
                    <Box style={tw.style("grow bg-[#b9cd7a] rounded-md")}>
                        <Button
                            variant={"outline"}
                            style={tw.style("border border-gray-200 ")}
                            onPress={() => {
                                props.setShowModal(false);
                            }}
                            buttonStyle={tw.style("bg-[#b9cd7a] ")}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Claim</Text>
                        </Button>
                    </Box>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default PendingModal;