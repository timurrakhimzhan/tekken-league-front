
import {useLocation} from "react-router-dom";
import {ProfileSearchTabsProps} from "./ProfileSearchTabs.props";
import Profile from "../Profile";
import SearchPlayerForm from "../SearchPlayer/SearchPlayerForm";
import PlayerList from "../SearchPlayer/PlayerList";
import React, {useEffect, useState} from "react";
import Container from "../../shared/Container";
import {TabsWithContent} from "../../shared/TabsWithContent/TabsWithContent";
import { TabsContentWrapperStyled } from "./styled";
import Tabs from "../../shared/TabsWithContent/Tabs";
import TabsContent from "../../shared/TabsWithContent/TabsContent";
import Flex from "../../shared/Flex";

const ProfileSearchTabs: React.FC<ProfileSearchTabsProps> = (props) => {
	const items = [{
		label: "Profile",
		Component: () => <Profile className={'marginLeftAuto marginRightAuto kml'} />
	}, {
		label: "Search players",
		Component: () => <Flex direction={'column'} className={'flex1 height100'}>
			<SearchPlayerForm className={'marginBottomLg'} />
			<PlayerList />
		</Flex>
	}];

	const [tabIndex, setTabIndex] = useState(0);
	const location = useLocation();

	useEffect(() => {
		setTabIndex(0);
	}, [location]);

	return <Container direction={'column'} className={'flex1 height100'} {...props}>
		<TabsWithContent tabIndex={tabIndex} setTabIndex={setTabIndex} items={items}>
			<Tabs />
			<TabsContentWrapperStyled className={'marginLeftAuto marginRightAuto'}>
				<TabsContent />
			</TabsContentWrapperStyled>
		</TabsWithContent>
	</Container>
}

export default ProfileSearchTabs;