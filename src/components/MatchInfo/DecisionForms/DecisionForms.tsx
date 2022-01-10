import React from "react"
import SubmitScoreForm from "./SubmitScoreForm";
import ConfirmScoreForm from "./ConfirmScoreForm";
import useCurrentMatch from "../../../hooks/query-hooks/use-current-match";
import {TabsWithContent} from "../../../shared/TabsWithContent/TabsWithContent";
import DeclineMatchForm from "./DeclineMatchForm";
import Tabs from "../../../shared/TabsWithContent/Tabs";
import TabsContent from "../../../shared/TabsWithContent/TabsContent";
import {DecisionFormsWrapperStyled, TabsContentWrapperStyled} from "./styled";
import useAuth from "../../../hooks/use-auth";
import Typography from "../../../shared/Typography";

type ScoreAssigned = {
	username: string;
	score: number;
}

const DecisionForms = () => {
	const {data} = useCurrentMatch({enabled: false});
	const {username} = useAuth();
	const isParticipant = data?.p1.username === username || data?.p2.username === username;

	if(!data || !isParticipant || data.status === "FINISHED" || data.status === "DECLINED") {
		return null;
	}

	if(data.status === "CONFIRMING_SCORE" && data.submittedBy === username) {
		return <>
			<Typography className={'marginBottomMd marginTopXLg'} color={'primary'} size={'lg'} weight={'bold'}>
				Decline match
			</Typography>
			<DecisionFormsWrapperStyled>
				<DeclineMatchForm p1Username={data.p1.username} p2Username={data.p2.username} />
			</DecisionFormsWrapperStyled>
		</>
	}
	if(data.status === "CONFIRMING_SCORE" && data.submittedBy !== username && data.p1.score && data.p2.score) {
		const items = [
			{ label: 'Confirm score', Component: () => <ConfirmScoreForm p1={data.p1 as ScoreAssigned} p2={data.p2 as ScoreAssigned} />},
			{ label: 'Decline match', Component: () => <DeclineMatchForm p1Username={data.p1.username} p2Username={data.p2.username} />}
		]
		return <>
			<DecisionFormsWrapperStyled className={'marginTopLg'}>
				<TabsWithContent items={items}>
					<Tabs />
					<TabsContentWrapperStyled className={'paddingTopXLg'}>
						<TabsContent />
					</TabsContentWrapperStyled>
				</TabsWithContent>
			</DecisionFormsWrapperStyled>
		</>
	}

	const items = [
		{ label: 'Submit score', Component: () => <SubmitScoreForm p1Username={data.p1.username} p2Username={data.p2.username} firstTo={data.firstTo} />},
		{ label: 'Decline match', Component: () => <DeclineMatchForm p1Username={data.p1.username} p2Username={data.p2.username} />}
	]
	return <>
		<DecisionFormsWrapperStyled className={'marginTopLg'}>
			<TabsWithContent items={items}>
				<Tabs />
				<TabsContentWrapperStyled className={'paddingTopXLg'}>
					<TabsContent />
				</TabsContentWrapperStyled>
			</TabsWithContent>
		</DecisionFormsWrapperStyled>
	</>
}

export default DecisionForms;