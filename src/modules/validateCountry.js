export default function(value) {
	// need to be set that's all
	return {
		valid: !!value,
		message: !value ? "Country required" : ""
	};
}
