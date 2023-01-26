import React, { useContext } from 'react';
import { Box, IconButton, Flex, Text, Button, Spacer, Image } from 'native-base';
import Icon from "react-native-vector-icons/dist/Feather";
import Icon1 from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { ImageBackground } from "react-native";
import images from '../utils/constant/images';
import tw from "twrnc";
import { ThemeContext } from '../utils/ThemeProvider';

const ContactInfo = ({ type, price, handleDel, handleEdit, handleRec, handleSend, itemIndex, setSelItem, ...props }) => {
    const { isToggle, toggleTheme } = useContext(ThemeContext);

    return (
        <Box {...props} mx={3} p={3} style={tw.style("bg-gray-50 dark:bg-[#7e7492] rounded-md")}  >
            <Flex direction="row" mb={2} alignItems="center"   >
                <Flex direction="row" p={3} style={tw.style(`rounded-md`)} alignItems="center">
                    <Image
                        source={
                            images.Avarta1
                        }
                        alt="Alternate 1"
                        size="xs"
                        width={9}
                        height={9}
                    />
                    <Text ml={3} fontSize="xs">Rania Ahmed</Text>
                </Flex>
                <Spacer />
                <Flex direction="row">
                    <IconButton size={9} style={tw.style("items-center mr-3 bg-[#ec3868] rounded-md text-white")}
                        _icon={{ as: Icon, name: "trash", color: "white" }}
                        onPress={() => { setSelItem(itemIndex); handleDel(true) }}
                    />
                    <IconButton size={9} style={tw.style("items-center bg-transparent border border-gray-300 rounded-md text-black")}
                        onPress={() => { handleEdit(true) }}
                        _icon={{ as: Icon1, name: "pencil", color: isToggle ? "black" : "white" }}
                    />
                </Flex>
            </Flex>
            <Box style={tw.style("bg-white p-3 rounded-md mb-3")}>
                <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                    <Box>
                        <Text fontSize="xs" style={tw.style("text-gray-300")}>Stellar Address</Text>
                        <Text fontSize="xs" style={tw.style("text-black")}>GDNAJRWQKRY..HBSANCHSADGFHSDHAS</Text>
                    </Box>
                    <IconButton size={9} style={tw.style("items-center bg-[#6b5377] rounded-full text-white")} _icon={{ as: Icon, name: "copy", color: "white" }} />
                </Flex>
            </Box>
            <Flex direction="row" style={tw.style("")}>
                <Box style={tw.style("grow bg-[#b9cd7a] mr-3 rounded-md ")}>
                    <Button
                        variant={"outline"}
                        style={tw.style("grow border-0")}
                        onPress={() => {
                            handleRec(true)
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="xs" style={tw.style("text-white")}>Receive</Text>
                    </Button>
                </Box>
                <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" rounded-md border-0")}
                        onPress={() => {
                            handleSend(true)
                        }}
                    >
                        <Text fontSize="xs" style={tw.style("text-white")}>Send</Text>
                    </Button>
                </ImageBackground>
            </Flex>
        </Box>
    )
}
export default ContactInfo;