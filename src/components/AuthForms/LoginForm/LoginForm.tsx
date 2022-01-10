import React, {useEffect} from "react"
import Button from "../../../shared/Button";
import {useForm} from "react-hook-form";
import {loginValidationSchema} from "../../../validation-schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import {useMutation} from "react-query";
import {API_LOGIN} from "../../../constants";
import {LoginReqBody, LoginRes} from "../../../api/endpoints/authentication/types";
import API from "../../../api";
import store from "../../../store";
import {useHistory} from "react-router-dom";
import { Form, Input } from "../../../shared/Form";
import Message from "../../../shared/Message";
import {CustomAxiosError} from "../../../api/types";
import useNavigationHandlers from "../../../hooks/use-navigation-handlers";

type LoginFormValues = {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const useFormResult = useForm({
        defaultValues: {
            username: '',
            password: ''
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(loginValidationSchema)
    });
    const {handleSubmit, setError} = useFormResult;

    const {mutateAsync, isLoading, error} = useMutation<LoginRes, CustomAxiosError, LoginReqBody>(API_LOGIN, (values: LoginReqBody) => API.authentication.actions.login(values));

    const {handleProfileOpen} = useNavigationHandlers();

    const handleSubmitLogin = async (values: LoginFormValues) =>  {
        const tokens = await mutateAsync(values);
        store.user.setCredentials(values.username, tokens);
        handleProfileOpen(values.username);
    }
    useEffect(() => {
        if(error?.response) {
            error.response.data.messages.forEach((message) => setError("username", {message}));
        } else if(error) {
            setError("username", {message: "SERVER_ERROR"})
        }
    }, [error])
    return <Form<LoginFormValues> onSubmit={handleSubmit(handleSubmitLogin)} useFormResult={useFormResult}>
        <Input label={'Username:'} type={'text'} name={'username'} placeholder={'RollTheDice'} />
        <Input label={'Password:'} type={'password'} name={'password'} placeholder={'Password'} />
        <Button type={'submit'} isLoading={isLoading}>
            Login
        </Button>
    </Form>
}

export default LoginForm;