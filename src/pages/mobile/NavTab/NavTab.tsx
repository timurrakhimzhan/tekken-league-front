import React from "react";
import Flex from "../../../shared/Flex";
import {styled} from "../../../themes";
import {
	AiOutlineHome,
	IoPersonOutline
} from "react-icons/all";
import {GiBroadsword} from "react-icons/gi";
import ChallengeIcon from "../../../shared/ChallengeIcon";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";
import useAuth from "../../../hooks/use-auth";
import AuthProtected from "../../../shared/AuthProtected";
import UnAuthProtected from "../../../shared/UnAuthProtected";
import {useLocation} from "react-router-dom";
import { NavItemWrapperStyled, NavTabWrapperStyled, VerticalDividerStyled } from "./styled";

const NavTab = () => {
	const {handleHomePageOpen, handleProfileOpen, handleChallengesOpen, handleMatchesOpen, handleAuthOpen} = useNavigationHandlers();
	const {username} = useAuth();
	const location = useLocation();
	return <NavTabWrapperStyled>
		<NavItemWrapperStyled onClick={handleHomePageOpen} active={location.pathname === '/'}>
			<AiOutlineHome />
		</NavItemWrapperStyled>
		<UnAuthProtected>
			<VerticalDividerStyled />
			<NavItemWrapperStyled onClick={handleAuthOpen} active={location.pathname === '/auth'}>
				<IoPersonOutline />
			</NavItemWrapperStyled>
		</UnAuthProtected>
		<AuthProtected>
			<VerticalDividerStyled />
			<NavItemWrapperStyled onClick={() => handleProfileOpen(username!)} active={location.pathname === `/profile/${username}`}>
				<IoPersonOutline />
			</NavItemWrapperStyled>
		</AuthProtected>
		<AuthProtected>
			<VerticalDividerStyled />
			<NavItemWrapperStyled onClick={() => handleMatchesOpen(username!)} active={location.pathname.includes('/matches')}>
				<GiBroadsword />
			</NavItemWrapperStyled>
		</AuthProtected>
		<AuthProtected>
			<VerticalDividerStyled />
			<NavItemWrapperStyled onClick={handleChallengesOpen} active={location.pathname.includes('/challenges')}>
				<ChallengeIcon />
			</NavItemWrapperStyled>
		</AuthProtected>



	</NavTabWrapperStyled>
}

export default NavTab;