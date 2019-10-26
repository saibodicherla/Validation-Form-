export default state =>
	state.ssn.valid &&
	!!state.ssn.value &&
	state.phone.valid &&
	!!state.phone.value &&
	state.email.valid &&
	!!state.email.value &&
	state.country.valid &&
	!!state.country.value;
