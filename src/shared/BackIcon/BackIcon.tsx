import {
	AiOutlineArrowLeft, BsArrow90DegLeft, BsBoxArrowLeft,
	FaArrowAltCircleLeft,
	FaRegArrowAltCircleLeft,
	FiArrowLeftCircle, GoArrowLeft, ImArrowLeft, MdKeyboardArrowLeft,
	RiArrowLeftCircleLine
} from "react-icons/all";
import React from "react";
import {useHistory} from "react-router-dom";
import IconWrapper from "../IconWrapper";
import {BackIconProps} from "./BackIcon.props";

const BackIcon: React.FC<BackIconProps> = (props) => {
	const history = useHistory();
	return <IconWrapper onClick={() => history.goBack()} {...props}>
		<MdKeyboardArrowLeft size={'32px'} />
	</IconWrapper>
}

export default BackIcon;