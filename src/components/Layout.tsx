import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
	Container,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import HeaderContent from '../components/HeaderContent';
import { useAppDispatch, useApplicationState } from '../store';
import { fetchBlogPosts } from '../store/blogSlice';
import { fetchGists } from '../store/gistsSlice';
import { fetchUserData } from '../store/userSlice';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			marginTop: -10,
			marginBottom: -10,
			flexGrow: 1,
			display: 'flex',
			zIndex: 1,
			minHeight: 500,
		},
		paper: {
			flexGrow: 1,
			flexBasis: "auto",
			[theme.breakpoints.down('sm')]: {
				boxShadow: "none",
			},
		},
		content: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
			[theme.breakpoints.up('md')]: {
				paddingRight: theme.spacing(6),
				paddingLeft: theme.spacing(6),
			},
			[theme.breakpoints.down('sm')]: {
				paddingRight: 0,
				paddingLeft: 0,
			},
		},
	});
});

interface Props {
	children?: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {

	const { children } = props;
	const classes = useStyles(useTheme());

	return (
		<React.Fragment>
			<Header>
				<HeaderContent />
			</Header>
			<Container maxWidth="lg" className={classes.root}>
				<Paper elevation={2} className={classes.paper} >
					<Container maxWidth="md" className={classes.content}>
						<div>
							{children}
						</div>
					</Container>
				</Paper>
			</Container>
			<Footer />
		</React.Fragment>
	)
};

export default Layout;
