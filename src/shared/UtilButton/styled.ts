import {styled} from "../../themes";

export const UtilButtonStyled = styled('div', {
    display: 'flex',
    padding: '2px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '25px',
    color: '$textSecondary',
    cursor: 'pointer',
    width: '80px',
    boxSizing: 'border-box',
    border: '1px solid $divider',
    '&:hover': {
        color: '$textPrimary',
        borderColor: '$textPrimary'
    },
});