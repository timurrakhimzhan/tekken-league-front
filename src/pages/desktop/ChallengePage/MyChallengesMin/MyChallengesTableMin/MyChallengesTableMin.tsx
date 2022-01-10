import React from "react";
import MyChallengesTable from "../../../../../components/MyChallenges/MyChallengesTable";
import {MY_CHALLENGES_HIDE_COLUMNS} from "../../../../../constants";

const MyChallengesTableMin = () => {
	return <MyChallengesTable columnsToHide={[MY_CHALLENGES_HIDE_COLUMNS.FIRST_TO]} />
}

export default MyChallengesTableMin;