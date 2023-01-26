import React from "react";
import Svg, { Path } from "react-native-svg";
import images from "../utils/constant/images";
import {Image} from "native-base";
const UnfildStar = (props) => {
  return (
    <Image
        source={
            images.StarUnfild
        }
        alt="Alternate Text"
        size="xs"
        {...props}
    />
    
  );
};

export default UnfildStar;