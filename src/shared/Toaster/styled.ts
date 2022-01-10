import {styled} from "../../themes";

export const ToasterWrapperStyled = styled("div", {
	height: '$toasterHeight',
	maxWidth: '100%',
	boxSizing: 'border-box',
	width: '400px',
	position: 'absolute',
	padding: '$md',
	background: '$success',
	display: 'flex',
	alignItems: 'center',
	fontFamily: '$regular',
	fontSize: '$md',
	borderRadius: '$md',
	right: 'calc($sm + $xSm)',
	transition: 'all 0.3s ease',
	// justifyContent: 'center',
	variants: {
		variant: {
			success: {
				background: '$success',
			},
			error: {
				background: '$error',
				color: '$textPrimary',
			},
			warning: {
				background: '$warning'
			}
		}
	},
});

export const CloseIconWrapperStyled = styled('div', {
	position: 'absolute',
	top: '$sm',
	right: '$sm',
	fontSize: '$sm',
	color: '$backgroundSecondary',
	cursor: 'pointer',
});