import * as React from 'react';
import '../custom.css';
import type { AppProps } from 'next/app';
import { theme } from '../styles';
import { ThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-next-router';
import { useStore } from '../store/configureStore';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';

const PortfolioApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialReduxState);

	return (
		<Provider store={store}>
			<ConnectedRouter>
				<ThemeProvider theme={theme}>
					<ParallaxProvider>
						<Component {...pageProps} />
					</ParallaxProvider>
				</ThemeProvider>
			</ConnectedRouter>
		</Provider>
	)
};

export default PortfolioApp;
