import Flex from "../../../shared/Flex";
import {styled} from "../../../themes";

export const MatchHistoryListWrapperStyled = styled(Flex, {
	flexDirection: 'row',
	flexWrap: 'wrap',
	overflowY: 'auto',
	width: '100%',
	paddingTop: '$md',
	paddingBottom: '$md',
	boxSizing: 'border-box',
	justifyContent: 'center',
	gap: '$md',
	columnGap: '$lg'
});