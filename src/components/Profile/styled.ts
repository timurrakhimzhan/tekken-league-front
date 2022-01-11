import {styled} from "../../themes";
import Container from "../../shared/Container";
import Flex from "../../shared/Flex";

export const ProfileContainerStyled = styled(Container, {
    flex: 1,
    maxWidth: '350px',
    boxSizing: 'border-box',
    height: '100%',
    '@media only screen and (min-width: 750px)': {
        maxWidth: '300px',
    },
    overflowY: 'auto',
})
export const LogoutStyled = styled(Flex, {
    color: '$secondary',
    "& svg": {
        display: 'block',
    },
    cursor: 'pointer'
})