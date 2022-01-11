import { Form, Input, Select, UserSelect} from "../Form";
import TextArea from "../Form/TextArea";
import Button from "../Button";
import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {CreateChallengeFormProps} from "./CreateChallengeForm.props";
import API from "../../api";
import {yupResolver} from "@hookform/resolvers/yup";
import {createChallengeValidationSchema} from "../../validation-schemas";
import {useMutation} from "react-query";
import {CreateChallengeBody} from "../../api/endpoints/challenge/types";
import {API_CREATE_CHALLENGE, API_GET_CHALLENGES} from "../../constants";
import {CustomAxiosError} from "../../api/types";
import Message from "../Message";
import queryClient from "../../api/query-client";

type CreateChallengeForm = {
	opponent: {label: string; value: string} | null;
	firstTo: number;
	comment: string;
}

const CreateChallengeForm: React.FC<CreateChallengeFormProps> = ({opponent, onSuccess}) => {
	const useFormResult = useForm<CreateChallengeForm>({
		defaultValues: {
			opponent: opponent ? {value: opponent, label: opponent} : null,
			firstTo: 0,
			comment: ""
		},
		resolver: yupResolver(createChallengeValidationSchema),
		reValidateMode: "onSubmit"
	});
	const {handleSubmit, reset: resetForm, setError} = useFormResult;
	const {mutateAsync, isLoading, error} = useMutation<void, CustomAxiosError, CreateChallengeBody>(API_CREATE_CHALLENGE, API.challenge.actions.createChallenge);

	useEffect(() => {
		if(error?.response) {
			error.response.data.messages.forEach((message) => setError("firstTo", {message}));
		} else if(error) {
			setError("firstTo", {message: "SERVER_ERROR"})
		}
	}, [error])

	const handleSubmitForm = async (values: CreateChallengeForm) => {
		const {comment, opponent, firstTo} = values;
		await mutateAsync({
			comment: comment.trim().length > 0 ? comment : undefined,
			firstTo,
			opponentUsername: opponent!.value
		});
		queryClient.invalidateQueries(API_GET_CHALLENGES);
		resetForm();
		if(onSuccess) {
			onSuccess();
		}
	}
	return <Form<CreateChallengeForm> onSubmit={handleSubmit(handleSubmitForm)} useFormResult={useFormResult}>
		<UserSelect label={"Opponent:"} name={"opponent"} placeholder={"Select your opponent"} />
		<Input label={"First to:"} type={"number"} name={"firstTo"} placeholder={"3"} />
		<TextArea rows={4} label={"Comment"} name={"comment"} placeholder={"Leave a comment to your request"} />
		<Button isLoading={isLoading} type={'submit'}>Challenge</Button>
	</Form>
}

export default CreateChallengeForm;