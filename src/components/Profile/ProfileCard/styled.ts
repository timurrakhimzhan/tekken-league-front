import {styled} from "../../../themes";

export const ProfileCardWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px',
    padding: '$md',
    // boxSizing: 'border-box',
    borderRadius: '$sm',
    '& .marginBottom6': {
        marginBottom: '6px'
    },
});

export const ButtonsWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$sm',
    flexWrap: 'wrap',
});


export const WinLoseWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
});


export const OtherInfoWrapperStyled = styled('div', {
    maxWidth: '100%',
    fontWeight: '$thin',
    fontSize: '$sm'
})

export const IconStyled = styled('div', {
    color: '$textPrimary',
    "& svg": {
        display: 'block',
        width: '14px',
        height: '14px',
    },
    "& path": {
        fill: "$textSecondary",
    }
});

