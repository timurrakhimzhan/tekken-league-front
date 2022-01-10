import React, {ChangeEvent, useEffect} from "react";
import {useForm} from "react-hook-form";
import Button from "../../../../shared/Button";
import {yupResolver} from "@hookform/resolvers/yup";
import {changePasswordValidationSchema} from "../../../../validation-schemas";
import {Form, Input} from "../../../../shared/Form";
import {useMutation} from "react-query";
import {CustomAxiosError} from "../../../../api/types";
import {ChangePasswordReqBody} from "../../../../api/endpoints/user/types";
import {API_CHANGE_PASSWORD} from "../../../../constants";
import API from "../../../../api";
import store from "../../../../store";
import {ChangePasswordFormProps} from "./ChangePasswordForm.props";

type ChangePasswordForm = {
    oldPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({onSuccess}) => {
    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    }
    const useFormResult = useForm<ChangePasswordForm>({
        defaultValues: initialValues,
        resolver: yupResolver(changePasswordValidationSchema),
        reValidateMode: 'onSubmit'
    });

    const {setError, handleSubmit} = useFormResult;

    const {mutateAsync, error, isLoading} = useMutation<void, CustomAxiosError, ChangePasswordReqBody>(API_CHANGE_PASSWORD, API.user.actions.changePassword);

    const handleSubmitForm = async (values: ChangePasswordForm) => {
        await mutateAsync(values);
        store.toaster.createMessage("Password was successfully changes", "success");
        if(onSuccess) {
            onSuccess();
        }
        store.user.removeCredentials();
    }

    useEffect(() => {
        if(error?.response) {
            error.response.data.messages.forEach((message) => setError("oldPassword", {message}));
        } else if(error) {
            setError("oldPassword", {message: "SERVER_ERROR"})
        }
    }, [error])

    return <Form<ChangePasswordForm> onSubmit={handleSubmit(handleSubmitForm)} useFormResult={useFormResult}>
        <Input label={'Old password:'} type={'password'} name={'oldPassword'} />
        <Input label={'New password:'} type={'password'} name={'newPassword'} />
        <Input label={'Confirm new password:'} type={'password'} name={'confirmNewPassword'} />
        <Button isLoading={isLoading} type={'submit'}>Save</Button>
    </Form>
}

export default ChangePasswordForm;