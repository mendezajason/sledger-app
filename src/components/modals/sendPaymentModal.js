import React, { useContext, useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, TextArea, Input, Select, Box, ScrollView } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { Tab, TabView, } from '@rneui/themed';
import { ScreenHeight } from "@rneui/base";
import { ThemeContext } from "../../utils/ThemeProvider";

const SendPayment = ({ ...props }) => {
    const [index, setIndex] = useState(0)
    const { isToggle, toggleThme } = useContext(ThemeContext);

    return (
        <BasicModal {...props}>
            <VStack space="3">
                <Heading style={tw.style("mt-2 text-[#000]/69 ")} fontSize={19} fontWeight={400}>Send Payment</Heading>
                <Box style={tw.style("px-4")} >
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>Recepient</Text>
                    <Input
                        placeholder="Enter Amount"
                        inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                        inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                        leftElement={<Image
                            source={
                                images.Avarta1
                            }
                            alt="Alternate 1"
                            size="xs"
                            width={9}
                            height={9}
                            style={tw.style("ml-3")}
                        />}
                        rightElement={
                            <Button style={tw.style("p-0 bg-transparent")} onPress={() => { props.setShowModal(false); }}><Text style={tw.style("mr-4 text-[#8522cc]")}>Change</Text></Button>
                        }
                        value={"Rania Ahmed"}
                    />
                    <Text fontSize="sm" style={tw.style("text-gray-600")}>Amount</Text>
                    <Input
                        placeholder="Enter Amount"
                        inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                        inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}

                        rightElement={<Text style={tw.style("mr-4 text-gray-400")}>XLM Available</Text>}
                    />
                    <Text fontSize="sm" style={tw.style("text-gray-600")} my={3}>Currency</Text>
                    <Select
                        placeholder="Select Currency"
                        minWidth="64"
                    >
                        <Select.Item label="JavaScript" value="JavaScript" />
                        <Select.Item label="TypeScript" value="TypeScript" />
                        <Select.Item label="C" value="c" />
                        <Select.Item label="Python" value="Python" />
                        <Select.Item label="Java" value="Java" />
                    </Select>
                    <Text fontSize="sm" style={tw.style("text-gray-600")} my={3}>Memo Message</Text>
                    <TextArea mb={4} placeholder="Enter Your Message" />
                    <Flex direction="row" style={tw.style("")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" grow mr-3 border border-gray-200 ")}
                            onPress={() => {
                                console.log('hello')
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
                                    console.log('hello')
                                }}
                            >
                                <Text fontSize="xs" style={tw.style("text-white")}>Send Money</Text>
                            </Button>
                        </ImageBackground>
                    </Flex>
                </Box>
            </VStack>
        </BasicModal >
    )
}
export default SendPayment;