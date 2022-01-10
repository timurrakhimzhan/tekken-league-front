import {styled} from "../../themes";

export const WrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '$md',
    maxHeight: '100%',
    flex: 1,
    '>:last-child': {
        marginTop: 'calc($md)'
    }
});

export const TabsWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    position: 'relative',
    fontFamily: '$bold'
});

export const TabStyled = styled('div', {
    padding: '$md',
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderRadius: '$sm',
    minWidth: 0,
    cursor: 'pointer',
    boxSizing: 'border-box',
    variants: {
        active: {
            true: {
                color: '$primary'
            }
        }
    },
});

export const ActiveIndicatorStyled = styled('div', {
    background: '$primary',
    borderRadius: '$sm',
    position: 'absolute',
    transition: 'left 0.2s ease-in-out',
    height: '100%'
})

export const ActiveIndicatorWrapperStyled = styled('div', {
    position: 'absolute',
    borderRadius: '$sm',
    background: '$divider',
    height: '2px',
    width: '100%',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: 0,
}) ;

export const ContentWrapperStyled = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
});