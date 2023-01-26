import React, { useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, HStack, Box } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import InAppReview from 'react-native-in-app-review';
import Reviews from "../reviews";
import Star from "../star";
import { Input } from "@rneui/base";
import { Button as Button1 } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/Ionicons";

const SecretKeyModal = ({ ...props }) => {
    const [visible_pass, setVisible] = useState(true);
    const [isCorrect, setCorrect] = useState(true);

    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Heading style={tw.style("mt-2 text-[#000]/69 ")} fontSize={19} fontWeight={400}>Secret Key</Heading>
                <Box style={tw.style("mb-2 mt-2")} rounded="lg">
                    <Text fontSize="sm" style={tw.style("text-gray-600 pb-4")}>Enter Password</Text>
                    <Input
                        isInvalid
                        inputContainerStyle={tw.style(`border rounded-md ${isCorrect ? "bg-transparent" : "bg-[#6B2267]"} text-white px-0`)}
                        inputStyle={tw.style(`${isCorrect ? "text-gray-400" : "text-[#D73468]"} px-5 text-xs`)}
                        rightIcon={
                            <Button1 icon={<Icon name="eye" size={20} style={tw.style("dark:text-white text-gray-600 pr-1")} />}
                                onPress={() => setVisible(!visible_pass)}
                                buttonStyle={tw.style("bg-transparent p-0")}
                            />}   //text-[#722432]
                        // value="11111"
                        // placeholder='****'
                        secureTextEntry={visible_pass}
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
                            <Text fontSize="xs" style={tw.style("text-white")}>Proceed</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default SecretKeyModal;