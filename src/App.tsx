import * as React from 'react';
import { actions } from './store/actionCreators';
import { useHistory } from 'react-router-dom';
import './custom.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useApplicationState } from './store';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { paths, pageComponents } from '.';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';


const App: React.FC = () => {

	const isLoading = useApplicationState(state => state.user.isLoading);
	const dispatch = useDispatch();
	const history = useHistory();
	const styles = useStyles();

	useEffect(() => {
		dispatch(actions.requestUser());
		dispatch(actions.setTabValue(paths.indexOf(history.location.pathname)));
	},
		// eslint-disable-next-line
		[]);

	if (isLoading) {
		return <div />;
	}

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Header />
				<Container maxWidth="md" className={styles.bodyContainer}>
					<Paper elevation={2} className={styles.bodyPaper} >
						{paths.map((path: string, index: number) =>
							<Route exact path={path} key={path} component={pageComponents[index]} />
						)}
					</Paper>
				</Container>
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	)

};

export default App;
