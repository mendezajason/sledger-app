import React from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box, extendTheme } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

const SentModal = ({ price, ...props }) => {
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
                    <Text fontSize="xs" style={tw.style("absolute right-0 py-2 px-4 bg-[#f98fab]/2 rounded-md text-[#ec3868]")}>Sent</Text>
                </Center>
                <Heading style={tw.style("text-center text-gray-900 mt-2")} fontSize="3xl" fontWeight={700}>{price}</Heading>
                <Text fontSize="md" style={tw.style("text-[#cfcfcf] text-center mb-2")} fontWeight={500}>XLM</Text>
                <HStack space="3" alignItems="center" style={tw.style("mb-2")}>
                    <Box style={tw.style("w-[48%]")} rounded="lg">
                        <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Sent to</Text>
                        <Input p={2} mt={2}
                            InputLeftElement={
                                <Image
                                    source={
                                        images.Avarta
                                    }
                                    alt="Alternate Text"
                                    size={7}
                                    style={tw.style("ml-2")}
                                />}
                            placeholder="Input send to Address"
                            inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1 text-gray-600`)}
                            style={tw.style("text-gray-800 bg-gray-100")}
                            backgroundColor={'#f3f4f6'}
                            borderColor={'#f3f4f6'}
                            value="Rania Ahmed"
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
                <Box style={tw.style("mb-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Public Key</Text>
                    <Input p={2} mt={2}
                        placeholder="Enter Steller Address"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        value="GDNAJRWQKRYH..NCHSADGFHSDHASURIWOQRI"
                        style={tw.style("text-gray-800 bg-gray-100")}
                        borderColor={'#f3f4f6'}
                    />
                </Box>
                <Box style={tw.style("mb-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-800 font-semibold")}>Transaction Hash</Text>
                    <Input p={2} mt={2}
                        placeholder="Enter Steller Address"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        value="GDNAJRWQKRYH..NCHSADGFHSDHASURIWOQRI"
                        style={tw.style("text-gray-800 bg-gray-100")}
                        borderColor={'#f3f4f6'}
                    />
                </Box>
                <Flex direction="row">
                    <Button
                        variant={"outline"}
                        colorScheme="primary"
                        style={tw.style("grow mr-3 rounded-md text-gray-600")}
                        onPress={() => {
                            props.setShowModal(false);
                        }}
                        buttonStyle={tw.style("text-black ")}
                    >
                        <Text fontSize="xs" style={tw.style("text-gray-800 font-semibold")}>Close</Text>
                    </Button>
                    <ImageBackground source={images.btnBack} resizeMode="cover" style={tw.style("grow")} imageStyle={{ borderRadius: 6 }}>
                        <Button
                            variant={"outline"}
                            style={tw.style("border-0")}
                            onPress={() => {
                                console.log('hello')
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Network Explorer</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default SentModal;