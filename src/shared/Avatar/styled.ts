import {styled} from "../../themes";

export const AvatarStyled = styled('img', {
    width: '150px',
    height: '150px',
    borderRadius: '75px',
    boxShadow: 'inset 0 3px 12px black',
    variants: {
        size: {
            sm: {
                width: '75px',
                height: '75px',
            },
            md: {
                width: '150px',
                height: '150px',
            }
        }
    }
});

