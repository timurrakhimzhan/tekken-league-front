import {styled} from "../../../themes";
import Flex from "../../../shared/Flex";

export const NavTabWrapperStyled = styled(Flex, {
	width: '100%',
	height: '$headerHeight',
	borderTop: '1px solid white',
	boxSizing: 'border-box',
	justifyContent: 'space-evenly',
	padding: '$md'
});

export const NavItemWrapperStyled = styled(Flex, {
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

export const VerticalDividerStyled = styled('div', {
	height: '100%',
	width: '1px',
	background: '$divider'
});