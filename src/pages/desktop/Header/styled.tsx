import {styled} from "../../../themes";
import Container from "../../../shared/Container";
import Typography from "../../../shared/Typography";

export const HeaderStyled = styled(Container, {
    borderRadius: 0,
    backgroundColor: '$backgroundPrimary',
    borderBottom: '1px solid $divider',
    height: '$headerHeight',
    '& :not(:last-child)': {
        marginRight: '$lg'
    }
});

export const MenuItemStyled = styled(Typography, {
    position: 'relative',
    variants: {
        active: {
            true: {
                '&::after': {
                    content: ' ',
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    background: '$secondary'
                },
                // borderBottom: '1px solid $secondary'
            },
            false: {
                '&::after': {
                    content: ' ',
                    position: 'absolute',
                    width: 0,
                    height: '1px',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    background: '$secondary',
                    transition: 'width 0.1s ease-in-out'
                },
                '&:hover': {
                    '&::after': {
                        width: '100%'
                    },
                },
            }
        }
    },

});
