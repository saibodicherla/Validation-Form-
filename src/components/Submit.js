import React, { useState } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import { onSubmit } from "../modules/events";
// import store from "../store";

const submit = async function(event, props, reRender) {
	await onSubmit(event, props, reRender);

	// console.log("Submit", store.getState());

	reRender();
};

function SubmitButton(props) {
	// use render hook to update component after change
	const [, setRender] = useState(false);
	const renderToggle = () => setRender(prev => !prev);

	// make validate
	// console.log("InputSubmit Render", store.getState());

	return (
		<Button
			type="submit"
			form="form"
			onClick={event => submit(event, props, renderToggle)}
			variant="contained"
			color="primary"
		>
			SUBMIT
		</Button>
	);
}

export default connect()(SubmitButton);
