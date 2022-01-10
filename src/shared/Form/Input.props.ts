import {StitchesVariants,} from "@stitches/react";
import {InputStyled} from "./styled";
import React, {ReactElement} from "react";

export type InputProps = React.ComponentProps<typeof InputStyled> & {
    label?: string | ReactElement;
    name: string;
    isErrored?: boolean;
}