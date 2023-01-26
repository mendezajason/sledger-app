import React,{Children, useContext, useState} from 'react';
import  tw from "twrnc";
import {Text,Checkbox } from 'native-base';
const CustomCheckbox = ({title,children,...props})=>{
    const [isCheck,setCheck] = useState(false);
    return (
        <Checkbox style={tw.style(`${isCheck? "bg-[#a015e3]" : "bg-[#d6d6d6]/30"} dark:text-white p-2 border-0  `)}  _icon={{color: "white"}}   value={title} onChange={()=>{setCheck(!isCheck)}} >
            <Text  fontSize="xs">{title}</Text>
            {children}
        </Checkbox>
    )
}
export default CustomCheckbox;