import * as React from 'react';
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
			backgroundImage: "url('/images/background.png')",
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'top',
		},
	});
});


const Footer: React.FC = () => {

	const classes = useStyles(useTheme());

	return (
		<Paper
			className={classes.root}
		>
			<Container maxWidth="md" className={classes.content}>
				<Typography variant="body2" style={{ color: "#ffffff" }}>
					© 2021 TricksterCodess
					</Typography>
			</Container>
		</Paper>

	)

};

export default Footer;
