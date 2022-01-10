import React, {useContext} from "react";
import FormContext from "./FormContext";
import {InputLabelStyled, InputStyled, } from "./styled";
import {SelectProps} from "./Select.props";
import ReactSelect, {StylesConfig, ValueType} from "react-select";
import {theme} from "../../themes";
import {Controller} from 'react-hook-form'
import {ThemeConfig} from "react-select/src/theme";

const Select: React.FC<SelectProps> = ({name, label, className, ...rest}) => {
    const context = useContext(FormContext);
    if(!context) {
        return null;
    }
    const {formState, control} = context;
    const isErrored = Boolean(formState.errors[name]);
    const stylesConfig: StylesConfig<any, any> = {
        menuList: (provided) => ({
            ...provided,
            fontSize: theme.fontSizes.md.value,
            color: theme.colors.backgroundSecondary.value,
        }),
        control: (provided, state) => {
            let borderColor = '';
            if(state.isFocused) {
                borderColor = theme.colors.secondary.value
            }
            if(isErrored) {
                borderColor = theme.colors.error.value
            }
            return {
                ...provided,
                borderColor,
                borderWidth: '2px',
                boxShadow: 'none',
                boxSizing: 'border-box',
                // maxHeight: !rest.isMulti ? theme.sizes.inputHeight.value : provided.maxHeight,
                display: 'flex',
                alignItems: 'center',
                fontFamily: theme.fonts.regular.value,
                '&:hover': {
                    borderColor: theme.colors.secondary.value
                }
            }
        },
        valueContainer: (provided, state) => ({
            ...provided,
            fontSize: theme.fontSizes.md.value,
        })
    };
    const themeConfig: ThemeConfig = (themeSelect) => ({
        ...themeSelect,
        colors: {
            ...themeSelect.colors,
            primary: theme.colors.primary.value,
            primary25: theme.colors.secondary.value,
            primary75: theme.colors.primary.value,
            danger: theme.colors.error.value,
            neutral50: theme.colors.textSecondary.value
        }
    })
    return <>
        {
            label && <InputLabelStyled>
                {label}
            </InputLabelStyled>
        }
        <Controller name={name} control={control} render={
            ({field}) => <ReactSelect className={`form-item ${className}`} styles={stylesConfig} theme={themeConfig}
                {...rest} {...field}/>
            }
        />

    </>
}

export default Select;