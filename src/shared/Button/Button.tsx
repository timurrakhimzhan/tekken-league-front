import React from "react";
import {ButtonProps} from "./Button.props";
import LinearLoader from "../LinearLoader";
import { ButtonStyled } from "./styled";

const Button: React.FC<ButtonProps> = ({isLoading = false, children, ...rest}) => {
    return <ButtonStyled {...rest} onClick={!isLoading ? rest.onClick : undefined}>
        {isLoading ? <LinearLoader /> : children}
    </ButtonStyled>
}

export default Button;