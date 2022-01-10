import React from "react";
import MatchInfoDetailsTable from "./MatchInfoDetailsTable";
import DecisionForms from "../DecisionForms";
import Typography from "../../../shared/Typography";

const MatchInfoDetails = () => {
	return <>
		<Typography className={'marginBottomLg marginLeftAuto marginRightAuto'} size={'xLg'} weight={'bold'} color={'primary'}>
			Match Info
		</Typography>
		<MatchInfoDetailsTable />
		<DecisionForms />
	</>
}

export default MatchInfoDetails;