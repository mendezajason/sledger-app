import React from "react";
import { Modal, Text, HStack, VStack, Button } from "native-base";
import { Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/dist/Ionicons";
import tw from "twrnc";

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const BasicModal = ({ showModal, setShowModal, title, children, ...props }) => {
    return (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg" {...props}>
            <Modal.Content minW={SCREENWIDTH} maxH={SCREENHEIGHT} style={{ marginBottom: 0, marginTop: "auto", ...tw.style("bg-white p-2") }} >
                <Modal.Body>
                    {children}
                </Modal.Body>
            </Modal.Content>
            <Button style={tw.style("rounded-full bg-white absolute top-[30px] right-[15px] p-2")}
                onPress={() => setShowModal(false)}>
                <Icon name="close" style={tw.style("text-black")} size={16} />
            </Button>
        </Modal>
    )
}
export default BasicModal;