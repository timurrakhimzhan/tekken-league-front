import {styled} from "../../themes";
import Container from "../../shared/Container";

export const SearchPlayerWrapperStyled = styled('div', {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    overflowY: 'hidden'
});

export const PlayerListWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden'
});

export const PlayerCardWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});

export const SearchPlayerContainerStyled = styled(Container, {
    width: '450px',
    maxWidth: '100%',
});