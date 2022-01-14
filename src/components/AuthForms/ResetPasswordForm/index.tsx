import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import API from "../../../api";
import { ResetPasswordReqBody } from "../../../api/endpoints/authentication/types";
import { CustomAxiosError } from "../../../api/types";
import { API_RESET_PASSWORD } from "../../../constants";
import Button from "../../../shared/Button";
import { Form, Input } from "../../../shared/Form";
import { resetPasswordValidationSchema } from "../../../validation-schemas";

type ResetPasswordFormValues = {
  resetToken: string;
  newPassword: string;
  confirmPassword: string;
};
type ResetPasswordParams = {
  resetToken: string;
};

const ResetPasswordForm: React.FC = () => {
  const { resetToken } = useParams<ResetPasswordParams>();
  const useFormResult = useForm({
    defaultValues: {
      resetToken,
      newPassword: "",
      confirmPassword: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(resetPasswordValidationSchema),
  });
  const { handleSubmit, setError } = useFormResult;

  const { mutateAsync, isLoading, error } = useMutation<
    void,
    CustomAxiosError,
    ResetPasswordReqBody
  >(API_RESET_PASSWORD, (values: ResetPasswordReqBody) =>
    API.authentication.actions.resetPassword(values)
  );

  const handleSubmitForgot = async (values: ResetPasswordFormValues) => {
    await mutateAsync(values);
  };
  useEffect(() => {
    if (error?.response) {
      error.response.data.messages.forEach((message) =>
        setError("newPassword", { message })
      );
    } else if (error) {
      setError("newPassword", { message: "SERVER_ERROR" });
    }
  }, [error]);

  //TODO: verify token on 1st render??????????????????? lox

  return (
    <Form<ResetPasswordFormValues>
      onSubmit={handleSubmit(handleSubmitForgot)}
      useFormResult={useFormResult}
    >
      <Input
        label={"New Password:"}
        type={"password"}
        name={"newPassword"}
        placeholder={"New Password"}
      />
      <Input
        label={"Confirm Password:"}
        type={"password"}
        name={"confirmPassword"}
        placeholder={"Confirm Password"}
      />
      <Button type={"submit"} isLoading={isLoading}>
        Reset Password
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;
