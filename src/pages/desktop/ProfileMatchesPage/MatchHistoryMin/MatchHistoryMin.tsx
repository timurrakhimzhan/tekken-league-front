import React from "react";
import {MatchHistoryMinContainerStyled} from "./styled";
import Typography from "../../../../shared/Typography";
import MatchHistoryTableMin from "./MatchHistoryTableMin";

const MatchHistoryMin = () => {
	return <MatchHistoryMinContainerStyled>
		<Typography className={'marginBottomLg marginLeftAuto marginRightAuto'}  color={'primary'} size={'xLg'} weight={'bold'}>
			Match History
		</Typography>
		<MatchHistoryTableMin />
	</MatchHistoryMinContainerStyled>
}

export default MatchHistoryMin;