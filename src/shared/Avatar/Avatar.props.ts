import React from "react";
import {AvatarStyled} from "./styled";

export type AvatarProps = React.ComponentProps<typeof AvatarStyled> & {
	character: string;
};