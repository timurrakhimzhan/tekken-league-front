import Flex from "../../../../shared/Flex";
import Typography from "../../../../shared/Typography";
import {styled} from "../../../../themes";

export const MatchCardWrapperStyled = styled(Flex, {
	padding: '$sm',
	boxSizing: 'border-box',
	flex: 1,
	flexDirection: 'column',
	alignItems: 'center',
	borderLeft: '1px solid $warning',
	color: '$warning',
	borderRadius: '$sm',
	position: 'relative',
	background: 'hsl(0, 0%, 16%)',
	boxShadow: '5px 5px 5px -5px rgba(145, 152, 157, 0.6)',
	width: '300px',
	minWidth: '300px',
	maxWidth: '300px',
	variants: {
		category: {
			WIN: {
				borderLeft: '1px solid $success',
				color: '$success'
			},
			LOSE: {
				borderLeft: '1px solid $error',
				color: '$error'
			}
		}
	}
});

export const IdTypographyStyled = styled(Typography, {
	position: 'absolute',
	left: '$sm',
	top: '$sm'
})

export const DeltaTypographyStyled = styled(Typography, {
	fontSize: '8px',
	position: 'absolute',
	right: -18,
	top: 'auto',
	bottom: 'auto'
});