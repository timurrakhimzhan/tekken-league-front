import * as yup from "yup";

const forgotPasswordValidationSchema = yup.object({
  username: yup.string().required("Username is a required field"),
});

export default forgotPasswordValidationSchema;
