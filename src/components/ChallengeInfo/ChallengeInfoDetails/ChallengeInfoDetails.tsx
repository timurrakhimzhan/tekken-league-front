import React, {useState} from "react"
import ChallengeInfoDetailsTable from "./ChallengeInfoDetailsTable";
import AnswerChallenge from "./AnswerChallenge/AnswerChallenge";
import Typography from "../../../shared/Typography";

const ChallengeInfoDetails = () => {
	return <>
		<Typography className={'marginBottomLg marginLeftAuto marginRightAuto'}  color={'primary'} size={'xLg'} weight={'bold'}>
			Challenge information
		</Typography>
		<ChallengeInfoDetailsTable />
		<AnswerChallenge />
	</>
}

export default ChallengeInfoDetails;