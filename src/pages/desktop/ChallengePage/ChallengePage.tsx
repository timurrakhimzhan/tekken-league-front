import React from "react";
import MyChallenges from "../../../components/MyChallenges";
import CreateChallenge from "../../../components/CreateChallenge";
import {BrowserRouter, Route, Switch, useHistory, useLocation} from "react-router-dom";
import ChallengeInfo from "../../../components/ChallengeInfo";
import MyChallengesMin from "./MyChallengesMin";
import {useDesktopInfo} from "../../../hooks/use-media-query";


const ChallengePage = () => {
	const {isBigDesktop} = useDesktopInfo();

	return <>
		<Switch>
			<Route path={"/challenges"} exact component={() => <CreateChallenge className={'marginRightLg'} />} />
		</Switch>
		<Switch>
			<Route path={"/challenges"} component={isBigDesktop ? () => <MyChallenges /> : () => <MyChallengesMin />} />
		</Switch>
		<Switch>
			<Route path={"/challenges/:id"} exact component={() => <ChallengeInfo className={'marginLeftLg'} />} />
		</Switch>
	</>
}

export default ChallengePage;