import React, {ChangeEvent} from "react";
import {InputProps} from "./Input.props";
import Input from "./Input";

const InputSteamUrl: React.FC<InputProps> = (props) => {
    const handleSteamProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const prefix = 'https://steamcommunity.com/';
        const input = e.target.value;
        if(input.length < prefix.length) {
            e.target.value = prefix;
            return;
        }
        const clearInput = input.replaceAll(prefix, '');
        e.target.value = prefix + clearInput
    }
    return <Input onChange={handleSteamProfileChange} {...props} />
}

export default InputSteamUrl;