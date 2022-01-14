import ForgotPasswordForm from "../../../components/AuthForms/ForgotPasswordForm";
import React from "react";
import Container from "../../../shared/Container";
import { ForgotPasswordContainer } from "./styled";

const ForgotPasswordPage = () => {
  return (
    <ForgotPasswordContainer>
      <ForgotPasswordForm />
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage;
