import {styled} from "../../themes";

export const PageWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - $headerHeight)',
    width: '100vw',
    padding: '$md',
    justifyContent: 'center',
    boxSizing: 'border-box'
});
