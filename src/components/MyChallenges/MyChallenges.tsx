import {MyChallengesContainerStyled} from "./styled";
import MyChallengesTable from "./MyChallengesTable";
import React from "react";
import Typography from "../../shared/Typography";
import {MyChallengesProps} from "./MyChallenges.props";
import {useDeviceInfo} from "../../hooks/use-media-query";
import MyChallengesList from "./MyChallengesList";

const MyChallenges: React.FC<MyChallengesProps> = (props) => {
	const {isDesktop} = useDeviceInfo();
	return <MyChallengesContainerStyled align={'center'} direction={'column'} desktop={isDesktop} {...props}>
		<Typography className={'marginBottomLg'} color={'primary'} size={'xLg'} weight={'bold'}>
			My Challenges
		</Typography>
		{isDesktop ? <MyChallengesTable /> : <MyChallengesList />}
	</MyChallengesContainerStyled>
}

export default MyChallenges;