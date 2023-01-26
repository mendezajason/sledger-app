import React, { useContext, useState } from 'react';
import tw from "twrnc";
import { Box, IconButton, Flex, Text, Button, Toast, Image, ScrollView } from 'native-base';
import { Tab, TabView } from '@rneui/themed';
import { ThemeContext } from '../../utils/ThemeProvider';
import { ImageBackground } from 'react-native';
import { ScreenHeight } from "@rneui/base";
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../../utils/constant/images';
import CustomCheckbox from '../../components/customCheckbox';
import Icon from "react-native-vector-icons/dist/Feather";
import Icon1 from "react-native-vector-icons/dist/Octicons";
import EditFedrationModal from '../../components/modals/federationAddrModal';
import SecretKeyModal from '../../components/modals/secretModal';
import RemoveStellarModal from '../../components/modals/removeStellarModal';
import ResetModal from '../../components/modals/resetPassword';
import { useNavigation, useRoute } from "@react-navigation/native";

const Settings = ({ navigation }) => {
    const [index, setIndex] = useState(0)
    const { isToggle, toggleThme } = useContext(ThemeContext);
    const [showFedration, setShowEditFedration] = useState(false);
    const [showSecretModal, setShowSecretModal] = useState(false);
    const [showRemoveStellarModal, setShowRemoveStellarModal] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const navigation1 = useNavigation();

    const showToast = () => {
        Toast.show({ description: "Your address is saved on clipboard.", placement: "top", duration: 2000 })
    };

    return (
        <Box style={tw.style("dark:bg-[#200A4c] bg-white")}>
            <Flex direction='row' w="100%" style={tw.style("justify-between pt-3")}>
                <Button style={tw.style("ml-2 bg-transparent")} onPress={() => { navigation1.toggleDrawer() }}>
                    <Icon name="menu" size={20} style={tw.style("dark:text-gray-200 text-black")} />
                </Button>
                <Text style={tw.style("pt-1 font-semibold text-xl text-black dark:text-white")}>Settings</Text>
                <Image source={images.Check_Setting} size={6} alt={"No"} style={tw.style("mt-2 mr-4")} />
            </Flex>

            <Box height={ScreenHeight - 135} >
                <Box style={tw.style("px-4")} >
                    <Tab
                        value={index}
                        onChange={(e) => setIndex(e)}
                        indicatorStyle={{
                            backgroundColor: isToggle ? '#303030' : "white",
                            height: 2,
                        }}
                    >
                        <Tab.Item
                            title="Wallet Info"
                            titleStyle={(active) => ({ fontSize: 14, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                        />
                        <Tab.Item
                            title="Notifications"
                            titleStyle={(active) => ({ fontSize: 14, color: active ? (isToggle ? "black" : "white") : (isToggle ? "#e3e3e3" : "#7e7492") })}
                            containerStyle={(active) => ({
                                backgroundColor: active ? "transport" : "transparent",
                                borderBottomWidth: 1,
                                borderColor: isToggle ? "#d1d1d1" : "#7e7492",
                            })}
                            indicatorStyle={(active) => ({
                                backgroundColor: active ? "white" : "black",
                                height: 3,
                            })}
                        />
                    </Tab>
                </Box>
                <TabView value={index} onChange={setIndex} animationType="spring" >
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <ScrollView>
                            <Box style={tw.style("bg-white dark:bg-[#200A4c] px-4 py-4")}>
                                <Box style={tw.style("border rounded-md p-4 border-gray-200 mb-3")}>
                                    <Text fontSize="xs" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Stellar Account</Text>
                                    <Text fontSize="xs">Account holds all your funds on stellar network</Text>
                                </Box>
                                <Box style={tw.style("border rounded-md p-4 border-gray-200 mb-3")}>
                                    <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                                        <Box  >
                                            <Text fontSize="xs" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Stellar Address</Text>
                                            <Text fontSize="xs">GDNAJRWQKRY..HBSANCHSADGFHSDHAS</Text>
                                        </Box>
                                        <TouchableOpacity onPress={() => showToast()}>
                                            <IconButton size={7} style={tw.style("items-center bg-[#6b5377] rounded-full text-white")} _icon={{ as: Icon, name: "copy", color: "white", size: 3 }} />
                                        </TouchableOpacity>
                                    </Flex>
                                </Box>
                                <Box style={tw.style("border rounded-md p-4 border-gray-200 mb-3")}>
                                    <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                                        <Box  >
                                            <Text fontSize="xs" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Federation Address</Text>
                                            <Text fontSize="xs">Adrix-Lobstr.co</Text>
                                        </Box>
                                        <TouchableOpacity onPress={() => setShowEditFedration(true)}>
                                            <ImageBackground source={images.IconBack} resizeMode="cover"  >
                                                <IconButton size={7} style={tw.style("items-center bg-transparent  rounded-full text-white")} _icon={{ as: Icon1, name: "pencil", color: "white", size: 3 }} />
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </Flex>
                                </Box>
                                <Box style={tw.style("border rounded-md p-4 border-gray-200 mb-3")}>
                                    <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                                        <Box  >
                                            <Text fontSize="xs" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Secret Key</Text>
                                            <Text fontSize="xs">Your Secret Key is Hidden Verify to Reveal</Text>
                                        </Box>
                                        <TouchableOpacity onPress={() => setShowSecretModal(true)}>
                                            <IconButton size={7} style={tw.style("items-center bg-[#59dbb5]  rounded-full text-white")} _icon={{ as: Icon, name: "eye", color: "white", size: 3 }} />
                                        </TouchableOpacity>
                                    </Flex>
                                </Box>
                                <Box style={tw.style("border rounded-md p-4 border-gray-200 mb-3")}>
                                    <Flex direction="row" justifyContent={"space-between"} alignItems="center">
                                        <Box  >
                                            <Text fontSize="xs" style={tw.style("text-[#000]/45 dark:text-[#fff]/45")}>Currency</Text>
                                            <Text fontSize="xs">USD   -   US Dollar</Text>
                                        </Box>
                                        <TouchableOpacity onPress={() => setShowResetModal(true)}>
                                            <Text fontSize="xs" color={"#8522cc"}>Change</Text>
                                        </TouchableOpacity>
                                    </Flex>
                                </Box>
                                <TouchableOpacity onPress={() => setShowResetModal(true)} >
                                    <Box style={tw.style("bg-[#ec3868]/3 dark:bg-[#ec3868]/20 p-3 w-full rounded-md mb-2")}>
                                        <Text fontSize="xs" style={tw.style("text-[#ec3868] text-center")}>Change Password</Text>
                                    </Box>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setShowRemoveStellarModal(true)}>
                                    <Box style={tw.style("bg-[#ec3868]/3 dark:bg-[#ec3868]/20  p-3 w-full rounded-md")}>
                                        <Text fontSize="xs" style={tw.style("text-[#ec3868] text-center")}>Remove Steller Account</Text>
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        </ScrollView>
                    </TabView.Item>
                    <TabView.Item style={{ ...isToggle ? { backgroundColor: 'white' } : { backgroundColor: '#200A4c' }, width: '100%' }}>
                        <Box style={tw.style("bg-white dark:bg-[#200A4c] px-4 py-4")}>
                            <Box py={2}>
                                <CustomCheckbox title={"Important Email Updates From StellarLedgar"}></CustomCheckbox>
                            </Box>
                            <Box py={2}>
                                <CustomCheckbox title={"New Transactions Email Updates"}></CustomCheckbox>
                            </Box>
                            <Box py={2}>
                                <CustomCheckbox title={"Email Updates and Push Notifications for Small Payments"}></CustomCheckbox>
                            </Box>
                            <Box py={2}>
                                <CustomCheckbox title={"Alerts and Notifications for New Pending Payments"}></CustomCheckbox>
                            </Box>
                            <TouchableOpacity onPress={() => setShowRemoveStellarModal(true)} >
                                <Box style={tw.style("bg-[#ec3868]/3 dark:bg-[#ec3868]/20 p-3 w-full rounded-md")}>
                                    <Text fontSize="xs" style={tw.style("text-[#ec3868] text-center")}>Remove Steller Account</Text>
                                </Box>
                            </TouchableOpacity>
                        </Box>
                    </TabView.Item>
                </TabView>
            </Box>
            <EditFedrationModal showModal={showFedration} setShowModal={setShowEditFedration} />
            <SecretKeyModal showModal={showSecretModal} setShowModal={setShowSecretModal} />
            <RemoveStellarModal showModal={showRemoveStellarModal} setShowModal={setShowRemoveStellarModal} />
            <ResetModal showModal={showResetModal} setShowModal={setShowResetModal} />
        </Box >
    )
}
export default Settings;