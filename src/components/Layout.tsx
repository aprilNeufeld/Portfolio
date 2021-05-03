import * as React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import {
	Container,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import HeaderContent from '../components/HeaderContent';
import { useApplicationState, useAppDispatch } from '../store';
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
			'& a': {
				color: theme.palette.primary.dark,
				'&:hover': {
					textDecoration: 'underline',
				},
				'&:not(:hover)': {
					textDecoration: 'none',
				},
			},
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
	pageTitle: string;
	contentTitle?: string;
}

const Layout: React.FC<Props> = (props) => {

	const { children, pageTitle, contentTitle } = props;
	const classes = useStyles(useTheme());

	const user = useApplicationState(state => state.user);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		if (!user.loaded && !user.pending) {
			dispatch(fetchUserData());
		}
	}, [user, dispatch]);

	return (
		<React.Fragment>
			<Head>
				<title>{pageTitle}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<React.Fragment>
				<Header>
					<HeaderContent />
				</Header>
				<Container maxWidth="lg" className={classes.root}>
					<Paper elevation={2} className={classes.paper} >
						<Container maxWidth="md" className={classes.content}>
							<div>
								{contentTitle &&
									<PageTitle text={contentTitle} />
								}
								{children}
							</div>
						</Container>
					</Paper>
				</Container>
			</React.Fragment>
			<Footer />
		</React.Fragment>
	)
};

export default Layout;
