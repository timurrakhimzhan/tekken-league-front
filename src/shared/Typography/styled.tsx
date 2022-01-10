import {styled} from "../../themes";

export const TypographyStyled = styled('span', {
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    variants: {
        size: {
            xSm: {
                fontSize: '$xSm',
            },
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
        color: {
            primary: {
                color: '$primary'
            },
            secondary: {
                color: '$secondary'
            },
            success: {
                color: '$success'
            },
            error: {
                color: '$error'
            },
            warning: {
                color: '$warning'
            }
        },
        variant: {
            primary: {
                color: '$textPrimary'
            },
            secondary: {
                color: '$textSecondary'
            }
        },
        weight: {
            thin: {
                fontFamily: '$thin'
            },
            regular: {
                fontFamily: '$regular'
            },
            bold: {
                fontFamily: '$bold'
            },
        },
        clickable: {
            true: {
                cursor: 'pointer'
            }
        },
        hoverable: {
            true: {
                transform: 'scale(5)',
                '&:hover': {
                    transform: 'scale(1.5)'
                }
            }
        }
    },
    fontFamily: '$default',
});