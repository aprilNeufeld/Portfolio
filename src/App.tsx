import * as React from 'react';
import { actions } from './store/actionCreators';
import { useHistory } from 'react-router-dom';
import './custom.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useApplicationState } from './store';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import { paths, pageComponents } from '.';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyles } from './styles';
import Container from '@material-ui/core/Container';


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
			<ThemeProvider theme={ theme }>
				<Header />
				<Container className={styles.contentContainer} maxWidth="md">
					{paths.map((path: string, index: number) =>
						<Route exact path={path} key={path} component={pageComponents[index]} />
					)}
				</Container>
			</ThemeProvider>
		</React.Fragment>
	)

};

export default App;
