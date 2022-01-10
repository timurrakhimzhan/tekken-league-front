import React from "react";
import {LinearLoaderProps} from "./LinearLoader.props";
import { LinearLoaderStyled } from "./styled";

const LinearLoader: React.FC<LinearLoaderProps> = ({color = 'primary', ...rest}) => {
    return <LinearLoaderStyled src={`/assets/images/linear-loader-${color}.svg`} {...rest} alt={'LinearLoader'} />
}

export default LinearLoader;