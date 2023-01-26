import tw from "twrnc";
import { Box, Flex, Center, ScrollView, Spacer } from 'native-base';
import Icon from "react-native-vector-icons/dist/Ionicons";
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native';
import AccessInfo from "../../components/accessInfo";
import { ThemeContext } from "../../utils/ThemeProvider";

const AccessHistory = ({ navigation }) => {
    const { isToggle, toggleThme } = useContext(ThemeContext);
    return (
        <Box>
            <Flex direction="row" style={tw.style("p-2 px-4")}>
                <Center p="2" style={tw.style("border border-gray-200 rounded-l-md border-r-0")}>
                    <Icon name="search" size={20} style={tw.style(`${isToggle ? "text-black" : "text-white"} `)} />
                </Center>
                <TextInput placeholder="Who are you searching for .." placeholderTextColor={isToggle ? "#000" : "#fff"} style={tw.style("dark:text-white border border-gray-200 rounded-r-md border-l-0 grow")} />
            </Flex>
            <ScrollView>
                <AccessInfo mb={3} />
                <AccessInfo mb={3} />
                <AccessInfo mb={3} />
                <AccessInfo mb={3} />
                <Box style={tw.style("py-28")}/>
            </ScrollView>
        </Box>
    )
}
export default AccessHistory;