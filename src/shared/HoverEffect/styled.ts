import {styled} from "../../themes";

export const HoverEffectStyled = styled('div', {
    '&:hover': {
        transform: 'scale(1.1)'
    },
    variants: {
        display: {
            inlineBlock: {
                display: 'inline-block'
            }
        },
        size: {
            sm: {
                fontSize: '$sm'
            },
            md: {
                fontSize: '$md',
            },
            lg: {
                fontSize: '$lg'
            },
            xLg: {
                fontSize: '$xLg'
            }
        },
    }
});
