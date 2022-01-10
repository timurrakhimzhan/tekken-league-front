import {styled} from "../../themes";

export const SpinnerStyled = styled('img', {
    width: '30px',
    height: '30px',
    background: 'none',
    variants: {
        size: {
            sm: {
                width: '30px',
                height: '30px',
            },
            md: {
                width: '70px',
                height: '70px',
            },
            lg: {
                width: '130px',
                height: '130px',
            },
            xLg: {
                width: '200px',
                height: '200px',
            }
        }
    }
});