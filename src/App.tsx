import * as React from 'react';
import { actions } from './store/actionCreators';
import './custom.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useApplicationState } from './store';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {
	Container,
	Paper,
	makeStyles,
	Theme,
	createStyles,
	useTheme
} from '@material-ui/core';
import { Page } from './shared/types';
import HeaderContent from './components/HeaderContent';

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
	pages: Page[];
}

const App: React.FC<Props> = (props) => {

	const { pages } = props;
	const userLoaded = useApplicationState(state => state.user.loaded);
	const gistsLoaded = useApplicationState(state => state.gists.loaded);
	const blogLoaded = useApplicationState(state => state.blog.loaded);
	const dispatch = useDispatch();
	const classes = useStyles(useTheme());

	useEffect(() => {
		if (!userLoaded) {
			dispatch(actions.fetchUser());
		}
		if (!gistsLoaded) {
			dispatch(actions.fetchGists());
		}
		if (!blogLoaded) {
			dispatch(actions.fetchBlogPosts());
		}
	}, [userLoaded, gistsLoaded, blogLoaded, dispatch]);
	
	return (
		<React.Fragment>
			{ userLoaded &&
				gistsLoaded &&
				blogLoaded &&
				<React.Fragment>
					<Header pages={pages}>
						<HeaderContent />
					</Header>
					<Container maxWidth="lg" className={classes.root}>
						<Paper elevation={2} className={classes.paper} >
							<Container maxWidth="md" className={classes.content}>
								{pages.map(page =>
									<Route
										exact
										path={page.path}
										key={page.path}
										component={page.component}
									/>
								)}
							</Container>
						</Paper>
					</Container>
					<Footer />
				</React.Fragment>
			}
		</React.Fragment>
	)
};

export default App;
