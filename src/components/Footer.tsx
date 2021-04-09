import * as React from 'react';
import {
	Typography,
	Container,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme,
    Link
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			zIndex: 2,
			backgroundImage: "url('/images/background.png')",
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'top',
		},
		content: {
			padding: theme.spacing(3, 2),
			color: 'white',
			'& a:not(:hover)': {
				color: 'white',
			},
		},
	});
});


const Footer: React.FC = () => {

	const classes = useStyles(useTheme());

	return (
		<Paper
			className={classes.root}
		>
			<Container maxWidth='xl' className={classes.content}>
				<Typography variant="body2">
					© 2021 TricksterCodess: <Link
						href='https://github.com/tricksterCodess'
						underline='always'
					> gitHub</Link>  |  <Link
						href='https://gitconnected.com/tricksterCodess'
						underline='always'
					>gitConnected	</Link>
				</Typography>
			</Container>
		</Paper>

	)

};

export default Footer;
