import * as yup from "yup";

const resetPasswordValidationSchema = yup.object({
  resetToken: yup.string().required("Missing reset token"),
  newPassword: yup
    .string()
    .required("New Password is a required field")
    .min(6, "Password should contain at least 6 characters")
    .max(30, "Password can not contain more than 30 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords do not match"),
});

export default resetPasswordValidationSchema;
