import React from "react";
import MyChallenges from "../../../components/MyChallenges";
import CreateChallenge from "../../../components/CreateChallenge";
import {Route, Switch,} from "react-router-dom";
import ChallengeInfo from "../../../components/ChallengeInfo";


const ChallengePage = () => {

	return <>
		<Switch>
			<Route path={"/challenges"} exact component={() => <CreateChallenge className={'marginRightLg'} />} />
		</Switch>
		<Switch>
			<Route path={"/challenges"} component={() => <MyChallenges />} />
		</Switch>
		<Switch>
			<Route path={"/challenges/:id"} exact component={() => <ChallengeInfo className={'marginLeftLg'} />} />
		</Switch>
	</>
}

export default ChallengePage;