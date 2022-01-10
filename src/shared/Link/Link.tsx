import Typography from "../Typography";
import HoverEffect from "../HoverEffect";
import React from "react";
import {LinkProps} from "./Link.props";

const Link: React.FC<LinkProps> = ({children, ...rest}) => {
	return <Typography color={'primary'} clickable {...rest}>
			<HoverEffect display={'inlineBlock'}>
				{children}
			</HoverEffect>
		</Typography>
}

export default Link;