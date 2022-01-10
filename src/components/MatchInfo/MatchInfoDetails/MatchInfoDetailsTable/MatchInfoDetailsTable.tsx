import {useHistory, useParams} from "react-router-dom";
import Spinner from "../../../../shared/Spinner";
import MatchInfoDetailsTablePure from "./MatchInfoDetailsTable.pure";
import React from "react";
import useCurrentMatch from "../../../../hooks/query-hooks/use-current-match";
import useNavigationHandlers from "../../../../hooks/use-navigation-handlers";

const MatchInfoDetailsTable = () => {
	const {data} = useCurrentMatch();
	const {handleChallengeOpen, handleProfileOpen} = useNavigationHandlers();
	if(!data) {
		return <Spinner className={'marginLeftAuto marginRightAuto'} size={'md'} color={'primary'} />
	}
	return <MatchInfoDetailsTablePure match={data}
																		onPlayerClick={handleProfileOpen}
																		onChallengeClick={handleChallengeOpen}
	/>
}

export default MatchInfoDetailsTable;