import validateSSN from "../modules/validateSSN";
import validatePhone from "../modules/validatePhone";
import validateEmail from "../modules/validateEmail";
import validateCountry from "../modules/validateCountry";

import {
	DataStorageKey,
	CLEAR_ALL,
	CLEAR_STORAGE,
	CHECK_VALID,
	CHECK_ALL,
	SET_DATA,
	SET_COUNTRIES,
	LOAD_STORAGE,
	SAVE_STORAGE
} from "./constants";

/**
 * @description check validation of a value related to it's field available field are
 * @param {string} name a field name who will looking for validate it's value
 * @param {string} value a value for validate
 * @returns { { valid: Boolean, message : string } } state of validation & message if error
 */
function validate(name, value) {
	let validation;

	switch (name) {
		case "ssn":
			validation = validateSSN(value);
			break;

		case "phone":
			validation = validatePhone(value);
			break;
		case "email":
			validation = validateEmail(value);
			break;

		case "country":
			validation = validateCountry(value);
			break;

		default:
			validation = { valid: true };
	}

	const { valid, message } = validation;

	return {
		valid,
		message: valid ? "" : message || "Invalid Format"
	};
}

const storageGetter = {
	get data() {
		return JSON.parse(localStorage.getItem(DataStorageKey)) || {};
	}
};

const initialState = (data = storageGetter) => ({
	ssn: {
		value: data.ssn || "",
		message: "",
		valid: true
	},
	phone: {
		value: data.phone || "",
		message: "",
		valid: true
	},
	email: {
		value: data.email || "",
		message: "",
		valid: true
	},
	country: {
		value: data.country || "",
		message: "",
		valid: true
	},
	countries: [],
	storage: storageGetter
});

// general reducer
/**
 *
 * @param {readonly initialState()} state old state of store
 * @param {{ type : Enumerator<String>, readonly payload? : { name : string, data : any } }} action action with type, name of field & data targeted
 */
export default function reducers(state = initialState(), action) {
	let name, data, oldState, newState;
	switch (action.type) {
		case CHECK_VALID:
			name = action.payload.name;

			oldState = state[name];

			let { valid, message } = validate(name, oldState.value);

			newState = { ...oldState, valid, message };

			return {
				...state,
				[name]: newState
			};
		case CHECK_ALL:
			newState = {};
			["ssn", "phone", "email", "country"].forEach(name => {
				oldState = state[name];

				newState[name] = {
					...oldState,
					...validate(name, oldState.value)
				};
			});

			return { ...state, ...newState };
		case SET_DATA:
			name = action.payload.name;
			data = action.payload.data;

			oldState = state[name];
			newState = { ...oldState, ...data };

			return {
				...state,
				[name]: newState
			};
		case SET_COUNTRIES:
			return {
				...state,
				countries: action.payload.data
			};
		case SAVE_STORAGE:
			localStorage.setItem(
				DataStorageKey,
				JSON.stringify({
					ssn: state.ssn.value,
					phone: state.phone.value,
					email: state.email.value,
					country: state.country.value
				})
			);
			return state;
		case LOAD_STORAGE:
			return {
				...state,
				ssn: { ...state.ssn, value: state.storage.data.ssn || "" },
				phone: {
					...state.phone,
					value: state.storage.data.phone || ""
				},
				email: {
					...state.email,
					value: state.storage.data.email || ""
				},
				country: {
					...state.country,
					value: state.storage.data.country || ""
				}
			};
		case CLEAR_STORAGE:
			localStorage.removeItem(DataStorageKey);
			return state;
		case CLEAR_ALL:
			localStorage.removeItem(DataStorageKey);
			return (newState = {
				...initialState(),
				countries: state.countries
			});
		default:
			return state;
	}
}
