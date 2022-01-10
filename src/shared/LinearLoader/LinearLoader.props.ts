import React from "react";
import {LinearLoaderStyled} from "./styled";

export type LinearLoaderProps = Omit<React.ComponentProps<typeof LinearLoaderStyled>, 'src' | 'alt'> & {
    color?: 'primary' | 'secondary'
};