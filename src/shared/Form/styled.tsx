import {css, styled} from "../../themes";
import React from "react";

export const FormStyled = styled('form', {
    display: 'flex',
    boxSizing: 'border-box',
    // background: '$backgroundPrimary',
    borderRadius: '$md',
    width: '100%',
    flexDirection: 'column',
    '& .form-item:not(:last-child)': {
        marginBottom: '$sm',
    },
    '& > button:first-of-type': {
        marginTop: 'calc($md*2)',
    }
});


export const InputLabelStyled = styled('label', {
    marginBottom: '$xSm',
    fontSize: '$md'
});

export const InputStyled = styled('input', {
    borderRadius: '$md',
    fontSize: '$md',
    height: '$inputHeight',
    outline: 'none',
    boxSizing: 'border-box',
    border: '2px solid $backgroundPrimary',
    padding: '1px calc($md - 2px)',
    fontFamily: '$regular',
    '&:focus': {
        borderColor: '$secondary',
    },
    background: '$inputBackground',
    color: '$textSecondary',
    variants: {
        isErrored: {
            true: {
                borderColor: '$error',
                '&:focus': {
                    borderColor: '$error'
                },
            }
        },
        fullWidth: {
            true: {
                width: '100%'
            }
        }
    }
});

export const TextAreaStyled = styled('textarea', {
    borderRadius: '$md',
    fontSize: '$md',
    outline: 'none',
    boxSizing: 'border-box',
    border: '2px solid $backgroundPrimary',
    padding: '$sm $md',
    resize: 'vertical',
    '&:focus': {
        borderColor: '$secondary'
    },
    background: '$inputBackground',
    color: '$textSecondary',
    variants: {
        isErrored: {
            true: {
                borderColor: '$error',
                '&:focus': {
                    borderColor: '$error'
                },
            }
        }
    }
});

