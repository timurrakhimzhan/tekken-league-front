import React from "react";
import {SpinnerStyled} from "./styled";

export type SpinnerProps = Omit<React.ComponentProps<typeof SpinnerStyled>, 'src' | 'alt'> & {
    color?: 'primary' | 'secondary'
};