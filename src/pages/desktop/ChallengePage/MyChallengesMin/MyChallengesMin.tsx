import {MyChallengesContainerStyled} from "./styled";
import MyChallengesTableMin from "./MyChallengesTableMin";
import React from "react";
import Typography from "../../../../shared/Typography";

const MyChallengesMin = () => {
	return <MyChallengesContainerStyled>
		<Typography className={'marginBottomLg marginLeftAuto marginRightAuto'}  color={'primary'} size={'xLg'} weight={'bold'}>
			My Challenges
		</Typography>
		<MyChallengesTableMin />
	</MyChallengesContainerStyled>
}

export default MyChallengesMin;