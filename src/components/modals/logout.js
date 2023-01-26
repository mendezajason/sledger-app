import React, { useContext } from "react";
import { Button, Flex, Text, Heading, VStack, Center } from "native-base";
import images from "../../utils/constant/images";
import tw from "twrnc";
import BasicModal from "./basic";
import { ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../auth/AuthProvider';

const Logout = ({ ...props }) => {
    const navigation = useNavigation();
    const { user, setUser } = useContext(AuthContext);

    return (
        <BasicModal {...props}>
            <VStack space="5">
                <Center  >
                    <Heading style={tw.style("mt-2 text-[#000]/89 ")} fontSize={19} fontWeight={400}>Logout</Heading>
                </Center>
                <Text fontSize="sm" textAlign={"center"} px={30} style={tw.style("text-[#878787]")}>You're about to logout from your account, are you sure?</Text>
                <Flex direction="row" style={tw.style("")}>
                    <Button
                        variant={"outline"}
                        style={tw.style(" grow mr-3 border border-gray-200 ")}
                        onPress={() => {
                            props.setShowModal(false);
                        }}
                        buttonStyle={tw.style("text-black")}
                    >
                        <Text fontSize="sm" style={tw.style("text-black font-semibold")}>Cancel</Text>

                    </Button>
                    <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 6 }} style={tw.style("grow rounded-lg")}>
                        <Button
                            variant={"outline"}
                            style={tw.style(" rounded-md")}
                            onPress={() => {
                                setUser(false);
                            }}
                        >
                            <Text fontSize="sm" style={tw.style("text-white font-semibold")}>Logout</Text>
                        </Button>
                    </ImageBackground>
                </Flex>
            </VStack>
        </BasicModal>
    )
}
export default Logout;