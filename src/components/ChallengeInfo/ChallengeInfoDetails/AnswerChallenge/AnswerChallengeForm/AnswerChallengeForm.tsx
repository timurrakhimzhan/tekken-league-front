import React, {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import TextArea from "../../../../../shared/Form/TextArea";
import Button from "../../../../../shared/Button";
import { AnswerChallengeFormWrapperStyled, ButtonsWrapperStyled } from "./styled";
import Message from "../../../../../shared/Message";
import {useMutation} from "react-query";
import {
	API_CHANGE_CHALLENGE_STATUS,
	API_GET_CHALLENGE,
	API_GET_CHALLENGES,
	API_MATCH_HISTORY
} from "../../../../../constants";
import API from "../../../../../api";
import {CustomAxiosError} from "../../../../../api/types";
import {ChallengeStatus, ChangeChallengeStatusBody} from "../../../../../api/endpoints/challenge/types";
import {useParams} from "react-router-dom";
import queryClient from "../../../../../api/query-client";
import {useSnapshot} from "valtio";
import store from "../../../../../store";
import useAuth from "../../../../../hooks/use-auth";

const AnswerChallengeForm = () => {
	const [errorMessages, setErrorMessages] = useState<Array<string>>([]);
	const [formState, setFormState] = useState<{comment: string; confirmation: Exclude<ChallengeStatus, "PENDING"> | null}>({
		comment: "",
		confirmation: null
	});
	const {username} = useAuth();
	const {id} = useParams<{id: string}>();
	const {mutateAsync, isLoading, error} = useMutation<void, CustomAxiosError, ChangeChallengeStatusBody>(
		[API_CHANGE_CHALLENGE_STATUS, id],
		(values) => API.challenge.actions.changeChallengeStatus(parseInt(id), values)
	);

	useEffect(() => {
		if(!formState.confirmation) {
			return;
		}
		mutateAsync({
			confirmation: formState.confirmation,
			comment: formState.comment.trim().length > 0 ? formState.comment.trim() : undefined
		})
		.then(() => {
			queryClient.invalidateQueries([API_GET_CHALLENGE, id])
			queryClient.invalidateQueries([API_MATCH_HISTORY, username])
			queryClient.invalidateQueries(API_GET_CHALLENGES);
		})
		.then(() => {
			if(formState.confirmation === "ACCEPTED") {
				return store.toaster.createMessage("The challenge was successfully accepted", "success")
			}
			return store.toaster.createMessage("The challenge was successfully rejected", "success")
		});

	}, [formState.confirmation]);

	useEffect(() => {
		if(error?.response) {
			const messages = error.response.data.messages;
			setErrorMessages(messages);
		}
	}, [error])

	return <AnswerChallengeFormWrapperStyled>
		<TextArea label={'Leave a comment:'}
							placeholder={'Let the opponent know the reason of your answer'}
							value={formState.comment}
							onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setFormState((prev) => ({...prev, comment: event.target.value}))}
							name={'comment'} className={'marginBottomMd'} rows={4} />
		{errorMessages.length ? <Message className={'marginBottomMd'} messages={errorMessages} variant={"error"} onClose={() => setErrorMessages([])} /> : null}
		<ButtonsWrapperStyled>
			<Button color={'success'} className={'flex1 marginRightMd'}
							onClick={!isLoading ? () => setFormState(prev => ({...prev, confirmation: "ACCEPTED"})) : undefined}
							isLoading={isLoading && formState.confirmation === "ACCEPTED"} >
				Accept
			</Button>
			<Button color={'error'} className={'flex1'}
							onClick={!isLoading ? () => setFormState(prev => ({...prev, confirmation: "REJECTED"})) : undefined}
							isLoading={isLoading && formState.confirmation === "REJECTED"}>
				Reject
			</Button>
		</ButtonsWrapperStyled>
	</AnswerChallengeFormWrapperStyled>
}

export default AnswerChallengeForm;