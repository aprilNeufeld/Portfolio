import * as React from 'react';
import { actions } from '../store/actionCreators';
import '../custom.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useApplicationState } from '../store';
import { wrapper } from '../store/configureStore';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import registerServiceWorker from '../registerServiceWorker';
import { ConnectedRouter } from 'connected-next-router';

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {

	const userLoaded = useApplicationState(state => state.user.loaded);
	const gistsLoaded = useApplicationState(state => state.gists.loaded);
	const blogLoaded = useApplicationState(state => state.blog.loaded);
	const dispatch = useDispatch();

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
		<ConnectedRouter>
			<ThemeProvider theme={theme}>
				{userLoaded &&
					gistsLoaded &&
					blogLoaded &&
					<Component {...pageProps} />
				}
			</ThemeProvider>
		</ConnectedRouter>
	)
};

export default wrapper.withRedux(PortfolioApp);

//registerServiceWorker();
