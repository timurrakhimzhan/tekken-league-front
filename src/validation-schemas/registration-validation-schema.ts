import * as yup from "yup";

const usernameRegEx = /^[a-zA-Z0-9_.]{3,}$/;
const passwordRegEx = /^[*]{6,}/

const registrationValidationSchema = yup.object().shape({
    username: yup.string()
        .required("Username is a required field")
        .matches(usernameRegEx, "Username can only contain letters, digits, dot and underscore")
        .min(3, "Username should contain at least 3 characters")
        .max(20, "Username can not contain more than 20 characters"),
    email: yup.string()
        .required("Email is a required field")
        .email("Email is invalid"),
    steamUrl: yup.string()
        .required("Steam Profile URL is a required field")
        .min(28, 'Steam Profile URL is a required field')
        .max(100, 'Steam Profile URL is too long'),
    character: yup.object({}).nullable(false).typeError('You should pick your main character'),
    password: yup.string()
        .required("Password is a required field")
        .min(6, "Password should contain at least 6 characters")
        .max(30, "Password can not contain more than 30 characters")
    ,
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords does not match'),
});

export default registrationValidationSchema;