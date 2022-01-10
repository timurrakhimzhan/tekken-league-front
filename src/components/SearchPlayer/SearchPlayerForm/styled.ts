import {styled} from "../../../themes";

export const SearchFormWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '$md',
    border: '1px solid $divider',
    borderRadius: '$md',
    '& input': {
        fontSize: '$sm !important'
    },
    '& button': {
        fontSize: '$sm !important'
    },
    '& div': {
        fontSize: '$sm !important'
    }
});

export const ButtonsWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    '& button': {
        flex: 1
    }
});

