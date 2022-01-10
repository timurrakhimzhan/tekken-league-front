import React from "react";
import {Route, Switch,} from "react-router-dom";
import ChallengeInfo from "../../../components/ChallengeInfo";
import ChallengeTabs from "./ChallengeTabs";

const ChallengePage = () => {
	return <Switch>
		<Route path={'/challenges'} component={() => <ChallengeTabs />} exact />
		<Route path={'/challenges/:id'} component={() => <ChallengeInfo />} exact />
	</Switch>
}

export default ChallengePage;