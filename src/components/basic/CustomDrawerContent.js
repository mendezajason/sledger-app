import React, { useEffect, useState, useContext } from "react";
import { Box, Text, Flex, Stack, VStack, Image, HStack } from 'native-base';
import { Dimensions } from 'react-native';
import Avatar from "./Avatar";
import tw from "twrnc";
import Icon from "react-native-vector-icons/dist/Ionicons";
import Icon1 from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/dist/AntDesign";
import Icon3 from "react-native-vector-icons/dist/Feather";
import OctIcons from "react-native-vector-icons/dist/Octicons";
import FontAwesomeIcons from "react-native-vector-icons/dist/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/dist/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import RateUsModal from "../modals/RateUs";
import ReviewDone from "../modals/reviewDone";
import Logout from "../modals/logout";
import images from "../../utils/constant/images";
import { Switch } from 'react-native-switch';
import { ThemeContext } from "../../utils/ThemeProvider";
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import AddNewContactModal from "../modals/addNewContactModal";

const SCREENWIDTH = Dimensions.get('window').width;
// const SCREENHEIGHT = Dimensions.get('window').height;

const CustomDrawerContent = ({ navigation }) => {
    const [showRateModal, setShowRateModal] = useState(false);
    const [showDone, setShowDone] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    const [isToggle, setToggle] = useState(false);
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <DrawerContentScrollView >
            <Stack direction="column" space="5" paddingTop={7} paddingLeft={8} >
                <Flex direction="row" alignItems={"center"} mb={2}>
                    <Avatar size={16} mr={3} />
                    <Stack direction="column" space="1">
                        <Text fontSize="lg" style={tw.style("text-white")}>Nada Alaa</Text>
                        <Text fontSize="xs" style={tw.style("text-white")}>Edit Profile</Text>
                    </Stack>
                </Flex>
                <VStack space="1" >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Portfolio")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon name={"ios-document-text-outline"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Buy Licences</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("AccessHistory")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon1 name={"history"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Access History</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Contacts")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon2 name={"user"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Contacts</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("NFTMarket")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon3 name={"star"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>NFTs</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Market")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <SimpleLineIcons name={"handbag"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Market</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>

                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Terms")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon name={"shield-checkmark-outline"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Terms & Conditions</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>

                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("PrivatePolicy")
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon name={"md-lock-closed-outline"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Privacy Policy</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setShowRateModal(true)
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <FontAwesomeIcons name={"hand-o-right"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Rate Us</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                </VStack>
                <VStack space="1" mt={20}>
                    <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                        <Flex direction="row" >
                            <Icon2 name={"earth"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            <Text fontSize="md" style={tw.style("text-white")}>Language</Text>
                        </Flex>
                        <TouchableOpacity>
                            <HStack space="1" alignItems="center" style={tw.style("mr-6")}>
                                <Image
                                    source={
                                        images.FlagImg
                                    }
                                    alt="Alternate 1"
                                    size="xs"
                                />
                                <Text fontSize="xs" style={tw.style("text-white")}>EN</Text>
                            </HStack>
                        </TouchableOpacity>
                    </Flex>
                    <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                        <Flex direction="row" alignItems={"center"}>
                            <Image
                                style={tw.style("text-gray-400 mr-4 ")}
                                source={
                                    images.ThemeImg
                                }
                                alt="Alternate 1"
                                width={5}
                                height={5}
                            />
                            <Text fontSize="md" style={tw.style("text-white")}>Theme</Text>
                        </Flex>
                        <TouchableOpacity>
                            <HStack space="1" alignItems="center" style={tw.style("mr-6")}>
                                <Switch
                                    value={isToggle}
                                    onValueChange={(val) => { setToggle(val); toggleTheme(val); }}
                                    disabled={false}
                                    activeText={'On'}
                                    inActiveText={'Off'}
                                    circleSize={24}
                                    barHeight={35}
                                    circleBorderWidth={0}
                                    backgroundActive={'gray'}
                                    backgroundInactive={'gray'}
                                    circleActiveColor={'#fcfcfc'}
                                    circleInActiveColor={'#fcfcfc'}
                                    renderInsideCircle={() =>
                                        <Box>
                                            {
                                                <images.moomIcon width={10} height={10} color="#000" />
                                            }
                                        </Box>
                                    } // custom component to render inside the Switch circle (Text, Image, etc.)
                                    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                                    innerCircleStyle={{ alignItems: "center", justifyContent: "center", paddingLeft: 4 }} // style for inner animated circle for what you (may) be rendering inside the circle
                                    outerCircleStyle={{}} // style for outer animated circle
                                    renderActiveText={false}
                                    renderInActiveText={false}
                                    switchLeftPx={4} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                                    switchRightPx={4} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                                    switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                                    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                                />
                            </HStack>
                        </TouchableOpacity>
                    </Flex>
                    <TouchableOpacity
                        onPress={() => {
                            setShowLogout(true)
                        }}
                    >
                        <Box py={1} >
                            <Flex direction="row" justifyContent={"space-between"}>
                                <Flex direction="row" >
                                    <Icon name={"exit-outline"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                                    <Text fontSize="md" style={tw.style("text-white")}>Log out</Text>
                                </Flex>
                                <Icon name={"md-chevron-forward-sharp"} style={tw.style("text-gray-400 mr-4 ")} size={24} />
                            </Flex>
                        </Box>
                    </TouchableOpacity>
                </VStack>
                <RateUsModal
                    showModal={showRateModal} setShowModal={setShowRateModal} continueModal={setShowDone} />
                <ReviewDone showModal={showDone} setShowModal={setShowDone} />
                <Logout showModal={showLogout} setShowModal={setShowLogout} />
            </Stack>
        </DrawerContentScrollView>
    )
}
export default CustomDrawerContent;