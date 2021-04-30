import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-next-router';
import { useStore } from '../store/configureStore';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import * as gtag from '../lib/gtag';

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {

	const store = useStore(pageProps.initialReduxState);
	const router = useRouter();
	/*
	React.useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])
	*/

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentElement) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, [])

	return (
		<Provider store={store}>
			<ConnectedRouter>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</ConnectedRouter>
		</Provider>
	)
};

export default PortfolioApp;
