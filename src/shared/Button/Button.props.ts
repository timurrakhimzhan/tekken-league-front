import React from "react";
import {ButtonStyled} from "./styled";

export type ButtonProps = React.ComponentProps<typeof ButtonStyled> & {
    isLoading?: boolean
}