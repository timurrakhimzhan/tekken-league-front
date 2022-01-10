import * as yup from "yup";

const submitScoreValidationSchema = (firstTo: number) => yup.object().shape({
	p1Score: yup.number()
		.typeError("First to is a required field")
		.min(0, "The minimum score is 0")
		.max(firstTo, "Your score can not be higher than the initial FT"),
	p2Score: yup.number()
		.typeError("First to is a required field")
		.min(0, "The minimum score is 0")
		.max(firstTo, "Your score can not be higher than the initial FT"),
});

export default submitScoreValidationSchema;