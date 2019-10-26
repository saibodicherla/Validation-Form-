import React from "react";
import { makeStyles } from "@material-ui/styles";

// only used components
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Zoom from "@material-ui/core/Zoom";

import AppForm from "./components/Form";

// style used for destubution components
const useStyles = makeStyles(theme => ({
	root: {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center"
	},
	title: {
		paddingBottom: "1rem",
		textAlign: "center"
	},
	paper: {
		padding: "3rem",
		width: "100%" // of it's maximum width for look relax
	}
}));

function App() {
	const classes = useStyles();

	return (
		<Zoom in={true} timeout={300}>
			<Fade in={true} timeout={600}>
				<div style={{ position: "relative", height: "100%" }}>
					<Container maxWidth="sm" className={classes.root}>
						<Grid container justify="center">
							<Typography
								className={classes.title}
								color="primary"
								variant="h4"
							>
								{process.env.REACT_APP_NAME || "From App"}
							</Typography>
						</Grid>
						<Grid container justify="center">
							<Paper className={classes.paper}>
								<AppForm />
							</Paper>
						</Grid>
					</Container>
				</div>
			</Fade>
		</Zoom>
	);
}

export default App;
