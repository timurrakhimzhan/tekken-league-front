import React from "react";
import {AvatarProps} from "./Avatar.props";
import { AvatarStyled } from "./styled";

const Avatar: React.FC<AvatarProps> = ({character, ...rest}) => {
	return <AvatarStyled  src={`/assets/images/characters-preview/${character}.png`} {...rest} />
}

export default Avatar;