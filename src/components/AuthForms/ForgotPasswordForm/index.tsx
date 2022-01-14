import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import API from "../../../api";
import { ForgotPasswordReqBody } from "../../../api/endpoints/authentication/types";
import { CustomAxiosError } from "../../../api/types";
import { API_FORGOT_PASSWORD } from "../../../constants";
import Button from "../../../shared/Button";
import { Form, Input } from "../../../shared/Form";
import { forgotPasswordValidationSchema } from "../../../validation-schemas";

type ForgotPasswordValues = {
  username: string;
};

const ForgotPasswordForm: React.FC = () => {
  const useFormResult = useForm({
    defaultValues: {
      username: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(forgotPasswordValidationSchema),
  });
  const { handleSubmit, setError } = useFormResult;

  const { mutateAsync, isLoading, error } = useMutation<
    void,
    CustomAxiosError,
    ForgotPasswordReqBody
  >(API_FORGOT_PASSWORD, (values: ForgotPasswordReqBody) =>
    API.authentication.actions.forgotPassword(values)
  );

  const handleSubmitForgot = async (values: ForgotPasswordValues) => {
    await mutateAsync(values);
  };
  useEffect(() => {
    if (error?.response) {
      error.response.data.messages.forEach((message) =>
        setError("username", { message })
      );
    } else if (error) {
      setError("username", { message: "SERVER_ERROR" });
    }
  }, [error]);
  return (
    <Form<ForgotPasswordValues>
      onSubmit={handleSubmit(handleSubmitForgot)}
      useFormResult={useFormResult}
    >
      <Input
        label={"Username:"}
        type={"text"}
        name={"username"}
        placeholder={"RollTheDice"}
      />
      <Button type={"submit"} isLoading={isLoading}>
        Reset Password
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
