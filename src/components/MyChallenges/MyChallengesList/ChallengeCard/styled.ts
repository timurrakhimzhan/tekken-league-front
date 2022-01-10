import Flex from "../../../../shared/Flex";
import Typography from "../../../../shared/Typography";
import {styled} from "../../../../themes";

export const ChallengeCardWrapperStyled = styled(Flex, {
	padding: '$sm',
	boxSizing: 'border-box',
	flex: 1,
	flexDirection: 'column',
	alignItems: 'center',
	borderLeft: '1px solid $divider',
	borderRadius: '$sm',
	position: 'relative',
	background: 'hsl(0, 0%, 16%)',
	boxShadow: '5px 5px 5px -5px rgba(145, 152, 157, 0.6)',
	width: '270px',
	minWidth: '270px',
	maxWidth: '270px',
	variants: {
		status: {
			ACCEPTED: {
				borderLeft: '1px solid $success',
				color: '$success'
			},
			REJECTED: {
				borderLeft: '1px solid $error',
				color: '$error'
			},
			PENDING: {
				borderLeft: '1px solid $warning',
				color: '$warning'
			}
		}
	}
});

export const IdTypographyStyled = styled(Typography, {
	position: 'absolute',
	left: '$sm',
	top: '$sm'
})