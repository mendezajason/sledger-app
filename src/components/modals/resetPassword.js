import React from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";

const ResetModal = ({ ...props }) => {
    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Heading style={tw.style("mt-2 text-[#000]/69 ")} fontSize={19} fontWeight={400}>Reset Password</Heading>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>Current Password</Text>
                    <Input p={2} mt={2}
                        placeholder="Short alias or 56 character string"
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                        secureTextEntry={true}
                    />
                </Box>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>New Password</Text>
                    <Input p={2} mt={2}
                        // value={"aaaaaa"}
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-500 text-sm px-5 py-1`)}
                        style={tw.style("text-gray-400")}
                        secureTextEntry={true}
                    />
                </Box>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>Confirm New Password</Text>
                    <Input p={2} mt={2}
                        // value={"aaaaaa"}
                        inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                        inputStyle={tw.style(`text-gray-500 text-sm px-5 py-1`)}
                        style={tw.style("text-gray-400")}
                        secureTextEntry={true}
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
                        <Text fontSize="xs" style={tw.style("text-gray-600")}>Close</Text>
                    </Button>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" rounded-md")}
                            onPress={() => {
                                props.setShowModal(false);
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Reset Password</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default ResetModal;