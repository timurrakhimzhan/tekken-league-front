import React from "react";
import ReactSelect from "react-select";


export type SelectProps = React.ComponentProps<typeof ReactSelect> & {
    label?: string;
    name: string;
}