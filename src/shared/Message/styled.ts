import {styled} from "../../themes";

export const MessagesWrapperStyled = styled('div', {
    display: 'flex',
    alignItems: 'center',
    minHeight: '40px',
    backgroundColor: '$success',
    fontFamily: '$thin',
    fontSize: '$sm',
    borderRadius: '$md',
    color: '$textPrimary',
    position: 'relative',
    variants: {
        variant: {
            error: {
                backgroundColor: '$error',
            },
            success: {
                backgroundColor: '$success',
            }
        }
    }
});

export const TypographyWrapperStyled = styled('div', {
    paddingLeft: 'calc($md * 2)',
    paddingRight: 'calc($md * 2)',
})

export const UlStyled = styled('ul', {
    paddingLeft: 'calc($md * 2)',
    paddingRight: 'calc($md * 2)',
    '& > li:not(:last-child)': {
        marginBottom: '$sm'
    }
});

export const CloseWrapperStyled = styled('div', {
    position: 'absolute',
    top: '$sm',
    right: '$sm',
    cursor: 'pointer'
});