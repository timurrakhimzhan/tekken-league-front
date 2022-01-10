import {useForm} from "react-hook-form";
import Button from "../../../shared/Button";
import React, {ChangeEvent, useEffect} from "react";
import {useMutation, useQuery} from "react-query";
import API from "../../../api";
import {yupResolver} from "@hookform/resolvers/yup";
import {registrationValidationSchema} from "../../../validation-schemas";
import {API_REGISTER} from "../../../constants";
import {RegistrationReqBody} from "../../../api/endpoints/user/types";
import {CharacterSelect, Form, Input, InputSteamUrl, Select} from "../../../shared/Form";
import {CustomAxiosError} from "../../../api/types";
import store from "../../../store";
import {RegistrationFormProps} from "./RegistrationForm.props";

type RegistrationForm = {
    username: string;
    email: string;
    steamUrl: string;
    character: {label: string; value: string} | null;
    password: string;
    confirmPassword: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({onSuccess}) => {
    const {mutateAsync, error, isLoading, reset: resetQuery} = useMutation<void, CustomAxiosError, RegistrationReqBody>(API_REGISTER, (values: RegistrationReqBody) => API.user.actions.register(values));
    const useFormResult = useForm<RegistrationForm>({
        defaultValues: {
            username: '',
            email: '',
            steamUrl: 'https://steamcommunity.com/',
            character: null,
            password: '',
            // otherInfo: '',
            confirmPassword: ''
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(registrationValidationSchema)
    });
    const {handleSubmit, setError, reset: resetForm} = useFormResult;

    const handleSubmitRegister = async (values: RegistrationForm) =>  {
        await mutateAsync({
            ...values,
            character: values.character!.value
        });
        onSuccess();
        store.toaster.createMessage("Registration successfully finished", "success");
        resetForm();
    }

    useEffect(() => {
        if(error?.response) {
            error.response.data.messages.forEach((message) => setError("username", {message}));
        } else if(error) {
            setError("username", {message: "SERVER_ERROR"})
        }
    }, [error])

    return <Form<RegistrationForm> onSubmit={handleSubmit(handleSubmitRegister)} useFormResult={useFormResult}>
        <Input label={'Username:'} type={'text'} name={'username'} placeholder={'RollTheDice'} />
        <Input label={'Email:'} type={'text'} name={'email'} placeholder={'tekken-league@twt.com'} />
        <InputSteamUrl label={'Steam profile URL:'} type={'text'} name={'steamUrl'} />
        <CharacterSelect label={'Main character'} placeholder={'Click to open the list'} name={'character'}/>
        <Input label={'Password:'} type={'password'} name={'password'} placeholder={'At least 6 characters'} />
        <Input label={'Confirm password:'} type={'password'} name={'confirmPassword'} placeholder={'At least 6 characters'} />
        <Button isLoading={isLoading} type={'submit'}>Register</Button>
    </Form>
}

export default RegistrationForm;