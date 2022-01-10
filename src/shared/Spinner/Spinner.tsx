import React from "react";
import {SpinnerProps} from "./Spinner.props";
import { SpinnerStyled } from "./styled";

const Spinner: React.FC<SpinnerProps> = ({color = 'primary', ...rest}) => {
    return <SpinnerStyled src={`/assets/images/spinner-${color}.svg`} {...rest} alt={'Spinner'} />
}

export default Spinner;