import React from "react";
import Typography from "../../../shared/Typography";
import {HeaderStyled, MenuItemStyled} from "./styled";
import ROUTES from "../routing";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";
import AuthProtected from "../../../shared/AuthProtected";
import store from "../../../store";
import {AiOutlineLogout} from "react-icons/all";
import IconWrapper from "../../../shared/IconWrapper";
import {useDeviceInfo} from "../../../hooks/use-media-query";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

const Header: React.FC = () => {
    const history = useHistory();
    const {handleProfileOpen, handleHomePageOpen, handleChallengesOpen} = useNavigationHandlers();
    const location = useLocation();
    const {username} = useAuth();
    return <HeaderStyled align={'center'}>
        <MenuItemStyled active={location.pathname === '/'} clickable onClick={handleHomePageOpen}>
            Home
        </MenuItemStyled>
        <AuthProtected>
            <MenuItemStyled active={location.pathname.includes('/matches')} clickable
                            onClick={() => handleProfileOpen(username!)}>
                Profile & Matches
            </MenuItemStyled>
        </AuthProtected>
        <AuthProtected>
            <MenuItemStyled active={location.pathname.includes('/challenges')} clickable
                            onClick={handleChallengesOpen}>
                Challenges
            </MenuItemStyled>
        </AuthProtected>
        <AuthProtected>
            <IconWrapper className={'marginLeftAuto marginTopAuto marginBottomAuto'} onClick={() => store.user.logout()}>
                <AiOutlineLogout title={'Log out'} size={'24px'} />
            </IconWrapper>
        </AuthProtected>

    </HeaderStyled>
}

export default Header;
