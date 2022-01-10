import Flex from "../../../shared/Flex";
import {styled} from "../../../themes";

export const MyChallengesListWrapperStyled = styled(Flex, {
	flexDirection: 'row',
	flexWrap: 'wrap',
	overflowY: 'auto',
	width: '100%',
	paddingLeft: '$md',
	paddingRight: '$md',
	boxSizing: 'border-box',
	justifyContent: 'center',
	gap: '$md',
	columnGap: '$lg'
});