import {Route, Switch} from "react-router-dom";
import MatchHistory from "../../../components/MatchHistory";
import MatchInfo from "../../../components/MatchInfo";
import React from "react";

const MatchesPage = () => {
	return <>
		<Switch>
			<Route path={"/matches/:username"} component={() => <MatchHistory/>} exact />
		</Switch>
		<Switch>
			<Route path={"/matches/:username/:id"} component={() => <MatchInfo />} exact />
		</Switch>
	</>
}

export default MatchesPage;