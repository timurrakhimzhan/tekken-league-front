import {styled} from "../../themes";

export const PageWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc((var(--vh, 1vh) * 100) - $headerHeight)',
    width: '100vw',
    padding: '$md',
    justifyContent: 'center',
    boxSizing: 'border-box'
});
