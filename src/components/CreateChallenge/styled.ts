import {styled} from "../../themes";
import Container from "../../shared/Container";

export const CreateChallengeContainerStyled = styled(Container, {
	width: '300px',
	variants: {
		mobile: {
			true: {
				width: 'auto',
				flex: 1,
			}
		}
	}
});