import tw from "twrnc";
import { Box, Flex, Center, ScrollView } from 'native-base';
import React, { useContext, useState } from 'react';
import { Dimensions, ImageBackground, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/dist/Ionicons";
import { ThemeContext } from "../../utils/ThemeProvider";
import images from "../../utils/constant/images";
import { TouchableOpacity } from "react-native-gesture-handler";
import NFTItem from "../../components/NFTItem";

const data = [
    1, 1, 1, 1, 1, 1
]

const NFTMarket = ({ navigation }) => {
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [nftData, setNFTData] = useState(data);

    return (
        <Box>
            <Flex direction="row" >
                <Flex direction="row" style={tw.style("p-2 px-4 grow")}>
                    <Center p="2" style={tw.style("border border-gray-200 rounded-l-md border-r-0")}>
                        <Icon name="search" size={20} style={tw.style(`${isToggle ? "text-black" : "text-white"} `)} />
                    </Center>
                    <TextInput placeholder="Who are you searching for .." placeholderTextColor={isToggle ? "#000" : "#fff"} style={tw.style("dark:text-white border border-gray-200 rounded-r-md border-l-0 grow")} />
                </Flex>
                <Box mt={2} mr={3}>
                    <TouchableOpacity>
                        <ImageBackground source={images.LoginIcon}>
                            <Box p="6" rounded="lg">
                            </Box>
                        </ImageBackground>
                    </TouchableOpacity>
                </Box>
            </Flex>
            <ScrollView px={3} py={3}>
                {
                    nftData && nftData.map((item, index) => <NFTItem key={index} id={index} navigation={navigation} />)
                }
                <Box style={tw.style("py-26")}></Box>
            </ScrollView>
        </Box>
    )
}
export default NFTMarket;