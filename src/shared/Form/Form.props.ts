import React from "react";
import {FieldValues} from "react-hook-form";
import {FormStyled} from "./styled";
import {UseFormReturn} from "react-hook-form/dist/types";

export type FormProps<T extends FieldValues> = React.ComponentProps<typeof FormStyled> & {
	useFormResult: UseFormReturn<T>
};