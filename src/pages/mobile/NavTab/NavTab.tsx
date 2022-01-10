import React from "react";
import Flex from "../../../shared/Flex";
import {styled} from "../../../themes";
import {
	AiOutlineHome,
	AiOutlineMail,
	BsSearch,
	FaFistRaised,
	GiFist, GiGrenade, GrThreats,
	HiOutlineMenu,
	IoPersonOutline
} from "react-icons/all";
import {GiBroadsword} from "react-icons/gi";
import {RiSwordFill} from "react-icons/ri";
import ChallengeIcon from "../../../shared/ChallengeIcon";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";
import useAuth from "../../../hooks/use-auth";
import AuthProtected from "../../../shared/AuthProtected";
import UnAuthProtected from "../../../shared/UnAuthProtected";
import {useLocation} from "react-router-dom";

const NavTabWrapperStyled = styled(Flex, {
	width: '100%',
	height: '$headerHeight',
	borderTop: '1px solid white',
	boxSizing: 'border-box',
	justifyContent: 'space-evenly',
	padding: '$md'
});

const NavItemWrapperStyled = styled(Flex, {
	padding: '$md',
	alignItems: 'center',
	justifyContent: 'center',
	"& svg": {
		display: 'block',
		width: '16px',
		height: '16px',
	},
	"& path": {
		fill: "$textSecondary",
	},
	color: '$textSecondary',
	variants: {
		active: {
			true: {
				"& path": {
					fill: "$secondary",
				},
				color: '$secondary'
			}
		}
	}
})

const VerticalDividerStyled = styled('div', {
	height: '100%',
	width: '1px',
	background: '$divider'
});

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
			<NavItemWrapperStyled onClick={() => handleProfileOpen(username!)} active={location.pathname.includes('/profile')}>
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