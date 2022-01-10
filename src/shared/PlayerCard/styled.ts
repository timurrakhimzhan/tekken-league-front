import {styled} from "../../themes";

export const PlayerCardWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.02)'
    },
    '& .marginBottom6': {
        marginBottom: '6px'
    }
});

export const InfoWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const IconsWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    '& svg': {
        color: '$textSecondary',
        '&:hover': {
            color: '$textPrimary'
        }
    }
})
