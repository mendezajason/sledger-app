import React, { useContext, useState } from "react";
import { Button, Flex, Text, Heading, VStack, Center, Image, FormControl, Input, Select, Box, ScrollView } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { Tab, TabView, } from '@rneui/themed';
import { ScreenHeight } from "@rneui/base";
import { ThemeContext } from "../../utils/ThemeProvider";
import { TouchableOpacity } from "react-native-gesture-handler";

const EditSellOfferModal = ({ navigation, ...props }) => {
    const [index, setIndex] = useState(0)
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [totalAmount, setTotalAmount] = useState(40592.93);
    const [amount, setAmount] = useState(40592.93)

    const setSendAmount = (perc) => {
        setAmount((totalAmount * perc).toFixed(2))
    }

    return (
        <BasicModal {...props}>
            <VStack space="1">
                <Heading style={tw.style("text-center text-gray-700")} fontSize={15} fontWeight={600} >Edit Sell Offer</Heading>
                <Text fontSize="sm" style={tw.style("text-center text-[#c7c7c7]")} >Available</Text>
                <Heading style={tw.style("text-center text-gray-900")} fontSize={30} fontWeight={900} >9482.37</Heading>
                <Text fontSize="sm" style={tw.style("mb-2 mt-2 text-[#474461]")}>Price</Text>
                <Input
                    placeholder="Enter Amount"
                    inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                    inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                    defaultValue="0.5423214"
                    style={tw.style("text-gray-400 text-sm")}
                    rightElement={<Text style={tw.style("mr-4 text-gray-400")}>XLM</Text>}
                />
                <Text fontSize="sm" style={tw.style("mb-2 mt-2 text-[#474461]")}>Amount</Text>
                <Input
                    placeholder="Enter Amount"
                    inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                    inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                    style={tw.style("text-gray-400 text-sm")}
                    defaultValue={amount.toString()}
                    rightElement={<Text style={tw.style("mr-4 text-gray-400")}>Stellar</Text>}
                />
                <Flex direction="row" style={tw.style("mt-4")}>
                    <Button style={tw.style("bg-[#c6c6c6]/7 mr-3 px-3 grow")} onPress={() => setSendAmount(0.25)}>
                        <Text fontSize="xs" style={tw.style("text-gray-600 text-center")}>25%</Text>
                    </Button>
                    <Button style={tw.style("bg-[#c6c6c6]/7 mr-3 px-3 grow")} onPress={() => setSendAmount(0.5)}>
                        <Text fontSize="xs" style={tw.style("text-gray-600 text-center")}>50%</Text>
                    </Button>
                    <Button style={tw.style("bg-[#c6c6c6]/7 mr-3 px-3 grow")} onPress={() => setSendAmount(0.75)}>
                        <Text fontSize="xs" style={tw.style("text-gray-600 text-center")}>75%</Text>
                    </Button>
                    <Button style={tw.style("bg-[#c6c6c6]/7 mr-3 px-3 grow")} onPress={() => setSendAmount(1)}>
                        <Text fontSize="xs" style={tw.style("text-gray-600 text-center")}>100%</Text>
                    </Button>
                </Flex>
                <Text fontSize="sm" style={tw.style("mb-2 mt-2 text-[#474461]")}>Total</Text>
                <Input
                    placeholder="Enter Amount"
                    inputContainerStyle={tw.style(`border  border-r-0 rounded-md border-gray-200  bg-transparent text-white `)}
                    inputStyle={tw.style(`text-gray-300 text-xs grow border-r-0 `)}
                    style={tw.style("text-gray-400 text-sm")}
                    defaultValue={totalAmount.toString()}
                    rightElement={<Text style={tw.style("mr-4 text-gray-400")}>XLM</Text>}
                />
                <ImageBackground source={images.btnBack} imageStyle={{ borderRadius: 6 }} resizeMode="cover" style={tw.style("mt-3")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" ")}
                        onPress={() => {
                            navigation.navigate("TradeCoin")
                        }}
                    >
                        <Text fontSize="xs" style={tw.style("text-white")}>Sell Stellar</Text>
                    </Button>
                </ImageBackground>
            </VStack>
        </BasicModal>
    )
}
export default EditSellOfferModal;