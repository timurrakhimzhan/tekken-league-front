import React from "react";
import ChallengeCard from "./ChallengeCard";
import useMatches from "../../../hooks/query-hooks/use-matches";
import Spinner from "../../../shared/Spinner";
import {MyChallengesListWrapperStyled} from "./styled";
import useMyChallenges from "../../../hooks/query-hooks/use-my-challenges";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";
import Typography from "../../../shared/Typography";

const MyChallengesList = () => {
	const {data, isLoading} = useMyChallenges();
	const {handleChallengeOpen} = useNavigationHandlers();
	if(!data || isLoading) {
		return <Spinner size={'md'} color={'primary'} className={'marginLeftAuto marginRightAuto'} />
	}
	if(data.items.length === 0) {
		return <Typography weight={'thin'}>
			No challenges to you or of you were created yet
		</Typography>
	}
	return <MyChallengesListWrapperStyled>
		{
			data.items.map((item) => <ChallengeCard key={item.id} challenge={item}
																							onClick={() => handleChallengeOpen(item.id)} />)
		}
	</MyChallengesListWrapperStyled>
}

export default MyChallengesList;