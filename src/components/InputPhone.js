import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import { onChangePhone } from "../modules/events";

// here word our stores, reducers & validations
const InputPhone = ({ phone, ...props }) => {
	// use render hook to update component after change
	const [, setRender] = useState(false);
	const renderToggle = () => setRender(prev => !prev);
	// debug
	// console.log("InputPhone Render", phone, props);
	return (
		<TextField
			id="phone-input"
			label="Phone Number"
			helperText={phone.message}
			defaultValue={phone.value}
			onChange={event => changeHandle(event, props, renderToggle)}
			className={props.className}
			required
			error={!phone.valid}
		/>
	);
};

function changeHandle(event, props, reRender) {
	// get handler from events who work with store independly
	onChangePhone(event, props, reRender);
}

// here word our stores, reducers & validations
const mapProps = ({ phone }) => ({ phone });

export default connect(mapProps)(InputPhone);
