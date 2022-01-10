import {styled} from "../../themes";

export const IconWrapperStyled = styled("div", {
	fontSize: '$xLg',
	color: '$textSecondary',
	cursor: 'pointer',
	'&:hover': {
		color: '$textPrimary',
	},
	padding: 0,
	'& svg': {
		display: 'block'
	}
	// variants: {
	// 	size: {
	// 		sm: $
	// 	}
	// }
});