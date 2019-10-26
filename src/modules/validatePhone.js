import getValidationMessage from "./getValidationMessage";
export default function(value) {
	// possible valid formates

	// (+46) 0781938347		-> valid (add 0 to number are optional)
	// 0046768543621		-> valid
	// +46738729049			-> valid
	// +46012345678			-> invalid (there no lead number start by 0)
	// (46) 749002918		-> invalid (+ or 00 required)
	// (0046) 749-002918 	-> invalid (hyphen not supported)
	// 0046 0749 00 29 18 	-> invalid (splited not suported)

	const phoneConstrains = {
		required: true,
		zone: /^(\((\+|00)46\)|((\+|00)46))/,
		phone: /^(\((\+|00)46\)(\s0?)?|((\+|00)46))[1-9]\d{8}$/
	};

	const phoneErrors = {
		// zone: "only Swedish Phone number are valid please add +46 or 0046",
		// phone:
		// 	"Invalid Number! please enter a valid Swedish Phone number with +46."
	};

	return getValidationMessage(value, phoneConstrains, phoneErrors);
}
