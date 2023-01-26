import React, { useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import tw from "twrnc";
import { Flex, Box, Center, Heading, Spacer, Text, Input, Select, IconButton, ScrollView, Button } from 'native-base';
import Icon from "react-native-vector-icons/dist/Ionicons";
import images from '../../utils/constant/images';
import QRCode from 'react-native-qrcode-generator';
import BackButton from '../../components/basic/backButtonForSelOpt';
import { ThemeContext } from '../../utils/ThemeProvider';
import RequestModal from '../../components/modals/requestModal';
import Clipboard from '@react-native-clipboard/clipboard';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const RequestToken = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const [address, setAddress] = useState("GDNAJRWQKRYHH..CHSADGFHSDHAS");
    const [showRequestModal, setShowRequetModal] = useState(false);

    React.useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
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

    const copyToClipboard = () => {
        Clipboard.setString('GDNAJRWQKRYHH..CHSADGFHSDHAS')
    }

    return (
        <ScrollView>
            <Flex direction="column" space={8} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={10} px={6} style={tw.style("dark:bg-[#2B1867] bg-white ")}  >
                <Flex direction="row">
                    <BackButton />
                    {/* <Spacer />
                    <Button
                        style={tw.style("bg-[#4a4a4a] dark:bg-[#583f87] ")}
                        containerStyle={tw.style("rounded-lg bg-[#4a4a4a] ")}
                        onPress={() => {
                            console.log("skip");
                            navigation.navigate("portfolio");
                        }}
                        endIcon={<Icon name="chevron-forward" color="white" style={tw.style("text-white dark:text-white mt-1")} size={16} />}
                    >
                        <Text fontSize="xs" style={tw.style("text-white")}>Steller Address</Text>
                    </Button> */}
                </Flex>
                <Box py={5}>
                    <Heading fontSize={20} style={tw.style("dark:text-white")}>Receive Tokens</Heading>
                    <Text fontSize="md" style={tw.style("text-gray-300 dark:text-[#fff]/60")}>
                        Receiving tokens to any wallet became super fast and easy
                    </Text>
                </Box>
                <Center style={tw.style("flex pt-5")} >
                    <Box style={tw.style("p-4 bg-white rounded-xl")}>
                        <QRCode
                            value={address}
                            size={200}
                            bgColor='black'
                            fgColor='white'
                        />
                    </Box>
                    <Text fontSize="lg" style={tw.style("font-medium my-4 dark:text-white")}>
                        Your Wallet Account ID
                    </Text>
                    <Flex direction="row" alignItems={"center"}>
                        <Text fontSize="sm" style={tw.style("text-gray-600 bg-[#fcfcfc] dark:bg-[#7e7492] dark:text-white p-2 py-3 rounded-l-md my-4")}>
                            GDNAJRWQKRYHH..CHSADGFHSDHAS
                        </Text>
                        <Box style={tw.style("bg-[#fcfcfc] px-3 rounded-r-md py-1")} >
                            <IconButton size={9} style={tw.style("items-center bg-[#6b5377] dark:bg-[#37313b] rounded-full text-white")}
                                _icon={{ as: Icon, name: "copy", color: "white" }} onPress={() => copyToClipboard()} />
                        </Box>
                    </Flex>
                    <Text fontSize="xs" px={10} textAlign="center" style={tw.style("text-[#000]/30 dark:text-[#fff]/60")}>
                        Steller address or public key is used to identify
                        your account on the network. It can be safety
                        shared to receive funds.
                    </Text>
                </Center>
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
                            <Text fontSize="sm">Close</Text>
                        </Button>
                    </Box>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("grow bg-transparent rounded-md")} >
                        <Button
                            variant={"outline"}
                            style={tw.style("grow  rounded-lg")}
                            onPress={() => {
                                console.log("hello")
                            }}
                        >
                            <Text fontSize="sm" style={tw.style("text-white")}>Receive Money</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </Flex>
            <RequestModal showModal={showRequestModal} setShowModal={setShowRequetModal} />
        </ScrollView>
    )
}
export default RequestToken;

