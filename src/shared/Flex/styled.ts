import {styled} from "../../themes";

export const FlexStyled = styled('div', {
	display: 'flex',
	variants: {
		direction: {
			row: {
				flexDirection: 'row'
			},
			column: {
				flexDirection: 'column'
			}
		},
		align: {
			center: {
				alignItems: 'center'
			},
			flexStart: {
				alignItems: 'flex-start'
			},
			flexEnd: {
				alignItems: 'flex-end'
			},
			spaceBetween: {
				alignItems: 'space-between'
			}
		},
		justify: {
			center: {
				justifyContent: 'center'
			},
			flexStart: {
				justifyContent: 'flex-start'
			},
			flexEnd: {
				justifyContent: 'flex-end'
			},
			spaceBetween: {
				justifyContent: 'space-between'
			}
		},
		position: {
			static: {
				position: 'static'
			},
			relative: {
				position: 'relative'
			},
			absolute: {
				position: 'absolute'
			}
		}
	}
})