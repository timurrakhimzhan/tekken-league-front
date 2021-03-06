import MyChallengesList from "../../../../components/MyChallenges/MyChallengesList";
import CreateChallengeForm from "../../../../shared/CreateChallengeForm";
import store from "../../../../store";
import Container from "../../../../shared/Container";
import {TabsWithContent} from "../../../../shared/TabsWithContent/TabsWithContent";
import Tabs from "../../../../shared/TabsWithContent/Tabs";
import Flex from "../../../../shared/Flex";
import TabsContent from "../../../../shared/TabsWithContent/TabsContent";
import React from "react";
import {ChallengeTabsContainerStyled, TabsContentWrapperStyled} from "./styled";

const ChallengeTabs = () => {
	const items = [{
		label: "My challenges",
		Component: MyChallengesList
	}, {
		label: "Create challenge",
		Component: () => <CreateChallengeForm onSuccess={() => store.toaster.createMessage("Challenge successfully created", "success")} />

	}]
	return <ChallengeTabsContainerStyled>
		<TabsWithContent items={items}>
			<Tabs />
			<TabsContentWrapperStyled className={'marginLeftAuto marginRightAuto'}>
				<TabsContent />
			</TabsContentWrapperStyled>
		</TabsWithContent>
	</ChallengeTabsContainerStyled>
}

export default ChallengeTabs;