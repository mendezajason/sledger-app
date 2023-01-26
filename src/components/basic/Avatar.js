import { Image } from "native-base"
import React from "react";
import tw from "twrnc";
import { Button } from "@rneui/base";
import images from "../../utils/constant/images";
import { useNavigation, useRoute } from '@react-navigation/native';

const Avatar = ({ img, ...props }) => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <Button buttonStyle={tw.style("bg-transparent m-0 p-0")}
            onPress={() => navigation.navigate("Settings")}>
            {
                (route.name == "Trade" || route.name == "PrivatePolicy" || route.name == "Terms") ? <></> :
                    <Image
                        style={tw.style("rounded-full")}
                        source={
                            images.Avatar
                        }
                        alt="Alternate Text"
                        {...props}
                    />
            }
        </Button>
    )
}
export default Avatar;