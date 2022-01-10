import {styled} from "../../themes";

export const TableStyled = styled('table', {
    width: '100%',
    fontFamily: '$default',
    fontWeight: '400',
    borderCollapse: 'collapse',
    fontSize: '$md'
});

export const TrStyled = styled('tr', {
    height: 0
});

export const ThStyled = styled('td', {
    // textAlign: 'left',
    borderBottom: '1px solid $textPrimary',
    paddingTop: '$md',
    paddingBottom: '$md',
});

export const TdStyled = styled('td', {
    paddingTop: '$md',
    paddingBottom: '$md',
    borderBottom: '1px solid $divider',
    variants: {
        fontFamily: {
            thin: {
                fontFamily: '$thin'
            },
            regular: {
                fontFamily: '$regular'
            },
            bold: {
                fontFamily: '$bold'
            }
        }
    }
});

export const TbodyStyled = styled('tbody', {
});

export const THeadStyled = styled('thead', {
})