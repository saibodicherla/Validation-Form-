import React, { useState } from "react";
import { connect } from "react-redux";

import TextField from "@material-ui/core/TextField";

import { onChangeSSN } from "../modules/events";

const InputSSN = ({ ssn, ...props }) => {
	// use render hook to update component after change
	const [, setRender] = useState(false);
	const renderToggle = () => setRender(prev => !prev);
	// debug
	// console.log("InputSSN Render", ssn, props);
	return (
		<TextField
			id="ssn-input"
			label="Social Security Number (SSN)"
			className={props.className}
			helperText={ssn.message}
			defaultValue={ssn.value}
			onChange={event => changeHandle(event, props, renderToggle)}
			required
			error={!ssn.valid}
		/>
	);
};

function changeHandle(event, props, reRender) {
	onChangeSSN(event, props, reRender);
}

// here word our stores, reducers & validations
const mapProps = ({ ssn }) => ({ ssn });

export default connect(mapProps)(InputSSN);
