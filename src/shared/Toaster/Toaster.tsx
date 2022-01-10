import React from "react";
import {CloseIconWrapperStyled, ToasterWrapperStyled} from "./styled";
import {ToasterProps} from "./Toaster.props";
import {AiOutlineClose} from "react-icons/ai";

const Toaster: React.FC<ToasterProps> = ({children, onClose, ...rest}) => {
	return <ToasterWrapperStyled {...rest}>
		{children}
		<CloseIconWrapperStyled onClick={onClose}>
			<AiOutlineClose  />
		</CloseIconWrapperStyled>
	</ToasterWrapperStyled>
}

export default Toaster;