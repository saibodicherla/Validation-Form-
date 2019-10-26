import React, { useState } from "react";
import { connect } from "react-redux";

import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { onChangeCountry } from "../modules/events";

// here word our stores, reducers & validations
const SelectCountry = ({ country, countries, ...props }) => {
	// use render hook to update component after change
	const [, setRender] = useState(false);
	const renderToggle = () => setRender(prev => !prev);

	// debugger
	// console.log("InputSelect Render", country, props);

	//render component

	return (
		<FormControl className={props.className} error={!country.valid}>
			<InputLabel htmlFor="country-input">country</InputLabel>
			{
				<Select
					value={country.value || "-"}
					onChange={event => handleChange(event, props, renderToggle)}
					name="country"
					// renderValue={value => `${value}`}
					inputProps={{
						id: "country-input"
					}}
				>
					<MenuItem value={"-"} disabled>
						Choose Country
					</MenuItem>
					{countries.map((data, i) => (
						<MenuItem
							// onClickCapture={event =>
							// handleChange(event, country.countries[i], props)
							// }
							key={i}
							value={data.alpha2Code}
						>
							{data.name}
						</MenuItem>
					))}
				</Select>
			}
			<FormHelperText>{!country.valid && country.message}</FormHelperText>
		</FormControl>
	);
};

function handleChange(event, props, renderToggle) {
	// get handler from events who work with store independly
	onChangeCountry(event, props, renderToggle);
}

// merge props of store with component
const mapProps = ({ country, countries }) => ({ country, countries });

// set up required props as declared in top
export default connect(mapProps)(SelectCountry);
