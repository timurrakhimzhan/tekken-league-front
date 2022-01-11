import TextArea from "../../../../shared/Form/TextArea";
import React, {ChangeEvent, useEffect, useState} from "react";
import Button from "../../../../shared/Button";
import {DeclineMatchFormStyledWrapper} from "./styled";
import {Form} from "../../../../shared/Form";
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {useParams} from "react-router-dom";
import {API_DECLINE_MATCH, API_GET_MATCH, API_MATCH_HISTORY} from "../../../../constants";
import {DeclineMatchReqBody} from "../../../../api/endpoints/match/types";
import {CustomAxiosError} from "../../../../api/types";
import API from "../../../../api";
import queryClient from "../../../../api/query-client";
import store from "../../../../store";
import useAuth from "../../../../hooks/use-auth";
import {DeclineMatchFormProps} from "./DeclineMatchForm.props";

type DeclineMatchForm = {
	comment: string;
}
const DeclineMatchForm: React.FC<DeclineMatchFormProps> = ({p1Username, p2Username}) => {
	const [comment, setComment] = useState<string>("");
	const useFormResult = useForm<DeclineMatchForm>({
		defaultValues: {
			comment: ""
		}
	});
	const {id} = useParams<{id: string}>()
	const {setError, handleSubmit} = useFormResult;
	const {mutateAsync, error, isLoading} = useMutation<void, CustomAxiosError, DeclineMatchReqBody>(
		[API_DECLINE_MATCH, id],
		(data) => API.match.actions.declineMatch(parseInt(id), data)
	);

	useEffect(() => {
		if(error?.response) {
			error.response.data.messages.forEach((message) => setError("comment", {message}));
		} else if(error) {
			setError("comment", {message: "SERVER_ERROR"})
		}
	}, [error]);

	const handleSubmitForm = async (values: DeclineMatchForm) => {
		await mutateAsync({
			comment: values.comment.trim().length > 0 ? values.comment.trim() : undefined
		});
		queryClient.invalidateQueries([API_GET_MATCH, id]);
		queryClient.invalidateQueries([API_MATCH_HISTORY, p1Username])
		queryClient.invalidateQueries([API_MATCH_HISTORY, p2Username])
		store.toaster.createMessage("Match was successfully declined", "success");
	}

	return <DeclineMatchFormStyledWrapper>
		<Form<DeclineMatchForm> useFormResult={useFormResult} onSubmit={handleSubmit(handleSubmitForm)}>
			<TextArea label={'Leave a comment:'}
								placeholder={'Let the opponent know the reason of your decline'}
								value={comment}
								onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}
								name={'comment'} className={'marginBottomMd'} />
			<Button color={'error'} isLoading={isLoading}>
				Decline
			</Button>
		</Form>

	</DeclineMatchFormStyledWrapper>
}

export default DeclineMatchForm;