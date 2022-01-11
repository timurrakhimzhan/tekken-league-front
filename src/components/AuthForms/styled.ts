import {styled} from "../../themes";
import Container from "../../shared/Container";

export const TabsContentWrapperStyled = styled('div', {
    padding: '$lg',
    maxHeight: '100%',
    overflowY: 'auto'
});

export const AuthContainerStyled = styled(Container, {
    width: '370px',
    paddingLeft: 0,
    paddingRight: 0,
});