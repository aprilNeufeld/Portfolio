import * as React from 'react';
import { Parallax } from 'react-parallax';
import {
	Typography,
	Container,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			zIndex: 2,
		},
		parallax: {
			flexGrow: 0,
			flexShrink: 1,
		},
		content: {
			padding: theme.spacing(3, 2),
		},
	});
});

const Footer: React.FC = () => {

	const classes = useStyles(useTheme());

	return (
		<Paper className={classes.root}>
			<Parallax bgImage={require("../images/background.png")} blur={1} strength={-100} className={classes.parallax}>
				<Container maxWidth="md" className={classes.content}>
					<Typography variant="body2" style={{ color: "#ffffff" }}>
						© 2021 TricksterCodess
					</Typography>
				</Container>
			</Parallax>
		</Paper>

	)

};

export default Footer;
