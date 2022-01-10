import * as yup from "yup";

const infoEditValidationSchema = yup.object().shape({
    steamUrl: yup.string()
        .required("Steam Profile URL is a required field").min(28, 'Steam Profile URL is a required field'),
    character: yup.object({}).nullable(false).typeError('You should pick your main character'),
});

export default infoEditValidationSchema
