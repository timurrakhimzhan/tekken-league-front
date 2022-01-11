import {useHistory, useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {API_GET_CHALLENGE} from "../../../../constants";
import API from "../../../../api";
import Spinner from "../../../../shared/Spinner";
import React from "react";
import ChallengeInfoDetailsTablePure from "./ChallengeInfoDetailsTable.pure";
import {useSnapshot} from "valtio";
import store from "../../../../store";
import useAuth from "../../../../hooks/use-auth";
import useNavigationHandlers from "../../../../hooks/use-navigation-handlers";

const ChallengeInfoDetailsTable = () => {
	const {id} = useParams<{id: string}>();
	const {username} = useAuth();
	const {handleMatchOpen, handleProfileOpen} = useNavigationHandlers();
	const {isLoading, data} = useQuery([API_GET_CHALLENGE, id], () => API.challenge.actions.getChallenge(parseInt(id)));
	if(!data || isLoading || !username) {
		return <Spinner className={'marginRightAuto marginLeftAuto'} color={'primary'} size={'md'} />
	}
	return <ChallengeInfoDetailsTablePure challengeInfo={data} username={username}
																				onMatchClick={(id: number) => handleMatchOpen(username, id)}
																				onPlayerClick={(username: string) => handleProfileOpen(username)} />
}

export default ChallengeInfoDetailsTable;