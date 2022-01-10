import React from "react";
import {TextAreaStyled} from "./styled";

export type TextAreaProps = React.ComponentProps<typeof TextAreaStyled> & {
    label?: string;
    name: string;
    isErrored?: boolean;
};