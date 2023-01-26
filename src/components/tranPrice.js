import React from 'react';
import {Flex, Center,Image,Box,Text,Spacer} from 'native-base';
import images from '../utils/constant/images';
import  tw from "twrnc";
const TransactionPrice = ({IconBg,titleTop,titleBottom,contentTop,contentBottom,isRaise,...props})=>{
    return(
        <Flex  direction="row" {...props} p={3} alignItems="center" {...props}>
            <Center  bg="primary.400"  p={3} style={tw.style(`rounded-md ${IconBg}`)}>
            <Image
                source={
                        images.PriceIcon
                }
                alt="Alternate 1"
                size="xs"
                width={5}
                height={5}
                                        
                                        />
            </Center>
            <Box   ml={3}>
                <Text  fontSize="xs">{titleTop}</Text>
                <Text  fontSize="xs">{titleBottom}</Text>
                
            </Box>
            <Spacer />
            <Box   style={tw.style("min-w-10")}>
                <Text  fontSize="xs" textAlign={"right"}>${contentTop}</Text>
                <Flex  direction="row" alignItems={"center"} justifyContent="space-between">
                <Image
                source={
                        isRaise?images.PriceRaiseIcon:images.PriceDownIcon
                }
                mr={3}
                alt="Alternate 1"
                size="xs"
                width={4}
                height={2}
                                        
                                        />
                    <Text  fontSize="xs" style={tw.style(`${isRaise?"text-[#b9cd7a]":"text-[#e7989e]"}`)}>{contentBottom}%</Text>
                    
                </Flex>
                
                
            </Box>
            
        </Flex>
        
    )
}
export default TransactionPrice;