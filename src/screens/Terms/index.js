import tw from "twrnc";
import { Box, Text, Heading, Flex, ScrollView } from 'native-base';
import React, { useContext, useState } from 'react';
import { Dimensions } from 'react-native';

const Terms = ({ navigation }) => {
     return (
          <ScrollView>
               <Box px={5} pt={5}>
                    <Text fontSize="sm" style={tw.style("text-gray-600 dark:text-gray-300")} textAlign="justify">
                         Sed ut perspiciatis unde omnis iste natus errorsit volr
                         ptatem accusantium doloremque laudantium, totam
                         rem aperiam, eaque ipsa quae abillo inventore veritat
                         is et quasi architecto beataevitae dicta sunt explicabi
                         Nemo enim ipsam vouptatem quia voluptas si</Text>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Sed ut perspiciatis unde omnis iste natus</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">lpsam vouptatem quia</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Atem accusantium doloremque laudantium</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Nim ipsam vouptatem quia voluptas sit aspernatur</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Voluptatem sequiasi architecto beataevitae</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Sed ut perspiciatis unde omnis iste</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Atem accusantium doloremque laudantium</Text>

                    </Flex>
                    <Flex direction="row" alignItems={"center"} mt={2}>
                         <Box style={tw.style("bg-gray-400")} size={2} rounded="full" mr={5}>
                         </Box>
                         <Text style={tw.style("text-gray-600 dark:text-gray-300")} fontSize="xs">Voluptatem sequiasi architecto beataevitae</Text>

                    </Flex>
                    <Text fontSize="sm" style={tw.style("text-gray-600 dark:text-gray-300")} mt={3} textAlign="justify">
                         Sed ut perspiciatis unde omnis iste natus errorsit volr
                         ptatem accusantium doloremque laudantium, totam
                         rem aperiam, eaque ipsa quae abillo inventore veritat
                         is et quasi architecto beataevitae dicta sunt explicabi
                         Nemo enim ipsam vouptatem quia voluptas sit asper
                         Sed ut perspiciatis unde omnis iste natus errorsit volr
                         ptatem accusantium doloremque laudantium, totam
                         rem aperiam, eaque ipsa quae abillo inventore veritat
                         is et quasi architecto beataevitae dicta sunt explicabi
                         Nemo enim ipsam vouptatem quia voluptas sit asper
                         ptatem accusantium doloremque laudantium, totam
                         Nemo enim ipsam vouptatem quia voluptas sit asper
                         Sed ut perspiciatis unde omnis iste natus errorsit volr
                         ptatem accusantium doloremque laudantium, totam
                         rem aperiam, eaque ipsa quae abillo inventore veritat
                         is et quasi architecto beataevitae dicta sunt explicabi
                         Sed ut perspiciatis unde omnis iste natus errorsit volr
                         lores eos qui ratione voluptatem sequi
                    </Text>
               </Box>
          </ScrollView>
     )
}
export default Terms;