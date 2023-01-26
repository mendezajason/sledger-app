import React, { useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import tw from "twrnc";
import { Flex, Box, Center, Heading, Spacer, Text, Input, Select, TextArea, ScrollView, Button } from 'native-base';
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../../utils/constant/images';
import BackButton from '../../components/basic/backButtonForSelOpt';
import { ThemeContext } from '../../utils/ThemeProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SendToken = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState("GDNAJRWQKRYHH..CHSADGFHSDHAS");

    React.useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    })

    const goBack = () => {
        navigation.goBack();
        navigation.getParent().setOptions({
            tabBarStyle: {
                display: "flex",
                backgroundColor: "#3d3d3d",
                height: 85,
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 10
            }
        });
    }

    return (
        <ScrollView>
            <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={10} px={6} style={tw.style("dark:bg-[#2B1867] bg-white ")}  >
                <Flex direction="row">
                    <BackButton />
                </Flex>
                <Box py={5}>
                    <Heading fontSize={20} style={tw.style("dark:text-gray-200")}>Send Tokens</Heading>
                    <Text fontSize="md" style={tw.style("text-gray-300 dark:text-[#fff]/60")}>
                        Sending tokens to any wallet became super fast and easy
                    </Text>
                </Box>
                <Text fontSize="md" style={tw.style("dark:text-white text-gray-500")}>Recepient</Text>
                <Input p={2} mt={2}
                    placeholder="Enter Steller Address"
                    inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                    inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                    // value="Stellar or Federation Address"
                    style={tw.style("dark:text-white text-gray-500")}
                    rightElement={<Text fontSize="xs" style={tw.style("mr-3 text-xs dark:text-white text-gray-500")}>XLM</Text>}
                />
                <Text fontSize="md" mt={2} style={tw.style("text-gray-500 dark:text-gray-200")}>Amount</Text>
                <Input p={2} mt={2}
                    placeholder="Enter Steller Address"
                    inputContainerStyle={tw.style(`border rounded-md border-gray-200  bg-transparent text-white px-0`)}
                    inputStyle={tw.style(`text-gray-300 text-xs px-5 py-1`)}
                    // value="Enter Amount"
                    style={tw.style("dark:text-white text-gray-500")}
                    rightElement={<Text fontSize="xs" style={tw.style("mr-3 text-xs dark:text-white text-gray-500")}>XLM Available</Text>}
                />
                <Text fontSize="md" style={tw.style("mb-2 text-gray-500 dark:text-gray-200")} mt={3} >Currency</Text>
                <Select
                    placeholder="Limit"
                    minWidth="64"
                    style={tw.style("dark:text-white dark:bg-transparent dark:border-white")}
                    placeholderTextColor={tw.style("text-gray-600 dark:text-gray-200")}
                >
                    <Select.Item label="JavaScript" value="JavaScript" />
                    <Select.Item label="TypeScript" value="TypeScript" />
                    <Select.Item label="C" value="c" />
                    <Select.Item label="Python" value="Python" />
                    <Select.Item label="Java" value="Java" />
                </Select>
                <Text fontSize="md" style={tw.style("mb-2 dark:text-white text-gray-500")} mt={3}>Memo Message</Text>
                <TextArea placeholder="Enter Your message" style={tw.style("dark:text-white")} />
                <Flex direction="row" style={tw.style("mt-5")}>
                    <Box style={tw.style("grow dark:bg-[#7e7492] bg-transparent")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" grow mr-3  border border-gray-300 ")}
                            onPress={() => {
                                goBack()
                            }}
                            buttonStyle={tw.style("text-black")}
                        >
                            <Text fontSize="xs" style={tw.style("text-gray-400")}>Close</Text>
                        </Button>
                    </Box>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("grow bg-transparent rounded-md")} >
                        <Button
                            variant={"outline"}
                            style={tw.style("grow  rounded-lg")}
                            onPress={() => {
                                navigation.navigate("requestToken")
                            }}
                        >
                            <Text fontSize="xs" style={tw.style("text-white")}>Send Token</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </Flex>
        </ScrollView>
    )
}
export default SendToken;

