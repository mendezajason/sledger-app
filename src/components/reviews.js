import React, { useEffect } from "react"
import { Flex, Text, Heading, HStack, Center, Button } from "native-base";
import Star from "./star";
import UnfildStar from "./unfildStar";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import { useState } from "react";

const Reviews = () => {
    const [curIndex, setCurIndex] = useState(3);
    const totalnum = [1, 1, 1, 1, 1];

    const click = (index) => {
        setCurIndex(index + 1);
    }

    return (
        <HStack space="3" alignItems="center">
            {
                totalnum && totalnum.map((item, index) => (
                    <Button key={index} style={tw.style("bg-transparent p-0")} onPress={() => click(index)}>
                        {
                            curIndex > index ? <Star /> : <UnfildStar />
                        }
                    </Button>
                ))
            }
        </HStack>
    )
}
export default Reviews;