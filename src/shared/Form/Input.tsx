import React, {useContext} from "react";
import {InputProps} from "./Input.props";
import {InputLabelStyled, InputStyled} from "./styled";
import FormContext from "./FormContext";


const Input: React.FC<InputProps> = ({name, label, className, prefix, ...rest}) => {
    const context = useContext(FormContext);
    if(!context) {
        return <>
            {
                label && <InputLabelStyled>
                    {label}
                </InputLabelStyled>
            }
            <InputStyled className={`form-item ${className}`} {...rest}/>
        </>
    }
    const {register, formState} = context;
    const formProps = name ? register(name) : {};
    const isErrored = Boolean(formState.errors[name])
    return <>
        {
            label && <InputLabelStyled>
                {label}
            </InputLabelStyled>
        }
        <InputStyled className={`form-item ${className}`} isErrored={isErrored} {...formProps} {...rest}/>
    </>
}

export default Input;