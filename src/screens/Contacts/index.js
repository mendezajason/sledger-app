import React, { useContext, useState } from 'react';
import { Box, Flex, Center, ScrollView, useTheme, Spacer, VStack } from 'native-base';
import tw from "twrnc";
import Icon from "react-native-vector-icons/dist/Ionicons";
import { Dimensions, TextInput } from 'react-native';
import { ThemeContext } from '../../utils/ThemeProvider';
import ContactInfo from '../../components/contactInfo';
import DeleteContactModal from '../../components/modals/deleteContactModal';
import EditContactModal from '../../components/modals/editContactModal';
import SendPayment from '../../components/modals/sendPaymentModal';
import RequestModal from '../../components/modals/requestModal';
import { ScreenHeight } from '@rneui/base';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Contacts = ({ navigation }) => {
  const { isToggle, toggleThme } = useContext(ThemeContext);
  const [showDelModal, setShowDelModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSendPayMoal, setShowSendPayModal] = useState(false)
  const [showRequestMoneyModal, setShowRequestMoneyModal] = useState(false);
  const [data, setData] = useState([1, 2, 3, 4]);
  const [selItem, setSelItem] = useState(-1);

  const deleteItem = () => {
    if (selItem < 0) return;
    let tmparray = data.filter(e => e !== selItem)
    setData(tmparray);
    setSelItem(-1);
  }

  return (
    <Box>
      <Flex direction="row" style={tw.style("p-2 px-4")}>
        <Center p="2" style={tw.style("border border-gray-200 rounded-l-md border-r-0")}>
          <Icon name="search" size={20} style={tw.style(`${isToggle ? "text-black" : "text-white"} `)} />
        </Center>
        <TextInput placeholder="Who are you searching for .." placeholderTextColor={isToggle ? "#000" : "#fff"} style={tw.style("dark:text-white border border-gray-200 rounded-r-md border-l-0 grow")} />
      </Flex>
      <ScrollView>
        <VStack space={3}>
          {
            data && data.map((item, index) =>
              <ContactInfo key={index} itemIndex={item} setSelItem={setSelItem} handleEdit={setShowEditModal} handleDel={setShowDelModal} handleRec={setShowRequestMoneyModal} handleSend={setShowSendPayModal} />
            )
          }
          <Box style={tw.style("py-28")}></Box>
          {/* <ContactInfo mb={3}/> */}
        </VStack>
      </ScrollView>
      <DeleteContactModal showModal={showDelModal} setShowModal={setShowDelModal} deleteItem={deleteItem} />
      <EditContactModal showModal={showEditModal} setShowModal={setShowEditModal} />
      <SendPayment showModal={showSendPayMoal} setShowModal={setShowSendPayModal} />
      <RequestModal showModal={showRequestMoneyModal} setShowModal={setShowRequestMoneyModal} />
    </Box>

  )
}
export default Contacts;