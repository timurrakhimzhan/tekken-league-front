import Container from "../../shared/Container";
import Flex from "../../shared/Flex";
import {styled} from "../../themes";

export const TabsContentWrapperStyled = styled(Flex, {
	maxWidth: '400px',
	width: '100%',
	minWidth: '300px',
	overflowY: 'auto',
	flex: 1,
	justifyContent: 'center'
});

export const ProfileSearchTabsContainerStyled = styled(Container, {
	flex: 1,
	flexDirection: 'column',
	height: '100%',
	maxWidth: '400px',
	boxSizing: 'border-box',
});