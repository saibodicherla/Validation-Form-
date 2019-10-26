import getValidationMessage from "./getValidationMessage";
import isValidSSN from "./isValidSSN";

//
//.exec("911452-6557").slice(1) // => [14, 15]

export default function(value) {
	// possible valid formates

	// validation has two ways

	// validate right date typed && validate right checksum

	// 19990241-1231 -> invalid formate you can;t

	const constrains = {
		required: true,
		format: value => {
			// const SSNFormatExp = /^(\d{0,2}\d\d)(\d\d)(\d\d)[-+]?\d{4}$/ // accept full year
			const SSNFormatExp = /^(\d\d)(\d\d)(\d\d)[-+]?\d{4}$/; // only last two digits of year
			if (!SSNFormatExp.test(value)) return false;

			const [year, month, day] = SSNFormatExp.exec(value)
				.slice(1)
				.map(v => parseInt(v, 10));

			// validate date of correct valid day
			if (
				!month ||
				month > 12 ||
				!day ||
				day > new Date(year || 0, month, 0).getDate()
			)
				return false;

			return true;
		},
		valid: value => isValidSSN(value)
	};

	const errors = {
		// format: "Invalid Format of SSN. please check it.",
		// valid: "Invalid SSN! please enter a valid swedish SSN."
	};

	return getValidationMessage(value, constrains, errors);
}
