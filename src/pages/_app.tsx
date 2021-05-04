import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import { useStore } from '../store/configureStore';
import { Provider } from 'react-redux';

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {

	const store = useStore(pageProps.initialReduxState);

	/**
	 * Necessary to be able to use Material-UI with SSG on our 
	 * individual posts pages.
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
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
};

export default PortfolioApp;
