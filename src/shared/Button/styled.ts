import {styled} from "../../themes";

export const ButtonStyled = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$md',
    fontFamily: '$bold',
    boxSizing: 'border-box',
    padding: '$sm',
    borderRadius: '$md',
    border: 'none',
    background: '$secondary',
    minHeight: '$buttonHeight',
    cursor: 'pointer',
    minWidth: '$buttonMinWidth',
    '&:disabled': {
        background: '$disabled'
    },
    variants: {
        color: {
            primary: {
                background: '$primary',
            },
            secondary: {
                background: '$secondary',
            },
            success: {
                background: '$success',
            },
            error: {
                background: '$error',
                color: '$textPrimary'
            }
        }
    }
});