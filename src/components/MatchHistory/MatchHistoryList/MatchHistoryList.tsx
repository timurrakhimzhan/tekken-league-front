import React from "react";
import MatchCard from "./MatchCard";
import useMatches from "../../../hooks/query-hooks/use-matches";
import Spinner from "../../../shared/Spinner";
import {MatchHistoryListWrapperStyled} from "./styled";
import {useHistory, useParams} from "react-router-dom";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";
import Typography from "../../../shared/Typography";

const MatchHistoryList = () => {
	const {data, isLoading} = useMatches();
	const {handleMatchOpen} = useNavigationHandlers();
	const { username } = useParams<{username: string}>();
	if(!data || isLoading) {
		return <Spinner size={'md'} color={'primary'} className={'marginLeftAuto marginRightAuto'} />
	}
	if(data.items.length === 0) {
		return <Typography weight={'thin'}>
			No matches has been played yet
		</Typography>
	}
	return <MatchHistoryListWrapperStyled>
		{
			data.items.map((item) => <MatchCard onClick={() => handleMatchOpen(username, item.id)} key={item.id} match={item} />)
		}
	</MatchHistoryListWrapperStyled>
}

export default MatchHistoryList;