import getValidationMessage from "./getValidationMessage";
export default function(value) {
	const EmailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // email validation RegExp

	// you can added here constrains for this
	const constrains = {
		required: true, // make it required
		email: EmailRegExp // chech email constrain
	};

	// desplayed errors related to constrain
	const errors = {
		// email constrain if failed well return this messsage
		email: "Invalid Email Format"
		// you can add default message if all constrains passes successfull
		// default : "Validated"
	};

	return getValidationMessage(value, constrains, errors);
}
