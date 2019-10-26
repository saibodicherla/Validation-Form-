export default function(value, { required, ...constrains }, messages = {}) {
	// console.log("Test Value, ", value, required);
	if (required) {
		if (value === null || value === undefined || value.length === 0)
			return { valid: false, message: messages.required || "required" };
	}

	let invalid = "Invalid format";

	// we extends our constrains here
	// like maxLength & MinLength ...

	// look to regexp constrains
	for (let name in constrains) {
		let constrain = constrains[name];

		if (constrain instanceof RegExp && !constrain.test(value))
			return { valid: false, message: messages[name] || invalid };
		else if (typeof constrain == "function") {
			let res = constrain(value);
			if (!res)
				return {
					valid: false,
					message: messages[name] || invalid
				};
		} else if (!constrain) {
			return { valid: false, message: messages[name] || invalid };
		}
	}

	return { valid: true, message:messages.default || ""};
}
