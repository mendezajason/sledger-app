import React, { useContext } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { Flex, Text, Center, Heading, Spacer, Image, HStack } from 'native-base';
import { Button } from "@rneui/base";
import images from '../utils/constant/images';
import { ThemeContext } from '../utils/ThemeProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const AccountCreate = () => {
    const navigation = useNavigation();
    const { isToggle, toggleTheme } = useContext(ThemeContext);
    return (
        <Flex direction="column" style={tw.style("dark:bg-[#2B1867] bg-white")} alignContent={"space-between"} minW={SCREENWIDTH} minH={SCREENHEIGHT} p={8} pt={20} pb={16}>
            <Center width={"100%"} >
                {/* {isToggle?<Image source={images.CreateLogo} alt="" />:<images.AccountImg width={250} height={250} />} */}
                <Image source={images.CreateLogo} alt="" />
                <Heading style={tw.style("text-2xl dark:text-white pt-3 mt-5")}>Account Created</Heading>
                <Text style={tw.style("text-base text-white text-gray-400 text-center mt-3")}>You've joined a fruitful trading journey with</Text>
                <Text style={tw.style("text-base text-white text-gray-400 text-center")}>loads of other people</Text>
            </Center>
            <Spacer />
            <Center width={"100%"} >
                <ImageBackground source={images.btnBack} resizeMode="cover" imageStyle={{ borderRadius: 8 }} style={tw.style("w-full")}>
                    <Button
                        buttonStyle={tw.style("items-center bg-transparent rounded-md ")}
                        containerStyle={{ width: "100%", margin: 5 }}
                        icon={<images.loginIcon style={tw.style("absolute left-5")} />}
                        onPress={() => {
                            navigation.navigate("Login")
                        }}
                        title="Login"
                        titleProps={{}}
                        titleStyle={{ marginHorizontal: 5, background: "#8522cc" }}
                    />
                </ImageBackground>
            </Center>
        </Flex>
    )
}
export default AccountCreate
