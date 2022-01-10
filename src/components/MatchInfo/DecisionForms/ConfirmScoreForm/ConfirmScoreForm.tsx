import React, {useEffect, useState} from "react";
import {SubmitScoreFormWrapperStyled, ScoreInfoWrapperStyled, ButtonsWrapperStyled} from "./styled";
import {Form, Input} from "../../../../shared/Form";
import {ConfirmScoreFormProps} from "./ConfirmScoreFormProps";
import Button from "../../../../shared/Button";
import Link from "../../../../shared/Link";
import Typography from "../../../../shared/Typography";
import useAuth from "../../../../hooks/use-auth";
import {useParams} from "react-router-dom";
import {useMutation} from "react-query";
import {CustomAxiosError} from "../../../../api/types";
import {ChangeChallengeStatusBody} from "../../../../api/endpoints/challenge/types";
import {
	API_CHANGE_CHALLENGE_STATUS,
	API_CHANGE_SCORE_CONFIRMATION,
	API_GET_CHALLENGE, API_GET_MATCH, API_MATCH_HISTORY, API_PROFILE_INFO
} from "../../../../constants";
import API from "../../../../api";
import {ChangeScoreConfirmationReqBody} from "../../../../api/endpoints/match/types";
import Message from "../../../../shared/Message";
import queryClient from "../../../../api/query-client";
import store from "../../../../store";


const ConfirmScoreForm: React.FC<ConfirmScoreFormProps> = ({p1, p2}) => {
	const [confirmation, setConfirmation] = useState<"CONFIRMED" | "REJECTED" | null>(null);
	const [errorMessages, setErrorMessages] = useState<Array<string>>([]);
	const {id} = useParams<{id: string}>();
	const {mutateAsync, isLoading, error} = useMutation<void, CustomAxiosError, ChangeScoreConfirmationReqBody>(
		[API_CHANGE_SCORE_CONFIRMATION, id],
		(values) => API.match.actions.changeScoreConfirmation(parseInt(id), values)
	);

	useEffect(() => {
		if(!confirmation) {
			return;
		}
		mutateAsync({
			confirmation
		})
			.then(() => {
				queryClient.invalidateQueries([API_GET_MATCH, id])
				queryClient.invalidateQueries([API_MATCH_HISTORY, p1.username])
				queryClient.invalidateQueries([API_MATCH_HISTORY, p2.username])
				queryClient.invalidateQueries([API_PROFILE_INFO, p1.username])
				queryClient.invalidateQueries([API_PROFILE_INFO, p2.username])
			})
			.then(() => {
				if(confirmation === "CONFIRMED") {
					return store.toaster.createMessage("The match was successfully confirmed", "success")
				}
				return store.toaster.createMessage("The match was successfully rejected", "success")
			});

	}, [confirmation]);

	useEffect(() => {
		if(error?.response) {
			const messages = error.response.data.messages;
			setErrorMessages(messages);
		}
	}, [error]);

	return <SubmitScoreFormWrapperStyled>
		{errorMessages.length ? <Message className={'marginBottomMd'} messages={errorMessages} variant={"error"} onClose={() => setErrorMessages([])} /> : null}
		<ScoreInfoWrapperStyled className={'marginBottomXLg'}>
			<Link>{p1.username}</Link>
			<Typography size={'xLg'}>{p1.score} - {p2.score}</Typography>
			<Link>{p2.username}</Link>
		</ScoreInfoWrapperStyled>
		<ButtonsWrapperStyled>
			<Button isLoading={isLoading && confirmation === "CONFIRMED"} type={'submit'}
							color={'success'} className={'flex1 marginRightMd'}
							onClick={!isLoading ? () => setConfirmation("CONFIRMED") : undefined}>
				Confirm
			</Button>
			<Button isLoading={isLoading && confirmation === "REJECTED"} type={'submit'}
							color={'error'} className={'flex1'}
							onClick={!isLoading ? () => setConfirmation("REJECTED") : undefined}>
				Reject
			</Button>
		</ButtonsWrapperStyled>

	</SubmitScoreFormWrapperStyled>
}

export default ConfirmScoreForm;