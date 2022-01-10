import Typography from "../../../../shared/Typography";
import AnswerChallengeForm from "./AnswerChallengeForm";
import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {API_GET_CHALLENGE} from "../../../../constants";
import {GetChallengeRes} from "../../../../api/endpoints/challenge/types";
import {useSnapshot} from "valtio";
import store from "../../../../store";
import useAuth from "../../../../hooks/use-auth";

const AnswerChallenge = () => {
	const {id} = useParams<{id: string}>();
	const {username} = useAuth();
	const {data, isFetching} = useQuery<GetChallengeRes>([API_GET_CHALLENGE, id]);
	if(data?.status !== "PENDING" || data?.challengedUsername !== username || isFetching) {
		return null;
	}
	return <>
		<Typography className={'marginBottomMd marginTopXLg'} color={'primary'} size={'lg'} weight={'bold'}>
			Answer the challenge
		</Typography>
		<AnswerChallengeForm />
	</>
}

export default AnswerChallenge;