import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import { theme } from './styles';
import { ThemeProvider } from '@material-ui/core';
import { Page } from './shared/types';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const history = createBrowserHistory({ basename: baseUrl });

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

/**
 * The collection of pages that we 
 * want to render.
 */
const pages: Page[] = [
	{
		component: Home,
		path: '/',
		title: 'Home'
	},
	{
		component: Education,
		path: '/education',
		title: 'Education'
	},
	{
		component: Experience,
		path: '/experience',
		title: 'Experience'
	},
	{
		component: Projects,
		path: '/projects',
		title: 'My Work'
	},
]

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<ThemeProvider theme={theme}>
				<App pages={pages} />
			</ThemeProvider>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'));

registerServiceWorker();
