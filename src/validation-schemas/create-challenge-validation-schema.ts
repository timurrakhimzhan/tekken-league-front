import * as yup from "yup";

const createChallengeValidationSchema = yup.object().shape({
	opponent: yup.object({}).nullable(false).typeError('You should pick your opponent'),
	firstTo: yup.number()
		.typeError("First to is a required field")
		.min(1, "It is not possible to play ft0 or less")
		.max(30, "Please challenge your opponent with ft30 or less"),
	comment: yup.string(),
});

export default createChallengeValidationSchema;