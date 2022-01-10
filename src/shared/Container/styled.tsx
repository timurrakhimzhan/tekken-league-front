import React from "react";
import {styled} from '../../themes';
import Flex from "../Flex";

export const ContainerStyled = styled(Flex, {
    padding: '$lg',
    boxSizing: 'border-box',
    backgroundColor: '$backgroundSecondary',
    color: '$textPrimary',
    display: 'flex',
    fontFamily: '$default',
    maxHeight: '100%',
    fontWeight: '$regular',
    borderRadius: '$md',
});