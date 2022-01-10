import React from "react";
import {ToasterWrapperStyled} from "./styled";

export type ToasterProps = React.ComponentProps<typeof ToasterWrapperStyled> & {
	onClose?: () => void;
};