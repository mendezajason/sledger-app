import * as React from "react";
import { Header, Icon } from "@rneui/base";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, Image } from '@react-navigation/native';

import tw from "twrnc";
import Avatar from "./Avatar";

// const SCREENHEIGHT = Dimensions.get('window').height;
// const SCREENWIDTH = Dimensions.get('window').width;

const HeaderBar = ({ title, handle, ...props }) => {

  return (
    <Header
      backgroundImageStyle={{}}
      centerComponent={{
        text: title,
        style: { ...tw.style("text-white font-bold text-lg") }
      }}
      centerContainerStyle={{}}
      containerStyle={tw.style("bg-transparent")}
      leftComponent={
        <TouchableOpacity onPress={() => {
          console.log("toggle")
          handle(true);
        }}>
          <Icon name="menu" color={"#ddd"} style={tw.style("text-white")} />
        </TouchableOpacity>}
      placement="center"
      rightComponent={<Avatar size={10} />}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
}
export default HeaderBar;