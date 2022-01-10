import React, {useContext} from "react";
import FormContext from "./FormContext";
import {InputLabelStyled, InputStyled, TextAreaStyled} from "./styled";
import {TextAreaProps} from "./TextArea.props";

const TextArea: React.FC<TextAreaProps> = ({name, label, className, prefix, ...rest}) => {
    const context = useContext(FormContext);
    if(!context) {
        return <>
            {
                label && <InputLabelStyled>
                    {label}
                </InputLabelStyled>
            }
            <TextAreaStyled className={`form-item ${className}`} {...rest}/>
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
        <TextAreaStyled className={`form-item ${className}`} isErrored={isErrored} {...formProps} {...rest}/>
    </>
}

export default TextArea;