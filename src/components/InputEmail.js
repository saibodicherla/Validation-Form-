import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import { onChangeEmail } from "../modules/events";

const InputEmail = ({ email, ...props }) => {
	// use render hook to update component after change
	const [, setRender] = useState(false);
	const renderToggle = () => setRender(prev => !prev);
	// debug
	// console.log("InputEmail Render", email, props);
	return (
		<TextField
			id="email-input"
			name="email"
			type="email"
			label="Email"
			helperText={email.message}
			defaultValue={email.value}
			className={props.className}
			onChange={event => changeHandle(event, props, renderToggle)}
			required
			error={!email.valid}
		/>
		);
};

function changeHandle(event, props, reRender) {
	onChangeEmail(event, props, reRender);
}

// here word our stores, reducers & validations
const mapProps = ({ email }) => ({ email });

export default connect(mapProps)(InputEmail);
