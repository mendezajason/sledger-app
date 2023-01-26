import { Flex, Box, Text, Center, Heading, Spacer } from 'native-base';
import tw from "twrnc";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/dist/Ionicons";
import { Button } from "@rneui/base";

const BackButton = () => {
    const navigation = useNavigation();
    return (
        <Center size="12">
            <Button
                buttonStyle={tw.style(" bg-[#fdfdfd] dark:bg-[#583f87] ")}
                containerStyle={tw.style("rounded-full bg-gray-300")}
                onPress={() => {
                    navigation.goBack();
                    // navigation.getParent().setOptions({
                    //     tabBarStyle: {
                    //         display: "flex",
                    //         backgroundColor: "#3d3d3d",
                    //         height: 85,
                    //         paddingLeft: 4,
                    //         paddingRight: 4,
                    //         paddingBottom: 10
                    //     }
                    // });
                }}
            >
                <Icon name="chevron-back-sharp" color="white" style={tw.style("text-black dark:text-white")} size={26} />
            </Button>
        </Center>
    )
}
export default BackButton;