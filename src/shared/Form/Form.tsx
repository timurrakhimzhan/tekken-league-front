import React, {PropsWithChildren} from "react"
import FormContext from "./FormContext"
import {FormProps} from "./Form.props";
import {FormStyled} from "./styled";
import Message from "../Message";
import {FieldError} from "react-hook-form/dist/types/errors";



function Form<T>({children, useFormResult, ...rest}: PropsWithChildren<FormProps<T>>) {
    const {formState, clearErrors} = useFormResult;
    const errorMessages: Array<string> = Object.entries(formState.errors)
        .map(([name, error]) => (error as FieldError).message || `Error with a field ${name}`)
    return <FormContext.Provider value={useFormResult}>
        <FormStyled {...rest}>
            {errorMessages.length > 0 && <Message className={'marginBottomMd'} variant={'error'} onClose={() => clearErrors()} messages={errorMessages} />}
            {children}
        </FormStyled>
    </FormContext.Provider>
}

export default Form;
