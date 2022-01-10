import {styled} from "../../themes";

export const LinearLoaderStyled = styled('img', {
    width: '40px',
    background: 'none',
    variants: {
        size: {
            sm: {
                width: '30px',
            },
            md: {
                width: '70px',
            },
            lg: {
                width: '130px',
            },
            xLg: {
                width: '200px',
            }
        }
    }
});