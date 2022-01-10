import {styled} from "../../themes";
import Container from "../Container";

export const ModalWrapperStyled = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    left: 0,
    top: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 2,
    variants: {
        open: {
            true: {
                display: 'flex'
            },
            false: {
                display: 'none'
            }
        }
    }
});

export const ModalContainerStyled = styled(Container, {
    background: '$backgroundSecondary',
    position: 'relative',
    padding: '$lg'
});

export const CloseIconWrapperStyled = styled('div', {
    position: 'absolute',
    top: '$sm',
    right: '$sm',
    fontSize: '$sm',
    color: '$textSecondary',
    cursor: 'pointer',
    '&:hover': {
        color: '$textPrimary',
    }
});
