import React from "react";
import Svg, { Path } from "react-native-svg";
import images from "../utils/constant/images";
import {Image} from "native-base";


const Star = ({...props}) => {
  return (
    <Image
        source={
            images.Star
        }
        alt="Alternate Text"
        size={10}
        {...props}
    />
    
  );
};

export default Star;