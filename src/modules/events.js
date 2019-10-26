import store from "../store";
import getIsValid from "../store/selectros/getIsValid";

export const onChangeHandler = name => async (event, props, reRender) => {
	// keep prevent default to sure know events
	// event.preventDefault();

	let states = store.getState();

	// get hooks from components
	let oldValue = states[name].value;
	let value = event.target.value;
	// let defaultValue = states.storage.data.country;

	if (value !== oldValue) {
		// check value and validate it

		await store.dispatch({
			type: "SET_DATA",
			payload: { name, data: { value } }
		});

		await store.dispatch({ type: "CHECK_VALID", payload: { name } });

		// save changes on local storage
		await store.dispatch({ type: "SAVE_STORAGE" });

		// force render by update
		reRender();
	}
};

export const onChangeSSN = async (event, props, reRender) => {
	event.preventDefault();
	let handler = onChangeHandler("ssn");
	await handler(event, props, reRender);
};

export const onChangePhone = async (event, props, reRender) => {
	event.preventDefault();
	let handler = onChangeHandler("phone");
	await handler(event, props, reRender);
};

export const onChangeEmail = async (event, props, reRender) => {
	event.preventDefault();
	let handler = onChangeHandler("email");
	await handler(event, props, reRender);
};

export const onChangeCountry = async (event, props, reRender) => {
	event.preventDefault();
	// create Handler
	let handler = onChangeHandler("country");
	// execute & wait handler
	await handler(event, props, reRender);
};

const resetForm = () => {
	// reset form HTML method
	if (typeof window && window.document) {
		// console.log("reset!!");
		window.document.querySelector("#form").reset();
	}
};

export const onSubmit = async (event, props) => {
	event.preventDefault(); // use to prevent form auto submit
	let states = store.getState();
	let isValidForm = getIsValid(states);

	// console.log("isValidForm", isValidForm);

	if (isValidForm) {
		// here we know this form are valid

		// we need to clear storage
		// after clear storage
		// this will clear form & storage
		await store.dispatch({ type: "CLEAR_ALL" });

		// now we can print success
		console.log("Success");

		// and finally a way to reset autofilled form
		resetForm();
	} else {
		// this not valid form mean we need check errors
		// because we have auto change error

		// but in first time the validation setted true
		await store.dispatch({ type: "CHECK_ALL" });
	}
};

export const onInit = async (event, props, reRender) => {
	// will initailizing state of data
	await store.dispatch({ type: "LOAD_STORAGE" });

	// check setted values validity
	let data = store.getState().storage.data;

	for (let name in data) {
		if (!!data[name]) {
			await store.dispatch({ type: "CHECK_VALID", payload: { name } });
		}
	}

};
