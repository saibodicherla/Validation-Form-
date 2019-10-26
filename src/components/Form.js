import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import makeStyles from "@material-ui/styles/makeStyles";

// import created inputs
import InputSSN from "./InputSSN";
import SelectCountry from "./SelectCountry";
import SubmitButton from "./Submit";
import InputPhone from "./InputPhone";
import InputEmail from "./InputEmail";

// import { Button } from "@material-ui/core";

import store from "../store";
import fetchCountries from "../modules/fetchCountires";
import { onInit } from "../modules/events";

const useStyles = makeStyles({
	root: {},
	children: {
		// paddingBottom: "1rem",
		width: "100%"
	},
	submitChild: {
		paddingTop: "2rem"
	}
});

function handleChange(event) {
	// console.log("submit dread", store.getState());
}

function AppForm(props) {
	const classes = useStyles();

	const [, setLoaded] = useState(false);

	// fetch countries here
	// console.log(store,getState().countries); // test countries comes loaded from cache

	if (!store.getState().countries.length) {
		// console.log("SHOULD FECTH COUNTRIES HERE!");
		// initializing
		onInit();

		// fetch data
		fetchCountries().then(response => {
			// console.log("Has been Loaded", response);
			store.dispatch({
				payload: { data: response.data },
				type: "SET_COUNTRIES"
			});
			setLoaded(true);
		});
		return <CircularProgress />;
	}

	return (
		<form
			id="form"
			autoComplete="off"
			onChange={event => handleChange(event)}
			className={classes.root}
		>
			<Grid container direction="column" spacing={2}>
				<Grid item xs={12}>
					<Typography variant="body1">
						A Form Fields Goes Here
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<InputSSN className={classes.children} />
				</Grid>
				<Grid item xs={12}>
					<InputPhone className={classes.children} />
				</Grid>
				<Grid item xs={12}>
					<InputEmail className={classes.children} />
				</Grid>
				<Grid item xs={12}>
					<SelectCountry className={classes.children} />
				</Grid>
				<Grid
					container
					className={classes.submitChild}
					spacing={4}
					justify="center"
				>
					<SubmitButton />
				</Grid>
			</Grid>
		</form>
	);
}

export default AppForm;
