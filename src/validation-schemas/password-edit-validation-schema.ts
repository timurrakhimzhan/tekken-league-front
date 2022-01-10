import * as yup from "yup";

const passwordEditValidationSchema = yup.object().shape({
    oldPassword:yup.string()
        .required("Password is a required field"),
    newPassword: yup.string()
        .required("New password is a required field")
        .min(6, "Password should contain at least 6 characters"),
    confirmNewPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords does not match'),
});

export default passwordEditValidationSchema;