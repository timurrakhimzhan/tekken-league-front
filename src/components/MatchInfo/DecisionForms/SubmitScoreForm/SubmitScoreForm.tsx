import React, {useEffect} from "react";
import {SubmitScoreFormWrapperStyled, ScoreInputsWrapperStyled} from "./styled";
import {Form, Input} from "../../../../shared/Form";
import {SubmitScoreFormProps} from "./SubmitScoreForm.props";
import {useForm} from "react-hook-form";
import Button from "../../../../shared/Button";
import {yupResolver} from "@hookform/resolvers/yup";
import {submitScoreValidationSchema} from "../../../../validation-schemas";
import Link from "../../../../shared/Link";
import {useMutation} from "react-query";
import {CustomAxiosError} from "../../../../api/types";
import {DeclineMatchReqBody, SubmitScoreReqBody} from "../../../../api/endpoints/match/types";
import {API_DECLINE_MATCH, API_GET_MATCH, API_MATCH_HISTORY, API_MATCH_SUBMIT_SCORE} from "../../../../constants";
import API from "../../../../api";
import {useParams} from "react-router-dom";
import queryClient from "../../../../api/query-client";
import store from "../../../../store";

type SubmitScoreForm = {
	p1Score: number;
	p2Score: number;
}

const SubmitScoreForm: React.FC<SubmitScoreFormProps> = ({p1Username, p2Username, firstTo}) => {
	const useFormResult = useForm<SubmitScoreForm>({
		defaultValues: {
			p1Score: 0,
			p2Score: 0
		},
		reValidateMode: 'onSubmit',
		resolver: yupResolver(submitScoreValidationSchema(firstTo))
	});
	const {setError, handleSubmit} = useFormResult;
	const {id} = useParams<{id: string}>()
	const {mutateAsync, error, isLoading} = useMutation<void, CustomAxiosError, SubmitScoreReqBody>(
		[API_MATCH_SUBMIT_SCORE, id],
		(data) => API.match.actions.submitScore(parseInt(id), data)
	);

	const handleSubmitForm = async (values: SubmitScoreForm) => {
		await mutateAsync(values);
		queryClient.invalidateQueries([API_GET_MATCH, id]);
		queryClient.invalidateQueries([API_MATCH_HISTORY, p1Username]);
		queryClient.invalidateQueries([API_MATCH_HISTORY, p2Username]);
		store.toaster.createMessage("Your score was successfully submitted", "success");
	}

	useEffect(() => {
		if(error?.response) {
			error.response.data.messages.forEach((message) => setError("p1Score", {message}));
		} else if(error) {
			setError("p1Score", {message: "SERVER_ERROR"})
		}
	}, [error]);

	return <SubmitScoreFormWrapperStyled>
		<Form<SubmitScoreForm> onSubmit={handleSubmit(handleSubmitForm)} useFormResult={useFormResult}>
			<ScoreInputsWrapperStyled className={'marginBottomMd'}>
				<Link>{p1Username}</Link>
				<Input type={'number'} name={'p1Score'} />
			</ScoreInputsWrapperStyled>
			<ScoreInputsWrapperStyled>
				<Link>{p2Username}</Link>
				<Input type={'number'} name={'p2Score'} />
			</ScoreInputsWrapperStyled>
			<Button type={'submit'} color={'success'} isLoading={isLoading}>
				Submit score
			</Button>
		</Form>
	</SubmitScoreFormWrapperStyled>
}

export default SubmitScoreForm;