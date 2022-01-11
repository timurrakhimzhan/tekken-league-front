import Container from "../../../../shared/Container";
import Flex from "../../../../shared/Flex";
import {styled} from "../../../../themes";

export const TabsContentWrapperStyled = styled(Flex, {
	overflowY: 'auto',
	width: '100%',
});

export const ChallengeTabsContainerStyled = styled(Container, {
	flexDirection: 'column',
	maxWidth: '380px',
	boxSizing: 'border-box',

})