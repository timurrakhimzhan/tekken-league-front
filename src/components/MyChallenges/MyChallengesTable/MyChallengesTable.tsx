import Spinner from "../../../shared/Spinner";
import React from "react";
import MyChallengesTablePure from "./MyChallengesTable.pure";
import {useHistory, useLocation} from "react-router-dom";
import useMyChallenges from "../../../hooks/query-hooks/use-my-challenges";
import {MyChallengesTableProps} from "./MyChallengesTable.props";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

const MyChallengesTable: React.FC<MyChallengesTableProps> = ({columnsToHide}) => {
	const {data, isLoading} = useMyChallenges();
	const {handleProfileOpen, handleChallengeOpen} = useNavigationHandlers();
	if(!data || isLoading) {
		return <Spinner color={'primary'} size={'md'} />
	}
	return <MyChallengesTablePure items={data.items}
																onChallengeClick={handleChallengeOpen}
																onPlayerClick={handleProfileOpen}
																columnsToHide={columnsToHide || []}
	/>
}

export default MyChallengesTable;